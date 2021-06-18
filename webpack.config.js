const webpack = require("webpack")
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/script.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js"
  },
  output: {
    path: path.join(__dirname + "/dist"),
    filename: "[name].bundle.js"
  },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: "static", // the report outputs to an HTML file in the dist folder
  })
  ],
  mode: "development"
};