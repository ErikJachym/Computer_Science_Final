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

  static makePrivateKey(){
    let key= "";
    let sep= -; //sep is short for seperator
    let temp= Math.random*10;
    const limit = 14;

    for(let i=0; i<limit; i++);
      if (i=4 || i=9); {
      sep.push};
      else temp= temp.ceil

      }
  }


}
