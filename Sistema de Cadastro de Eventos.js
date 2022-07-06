//Atividade 2 - SENAI - Sistema de Cadastro de Eventos


//Data do Evento
var diadoevento = 02
var mesdoevento = 10
var anodoevento = 2022

//dia atual
let diaatual = 06
let mesatual = 07
let anoatual = 2022

//verificação da data
if(diadoevento >= diaatual){
    if(mesdoevento >= mesatual){
        if(anodoevento >= anoatual){
            console.log("Data selecionada com sucesso")
        }else {
            console.log("Data Invalida")
        }
    }else {
        console.log("Data Invalida")
    }
}else {
    console.log("Data Invalida")
}

//Verificação de Idade
let idade = 18

if(idade <18){
    console.log("Não permitido, menor de idade")
}else {
    console.log("Cadastro realizado com sucesso")
}

//Lista de Convidados
var listaconvidados = ["João", "Pedro", "Mateus", "Caique"]

 if(listaconvidados.length > 10 ){
    console.log("Lista Cheia, cadastro não concluido")
}else {

    console.log("Cdastro concluido com sucesso")
}