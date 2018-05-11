'use strict'

const config = require('../index')
const fs = require('fs')
const stylelint = require('stylelint')

const validScss = fs.readFileSync('./__tests__/scss-valid.scss', 'utf-8')
const invalidScss = fs.readFileSync('./__tests__/scss-invalid.scss', 'utf-8')

// Valid SCSS
describe('flags no warnings with valid scss', () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: validScss,
      config
    })
  })

  it('did not error', () => {
    return result.then(data => (
      expect(data.errored).toBeFalsy()
    ))
  })

  it('flags no warnings', () => {
    return result.then(data => (
      expect(data.results[0].warnings.length).toBe(0)
    ))
  })
})

// Invalid SCSS
describe('flags warnings with invalid scss', () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidScss,
      config,
    })
  })

  it('did error', () => {
    return result.then(data => (
      expect(data.errored).toBeTruthy()
    ))
  })

  it('flags one warning', () => {
    return result.then(data => (
      expect(data.results[0].warnings.length).toBe(15)
    ))
  })
})
