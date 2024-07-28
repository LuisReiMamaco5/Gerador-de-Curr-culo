function gerarCurriculo(){
    const elemento = document.getElementById("formulario");

    html2pdf()
    .from(elemento)
    .save();
}