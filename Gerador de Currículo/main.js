/*Tentativa de gerar currículo em PDF a partir das informações dadas pelo usuário*/
/*Única biblioteca que foi testada e funcionou, não gerou resultados esperados, a divisão inteira do formulário foi para o PDF e está mal encaixada*/

function gerarCurriculo(){
    const elemento = document.getElementById("formulario");

    html2pdf()
    .from(elemento)
    .save();
}