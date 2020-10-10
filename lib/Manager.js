const Employee = require("./Employee")
class Manager extends Employee{
  constructor(name, id, email, position, office_number){
    super(name, position, id, email)
    this.office_number = office_number
  }
}
module.exports = Manager