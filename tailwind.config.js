/** @type {import('tailwindcss').Config} */

module.exports = {
 content: [
  "./src/**/*.{js,jsx,ts,tsx,html}",
  "./node_modules/tw-elements/dist/js/**/*.js",
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
 ],
 theme: {
  extend: {
   colors: {
    myblue: "#A9E4CE",
    mylightblue: "#F4FcF8",
    mydarkblue: "#3C487A",
    mygreen: "#23A455",
    mylightgreen: "#6FC341",
    mygray: "#9CA2BC",
   },
   fontSize: {
    "2xs": ".62rem",
   },
   keyframes: {
    wiggle: {
     "0%": { opacity: "0" },
     "100%": { opacity: "1" },
    },
   },
  },
 },
 plugins: [
  function ({ addVariant }) {
   addVariant("child", "& > *");
   addVariant("child-hover", "& > *:hover");
  },
  require("tw-elements/dist/plugin"),
  require("flowbite/plugin"),
 ],
};
