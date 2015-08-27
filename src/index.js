import React from 'react'
import Line from './react-line'

let data = [85, 66, 71, 10, 5, 16, 71, 1, 16, 24, 54, 85, 37, 36, 43, 67, 63, 23, 96, 53, 25]

React.render(
  <Line
    className='visitors'
    width={document.body.offsetWidth}
    height={200}
    data={data}
  />,
  document.body
)
