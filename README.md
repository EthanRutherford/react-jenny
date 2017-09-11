# react-jenny
React plugin which adds Jenny syntax for React.createElement

This gives a cleaner, easier to use means of jsx-less react.

### jsx
```jsx
<div className="some-class">
	<span>Hello!</span>
	<a href="something.com">click me!</a>
	<div>I'm a block</div>
	<button className="button-class" />
	<SomeComponent />
	<SomeOtherComponentWithProp prop="value" />
</div>
```

### jsx-less react
```js
React.createElement("div", {className: "some-class"},
	React.createElement("span", null, "Hello!"),
	React.createElement("a", {href: "something.com"},"click me!"),
	React.createElement("div", null, "I'm a block"),
	React.createElement("button", {className: "button-class"}),
	React.createElement(SomeComponent),
	React.createElement(SomeOtherComponentWithProp, {prop: "value"}),
);
```

### react-jenny
```js
const j = require("react-jenny");

j({div: {className: "some-class"}}, [
	j({span: 0}, "Hello!"),
	j({a: {href: "something.com"}}, "click me!"),
	j("div", "I'm a block"),
	j({button: "button-class"}),
	j(SomeComponent),
	j([SomeOtherComponentWithProp, {prop: "value"}]),
]);
```

see also: [Jenny](https://github.com/EthanRutherford/jenny-js)
