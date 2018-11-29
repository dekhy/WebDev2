var currentResume = {
    habilidades: []
};

function addResume(event) {
    event.preventDefault();
    event.stopPropagation();
    var formulario = document.forms[0];

    currentResume.nome = formulario.nome.value;
    currentResume.descricao = formulario.descricao.value;
    currentResume.generos = currentResume.generos.map(function(h) { return { nome: h }});
    currentResume.sobreMim = formulario.sobreMim.value;

    Resume.add(currentResume);
    toastr.success("O novo curriculo foi adicionado!", "Sucesso!");
}