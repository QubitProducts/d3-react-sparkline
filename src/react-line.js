import React from 'react'
import d3 from 'd3'
import 'd3-react'

class Line extends React.Component {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    data: React.PropTypes.array
  }

  render () {
    let {width, height, data} = this.props

    let el = d3.select(document.createElement('svg'))
      .prop(this.props)
      .prop('data', null)

    let x = d3.scale.linear()
      .range([0, width])
      .domain(d3.extent(data, (d, i) => i))

    let y = d3.scale.linear()
      .range([height, 0])
      .domain(d3.extent(data, (d) => d))

    let line = d3.svg.line()
      .x((d, i) => x(i))
      .y((d) => y(d))

    el.append('path')
      .datum(data)
      .prop({
        key: 'line',
        className: 'line',
        d: line
      })

    return el.toReact()
  }
}

export default Line
