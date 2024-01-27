
function criptografar() {

    function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
    }

    function stringParaHexa(texto) {
        mensagem = texto;
        let hexaString = '';
        for (let i = 0; i < mensagem.length; i++) {
            let hexa = mensagem.charCodeAt(i).toString(16);
            hexaString += hexa;
        }
        return hexaString;
    }

    let mensagemInput = document.getElementById('mensagem')
    entradaTexto = mensagemInput.value;

    let hexadecimal = stringParaHexa(entradaTexto);

    exibirTextoNaTela('h1', 'TEXTO CRIPTOGRAFADO COM SUCESSO');
    exibirTextoNaTela('p', hexadecimal);
}


function descriptografar() {
    function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
    }

    function hexaParaString(hexa) {
        let str = '';
        for (let i = 0; i < hex.length; i += 2) {
            let charCode = parseInt(hexa.substr(i, 2), 16);
            str += String.fromCharCode(charCode);
        }
        return str;
    }

    let mensagemInput = document.getElementById('mensagem')
    entradaTexto = mensagemInput.value;

    let descriptografado = hexaParaString(entradaTexto);

    exibirTextoNaTela('h1', 'TEXTO CRIPTOGRAFADO COM SUCESSO');
    exibirTextoNaTela('p', descriptografado);
}