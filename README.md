# stylelint-config-material-kit

Shareable stylelint config for Material Kit.

## Installation

```bash
npm install --save-dev stylelint-config-material-kit
```

## Usage

Extend this config within your [stylelint configuration object](http://stylelint.io/user-guide/configuration/#extends),
and add your [rules](https://stylelint.io/user-guide/rules) if needed.

### Example usage with JSON config:

```json
{
  "extends": "stylelint-config-material-kit",
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
extends: stylelint-config-material-kit
ignoreFiles:
  - node_modules/**/*
  - dist/**/*
rules:
  string-quotes: single
```

### Using custom BEM prefix

Below are example rules for using custom component prefix. Replace "mk" with your own abbreviation.

#### In JSON config:

```json
{
  "rules": {
    "custom-media-pattern": "^mk?-.+",
    "custom-property-pattern": "^mk?-.+",
    "selector-class-pattern": ["^mk?-.+", {
      "resolveNestedSelectors": true
    }],
    "selector-id-pattern": "^mk?-.+",
    "plugin/selector-bem-pattern": {
      "componentSelectors": "^\\.mk?-{componentName}(?:__[a-z]+(?:-[a-z]+)*)*(?:--[a-z]+(?:-[a-z]+)*)*(?:\\[.+\\])*$"
    },
    "scss/dollar-variable-pattern": ["^_?mk-.+", {
      "ignore": "local"
    }],
    "scss/at-function-pattern": "^mk-.+",
    "scss/at-mixin-pattern": "^mk-.+"
  }
}
```

#### In YAML config:

```yaml
rules:
  custom-media-pattern: ^mk?-.+
  custom-property-pattern: ^mk?-.+
  selector-class-pattern:
    - ^mk?-.+
    - resolveNestedSelectors: true
  selector-id-pattern: ^mk?-.+
  plugin/selector-bem-pattern:
    componentSelectors: ^\.mk?-{componentName}(?:__[a-z]+(?:-[a-z]+)*)*(?:--[a-z]+(?:-[a-z]+)*)*(?:\[.+\])*$
  scss/dollar-variable-pattern:
    - ^_?mk-.+
    - ignore: local
  scss/at-function-pattern: ^mk-.+
  scss/at-mixin-pattern: ^mk-.+
```
