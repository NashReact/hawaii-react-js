;;; http://namethatisland-js.s3-website-us-east-1.amazonaws.com/

(ns hawaii-quiz.core
  (:require
   [reagent.core :as r]))

(def island-names
  ["NIIHAU" "KAUAI" "OAHU" "MOLOKAI" "LANAI" "MAUI" "HAWAII" "KAHOOLAWE"])


(def initial-state (r/atom {:correct-answers 0
                            :wrong-answers 0
                            :seconds 0
                            :selected-island nil}))

(defn random-island []
  (first (shuffle island-names)))

(defn select-random-island []
  (swap! initial-state assoc :selected-island (random-island)))

(defn start-timer []
  (swap! initial-state assoc
         :seconds 30
         :correct-answers 0
         :wrong-answers 0
         :selected-island (random-island))

  (letfn [(tick []
            (swap! initial-state update :seconds dec)
            (when (pos? (:seconds @initial-state))
              (js/setTimeout tick 1000)))]
    (tick)))

(defn- island-name-equal? [name-1 name-2]
  (and name-1
       name-2
       (= (clojure.string/lower-case name-1)
          (clojure.string/lower-case name-2))))

(defn check-answer [name]
  (swap! initial-state update
         (if (island-name-equal? name (:selected-island @initial-state))
           :correct-answers
           :wrong-answers)
         inc)
  (select-random-island))

;; -------------------------
;; Views

(defn score-board [num-correct num-wrong seconds start-timer-fn]
  [:div
   (if (= 0 num-correct num-wrong seconds) ; prefix operator power!
     [:h3 "Welcome to Pick An Island!"]
     [:div
      [:div (str "Correct: " num-correct)]
      [:div (str "Wrong: " num-wrong)]])

   (if (= 0 seconds)
     [:button {:on-click start-timer-fn} "Start/Reset"]
     [:div (str seconds " seconds")])

   [:p "When the timer starts, click the name that corresponds to the island with a red border"]])

(defn island [name show-border]
  (let [normal-name (clojure.string/lower-case name) ]
    [:div {:class (str normal-name (when show-border " border"))}
     [:img {:src (str "img/" normal-name ".svg")}]]))

(defn islands [selected-island]
  (map (fn [name] ^{:key name}
         [island name (island-name-equal? name selected-island)])
       island-names))

(defn button-list []
  [:ul
   (map (fn [name] ^{:key name}
          [:li
           [:button {:on-click #(check-answer name)} name]])
        (sort island-names))])

(defn home-page []
  [:div.App
   [:div.ocean
    (let [{:keys [selected-island]} @initial-state]
      (islands selected-island))]

   (let [{:keys [correct-answers wrong-answers seconds]} @initial-state]
     [:div.dashboard
      [score-board correct-answers wrong-answers seconds start-timer]
      (when (pos? seconds)
        [button-list])])])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
