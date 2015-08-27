import React from 'react'
import d3 from 'd3'
import 'd3-react'

class Sparkline extends React.Component {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    data: React.PropTypes.array
  }

  render () {
    const {width, height, data} = this.props

    const el = d3.select(document.createElement('svg'))
      .prop(this.props)
      .prop('data', null)

    const x = d3.scale.linear()
      .range([0, width])
      .domain(d3.extent(data, (d, i) => i))

    const y = d3.scale.linear()
      .range([height, 0])
      .domain(d3.extent(data, (d) => d))

    const line = d3.svg.line()
      .x((d, i) => x(i))
      .y((d) => y(d))

    el.append('path')
      .datum(data)
      .prop({
        key: 'sparkline',
        className: 'sparkline',
        d: line
      })

    return el.toReact()
  }
}

export default Sparkline
