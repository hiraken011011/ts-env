const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.ts' // ここから
  },

  output: {
    path: path.join(__dirname, 'dist'), // "__dirname"はファイルが存在するディレクトリ、の中の distファイル
    filename: '[name].js'  // [name]はentryで記述した名前（この設定ならbundle）
  },
  resolve: {
    extensions: ['.ts', '.js'] // Reactの.tsxや.jsxの拡張子も扱いたい場合は配列内に追加する
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // webpack-dev-serverの公開フォルダ
    open: true // サーバー起動時にブラウザを開く
  },
  // モジュールに適用するルールの設定（ローダーの設定を行う事が多い）
  module: {
    rules: [
      {
        // 拡張子が.tsのファイルに対してTypeScriptコンパイラを適用する
        // Reactで用いる.tsxの拡張子にも適用する場合は test:/\.(ts|tsx)$/,
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
}
