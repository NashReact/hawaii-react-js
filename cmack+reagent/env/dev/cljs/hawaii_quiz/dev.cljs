(ns ^:figwheel-no-load hawaii-quiz.dev
  (:require
    [hawaii-quiz.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
