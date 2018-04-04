var sendemail   = require('sendemail').email; // no api key
var email = sendemail.email;
sendemail.set_template_directory('./relative/path/to/template/directory');
 
var person = {
  firstName : "Jenny",
  lastName : "",
  email: "hlrwoodworking18@gmail.com", // person.email can also accept an array of emails
  subject:"Welcome to DWYL :)",
  message: "Hello"
}
 
email('welcome', person, function(error, result){
  console.log(' - - - - - - - - - - - - - - - - - - - - -> email sent: ');
  console.log(result);
  console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - -')
})