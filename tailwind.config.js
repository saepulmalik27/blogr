/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pattern' : "linear-gradient(135deg, #FF8F71 0%, #FF3E55 100%)"
      },
      colors : {
        primary : "#FF505C"
      }
    },
  },
  plugins: [
    plugin(function({addComponents, theme}){
        addComponents({
          ".btn" : {
            padding : "15px",
            borderRadius : theme("borderRadius.full"),
            width : "137px",
            height : "49px",
            display : "flex",
            justifyContent : "center",
            alignItems : "center"
          },
          ".btn-primary" : {
            backgroundColor : theme("colors.primary"),
            color : theme("colors.white"),
            border : "1px solid white"
          
          },
          ".btn-secondary" : {
            backgroundColor : theme("colors.white"),
            color : theme("colors.primary"),
          },
          ".heading-1" : {
            fontWeight : "600",
            lineHeight : "normal",
            fontSize : "64px"
          },
          ".heading-2" : {
            fontWeight : "600",
            lineHeight : "normal",
            fontSize : "40px"
          },
          ".heading-3" : {
            fontWeight : "600",
            lineHeight : "normal",
            fontSize : "36px"
          },
          ".heading-4" : {
            fontWeight : "600",
            lineHeight : "normal",
            fontSize : "28px"
          },

        })
    })
  ],
}
