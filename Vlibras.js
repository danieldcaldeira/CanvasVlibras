
//Insere Script VLibras
let vlibrasScript = document.createElement('script');
vlibrasScript.setAttribute("src", "https://vlibras.gov.br/app/vlibras-plugin.js");    
document.body.appendChild(vlibrasScript);
vlibrasScript.onload = () => {
    CreateDOMObjects();
    new window.VLibras.Widget('https://vlibras.gov.br/app');

}

//Adiciona DIVs do VLibras ao body

let CreateDOMObjects = () => {
    const DOM = `
        <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
        </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', DOM);
}
