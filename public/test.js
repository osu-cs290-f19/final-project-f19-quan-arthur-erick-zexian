var figlet = require("figlet");
figlet("Hello",function(err,data)){
  if(!err){
    console.log(data);
  }
}
