import d3 from 'd3'
import React from 'react'
import ReactFauxDOM from 'react-faux-dom'

class Sparkline extends React.Component {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    data: React.PropTypes.array,
    interpolation: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.function
    ])
  }

  render () {
    const {width, height, data, interpolation} = this.props

    const el = d3.select(ReactFauxDOM.createElement('svg'))
      .attr(this.props)
      .attr('data', null)

    const x = d3.scale.linear()
      .range([0, width])
      .domain(d3.extent(data, (d, i) => i))

    const y = d3.scale.linear()
      .range([height, 0])
      .domain(d3.extent(data, (d) => d))

    const line = d3.svg.line()
      .x((d, i) => x(i))
      .y((d) => y(d))
      .interpolate(interpolation)

    el.append('path')
      .datum(data)
      .attr({
        key: 'sparkline',
        className: 'sparkline',
        d: line
      })

    return el.node().toReact()
  }
}

export default Sparkline
