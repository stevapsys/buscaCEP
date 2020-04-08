
let cep = document.querySelector('#cep')
let rua = document.querySelector('#rua')
let complemento = document.querySelector('#complemento')
let uf = document.querySelector('#uf')
let bairro = document.querySelector('#bairro')


cep.onkeyup = async (event)=>{

    if(cep.value.length == 8){
        console.log("Faz a pesquisa")
        let resposta = await fetch(`http://viacep.com.br/ws/${cep.value}/json/`)
        let dadosDoCep = await resposta.json()

        rua.value = dadosDoCep.logradouro
        complemento.value = dadosDoCep.complemento
        bairro.value = dadosDoCep.bairro
        uf.value = dadosDoCep.uf
    }

    
        
}


