'use strict'

module.exports = {
  'extends': 'stylelint-config-standard',
  'ignoreFiles': [
    'node_modules/**/*'
  ],
  'plugins': [
    'stylelint-selector-bem-pattern',
    'stylelint-scss',
    'stylelint-order'
  ],
  'rules': {
    'import-notation': 'string',
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'order/order': [
      [
        {
          'type': 'at-rule',
          'hasBlock': false
        },
        'custom-properties',
        'declarations'
      ],
      {
        'unspecified': 'ignore',
        'disableFix': true
      }
    ],
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
      'box-sizing',
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
      'resize',
      'columns',
      'column-count',
      'column-gap',
      'column-fill',
      'column-rule',
      'column-span',
      'column-width',
      'grid-gap',
      'grid-template-columns',
      'animation',
      'animation-name',
      'animation-timing-function',
      'transform',
      'transform-box',
      'transform-origin',
      'transform-style',
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
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
      'background',
      'background-attachment',
      'background-clip',
      'background-color',
      'background-image',
      'background-repeat',
      'background-position',
      'background-size',
      'fill',
      'opacity',
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
      'cursor',
      'pointer-events',
      'user-select',
      'appearance',
      'border-collapse',
      'border-spacing',
      'box-shadow',
      'caption-side',
      'content',
      'empty-cells',
      'overflow',
      'overflow-x',
      'overflow-y',
      'quotes',
      'speak',
      'table-layout',
      'vertical-align',
      'visibility',
      'will-change',
      'z-index'
    ],
    'declaration-property-unit-allowed-list': {
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
    'at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': [
          'at-root',
          'content',
          'each',
          'else',
          'error',
          'for',
          'function',
          'include',
          'if',
          'mixin',
          'return',
          'warn'
        ]
      }
    ],
    'at-rule-disallowed-list': [
      'extend'
    ],
    'property-no-unknown': [
      true,
      {
        'ignoreProperties': [
          'contain'
        ]
      }
    ],
    'selector-max-id': 0,
    'selector-no-qualifying-type': true,
    'selector-max-type': [
      0,
      {
        'ignoreTypes': [
          '/fieldset/'
        ]
      }
    ],
    'selector-max-universal': 0,
    'custom-media-pattern': '^mdc-.+',
    'custom-property-pattern': '^mdc-.+',
    'selector-class-pattern': [
      '^mdc-.+',
      {
        'resolveNestedSelectors': true
      }
    ],
    'selector-id-pattern': '^mdc-.+',
    'font-weight-notation': 'named-where-possible',
    'function-url-no-scheme-relative': true,
    'comment-word-disallowed-list': [
      [
        '/^TODO:/',
        '/^FIXME:/'
      ],
      {
        'severity': 'warning'
      }
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        'except': [
          'blockless-after-blockless',
          'first-nested'
        ],
        'ignore': [
          'after-comment'
        ],
        'ignoreAtRules': [
          'else'
        ]
      }
    ],
    'plugin/selector-bem-pattern': {
      'componentName': '^[a-z]+(?:-[a-z]+)*$',
      'componentSelectors': '^\\.mdc-{componentName}(?:__[a-z]+(?:-[a-z]+)*)*(?:--[a-z]+(?:-[a-z]+)*)*(?:\\[.+\\])*$',
      'ignoreSelectors': [
        '^fieldset',
        '^\\[aria\\-disabled=(?:.+)\\]'
      ]
    },
    'scss/dollar-variable-pattern': [
      '^_?mdc-.+',
      {
        'ignore': 'local'
      }
    ],
    'scss/at-function-pattern': '^mdc-.+',
    'scss/at-mixin-pattern': '^mdc-.+',
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/load-no-partial-leading-underscore': true,
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate'
  }
}
