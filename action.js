this.logueado=false ;

$("#Entrada").click(function() {

	if ($("#usuario").val() == "denis" && $("#contraseña").val() =='25'){
		logueado = true;
		if(logueado==true){
			window.location="inicio.html"
		}	
	}
    else{ 
         swal.fire('Error'); 
    } 
});
$('#galeria').click(function(){
	window.location='galeria.html';
});
$('#prueba').click(function(){
	window.location='prueba.html';
});

$('#Salir').click(function(){
	window.location='INDEX.html';
});
$('#PDF').click(function(){
	window.location='PDF.html'
});

window.addEventListener('load',function(){
	$('.container').show(1000);
});
