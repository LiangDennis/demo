module.exports = {
  presets: [
    '@vue/app',
    // ["es2015", { "modules": false }]//Error: Cannot find module 'babel-preset-es2015' from 'E:\HTMLsublime\vueCli3\my-project1'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
