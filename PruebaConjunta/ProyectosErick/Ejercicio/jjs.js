var getData = function (){
	var nombres= document.getElementById("nombres_completos").value;
	var apellidos = document.getElementById("apellidos").value;
	var email= document.getElementById("email").value;
	var numero_de_cedula = document.getElementById("numero_de_cedula").value;
	var contraseña = document.getElementById("contraseña").value;
	var date = document.getElementById("date").value;
	var usuario = document.getElementById("usuario").value;
	if (nombres == "") {
		document.getElementById("nombres_completos").focus();
	}else {
		if (apellidos == "") {
			document.getElementById("apellidos").focus();
		} else {
			if (email == "") {
				document.getElementById("email").focus();
			} else{
				if (numero_de_cedula == "") {
					document.getElementById("numero_de_cedula").focus();
				}else{
					if(contraseña == ""){
					   document.getElementById("contraseña").focus();
					}else{
						if (date == "") {
							document.getElementById("date").focus();
					}else{
						if (usuario == "") {
							document.getElementById("usuario").focus();
						
					} else {
						if(numero_de_cedula < 99999999) {
                        document.getElementById("numero_de_cedula").value = "";
						}else {
							if(numero_de_cedula > 10000000000 ) {
                        document.getElementById("numero_de_cedula").value = "";
						
						}
						
					else {
						console.log(nombres+" "+apellidos);
						console.log("Fecha de naciemiento "+date);
						console.log(email);
	                    console.log(usuario+" y "+contraseña);
	                    console.log(numero_de_cedula);
	                    
	                 //document.getElementById("nombres_completos").value = "";
	                 //document.getElementById("apellidos").value = "";
	                 //document.getElementById("date").value = "";
	                 //document.getElementById("email").value = "";
	                 //document.getElementById("numero_de_cedula").value = "";
	                 //document.getElementById("contraseña").value = "";
	                 //document.getElementById("usuario").value = "";


                      }
                  }
              }    
              
                  }
                  }
					}
					}
				}
				
			}
			
		}
	

	//console.log(nombres+" "+apellidos_completos);
	//console.log(email+" y "+contraseña);
	//console.log(numero_de_cedula)
	
	

	
var getData1 = function (){
 	var nombres= document.getElementById("nombres_completos").value;
	var apellidos = document.getElementById("apellidos").value;
	var email= document.getElementById("email").value;
	var numero_de_cedula = document.getElementById("numero_de_cedula").value;
	var contraseña = document.getElementById("contraseña").value;
	var date = document.getElementById("date").value;
	var usuario = document.getElementById("usuario").value;
var contraseña1= document.getElementById("contraseña1").value;
 var usuario1 = document.getElementById("usuario1").value;
		if (usuario1 / usuario) {
			document.getElementById("usuario1").focus();

		}else{
			if (contraseña1 / contraseña) {
			document.getElementById("contraseña1").focus();

		}else{
			
			document.write(nombres+" "+apellidos);
			document.write("   ")
			document.write("Fecha de naciemiento "+date);
document.write("  ")
						document.write(email);
document.write("  ")
	                    document.write(usuario+" y "+contraseña);
document.write("  ")
	                    document.write(numero_de_cedula);
		}

}
}









