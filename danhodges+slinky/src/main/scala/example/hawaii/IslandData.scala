package example.hawaii

import scala.util.Random
import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

@JSImport("resources/hawaii.svg", JSImport.Default)
@js.native
object HawaiiLogo extends js.Object

@JSImport("resources/kahoolawe.svg", JSImport.Default)
@js.native
object KahoolaweLogo extends js.Object

@JSImport("resources/kauai.svg", JSImport.Default)
@js.native
object KauaiLogo extends js.Object

@JSImport("resources/lanai.svg", JSImport.Default)
@js.native
object LanaiLogo extends js.Object

@JSImport("resources/maui.svg", JSImport.Default)
@js.native
object MauiLogo extends js.Object

@JSImport("resources/molokai.svg", JSImport.Default)
@js.native
object MolokaiLogo extends js.Object

@JSImport("resources/niihau.svg", JSImport.Default)
@js.native
object NiihauLogo extends js.Object

@JSImport("resources/oahu.svg", JSImport.Default)
@js.native
object OhauLogo extends js.Object

object IslandData {
  def randomIsland(): String = Random.shuffle(islandNames()).head

  val HAWAII = "HAWAII"
  val KAHOOLAWE = "KAHOOLAWE"
  val KAUAI = "KAUAI"
  val LANAI = "LANAI"
  val MAUI = "MAUI"
  val MOLOKAI = "MOLOKAI"
  val NIIHAU = "NIIHAU"
  val OAHU = "OAHU"

  def islandNames() = Seq(
    HAWAII,
    KAHOOLAWE,
    KAUAI,
    LANAI,
    MAUI,
    MOLOKAI,
    NIIHAU,
    OAHU
  )

  def svgList(): List[(String, js.Object)] = {
    List(
      (HAWAII, HawaiiLogo),
      (KAHOOLAWE, KahoolaweLogo),
      (KAUAI, KauaiLogo),
      (LANAI, LanaiLogo),
      (MAUI, MauiLogo),
      (MOLOKAI, MolokaiLogo),
      (NIIHAU, NiihauLogo),
      (OAHU, OhauLogo)
    )
  }
}
