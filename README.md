# stylelint-config-material

[stylelint-config-material](https://github.com/webdenim/stylelint-config-material) is a shareable stylelint config for Material Design Components.

## Installation

```bash
npm install --save-dev stylelint-config-material
```

## Usage

Extend this config within your [stylelint configuration object](http://stylelint.io/user-guide/configuration/#extends),
and add your [rules](https://stylelint.io/user-guide/rules) if needed.

### Example usage with JSON config:

```json
{
  "extends": "stylelint-config-material",
  "ignoreFiles": [
    "node_modules/**/*",
    "dist/**/*"
  ],
  "rules": {
    "string-quotes": "single"
  }
}
```

### Example usage with YAML config:

```yaml
extends: stylelint-config-material
ignoreFiles:
  - node_modules/**/*
  - dist/**/*
rules:
  string-quotes: single
```

### Using custom BEM prefix

Below are example rules for using custom component prefix. Replace "mdc" with your own abbreviation.

#### In JSON config:

```json
{
  "rules": {
    "custom-media-pattern": "^mdc?-.+",
    "custom-property-pattern": "^mdc?-.+",
    "selector-class-pattern": ["^mdc?-.+", {
      "resolveNestedSelectors": true
    }],
    "selector-id-pattern": "^mdc?-.+",
    "plugin/selector-bem-pattern": {
      "componentSelectors": "^\\.mdc?-{componentName}(?:__[a-z]+(?:-[a-z]+)*)*(?:--[a-z]+(?:-[a-z]+)*)*(?:\\[.+\\])*$"
    },
    "scss/dollar-variable-pattern": ["^_?mdc-.+", {
      "ignore": "local"
    }],
    "scss/at-function-pattern": "^mdc-.+",
    "scss/at-mixin-pattern": "^mdc-.+"
  }
}
```

#### In YAML config:

```yaml
rules:
  custom-media-pattern: ^mdc?-.+
  custom-property-pattern: ^mdc?-.+
  selector-class-pattern:
    - ^mdc?-.+
    - resolveNestedSelectors: true
  selector-id-pattern: ^mdc?-.+
  plugin/selector-bem-pattern:
    componentSelectors: ^\.mdc?-{componentName}(?:__[a-z]+(?:-[a-z]+)*)*(?:--[a-z]+(?:-[a-z]+)*)*(?:\[.+\])*$
  scss/dollar-variable-pattern:
    - ^_?mdc-.+
    - ignore: local
  scss/at-function-pattern: ^mdc-.+
  scss/at-mixin-pattern: ^mdc-.+
```
