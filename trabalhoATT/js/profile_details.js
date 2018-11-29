//Não funciona nada
window.addEventListener('load', function() {
    var url = new URL(window.location.href);
    var LivroId = url.searchParams.get("livro");

    var current = Livro.getById(LivroId);
    console.log(current);

    document.getElementById('user-name').innerText = current.nome;
    document.getElementById('user-description').innerText = current.descricao;
    document.getElementById('user-aboutme').innerText = current.sobreMim;

    if(current.foto) {
        document.getElementById('user-image').src = current.foto;
    }
    renderSkills(current);
});

function renderSkills(current) {
    var skillsBlock = document.getElementById('skills-block');
    skillsBlock.innerHTML = current.generos.map(function(gen, index) {
        return `
            <span class="label label-default skill">
                <span class="skill-label">${gen.nome}</span>
            </span>
        `
    }).join('');
}
