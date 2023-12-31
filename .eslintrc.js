module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"jest": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:i18next/recommended"
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"project": ["tsconfig.json"]
	},
	"plugins": [
		"react",
		"@typescript-eslint",
		"i18next"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": "off",
		"@typescript-eslint/semi": "off",
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"i18next/no-literal-string": ["error", { markupOnly: true }],
	}
};