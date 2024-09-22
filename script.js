function salvarNota() {
    const nota = document.getElementById('nota').value;
    localStorage.setItem('nota', nota);
    document.getElementById('mensagem').innerText = 'Nota salva com sucesso!';
}

function limparNota() {
    const notaAtual = document.getElementById('nota').value; 
    if (notaAtual) {
        sessionStorage.setItem('notaAnterior', notaAtual);
    }
    document.getElementById('nota').value = '';
    localStorage.removeItem('nota');
    document.getElementById('mensagem').innerText = 'Nota limpa! Clique em "Carregar Nota" para restaurar.';
}

function carregarNota() {
    const notaAnterior = sessionStorage.getItem('notaAnterior');
    if (notaAnterior) {
        document.getElementById('nota').value = notaAnterior;
        localStorage.setItem('nota', notaAnterior);
        sessionStorage.removeItem('notaAnterior');
        document.getElementById('mensagem').innerText = 'Nota carregada com sucesso!';
    } else {
        document.getElementById('mensagem').innerText = 'Nenhuma nota anterior para carregar.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const nota = localStorage.getItem('nota');
    if (nota) {
        document.getElementById('nota').value = nota;
    }
});
