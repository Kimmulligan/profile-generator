class Employee {
  constructor(name, id, email){
    this.name = name
    this.id = id
    this.email = email
  }
  getRole(){
    return "employee"
  }
}

// function makeClickable(email) {
//   return String.prototype.link ? url.link(url) : '<a href="'+url+'">'+url+'</a>';
// }

// function makeDOMClickable(email) {
//   var link = document.createElement('a');
//   link.href = url;
//   link.innerHTML = url;
//   return link;
// }

// var url = "";
// document.write ( makeClickable ( url ) );
// document.body.appendChild ( makeDOMClickable ( url ) );

module.exports = Employee
