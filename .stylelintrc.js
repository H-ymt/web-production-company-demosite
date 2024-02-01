module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
  ],
  plugins: [],
  rules: {
    // ::before, ::afterのコロンを2つにする
    'selector-pseudo-element-colon-notation': 'double',
    // クラス名でアンパサンド（&）は禁止（&:hoverなどはOK）
    'scss/selector-no-union-class-name': true,
    'selector-class-pattern': null,
  },
  ignoreFiles: ['**/node_modules/**'],
}
