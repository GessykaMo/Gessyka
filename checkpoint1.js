function pipoca(tempo){

    let  info_menu = " ";

    if(tempo<10){
        info_menu ="Tempo Insuficiente";
    }else if(tempo>=10 && tempo <20){
        info_menu="Prato pronto, bom apetite!!!";
    }else if ( tempo >=20 && tempo<30){
        info_menu="Comida Queimou" ;
    }else{
        info_menu="Kabuumm";
    }
    return info_menu;
}

function macarrao(tempo){

    let  info_menu = " ";

    if(tempo<8){
        info_menu ="Tempo Insuficiente";
    }else if(tempo>=8 && tempo <16){
        info_menu="Prato pronto, bom apetite!!!";
    }else if ( tempo >=16 && tempo<24){
        info_menu="Comida Queimou" ;
    }else{
        info_menu="Kabuumm";
    }
    return info_menu;
}

function carne(tempo){

    let  info_menu = " ";

    if(tempo<15){
        info_menu ="Tempo Insuficiente";
    }else if(tempo>=15 && tempo <30){
        info_menu="Prato pronto, bom apetite!!!"
    }else if ( tempo >=30 && tempo<45){
        info_menu="Comida Queimou" ;
    }else{
        info_menu="Kabuumm";
    }
    return info_menu;
}

function feijão(tempo){

    let  info_menu = " ";

    if(tempo<12){
        info_menu ="Tempo Insuficiente";
    }else if(tempo>=12 && tempo <24){
        info_menu="Prato pronto, bom apetite!!!"
    }else if ( tempo >=24 && tempo<36){
        info_menu="Comida Queimou" ;
    }else{
        info_menu="Kabuumm";
    }
    return info_menu;
}
function brigadeiro(tempo){

    let  info_menu = " ";

    if(tempo<8){
        info_menu ="Tempo Insuficiente";
    }else if(tempo>=8 && tempo <16){
        info_menu="Prato pronto, bom apetite!!!"
    }else if ( tempo >=16 && tempo<24){
        info_menu="Comida Queimou" ;
    }else{
        info_menu="Kabuumm";
    }
    return info_menu;
}