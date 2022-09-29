fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then( (resposta)=> resposta.json())
    .then((regioes)=>{
        regioes.forEach( (cadaRegiao)=> {
            document.getElementById('regiao').innerHTML += `
            <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>
            `;}
        )
    })  

    function buscarEstados(){
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao.value}/estados`)
            .then( (resposta)=> resposta.json())
            .then((estados)=>{
                estados.forEach ((cadaEstado)=> {
                    document.getElementById('estado').innerHTML += `
            <option value="${cadaEstado.id}">${cadaEstado.nome}</option>`;
                })
            })
            limpar('estado');
    }
        
    function buscarCidades(){
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.value}/municipios
        `)
        .then( (resposta)=> resposta.json())
        .then((cidades)=>{
            cidades.forEach ((cadaCidade)=> {
                document.getElementById('cidade').innerHTML += `
        <option value="${cadaCidade.id}">${cadaCidade.nome}</option>`;
            })
        })
         limpar('cidade');
}

function limpar(x){
    document.getElementById(x).innerHTML = `
    <option selected disabled>Selecione</option>`;
}
