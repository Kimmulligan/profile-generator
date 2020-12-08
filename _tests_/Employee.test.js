const Employee = require("../lib/Employee")
test("create new instance of the Employee class", function(){
  const example = new Employee()
  expect(typeof(example)).toBe('object')
})
test("create a new employee Destiny", function(){
  const name = "Destiny"
  const example = new Employee(name)
  expect(example.name).toBe(name)
})