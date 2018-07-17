package example.hawaii

import slinky.core._
import slinky.core.annotations.react
import slinky.web.html._

@react class Scoreboard extends StatelessComponent {
  case class Props(correctAnswers: Int,
                   wrongAnswers: Int,
                   seconds: Int,
                   startTimer: Unit => Unit)

  def render = {
    div(
      if (props.correctAnswers + props.wrongAnswers + props.seconds == 0) {
        h3("Welcome to Pick And Island!")
      } else {
        div(
          div("Correct :", props.correctAnswers.toString),
          div("Wrong :", props.wrongAnswers.toString)
        )
      },
      if (props.seconds == 0) {
        button( onClick := (_ => {
          props.startTimer()
        }))("Start/Reset")
      } else {
        div(props.seconds, " seconds")
      },
      p(" When the timer starts, click the name that corresponds to the island with a red border.")
    )
  }
}
