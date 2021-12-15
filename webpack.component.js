const glob = require('glob')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

let list = {}
// 需要的格式
// list  = {
//   card: './components/lib/card/index.js',
//   demo: './components/lib/demo/index.js',
// }

async function makeList (dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
    // files: [ 'components/lib/card/index.js', 'components/lib/demo/index.js' ]

  for (let file of files) {
    const component = file.split(/[/.]/)[2]
    // component: card  demo

    list[component] = `./${file}`
  }
  console.log(list)
}
makeList('components/lib', list)

module.exports = {
  entry: list,
  mode: "development",
  output: {
    filename: "[name].umd.js", // card.umd.js
    path: path.resolve(__dirname, 'dist'),
    library: 'mui',
    libraryTarget: "umd",
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      }
    ]
  }
}
