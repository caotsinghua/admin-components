module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': 'error',
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-parsing-error': [
            2,
            {
                'x-invalid-end-tag': false
            }
        ],
        'no-undef': 'off',
        camelcase: 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
