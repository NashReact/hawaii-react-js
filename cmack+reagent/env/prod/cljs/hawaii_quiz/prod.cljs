(ns hawaii-quiz.prod
  (:require
    [hawaii-quiz.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
