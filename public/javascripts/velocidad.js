function velocidad_mru(){
	var form = getElementById("formulito");
	var d = getElementById("distancia");
	var t = getElementById("tiempo");
	if(d==null || d=='' || t==null || t=='' || d.length<1 || t.length<1){
		alert('No ingreso algun valor correcto');
	}
	else{
		d=parseFloat(d);
		t=parseFloat(f);
		formulito.velocidad.value=parseFloat(d/t);
	}
	
}