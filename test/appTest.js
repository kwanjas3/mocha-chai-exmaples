//copy the structure of your actual application

const assert = require("chai").assert;
const app = require("../app");

describe("App", () => {
  it("app should return hello", () => {
    assert.equal(app.sayHello(), "hello");
  });

  it("sayHello should return type string", () => {
    assert.typeOf(app.sayHello(), "string");
  });
  it("addNumber(1,1)should return 2", () => {
    assert.equal(app.addNumbers(1, 1), 2);
  });
  it("addNumber(1,1)should be above 1", () => {
    assert.isAbove(app.addNumbers(1, 1), 1);
  });
  it("addNumber(1,1)should be a number", () => {
    assert.typeOf(app.addNumbers(1, 1), "number");
  });
});
