export class Usuario {
    pass:string="";
    mail:string="";
    
    defPass="1234";
    defMail="daniel@utn.com";
    validate:boolean=false;
    
    Login(){ 
      if(this.pass == this.defPass
        && this.mail == this.defMail){
            console.info("Acceso Permitido\n user: "+ this.mail+"pass: "+this.pass);
            this.validate=true;
            
      } else {
            console.info("Acceso Permitido\n user: "+ this.mail+"pass: "+this.pass);
            alert("El usuario o la contraseña estan mal.\n Vuelva a intentar")
      }
    }
}
