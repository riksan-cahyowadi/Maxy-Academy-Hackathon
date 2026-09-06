module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@devops-cora/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("@devops-cora/tw-elements/dist/plugin")],
  darkMode: "class",
};