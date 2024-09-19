//criando ouvintes para um simples programa de resoculucao de churrasco
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")
const resp4 = document.querySelector("#outResp4")
const resp5 = document.querySelector("#outResp5")

//criando um ouvinte para o evento submit
frm.addEventListener("submit", (e)=>{
    const pessoas = Number(frm.inPessoas.value) // recebe o valor de pessoas
    const carne = Number(frm.inGramasCarne.value)
    const linguica = Number(frm.inGramasLinguica.value)
    const precoCarne = Number(frm.inPrecoCarne.value)
    const precoLinguica = Number(frm.inPrecoLinguica.value)

    const carnePessoa = pessoas*carne
    const linguicaPessoa = pessoas*linguica
    const totalCarne = carnePessoa*precoCarne
    const totalLinguica = precoLinguica*linguicaPessoa
    
    //const carne = pessoas*0.5
    //const linguica = pessoas*0.15
    const pao = pessoas*4

    resp1.innerText = `Neste aniversário se fará presente ${pessoas} pessoas`
    resp2.innerText = `Vai precisar de ${carne.toFixed(2)} KG de contra filé s/osso`
    resp3.innerText = `Vai precisar de ${linguica.toFixed(2)} KG de linguica`
    resp4.innerText = `Vai precisar de ${pao} (media de 4 paes por pessoa)`
    resp5.innerText = `O total em carne ficou R$${totalCarne.toFixed(2)} e de linguica R$${totalLinguica.toFixed(2)}` 

    e.preventDefault()
})