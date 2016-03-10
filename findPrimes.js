function findPrimes(){
	document.getElementById("result").innerHTML = "";
	worker = new Worker("worker.js");
	worker.onmessage = function(event){
		var lastNum = document.getElementById("formulario").input.value;
		worker.postMessage(lastNum);
		worker.onmessage = updateHtml;
	}
}

function updateHtml(event){
	var result = document.getElementById("result");
	if (event.data == "ended"){
		result.innerHTML += ".";
		worker.terminate();
	}else if (result.innerHTML == ""){
		result.innerHTML = event.data;
	}else{
		result.innerHTML += ", " + event.data;
	}
}