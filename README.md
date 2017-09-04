# react-jenny
React plugin which adds Jenny syntax for React.createElement

This gives a cleaner, easier to use means of jsx-less react.

### jsx
```jsx
<div className="someClass">
	<span>Hello!</span>
	<a href="something.com">click me!</a>
	<div>I'm a block</div>
	<SomeComponent />
	<SomeOtherComponentWithProp prop="value" />
</div>
```

### jsx-less react
```js
React.createElement("div", {className: "someClass"},
	React.createElement("span", null, "Hello!"),
	React.createElement("a", {href: "something.com"},"click me!"),
	React.createElement("div", null, "I'm a block"),
	React.createElement(SomeComponent),
	React.createElement(SomeOtherComponentWithProp, {prop: "value"}),
);
```

### react-jenny
```js
const j = require("react-jenny");

j({div: {className: "someClass"}}, [
	j({span: 0}, "Hello!"),
	j({a: {href: "something.com"}}, "click me!"),
	j("div", "I'm a block"),
	j(SomeComponent),
	j([SomeOtherComponentWithProp, {prop: "value"}]),
]);
```

see also: [Jenny](https://github.com/EthanRutherford/jenny-js)
