import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
fairyGateTheme.bodyFontFamily = ["Lato", "sans-serif"]
fairyGateTheme.baseFontSize = "22px"
fairyGateTheme.baseLineHeight = "1.64"
fairyGateTheme.bodyColor = "#0a0a23"

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography
