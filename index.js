const {createElement} = require("react");

module.exports = function j(tagObject, children) {
	if (!(children instanceof Array)) {
		children = children ? [children] : [];
	}

	if (tagObject instanceof Array) {
		return createElement(
			tagObject[0],
			tagObject[1],
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
		tagObject[key],
		...children,
	);
};
