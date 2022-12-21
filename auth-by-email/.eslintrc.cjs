module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        project: ["tsconfig.json"],
        allowImportExportEverywhere: true,
        ecmaVersion: 13,
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ["import", "react", "@typescript-eslint"],
    ignorePatterns: [
        "node_modules/*",
        "src/assets/**",
        "build/**",
        "dist/**",
        "@types/assets/index.d.ts"
    ],
    rules: {
        "max-len": ["warn", 150], // максимальная длина строки
        "max-statements-per-line": ["warn", {max: 1}], // ограничение на кол-во выражений в 1 строке
        "semi": ["error", "always"],
        "no-multiple-empty-lines": "off",
        "indent": ["warn", 4, {SwitchCase: 1}],
        "no-debugger": "error",

        /* variables */
        "no-var": "error", // запрет на использование keyword `var`
        "prefer-const": "warn", // если можно, то использовать const
        "no-const-assign": "error", // ошибка при изменении const
        // "no-unused-vars": ["warn", {vars: "local", args: "none"}], // неиспользуемые переменные
        "react/jsx-uses-vars": "error", // "no-unused-vars" распознает переменные, использующиеся только в JSX как no used
        "@typescript-eslint/no-explicit-any": "warn", // запрет на any
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn", {vars: "local", args: "none"}],

        /* literals */
        "prefer-regex-literals": "warn", // использовать регекс литерал вместо конструктора RegExp
        "quotes": ["warn", "double"], // кавычки в строковых литералах

        /* imports */
        "import/no-default-export": "error",
        "import/no-relative-parent-imports": "error", // использование относительных импортов из родительской директории
        "import/newline-after-import": ["warn", {count: 2}], // как минимум 2 пустых строки после импортов
        // TODO:  https://github.com/import-js/eslint-plugin-import/issues/2522

        "no-duplicate-imports": ["error"],  // повторный импорт одного и того же модуля
        "react/jsx-uses-react": "error", // чтобы не ругалось на не используемый импорт import React from "react

        /* if else */
        "no-else-return": ["warn", {allowElseIf: false}],
        "no-lonely-if": ["warn"],

        /* function */
        "func-style": ["error", "expression"],
        "prefer-arrow-callback": "warn", // в коллбеках использовать arrow function
        "arrow-parens": ["off"], // требование аргумент arrow function обарачивать в скобки
        "arrow-spacing": ["warn", {before: true, after: true}], // пробелы вокруг => в arrow function
        "func-call-spacing": ["warn", "never"], // не ставить пробелы между именем функции и скобками, вызовом функции

        /* object */
        "key-spacing": ["warn", {beforeColon: false, afterColon: true}], // пробел перед и после двоеточия в объекте
        "object-curly-spacing": ["warn", "never"], // пробел между скобками объекта

        /* other spacing */
        "keyword-spacing": ["warn"], // пробелы вокруг ключевых слова (if, while и т.д)
        "array-bracket-spacing": ["warn", "never"], // пробел между скобками массива
        "comma-spacing": ["warn", {after: true}], // пробел после запятой

        /* typescript */
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
        "@typescript-eslint/restrict-plus-operands": "error",


        "@typescript-eslint/member-delimiter-style": "warn",

        // React.FC is deprecated
        "@typescript-eslint/ban-types": ["error",
            {
                "types": {
                    "React.StatelessComponent": {"message": "https://github.com/facebook/create-react-app/pull/8177"},
                    "React.FunctionalComponent": {"message": "https://github.com/facebook/create-react-app/pull/8177"},
                    "React.FC": {"message": "https://github.com/facebook/create-react-app/pull/8177"},
                    "FC": {"message": "https://github.com/facebook/create-react-app/pull/8177"},
                }
            }
        ]
    }
};