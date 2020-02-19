module.exports = {
    "env": {
        "browser": true,
        "commonjs": true
        //"es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        /*
            마지막 쉼표에 관한 규칙을 수정
        */
        "comma-dangle":[
            2,
            "always-multiline"
        ],
        "indent":[
            2,
            4
        ]
    }
};