const Employee = require("./Employee")
class Engineer extends Employee{
  constructor(name, id, email, position, github){
    super(name, position, id, email)
    this.github = github
  }
getRole(){
  return "Engineer"  
}
getGitHub(){
  return this.github}
}
module.exports = Engineer