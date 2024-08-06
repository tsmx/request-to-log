const { configs } = require('@eslint/js');
const jest = require('eslint-plugin-jest');

let _test = 0;

module.exports = [
    configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' }
        },
        rules: {
            semi: 'error',
            quotes: ['error', 'single'],
            indent: ['error', 4, { 'SwitchCase': 1 }],
            'no-unused-vars':
                [
                    'warn',
                    {
                        'varsIgnorePattern': '^_',
                        'args': 'after-used',
                        'argsIgnorePattern': '^_'
                    }
                ]
        }
    }
];