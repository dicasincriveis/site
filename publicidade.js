var url_atual = window.location.href;
document.write(url_atual);
if (url_atual.toLowerCase().includes('erro')) {
    window.alert(5 + 6)
} else if (url_atual.toLowerCase().includes('colesterol')) {
    document.write('<script src="https://dicasincriveis.github.io/site/mensagem.js"></script>')
} else {
    document.write('<p><h1>legal')
}
