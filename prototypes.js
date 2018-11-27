//Adds blank method to the String object
String.prototype.blank = function () {
  if(this.length === 0) {
    console.log("It's the blank line");
    return true;
  } else {
    console.log("Checking for whitespaces kind of chars");
    let blanks = /^\s+$/;
    if (this.match(blanks)){
      return true;
    } else {
      console.log("The string actually says something");
      return false;
    }
  } }

//let test = "";
//test.blank();
