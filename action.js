this.logueado=false ;

$("#Entrada").click(function() {

	if ($("#usuario").val() == "denis" && $("#contraseña").val() =='25'){
		logueado = true;
		if(logueado==true){
			window.location="./page/inicio.html"
		}	
	}
    else{ 
         swal.fire('Error'); 
    } 
});
$('#galeria').click(function(){
	window.location='../page/galeria.html';
});
$('#prueba').click(function(){
	window.location='../page/prueba.html';
});

$('#Salir').click(function(){
	window.location='../INDEX.html';
});
$('#PDF').click(function(){
	window.location='../page/PDF.html'
});

window.addEventListener('load',function(){
	$('.container').show(1000);
});
