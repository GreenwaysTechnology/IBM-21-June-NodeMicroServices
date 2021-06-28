//strings
var firstName = "Subramanian";
let lastName = 'Murugan';
//string concatnation: + , `${}-string interpolation`
console.log(" Name " + firstName + " " + lastName);
console.log(" Name ", firstName, " ", lastName);
//String interpolation : es 6 ;  String template literal
console.log(`Name ${firstName} ${lastName}`);
//multi line strings using es 5 pattern:
let title = 'IBM'
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)

let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)