const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");
const path = require("path");
const { default: ImageminWebpackPlugin } = require("imagemin-webpack-plugin");
const ImageminMozjpeg = require("imagemin-mozjpeg");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: path.resolve(__dirname, "src/scripts/index.js"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: "~",
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/templates/index.html"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
          globOptions: {
            ignore: ["**/images/**"],
          },
        },
      ],
    }),
    new WebpackPwaManifest({
      filename: "manifest.json",
      name: "Restoku, Sob!",
      short_name: "Restoku, Sob!",
      description: "Memudahkan Anda untuk mencari restoran terbaik",
      background_color: "#064420",
      theme_color: "#064420",
      start_url: "/index.html",
      ios: true,
      icons: [
        {
          src: path.resolve("src/public/icons/ios-icon.png"),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join("icons", "ios"),
          ios: true,
        },
        {
          src: path.resolve("src/public/icons/android-icon.png"),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join("icons", "android"),
          purpose: "any maskable",
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, "src/scripts/sw.js"),
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new BundleAnalyzerPlugin(),
  ],
};
