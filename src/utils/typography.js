import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
fairyGateTheme.bodyFontFamily = ["merriweather", "serif"] //["Lato", "sans-serif"]
fairyGateTheme.baseFontSize = "16px" //"22px"
fairyGateTheme.baseLineHeight = "1.4" //"1.64"
fairyGateTheme.bodyColor = "#0a0a23"

fairyGateTheme.overrideStyles = options => ({
  p: {
    letterSpacing: 0.2,
    color: "rgb(5, 6, 7)",
    fontSize: "1.5rem",
  },
})
const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography
