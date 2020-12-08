const Intern = require("../lib/Intern")
test("check getRole method", function(){
  const value = "Intern"
  const example = new Intern("fake", 5, "k@email.com", "school")
  expect(example.getRole()).toBe(value)
})