// for jest
module.exports = {
    'presets': [
        '@babel/preset-env',
        '@babel/preset-react'
    ],
    'plugins': [
        '@babel/plugin-syntax-object-rest-spread',
        ['@babel/plugin-proposal-decorators', { 'legacy': true }],
        ['@babel/plugin-proposal-class-properties', { 'loose': true}],
        '@babel/plugin-syntax-dynamic-import'
    ]
}