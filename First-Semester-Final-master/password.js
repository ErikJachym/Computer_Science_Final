class Password{
  //The first part of the class.
constructor(pk,prk){
  this.publickey= pk;
  this.privatekey= prk;
}

  //Instance functions below this comment.
validPublicKey(){
  if (this.publickey.length>8 && this.publickey.length<25){
    return "true";
  else return "false";
  }
}


  //Static function below this comment.
}
