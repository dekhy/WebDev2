var current = {
    generos: []
};

function addLivro(event) {
    event.preventDefault();
    event.stopPropagation();
    var formulario = document.forms[0];

    current.nome = formulario.nome.value;
    current.descricao = formulario.descricao.value;
    current.generos = current.generos.map(function(h) { return { nome: h }});
    current.sobreMim = formulario.sobreMim.value;

    Resume.add(current);
    toastr.success("O novo curriculo foi adicionado!", "Sucesso!");//Notificação na direita em cima da tela
    resetForm(formulario);
}

function resetForm(formulario) {
    formulario.reset();
    current = {
        generos: []
    };
    renderSkills();
}
 
function changeUserImage(event) {
    event.stopPropagation();
    document.getElementById('user-input-image').click();
}

var inputSkills = document.getElementById("generos");
inputSkills.onkeypress = function(event) {
    if(event.keyCode == 13 ) {//enter
        event.stopPropagation();
        event.preventDefault();
        current.generos.push(event.target.value);
        renderSkills();
        event.target.value = '';
    }
}

function renderSkills() {
    var skillsBlock = document.getElementById('skills-block');
    skillsBlock.innerHTML = current.generos.map(function(hab, index) {
        return `
            <span class="label label-default skill">
                <span class="skill-label">${hab}</span>
                <i class="fas fa-times" onclick="removeSkill(${index})"></i>
            </span>
        `
    }).join('');
}

function removeSkill(index) {
    current.generos.splice(index, 1);
    renderSkills();
}

document.getElementById('user-input-image').addEventListener('change', function(event) {
    if(event.target.files && event.target.files.length) {
        var file = event.target.files[0] || {};
        var reader = new FileReader();
        reader.onload = function(){
            var img = document.getElementById('user-image');
            img.src = reader.result;
            current.foto = reader.result;
        };

        reader.readAsDataURL(file);
    }
});