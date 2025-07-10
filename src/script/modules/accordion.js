/* 

-Accordion List: É uma lista de itens empilhada verticalmente,
que ao ser clicada, revela ou oculta um conteúdo associado a cada
 elemento desta lista.
 # Usa-se o evento de click em cada item que vai ser relacionado,
 ao seu conteúdo.
*/

export default function iniAccordion(){
    const accordionList = document.querySelectorAll("[data-accordion='accordion'] dt");

    

    accordionList.forEach(itemDt => {
        itemDt.addEventListener("mousemove", ()=> itemDt.style.cursor = "pointer")
        itemDt.addEventListener("click", accordion);
    })

    function accordion(){
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList[0].classList.add("ativo")
    accordionList[0].nextElementSibling.classList.toggle('ativo')
}