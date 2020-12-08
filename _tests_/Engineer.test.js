const Engineer = require("../lib/Engineer")
test("check getRole method", function(){
  const value = "Engineer"
  const example = new Engineer("fake", 5, "k@email.com", "kimmulligan")
  expect(example.getRole()).toBe(value)
})