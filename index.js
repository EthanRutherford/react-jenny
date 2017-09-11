const {createElement} = require("react");

function processProps(props) {
	if (typeof props === "string") {
		return {className: props};
	}

	return props;
}

module.exports = function j(tagObject, children) {
	if (!(children instanceof Array)) {
		children = children ? [children] : [];
	}

	if (tagObject instanceof Array) {
		return createElement(
			tagObject[0],
			processProps(tagObject[1]),
			...children,
		);
	}

	if (typeof tagObject !== "object") {
		return createElement(
			tagObject,
			null,
			...children,
		);
	}

	const key = Object.keys(tagObject)[0];

	return createElement(
		key,
		processProps(tagObject[key]),
		...children,
	);
};
