package example.hawaii

import slinky.core._
import slinky.core.annotations.react
import slinky.web.html._

@react class ButtonList extends StatelessComponent {
  case class Props(onClick: String => Unit, hide: Boolean)

  def render = {
    ul(className := (if (props.hide) "hide" else ""))(
      IslandData.islandNames().map { island =>
        li(key := island)(
          button(onClick := (_ => props.onClick(island)))(island)
        )
      }
    )
  }
}
