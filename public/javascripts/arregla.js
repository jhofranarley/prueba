*
function arreglar(ecuacion){
    var i,j,cadaux,auxdelaux,contador=0,valida=0,contaAbre=0,contaCierra=0,ope=0;
    var respuestas=[];

    for(i=0;i<ecuacion.length;i++){
        if(/([0-9a-z])+/.test(ecuacion.charAt(i)) && (/([\(])+/.test(ecuacion.charAt(i+1)) || (/([\(])+/.test(ecuacion.charAt(i+2)) && /([\s])+/.test(ecuacion.charAt(i+1)))) )
            ope++;
        if((/([0-9])+/.test(ecuacion.charAt(i)) && /([a-z])+/.test(ecuacion.charAt(i+1))) || (/([0-9])+/.test(ecuacion.charAt(i)) && /([\s])+/.test(ecuacion.charAt(i+1)) && /([a-z])+/.test(ecuacion.charAt(i+2))))
            ope++;
        /*if(ecuacion.charAt(i-1)!='(' && ecuacion.charAt(i)=='E' && /([\^])+/.test(ecuacion.charAt(i+1)))
            ope+=2;
        }
    for(i=0;i<ecuacion.length;i++){
        console.log("Entro al for");
        console.log("Cadena= "+ecuacion);
        if(contador==0){
            console.log("Entro al 1ER IF");
            console.log("Char= "+ecuacion.charAt(i));
            if(/([0-9a-z])+/.test(ecuacion.charAt(i)) && /([\(])+/.test(ecuacion.charAt(i+1))  ){

                 console.log("Entro al 2do IF");
                if(/([0-9a-z])+/.test(ecuacion.charAt(i)) && /([\(])+/.test(ecuacion.charAt(i+1))){
                    //Si no aquí cambiar por i+1
                    cadaux=ecuacion.slice(0,i+1);
                    cadaux=cadaux.concat("*");
                    cadaux=cadaux.concat(ecuacion.slice(i+1,ecuacion.length));
                    contador++;
                    ope--;
                    console.log("Cadenaaux1= "+cadaux);
                }
            }
            if((/([0-9])+/.test(ecuacion.charAt(i)) && /([a-z])+/.test(ecuacion.charAt(i+1)))){
                console.log("Entro al 4to IF");

                    if(/([0-9])+/.test(ecuacion.charAt(i)) && /([a-z])+/.test(ecuacion.charAt(i+1))){
                        console.log("Entro al 5TO IF");
                        console.log("c="+ecuacion.charAt(i));
                        //Si no aquí cambiar por i+1
                        cadaux=ecuacion.slice(0,i+1);
                        cadaux=cadaux.concat("*");
                        cadaux=cadaux.concat(ecuacion.slice(i+1,ecuacion.length));
                        contador++;
                        ope--;
                        console.log("Cadenaaux3= "+cadaux);
                    }
            }
            if(ecuacion.charAt(i)=='E' && /([\^])+/.test(ecuacion.charAt(i+1))){
                console.log("Entro al 7MO IF");
                if(i==0){
                    //Cambiar por i+3 si no funciona
                    cadaux="(".concat(ecuacion.slice(i,i+2));
                    //Ejemplo e^(8*(9+1)-(1-2))
                    j=i+2;
                    while(valida==0){
                        if(ecuacion.charAt(j)=="(")
                            contaAbre++;
                        if(ecuacion.charAt(j)==")")
                            contaCierra++;
                        if(contaAbre==contaCierra)
                            valida++;
                        j++;    
                    }
                    cadaux=cadaux.concat(ecuacion.slice(i+2,j),")");
                    cadaux=cadaux.concat(ecuacion.slice(j,ecuacion.length));
                    contador++;
                    ope-=2;
                    console.log("Cadenaaux5= "+cadaux);
                }
                else{
                    cadaux=ecuacion.slice(0,i).concat("(",ecuacion.slice(i,i+2));
                    //Ejemplo e^(8*(9+1)-(1-2))
                    j=i+2;
                    while(valida==0){
                        if(ecuacion.charAt(j)=="(")
                            contaAbre++;
                        if(ecuacion.charAt(j)==")")
                            contaCierra++;
                        if(contaAbre==contaCierra)
                            valida++;
                        j++;    
                    }
                    cadaux=cadaux.concat(ecuacion.slice(i+2,j),")");
                    cadaux=cadaux.concat(ecuacion.slice(j,ecuacion.length));
                    contador++;
                    ope-=2;
                    console.log("Cadenaaux6= "+cadaux);
                }
            }
        }
        if(ope>0){
            console.log("Cadenaaux= "+cadaux);
            cadaux=arreglar(cadaux);
        }   
    
    }
    return cadaux;
}*/
function arreglar(ecuacion){
    var aux,i,j,k,l=0,n,num,letra,auxletra,token,auxecuacion,auxecuacion2,auxdelaux2,contador=0,veces=0;
    var contaAbre,contaCierra,valida=0;
    var respuestas=[];
    respuestas[0]=ecuacion;

    // 2( y  LOG2(
    for(i=0;i<10;i++){
        n="["+i+"]{1}[\(]{1}";
        num=i.toString()+"*(";
        aux=ecuacion.replaceAll(n,num);
        if(veces==0){
            loop1:
            for(j=0;j<ecuacion.length;j++){
                token=ecuacion.charAt(j);
                if(token=="L" && ecuacion.charAt(j+1)=="O" && ecuacion.charAt(j+2)=="G" && ecuacion.charAt(j+3).isNumeric()){
                         k=j+3;
                        while(ecuacion.charAt(k).isNumeric)
                            k++;
                        auxecuacion=ecuacion;
                        auxecuacion2=ecuacion;
                        
                        aux=ecuacion.replaceAll(auxecuacion.slice(j,k+1),auxecuacion2.slice(j,k));
                        respuestas[contador]=aux;
                        veces++;
                        break loop1;
                }
            }
        }                        
        else{
            for(j=0;j<respuestas[contador].length;j++){  
                if(respuestas[contador].charAt(j)=="L" && respuestas[contador].charAt(j+1)=="O" && respuestas[contador].charAt(j+2)=="G" && respuestas[contador].charAt(j+3).isNumeric()){
                        k=j+3;
                        while(respuestas[contador].charAt(k).isNumeric)
                            k++;
                        auxecuacion=respuestas[contador];
                        auxecuacion2=respuestas[contador];
                        aux=respuestas[contador].replaceAll(auxecuacion.slice(j,k+1),auxecuacion2.slice(j,k));
                        respuestas[contador]=aux;
                }
            }
        }    
    }        
    // 2a comentar esto
    if(veces==0){
        loop1:
        for(i=0;i<10;i++){
            for(j=0;j<27;j++){
                switch(j){
                    case 0:auxletra="a";break;
                    case 1:auxletra="b";break;
                    case 2:auxletra="c";break;
                    case 3:auxletra="d";break;
                    case 4:auxletra="e";break;
                    case 5:auxletra="f";break;
                    case 6:auxletra="g";break;
                    case 7:auxletra="h";break;
                    case 8:auxletra="i";break;
                    case 9:auxletra="j";break;
                    case 10:auxletra="k";break;
                    case 11:auxletra="l";break;
                    case 12:auxletra="m";break;
                    case 13:auxletra="n";break;
                    case 14:auxletra="ñ";break;
                    case 15:auxletra="o";break;
                    case 16:auxletra="p";break;
                    case 17:auxletra="q";break;
                    case 18:auxletra="r";break;
                    case 19:auxletra="s";break;
                    case 20:auxletra="t";break;
                    case 21:auxletra="u";break;
                    case 22:auxletra="v";break;
                    case 23:auxletra="w";break;
                    case 24:auxletra="x";break;
                    case 25:auxletra="y";break;
                    case 26:auxletra="z";break;
                }
                n=i.toString().concat(auxletra);
                num=i.toString().concat("*",auxletra);
                aux=ecuacion.replaceAll(n,num);
                respuestas[contador]=aux;
                veces++;
                break loop1;
            }
        }         
    }
    else{
        for(i=0;i<10;i++){
            for(j=0;j<27;j++){
                switch(j){
                    case 0:auxletra="a";break;
                    case 1:auxletra="b";break;
                    case 2:auxletra="c";break;
                    case 3:auxletra="d";break;
                    case 4:auxletra="e";break;
                    case 5:auxletra="f";break;
                    case 6:auxletra="g";break;
                    case 7:auxletra="h";break;
                    case 8:auxletra="i";break;
                    case 9:auxletra="j";break;
                    case 10:auxletra="k";break;
                    case 11:auxletra="l";break;
                    case 12:auxletra="m";break;
                    case 13:auxletra="n";break;
                    case 14:auxletra="ñ";break;
                    case 15:auxletra="o";break;
                    case 16:auxletra="p";break;
                    case 17:auxletra="q";break;
                    case 18:auxletra="r";break;
                    case 19:auxletra="s";break;
                    case 20:auxletra="t";break;
                    case 21:auxletra="u";break;
                    case 22:auxletra="v";break;
                    case 23:auxletra="w";break;
                    case 24:auxletra="x";break;
                    case 25:auxletra="y";break;
                    case 26:auxletra="z";break;
                }
                n=i.toString().concat(auxletra);
                num=i.toString().concat("*",auxletra);
                aux=respuestas[contador].replaceAll(n,num);
                respuestas[contador]=aux;
            }
        }         
    }

    //a(
    if(veces==0){
        loop1:
        for(j=0;j<27;j++){
            switch(j){
                case 0:auxletra="a";break;
                case 1:auxletra="b";break;
                case 2:auxletra="c";break;
                case 3:auxletra="d";break;
                case 4:auxletra="e";break;
                case 5:auxletra="f";break;
                case 6:auxletra="g";break;
                case 7:auxletra="h";break;
                case 8:auxletra="i";break;
                case 9:auxletra="j";break;
                case 10:auxletra="k";break;
                case 11:auxletra="l";break;
                case 12:auxletra="m";break;
                case 13:auxletra="n";break;
                case 14:auxletra="ñ";break;
                case 15:auxletra="o";break;
                case 16:auxletra="p";break;
                case 17:auxletra="q";break;
                case 18:auxletra="r";break;
                case 19:auxletra="s";break;
                case 20:auxletra="t";break;
                case 21:auxletra="u";break;
                case 22:auxletra="v";break;
                case 23:auxletra="w";break;
                case 24:auxletra="x";break;
                case 25:auxletra="y";break;
                case 26:auxletra="z";break;
            }
            n="["+auxletra+"]{1}[\(]{1}";
            num=auxletra.concat("*(");
            aux=ecuacion.replaceAll(n,num);
            respuestas[contador]=aux;
            veces++;
            break loop1; 
        }
    }
    else{
        for(i=0;i<respuestas.length;i++){
            console.log("R["+i+"]="+respuestas[i]);
        }
        for(j=0;j<27;j++){
            switch(j){
                case 0:auxletra="a";break;
                case 1:auxletra="b";break;
                case 2:auxletra="c";break;
                case 3:auxletra="d";break;
                case 4:auxletra="e";break;
                case 5:auxletra="f";break;
                case 6:auxletra="g";break;
                case 7:auxletra="h";break;
                case 8:auxletra="i";break;
                case 9:auxletra="j";break;
                case 10:auxletra="k";break;
                case 11:auxletra="l";break;
                case 12:auxletra="m";break;
                case 13:auxletra="n";break;
                case 14:auxletra="ñ";break;
                case 15:auxletra="o";break;
                case 16:auxletra="p";break;
                case 17:auxletra="q";break;
                case 18:auxletra="r";break;
                case 19:auxletra="s";break;
                case 20:auxletra="t";break;
                case 21:auxletra="u";break;
                case 22:auxletra="v";break;
                case 23:auxletra="w";break;
                case 24:auxletra="x";break;
                case 25:auxletra="y";break;
                case 26:auxletra="z";break;
            }
            n="["+auxletra+"]{1}[\(]{1}";
            num=auxletra.concat("*(");
            aux=respuestas[contador].replaceAll(n,num);
            respuestas[contador]=aux; 
        }
    }

    //xArcsen
    if(veces==0){
        loop1:
        for(i=0;i<6;i++){
            switch(i){
                case 0:letra="A";break;
                case 1:letra="S";break;
                case 2:letra="C";break;
                case 3:letra="T";break;
                case 4:letra="L";break;
                case 5:letra="E";break;
            }
            for(j=0;j<27;j++){
                switch(j){
                    case 0:auxletra="a";break;
                    case 1:auxletra="b";break;
                    case 2:auxletra="c";break;
                    case 3:auxletra="d";break;
                    case 4:auxletra="e";break;
                    case 5:auxletra="f";break;
                    case 6:auxletra="g";break;
                    case 7:auxletra="h";break;
                    case 8:auxletra="i";break;
                    case 9:auxletra="j";break;
                    case 10:auxletra="k";break;
                    case 11:auxletra="l";break;
                    case 12:auxletra="m";break;
                    case 13:auxletra="n";break;
                    case 14:auxletra="ñ";break;
                    case 15:auxletra="o";break;
                    case 16:auxletra="p";break;
                    case 17:auxletra="q";break;
                    case 18:auxletra="r";break;
                    case 19:auxletra="s";break;
                    case 20:auxletra="t";break;
                    case 21:auxletra="u";break;
                    case 22:auxletra="v";break;
                    case 23:auxletra="w";break;
                    case 24:auxletra="x";break;
                    case 25:auxletra="y";break;
                    case 26:auxletra="z";break;
                }
                n=auxletra.concat(letra);
                num=auxletra.concat("*",letra);
                aux=ecuacion.replaceAll(n,num);
                respuestas[contador]=aux;
                veces++;
                break loop1; 
            }
        }
    }
    else{
        for(i=0;i<6;i++){
            switch(i){
                case 0:letra="A";break;
                case 1:letra="S";break;
                case 2:letra="C";break;
                case 3:letra="T";break;
                case 4:letra="L";break;
                case 5:letra="E";break;
            }
            for(j=0;j<27;j++){
                switch(j){
                    case 0:auxletra="a";break;
                    case 1:auxletra="b";break;
                    case 2:auxletra="c";break;
                    case 3:auxletra="d";break;
                    case 4:auxletra="e";break;
                    case 5:auxletra="f";break;
                    case 6:auxletra="g";break;
                    case 7:auxletra="h";break;
                    case 8:auxletra="i";break;
                    case 9:auxletra="j";break;
                    case 10:auxletra="k";break;
                    case 11:auxletra="l";break;
                    case 12:auxletra="m";break;
                    case 13:auxletra="n";break;
                    case 14:auxletra="ñ";break;
                    case 15:auxletra="o";break;
                    case 16:auxletra="p";break;
                    case 17:auxletra="q";break;
                    case 18:auxletra="r";break;
                    case 19:auxletra="s";break;
                    case 20:auxletra="t";break;
                    case 21:auxletra="u";break;
                    case 22:auxletra="v";break;
                    case 23:auxletra="w";break;
                    case 24:auxletra="x";break;
                    case 25:auxletra="y";break;
                    case 26:auxletra="z";break;
                }
                n="["+auxletra+"]{1}["+letra+"]{1}";
                num=auxletra.concat("*",letra);
                aux=respuestas[contador].replaceAll(n,num);
                respuestas[contador]=aux;
            }
        }
    }
    //2Arcsen
    if(veces==0){
        loop1:    
        for(i=0;i<10;i++){
            for(j=0;j<6;j++){
                switch(j){
                    case 0:auxletra="A";break;
                    case 1:auxletra="S";break;
                    case 2:auxletra="C";break;
                    case 3:auxletra="T";break;
                    case 4:auxletra="L";break;
                    case 5:auxletra="E";break;
                }
                n=i.toString().concat(auxletra);
                num=i.toString().concat("*",auxletra);
                aux=ecuacion.replaceAll(n,num);
                respuestas[contador]=aux;
                veces++;
                break loop1; 
            }
        }
    }
    else{
        for(i=0;i<10;i++){
            for(j=0;j<6;j++){
                switch(j){
                    case 0:auxletra="A";break;
                    case 1:auxletra="S";break;
                    case 2:auxletra="C";break;
                    case 3:auxletra="T";break;
                    case 4:auxletra="L";break;
                    case 5:auxletra="E";break;
                }
                n=i.toString().concat(auxletra);
                num=i.toString().concat("*",auxletra);
                aux=respuestas[contador].replaceAll(n,num);
                respuestas[contador]=aux;
            }
        } 
    } 
    //E^()
    if(veces==0){
        loop1:
        for(i=0;i<ecuacion.length;i++){
            token=ecuacion.charAt(i);
            if(token=='E' && /([\^])+/.test(ecuacion.charAt(i+1))){
                j=i+1;
                while(valida==0){
                    if(ecuacion.charAt(j)=="(")
                        contaAbre++;
                    if(ecuacion.charAt(j)==")")
                        contaCierra++;
                    if(contaAbre==contaCierra)
                        valida++;
                    j++;    
                }
                auxecuacion=ecuacion;
                auxecuacion2=ecuacion;
                auxdelaux2="("+auxecuacion2.slice(i,j+1)+")";
                aux=ecuacion.replaceAll(auxecuacion.slice(i,j+1),auxdelaux2);
                respuestas[contador]=aux;
                veces++;
                break loop1; 
            }
        }
    }
    else{

        for(i=0;i<respuestas[contador].length;i++){
            token=respuestas[contador].charAt(i);
            if(token=='E' && /([\^])+/.test(respuestas[contador].charAt(i+1))){
                j=i+1;
                while(valida==0){
                    if(respuestas[contador].charAt(j)=="(")
                        contaAbre++;
                    if(respuestas[contador].charAt(j)==")")
                        contaCierra++;
                    if(contaAbre==contaCierra)
                        valida++;
                    j++;    
                }
                if(respuestas[contador]==undefined)
                l--;
                auxrespuestas=respuestas[contador];
                auxrespuestas=respuestas[contador];
                auxdelaux2="("+auxrespuestas2.slice(i,j+1)+")";
                aux=respuestas[contador].replaceAll(auxecuacion.slice(i,j+1),auxdelaux2);
                respuestas[contador]=aux;
            }
        }
    }

    for(i=0;i<respuestas.length;i++)
        console.log("Res["+i+"]="+respuestas[i]);
    return respuestas[0]+ecuacion.charAt(ecuacion.length);
}