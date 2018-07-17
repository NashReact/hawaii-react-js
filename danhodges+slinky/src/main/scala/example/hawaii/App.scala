package example.hawaii

import slinky.core._
import slinky.core.annotations.react
import slinky.web.html._

import scala.scalajs.js
import scala.scalajs.js.timers._
import scala.scalajs.js.annotation.JSImport

@JSImport("resources/App.css", JSImport.Default)
@js.native
object AppCSS extends js.Object

@JSImport("resources/logo.svg", JSImport.Default)
@js.native
object ReactLogo extends js.Object

@react class App extends Component {
  type Props = Unit

  case class State(correctAnswers: Int,
                   wrongAnswers: Int,
                   selectedIsland: String,
                   seconds: Int)

  override def initialState = State(0, 0, IslandData.randomIsland(), 0)

  val chooseIsland: String => Unit = name => {
    if (name == state.selectedIsland) {
      setState(_.copy(correctAnswers = state.correctAnswers + 1))
    } else {
      setState(_.copy(wrongAnswers = state.wrongAnswers + 1))
    }

    setState(_.copy(selectedIsland = IslandData.randomIsland()))
  }

  val startTimer: Unit => Unit = _ => {
    setState(State(0, 0, IslandData.randomIsland(), 30))

    def tick(): Unit = {
      setTimeout(1000) {
        setState(_.copy(seconds = state.seconds - 1))
        if (state.seconds < 1) () else tick()
      }
    }

    tick()
  }

  private val css = AppCSS

  def render() = {
    div(className := "App")(
      div(className := "ocean")(Islands(selectedIsland = state.selectedIsland)),
      div(className := "dashboard")(
        Scoreboard(
          correctAnswers = state.correctAnswers,
          wrongAnswers = state.wrongAnswers,
          seconds = state.seconds,
          startTimer = startTimer
        ),
        ButtonList(
          onClick = chooseIsland,
          hide = state.seconds == 0
        )
      )
    )
  }
}
