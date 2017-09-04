/* global describe, it, before */
const assert = require("assert");
const {Component} = require("react");
const j = require(".");

before(function() {
	//turn react's console warnings into thrown exceptions
	console.error = (message) => {throw new Error(message);};
});

describe("the `j` function", function() {
	describe("with tag object", function() {
		it("should accept tag objects", function() {
			const div = j({div: 0});

			assert.equal(div.type, "div");
		});

		it("should not have children if none passed in", function() {
			const div = j({div: 0});

			assert.equal(div.type, "div");
			assert.ok(!("children" in div.props));
		});

		it("should not have props if none passed in", function() {
			const div = j({div: 0});

			assert.equal(div.type, "div");
			assert.deepEqual(div.props, {});
		});

		it("should receive single child", function() {
			const div = j({div: 0}, "child");

			assert.equal(div.type, "div");
			assert.equal(div.props.children, "child");
		});

		it("should receive array of children", function() {
			const div = j({div: 0}, ["child1", "child2"]);

			assert.equal(div.type, "div");
			assert.deepEqual(div.props.children, ["child1", "child2"]);
		});

		it("should receive props from object", function() {
			const div = j({div: {className: "test-class"}});

			assert.equal(div.type, "div");
			assert.equal(div.props.className, "test-class");
		});

		it("should error if tag object is empty", function() {
			assert.throws(() => j({}));
		});
	});

	describe("with component array", function() {
		it("should accept component arrays", function() {
			const comp = j([Component]);

			assert.equal(comp.type, Component);
		});

		it("should not have children if none passed in", function() {
			const comp = j([Component]);

			assert.equal(comp.type, Component);
			assert.ok(!("children" in comp.props));
		});

		it("should not have props if none passed in", function() {
			const comp = j([Component]);

			assert.equal(comp.type, Component);
			assert.deepEqual(comp.props, {});
		});

		it("should receive single child", function() {
			const comp = j([Component], "child");

			assert.equal(comp.type, Component);
			assert.equal(comp.props.children, "child");
		});

		it("should receive array of children", function() {
			const comp = j([Component], ["child1", "child2"]);

			assert.equal(comp.type, Component);
			assert.deepEqual(comp.props.children, ["child1", "child2"]);
		});

		it("should receive props from array[1]", function() {
			const comp = j([Component, {className: "test-class"}]);

			assert.equal(comp.type, Component);
			assert.equal(comp.props.className, "test-class");
		});

		it("should error if component array is empty", function() {
			assert.throws(() => j([]));
		});
	});

	describe("with tag string", function() {
		it("should accept tag strings", function() {
			const div = j("div");

			assert.equal(div.type, "div");
		});

		it("should not have children if none passed in", function() {
			const div = j("div");

			assert.equal(div.type, "div");
			assert.ok(!("children" in div.props));
		});

		it("should have no props", function() {
			const div = j("div");

			assert.equal(div.type, "div");
			assert.deepEqual(div.props, {});
		});

		it("should receive single child", function() {
			const div = j("div", "child");

			assert.equal(div.type, "div");
			assert.equal(div.props.children, "child");
		});

		it("should receive array of children", function() {
			const div = j("div", ["child1", "child2"]);

			assert.equal(div.type, "div");
			assert.deepEqual(div.props.children, ["child1", "child2"]);
		});
	});

	describe("with component argument", function() {
		it("should accept component argument", function() {
			const comp = j(Component);

			assert.equal(comp.type, Component);
		});

		it("should not have children if none passed in", function() {
			const comp = j(Component);

			assert.equal(comp.type, Component);
			assert.ok(!("children" in comp.props));
		});

		it("should have no props", function() {
			const comp = j(Component);

			assert.equal(comp.type, Component);
			assert.deepEqual(comp.props, {});
		});

		it("should receive single child", function() {
			const comp = j(Component, "child");

			assert.equal(comp.type, Component);
			assert.equal(comp.props.children, "child");
		});

		it("should receive array of children", function() {
			const comp = j(Component, ["child1", "child2"]);

			assert.equal(comp.type, Component);
			assert.deepEqual(comp.props.children, ["child1", "child2"]);
		});
	});
});
