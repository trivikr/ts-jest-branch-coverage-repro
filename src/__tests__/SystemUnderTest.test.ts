describe("Testing", () => {
  let oddOrEven;
  let template;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();

    template = jest.fn();
    jest.setMock("handlebars", {
      compile: () => template
    });
    oddOrEven = require("../SystemUnderTest").oddOrEven;
  });

  afterEach(() => {
    template.mockClear();
  });

  it("testing odd number", async () => {
    await oddOrEven(3);
    const stringPassed = template.mock.calls[0][0];
    expect(stringPassed.result).toEqual("odd");
  });

  it("testing even number", async () => {
    await oddOrEven(2);
    const stringPassed = template.mock.calls[0][0];
    expect(stringPassed.result).toEqual("even");
  });
});
