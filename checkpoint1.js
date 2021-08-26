function microondas (comida, tempo){
    let mensagem = '';
    switch (comida){
        case 'Pipoca':
            if(tempo >=10 && tempo <20) {
                mensagem = 'Prato pronto, bom apetite!!!';
            }
            else if (tempo >=20 && tempo <30){
                mensagem = 'Sua comida queimou';
            }
            else if (tempo >= 30){
                mensagem = 'Kabummm';
            }
            else {
                mensagem
            }
    }

}