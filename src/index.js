import React from 'react'
import Sparkline from './d3-react-sparkline'

const data = [85, 66, 71, 10, 5, 16, 71, 1, 16, 24, 54, 85, 37, 36, 43, 67, 63, 23, 96, 53, 25]

React.render(
  <Sparkline
    className='visitors'
    width={document.body.offsetWidth}
    height={200}
    data={data}
  />,
  document.body
)
