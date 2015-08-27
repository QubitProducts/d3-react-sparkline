# react-line

A simple component to render a sparkline with [D3][] using the [d3-react][] plugin.

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
<Line width={180} height={60} data={[10, 16, 5, 22, 3, 11]} />
```

And style it with something like this (presuming you set a `className` to `visitors`):

```css
.visitors .line {
  fill: none;
  stroke: steelblue;
  stroke-width: 1.5px;
}
```

[d3]: http://d3js.org/
[d3-react]: https://github.com/Olical/d3-react
