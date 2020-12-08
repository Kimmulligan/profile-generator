const Manager = require("../lib/Manager")
test("check getRole method", function(){
  const value = "Manager"
  const example = new Manager("fake", 5, "k@email.com", 45)
  expect(example.getRole()).toBe(value)
})