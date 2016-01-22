# d3-react-sparkline [![npm version](https://badge.fury.io/js/d3-react-sparkline.svg)](http://badge.fury.io/js/d3-react-sparkline) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

A simple component to render a sparkline with [D3][] using [react-faux-dom][].

![Example Line](/../master/line.png?raw=true)

## Usage

If you're working on this repository you can use `make` to set everything up.

```bash
# Fetch the dependencies
make bootstrap

# Start the development server
# http://localhost:3000
make start
```

If you're using this component as an end user you can simply import the component and give it some data.

```javascript
<Sparkline width={180} height={60} data={[10, 16, 5, 22, 3, 11]} />
```

You can also specify `interpolation` as [one of D3s own][interpos] or a custom function. It maps directly to the `.interpolate()` method within the D3 API.

Style it with something like this (presuming you set a `className` to `visitors`):

```css
.visitors .sparkline {
  fill: none;
  stroke: steelblue;
  stroke-width: 1.5px;
}
```

## Want to work on this for your day job?

This project was created by the Engineering team at [Qubit][]. As we use open source libraries, we make our projects public where possible.

We're currently looking to grow our team, so if you're a JavaScript engineer and keen on ES2016 React+Redux applications and Node micro services, why not get in touch? Work with like minded engineers in an environment that has fantastic perks, including an annual ski trip, yoga, a competitive foosball league, and copious amounts of yogurt.

Find more details on our [Engineering site][eng]. Don’t have an up to date CV? Just link us your GitHub profile! Better yet, send us a pull request that improves this project.

[d3]: http://d3js.org/
[react-faux-dom]: https://github.com/Olical/react-faux-dom
[interpos]: http://bl.ocks.org/mbostock/4342190
[qubit]: http://www.qubit.com
[eng]: https://eng.qubit.com
