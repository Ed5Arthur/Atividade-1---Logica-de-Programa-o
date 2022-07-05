

let peso = 100
if (peso < 100){
	console.log("A peça deve pesar no minimo 100g")
}else{
	console.log("A peça possui peso adequado")
}

var listaDepecas = ["Amortecedor", "Motor", "Filtro de ar", "Amortecedor", "Motor", "Filtro de ar", "Amortecedor", "Motor", "Filtro de ar", "motor"]

if (listaDepecas.length < 10){
	console.log("Ainda tem espaço")
}else{
	console.log("Não tem mais espaço")
}

let nomepeca = ""
if(nomepeca.length > 3){
 console.log("Nome da peça esta adequado")
}else if (nomepeca.length == 0){
 console.log("Nome da peça nao pode ser vazio")
}else {
    console.log("Nome da peça precisa ter no minimo 3 caracteres")
}