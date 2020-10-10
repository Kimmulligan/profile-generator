function generateDynamicHTML(employeeArray) {
  console.log(employeeArray);
  const staticHTML = generateStaticHTML()
  let HTMLString = `
`;
return HTMLString
}
function generateStaticHTML(){
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <style>
      #header {
        background: red;
        text-align: center;
        color: white;
      }
      #cardHeading {
        background: rgb(13, 86, 110);
        color: white;
        padding: 15px;
      }
    </style>
  </head>
  <body>
    <main>
      <div class="jumbotron" id="header">
        <h1 class="display-4">My Team</h1>
      </div>
      <section class="container-fluid">
  `
  return team .html
}
//  

module.exports = generateDynamicHTML;


