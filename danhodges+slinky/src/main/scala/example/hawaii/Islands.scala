package example.hawaii

import slinky.core._
import slinky.core.annotations.react
import slinky.web.html._

import scala.scalajs.js

@react class Islands extends StatelessComponent {
  case class Props(selectedIsland: String)

  def render = {
    IslandData.svgList().map { island =>
      span(key := island._1)(
      Island(name = island._1,
             svg = island._2,
             showBorder = props.selectedIsland == island._1))
    }
  }
}
