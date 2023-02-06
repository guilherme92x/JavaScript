function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if (hora >= 0 && hora < 18) {
        //BOM DIA!
        img.src = `imagens/fotomanha.png`
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = `imagens/fototarde.png`
    } else {
        //BOA NOITE!
        img.src = `imagens/fotonoite.png`
    }
}