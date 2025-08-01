let prompt = require("prompt-sync")();

//atividadeCNH()
function atividadeCNH(){

    let idade = parseInt(prompt("Digite sua idade: "))

    if(idade >= 120){
        console.log("Idade inválida...")
    }
    else if( idade >= 65){
        console.log("Teste especial para renovar a CNH")
    }
    else if( idade >= 18){
        console.log("Você ja pode tirar CNH")
    }
    else{
        console.log("Você ainda não tem idade para tirar CNH ")
    }
    }


    //login()
    function login(){

        let usuario = prompt("Digite seu usuário: ")
        let senha = prompt("Digite seu senha: ")

        if(usuario == "admin" && senha == "123" ){
            console.log("Acesso concedido!")
        }
        else{
            console.log("Usuário ou senha incorretos...")
        }

    }

    //exemploResposta()
    function exemploResposta(){

        let resposta = prompt("Deseja cadastrar o débito automático? ")
        
        // || UMA DAS duas codições tem que ser verdadeiras
        if(resposta == "sim" || resposta == "SIM"){
            console.log("Débito cadastrado com sucesso!")
        }
        else{
            console.log("Não será cadastrado...")
        }

    }

    //golsMarcado()
    function golsMarcado(){

        let timeA = prompt("Qual nome do primeiro time: ")
        let timeB = prompt("Qual nome do segundo time: ")

        let gols_marcadoA = prompt("Total de gols do "+ timeA)
        let gols_marcadoB = prompt("Total de gols do "+timeB)
        
        if(gols_marcadoA > gols_marcadoB){
            console.log(" o "+timeA+ " ganhou ")
        }
        if(gols_marcadoB > gols_marcadoA){
            console.log(" O " +timeB+ " ganhou ")
        }
        else{
            console.log("O jogo deu EMPATE")
        }

        }
        
        //investigacaoCriminal()
        function investigacaoCriminal(){

            let telefone = prompt("Telefonou para a vítima?: ")
            let local = prompt("Esteve no local do crime?: ")
            let mora = prompt("Mora perto da vítima?: ")
            let devia = prompt("Devia para a vítima?: ")
            let trabalhou = prompt("Já trabalhou para vítima?: ")

            if(telefone == "sim"&& local == "sim"&& mora == "sim"&& devia == "sim"&& trabalhou == "sim"){
                console.log("Assassino")
            }
            else if(telefone == "sim"&& local == "sim"&& mora == "sim"&& devia == "sim"&& trabalhou == "nao"){
                console.log("Cúmplice")
            }
            else if(telefone == "sim"&& local == "sim"&& mora == "sim"&& devia == "nao"&& trabalhou == "sim"){
                console.log("Cúmplice")
            }
            else if(telefone == "sim"&& local == "sim"&& mora == "nao"&& devia == "sim"&& trabalhou == "sim"){
                console.log("Cúmplice")
            }
            else if(telefone == "sim"&& local == "nao"&& mora == "sim"&& devia == "sim"&& trabalhou == "sim"){
                console.log("Cúmplice")
            }
            else if(telefone == "nao"&& local == "sim"&& mora == "sim"&& devia == "sim"&& trabalhou == "sim"){
                console.log("Cúmplice")
            }
            else if(telefone == "sim"&& local == "sim"&& mora == "sim"&& devia == "nao"&& trabalhou == "nao"){
                console.log("Cúmplice")
            }
            else if(telefone == "sim"&& local == "sim"&& mora == "nao"&& devia == "nao"&& trabalhou == "sim"){
                console.log("Cúmplice")
            }
            else if(telefone == "nao"&& local == "nao"&& mora == "sim"&& devia == "sim"&& trabalhou == "sim"){
                console.log("Cúmplice")
            }
            else if(telefone == "sim"&& local == "nao"&& mora == "sim"&& devia == "nao"&& trabalhou == "sim"){
                console.log("Cúmplice")
            }
            else if(telefone == "sim"&& local == "nao"&& mora == "nao"&& devia == "sim"&& trabalhou == "sim"){
                console.log("Cúmplice")
            }
            else if(telefone == "nao"&& local == "nao"&& mora == "nao"&& devia == "sim"&& trabalhou == "sim"){
                console.log("Suspeito")
            }
            else if(telefone == "nao"&& local == "nao"&& mora == "sim"&& devia == "sim"&& trabalhou == "nao"){
                console.log("Suspeito")
            }
            else if(telefone == "sim"&& local == "sim"&& mora == "nao"&& devia == "nao"&& trabalhou == "nao"){
                console.log("Suspeito")
            }
            else if(telefone == "sim"&& local == "nao"&& mora == "sim"&& devia == "nao"&& trabalhou == "nao"){
                console.log("Suspeito")
            }
            else if(telefone == "sim"&& local == "nao"&& mora == "nao"&& devia == "sim"&& trabalhou == "nao"){
                console.log("Suspeito")
            }
            else if(telefone == "sim"&& local == "nao"&& mora == "nao"&& devia == "nao"&& trabalhou == "sim"){
                console.log("Suspeito")
            }
            else if(telefone == "sim"&& local == "nao"&& mora == "nao"&& devia == "nao"&& trabalhou == "sim"){
                console.log("Suspeito")
            }
            else if(telefone == "nao"&& local == "sim"&& mora == "sim"&& devia == "nao"&& trabalhou == "nao"){
                console.log("Suspeito")
            }
            
            
            else{
                console.log("Inocente ")
            }

        }
        
        
       

    