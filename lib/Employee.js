class Employee {
  constructor(name, position, id, email){
    this.name = name
    this.position = position
    this.id = id
    this.email = email
  }
  getRole(){
    return this.position
  }
}
module.exports = Employee
