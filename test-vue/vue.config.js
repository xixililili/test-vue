var path = require('path')

function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}
module.exports = {
  css:{
    sourceMap: false,
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("imgs", resolve("static/imgs")) // key,value自行定义，比如.set('@@', resolve('src/components'))
  }
}