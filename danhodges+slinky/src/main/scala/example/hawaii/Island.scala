package example.hawaii

import slinky.core._
import slinky.core.annotations.react
import slinky.web.html._

import scala.scalajs.js

@react class Island extends StatelessComponent {
  case class Props(name: String, svg: js.Object, showBorder: Boolean)

  def render = {
    div(className := props.name.toLowerCase.concat(if (props.showBorder) " border" else ""))(
      img(src := props.svg.asInstanceOf[String], alt := props.name)
    )
  }
}

