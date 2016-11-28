import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import TestUtils from 'react-addons-test-utils'
import Clock from '../Clock'

describe('<Clock />', () => {
  it('should exist', () => {
    expect(Clock).toBeDefined()
  })

  describe('render', () => {
    it('should render clock to output', () => {
      const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />)
      const $el = $(ReactDOM.findDOMNode(clock))
      const actualText = $el.find('.clock-text').text()

      expect(actualText)
    })
  })

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />)
      const seconds = 615
      const expected = '10:15'
      const actual = clock.formatSeconds(seconds)

      expect(actual).toBe(expected)
    })

    it('should format seconds when min/sec less than 10', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />)
      const seconds = 61
      const expected = '01:01'
      const actual = clock.formatSeconds(seconds)

      expect(actual).toBe(expected)
    })
  })
})