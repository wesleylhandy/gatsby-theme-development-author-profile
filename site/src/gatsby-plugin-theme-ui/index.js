import baseTheme from 'gatsby-theme-author-base/src/gatsby-plugin-theme-ui/index'

const theme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: "#fff",
      primary: "#579CA8",
      secondary: "#E5D591",
      light: "#e0e0e0e",
      modes: {
        dark: {
          text: "#fff",
          background: "#000",
          primary: "#9AC3BF",
          secondary: "#EEDFB6",
          light: "#919191",
        }
      }
    },
    sizes: {
      ...baseTheme.sizes,
      max: "980px",
    },
  }
  
  export default theme