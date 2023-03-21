function resultado(result){
  document.getElementById("demo").innerHTML = result;
}

function teste(){
	const quantidade1 = document.querySelector("#qtd1");
	const valor1 = document.querySelector("#val1");
	const quantidade2 = document.querySelector("#qtd2");
	const valor2 = document.querySelector("#val2");
    
	
	const produto1 = Number(quantidade1.value) / Number(valor1.value);
	const produto2 = Number(quantidade2.value) / Number(valor2.value);
	if(produto1 > produto2){
	 resultado("Produto 1 é mais vantajoso");
		
	}else if(produto1 < produto2){
	 resultado("Produto 2 é mais vantajoso");
		
	}else{
	 resultado("Mesmo Preço");
	
	}
	
	
	
	
	
}

