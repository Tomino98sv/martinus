
function test(value){
	alert("Script prepojeny "+value);
}

function showOption(){


	var images = event.target.getElementsByTagName('img');

	if (event.target.tagName == 'IMG') {
		images = event.target;
	}else{
		images = images[0];
	}

		if (images.src.includes("down.png")) {
			images.src = '../images/up.png';
			images = event.target.getElementsByTagName('img');
		}else if(images.src.includes("up.png")){
			images.src = '../images/down.png';
		}
		
		
}


function skuskaPrejstNaRegistraciu(){
	alert("teraz akoze nenasiel mail v databaze a ho presmeruje na registraciu");
	window.location.replace("registration.html");
}