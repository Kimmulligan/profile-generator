const Employee = require("./Employee")
class Intern extends Employee{
    constructor(name, id, email, position, school){
      super(name, position, id, email)
      this.school = school
    }
}
module.exports = Intern