'use strict'

module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order',
    'stylelint-scss',
    'stylelint-selector-bem-pattern'
  ],
  rules: {
    'font-family-name-quotes': 'always-where-recommended',
    // http://stackoverflow.com/questions/2168855/is-quoting-the-value-of-url-really-necessary
    'function-url-quotes': 'never',
    // https://www.w3.org/TR/selectors/#attribute-selectors
    // http://stackoverflow.com/q/3851091
    'selector-attribute-quotes': 'always',
    'string-quotes': 'double',
    // https://github.com/sasstools/sass-lint/blob/develop/lib/config/property-sort-orders/smacss.yml
    'order/properties-order': [
      'display',
      'position',
      'top',
      'right',
      'bottom',
      'left',

      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'align-content',
      'align-items',
      'align-self',
      'justify-content',
      'order',

      'width',
      'min-width',
      'max-width',

      'height',
      'min-height',
      'max-height',

      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',

      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',

      'float',
      'clear',

      'columns',
      'column-gap',
      'column-fill',
      'column-rule',
      'column-span',
      'column-count',
      'column-width',

      'transform',
      'transform-box',
      'transform-origin',
      'transform-style',

      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',

      // Border

      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',

      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',

      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-left-radius',
      'border-bottom-right-radius',

      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',

      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',

      // Background

      'background',
      'background-attachment',
      'background-clip',
      'background-color',
      'background-image',
      'background-repeat',
      'background-position',
      'background-size',

      // Text

      'color',

      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'font-style',
      'font-variant',
      'font-weight',

      'letter-spacing',
      'line-height',
      'list-style',

      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-shadow',
      'text-transform',
      'text-wrap',

      'white-space',
      'word-spacing',

      // Other

      'border-collapse',
      'border-spacing',
      'box-shadow',
      'caption-side',
      'content',
      'cursor',
      'empty-cells',
      'opacity',
      'overflow',
      'quotes',
      'speak',
      'table-layout',
      'vertical-align',
      'visibility',
      'z-index'
    ],  
    'declaration-property-unit-whitelist': {    
      'font-size': [
        'rem',
        'px'
      ]
    },
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'max-nesting-depth': 3,
    'selector-max-compound-selectors': 4,
    'selector-max-specificity': '0,4,1',
    'at-rule-no-unknown': [true, {
      'ignoreAtRules': [
        'at-root',
        'content',
        'each',
        'else',
        'error',
        'for',
        'function',
        'if',
        'include',
        'mixin',
        'return'
      ]
    }],
    // http://csswizardry.com/2016/02/mixins-better-for-performance/
    // http://vanseodesign.com/css/sass-mixin-or-extend/
    'at-rule-blacklist': [
      'extend'
    ],
    'property-no-unknown': [true, {
      'ignoreProperties': [
        'contain'
      ]
    }],
    'selector-max-id': 0,
    'selector-no-qualifying-type': true,
    'selector-max-type': [0, {
      'ignoreTypes': [
        'fieldset'
      ]
    }],
    'selector-max-universal': 0,
    // Ensure any defined symbols are prefixed with "mdc-"
    'custom-media-pattern': '^mdc?-.+',
    'custom-property-pattern': '^mdc?-.+',
    'selector-class-pattern': ['^mdc?-.+', {
      'resolveNestedSelectors': true
    }],
    'selector-id-pattern': '^mdc?-.+',
    'font-weight-notation': 'numeric',
    // http://www.paulirish.com/2010/the-protocol-relative-url/
    'function-url-no-scheme-relative': true,
    'comment-word-blacklist': [
      [
        '/^TODO:/',
        '/^FIXME:/'
      ], {
        'severity': 'warning'  
      }
    ],
    'number-leading-zero': 'never',

    // http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
    // https://github.com/postcss/postcss-bem-linter/blob/c59db3f/lib/preset-patterns.js#L39
    'plugin/selector-bem-pattern': {
      'componentName': '^[a-z]+(?:-[a-z]+)*$',
      // <namespace>-<block>__<element>*--<modifier>*[<attribute>]*
      'componentSelectors': '^\.mdc?-{componentName}(?:__[a-z]+(?:-[a-z]+)*)*(?:--[a-z]+(?:-[a-z]+)*)*(?:\[.+\])*$',
      'ignoreSelectors': [
        '^fieldset',
        '^\[aria\-disabled=(?:.+)\]'
      ]
    },

    'scss/dollar-variable-pattern': ['^_?mdc-.+', {
      'ignore': 'local'
    }],
    'scss/at-function-pattern': '^mdc-.+',
    'scss/at-mixin-pattern': '^mdc-.+',
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'never'
  }
}
