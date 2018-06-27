String.prototype.replaceAll = function (replaceThis, withThis) {
    try{
    var re = new RegExp(replaceThis,"g"); 
    return this.replace(re, withThis);
    }
    catch(e){
        console.log("El error (e): "+e+"\n re="+re);
    }
};
String.prototype.isNumeric = function() {
    return !isNaN(parseFloat(this)) && isFinite(this);
}
Array.prototype.clean = function() {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === "") {
            this.splice(i, 1);
        }
    }
    return this;
}
function MathSolver() {
 
    this.infixToPostfix = function(infix) {
        var outputQueue = "";
        var operatorStack = [];
        var operators = {
            "^": {
                precedence: 4,
                associativity: "Right"
            },
            "/": {
                precedence: 3,
                associativity: "Left"
            },
            "*": {
                precedence: 3,
                associativity: "Left"
            },
            "ARCSENH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCSINH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCOSH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCTANH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCTGH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCOTH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCTGH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCSECH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCSCH": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCSEN": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCSIN": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCOS": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCTAN": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCTG": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCOT": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCTG": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCSEC": {
                precedence: 4,
                associativity: "Right"
            },
            "ARCCSC": {
                precedence: 4,
                associativity: "Right"
            },
            "SENH": {
                precedence: 4,
                associativity: "Right"
            },
            "SINH": {
                precedence: 4,
                associativity: "Right"
            },
            "COSH": {
                precedence: 4,
                associativity: "Right"
            },
            "TANH": {
                precedence: 4,
                associativity: "Right"
            },
            "TGH": {
                precedence: 4,
                associativity: "Right"
            },
            "COTH": {
                precedence: 4,
                associativity: "Right"
            },
            "CTGH": {
                precedence: 4,
                associativity: "Right"
            },
            "SECH": {
                precedence: 4,
                associativity: "Right"
            },
            "CSCH": {
                precedence: 4,
                associativity: "Right"
            },
            "SEN": {
                precedence: 4,
                associativity: "Right"
            },
            "SIN": {
                precedence: 4,
                associativity: "Right"
            },
            "COS": {
                precedence: 4,
                associativity: "Right"
            },
            "TAN": {
                precedence: 4,
                associativity: "Right"
            },
            "TG": {
                precedence: 4,
                associativity: "Right"
            },
            "COT": {
                precedence: 4,
                associativity: "Right"
            },
            "CTG": {
                precedence: 4,
                associativity: "Right"
            },
            "SEC": {
                precedence: 4,
                associativity: "Right"
            },
            "CSC": {
                precedence: 4,
                associativity: "Right"
            },
            "LOG": {
                precedence: 4,
                associativity: "Right"
            },
            "LN": {
                precedence: 4,
                associativity: "Right"
            },
            "E^": {
                precedence: 4,
                associativity: "Right"
            },
            "+": {
                precedence: 2,
                associativity: "Left"
            },
            "-": {
                precedence: 2,
                associativity: "Left"
            }
        }
        infix = infix.replace(/\s+/g, "");
        infix = infix.split(/([\+\-\*\/\^\(\)])/).clean();
        for(var i = 0; i < infix.length; i++) {
            var token = infix[i];
            if(token.isNumeric() || /([a-z])+/.test(token)){
                if(token.isNumeric())
                    outputQueue += token + " ";
                else{
  
                            outputQueue += token;
                    
                }
            } else if("^*/+-ARCSENHARCSINHARCCOSHARCTANHARCTGHARCCOTHARCCTGHARCSECHARCCSCHARCSENARCSINARCCOSARCTANARCTGARCCOTARCCTGARCSECARCCSCSENHSINHCOSHTANHTGHCOTHCTGHSECHCSCHSENSINCOSTANTGCOTCTGSECCSCLNE^LOG".indexOf(token) !== -1) {
                var o1 = token;
                var o2 = operatorStack[operatorStack.length - 1];
                while("^*/+-".indexOf(o2) !== -1 && 
                    ((operators[o1].associativity === "Left" && operators[o1].precedence <= operators[o2].precedence)
                     || (operators[o1].associativity === "Right" && operators[o1].precedence < operators[o2].precedence))) {
                    outputQueue += operatorStack.pop() + " ";
                    o2 = operatorStack[operatorStack.length - 1];
                }
                operatorStack.push(o1);
            } else if(token === "(") {
                operatorStack.push(token);
            } else if(token === ")") {
                while(operatorStack[operatorStack.length - 1] !== "(") {
                    outputQueue += operatorStack.pop() + " ";
                }
                operatorStack.pop();
            }
        }
        while(operatorStack.length > 0){
            outputQueue += operatorStack.pop() + " ";
        }
        return outputQueue;
    }
 
}

function logaritmo(base,x){
    return parseFloat(Math.log(x) / Math.log(base));
}
function resolver(ecuacion,x){
    var i,j=0,k,l,aux,contador=0,veces=0,original,auxoperacion,auxcontador,auxnum;
    var respuestas=[];
    var auxiliares=[];

    for(i=0;i<ecuacion.length;i++){
        if((/([\+\-\*\/\^\(\)])+/.test(ecuacion.charAt(i))))
            veces++;
    }
    original=veces;

    for(i=0;i<ecuacion.length;i++){
        if((/([0-9])+/.test(ecuacion.charAt(i-1)) || /(\.)+/.test(ecuacion.charAt(i-1)))&&(/([0-9])+/.test(ecuacion.charAt(i)) || /(\.)+/.test(ecuacion.charAt(i)))){
            //oc
        }
        else if(/([0-9])+/.test(ecuacion.charAt(i)) || /(\.)+/.test(ecuacion.charAt(i)) || /([a-z])+/.test(ecuacion.charAt(i))){
            j=i;
            while(/([0-9])+/.test(ecuacion.charAt(j)) || /([a-z])+/.test(ecuacion.charAt(j)) || /(\.)+/.test(ecuacion.charAt(j))){
                    j++;
            }
            l=respuestas.length;
            aux=ecuacion.slice(i,j);
            if(/([a-z])+/.test(aux)){
                auxnum=x;
                respuestas[l]=auxnum;
            }
            else{
                respuestas[l]=aux;
            }
            console.log("R["+l+"]="+respuestas[l]);
            contador++;
        }

        if((/([\+\-\*\/\^\(\)])+/.test(ecuacion.charAt(i))) || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G' && ecuacion.charAt(i+5)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G' && ecuacion.charAt(i+6)=='H')|| (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C' ) || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G')|| (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' && ecuacion.charAt(i+2)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N') || (ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' ) || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G') || (ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C') || (ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C') || (ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='G' ) || (ecuacion.charAt(i)=='E' && /([\^])+/.test(ecuacion.charAt(i+1))) || (ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='N')){
                console.log("Entro al IF de las operaciones");

                //En esta parte buscar las variables y crear una variable x que las reemplace. De igual manera pasar los números a floats
                if(ecuacion.charAt(i)=='+'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    respuestas[auxcontador]=parseFloat(respuestas[auxcontador])+parseFloat(respuestas[contador]);
                    respuestas.pop();
                    console.log("R+["+auxcontador+"]="+respuestas[auxcontador]);
                }
                if(ecuacion.charAt(i)=='-'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    respuestas[auxcontador]=parseFloat(respuestas[auxcontador])-parseFloat(respuestas[contador]);
                    respuestas.pop();
                    console.log("R-["+auxcontador+"]="+respuestas[auxcontador]);
                }
                if(ecuacion.charAt(i)=='*'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    respuestas[auxcontador]=parseFloat(respuestas[auxcontador])*parseFloat(respuestas[contador]);
                    respuestas.pop();
                    console.log("R*["+auxcontador+"]="+respuestas[auxcontador]);
                }
                if(ecuacion.charAt(i)=='/'){
                    auxcontador=respuestas.length-1;
                    contador=respuestas.length-1;
                    auxcontador--;
                    respuestas[auxcontador]=parseFloat(respuestas[auxcontador])/parseFloat(respuestas[contador]);
                    respuestas.pop();
                    console.log("R/["+auxcontador+"]="+respuestas[auxcontador]);
                }
                if(/([\^])+/.test(ecuacion.charAt(i))){
                    //(E^())
                    if(ecuacion.charAt(i+2)=='E'){
                        console.log("Entro al exponencial");
                        contador=respuestas.length-1;
                        respuestas[contador]=Math.exp(parseFloat(respuestas[contador]));
                    }else{
                        console.log("Entro a la potencia");
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        auxcontador--;
                        respuestas[auxcontador]=Math.pow(parseFloat(respuestas[auxcontador]),parseFloat(respuestas[contador]));
                        respuestas.pop();
                        
                    }
                    console.log("R^["+auxcontador+"]="+respuestas[auxcontador]);
                }

                //Hiperbólicas Inversas
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        auxoperacion=Math.asinh(parseFloat(respuestas[auxcontador]));
                        respuestas[auxcontador]=parseFloat(auxoperacion);
                }
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S' && ecuacion.charAt(i+6)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=Math.acosh(parseFloat(respuestas[auxcontador]));
                } 
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G' && ecuacion.charAt(i+5)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=Math.atanh(parseFloat(respuestas[auxcontador]));
                } 
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T' && ecuacion.charAt(i+6)=='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G' && ecuacion.charAt(i+6)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=1/Math.atanh(parseFloat(respuestas[auxcontador]));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=1/Math.acosh(parseFloat(respuestas[auxcontador]));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=1/Math.asinh(parseFloat(respuestas[auxcontador]));
                } 

                //Trigonometricas Inversas
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)!='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='I' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)!='H')){
                        console.log("Entro al IF del arcsen");
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=Math.asin(parseFloat(respuestas[auxcontador]));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='S' && ecuacion.charAt(i+6)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=Math.acos(parseFloat(respuestas[auxcontador]));
                } 
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='A' && ecuacion.charAt(i+5)=='N' && ecuacion.charAt(i+6)!='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='T' && ecuacion.charAt(i+4)=='G' && ecuacion.charAt(i+5)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=Math.atan(parseFloat(respuestas[auxcontador]));
                }
                if((ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='O' && ecuacion.charAt(i+5)=='T' && ecuacion.charAt(i+6)!='H') || (ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='T' && ecuacion.charAt(i+5)=='G' && ecuacion.charAt(i+6)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=1/Math.atan(parseFloat(respuestas[auxcontador]));
                } 
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='S' && ecuacion.charAt(i+4)=='E' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=1/Math.acos(parseFloat(respuestas[auxcontador]));
                }
                if(ecuacion.charAt(i)=='A' && ecuacion.charAt(i+1)=='R' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='C' && ecuacion.charAt(i+4)=='S' && ecuacion.charAt(i+5)=='C' && ecuacion.charAt(i+6)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=1/Math.asin(parseFloat(respuestas[auxcontador]));
                }

                //Hiperbólicas 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=Math.sinh(parseFloat(respuestas[auxcontador]));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' &&ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S' && ecuacion.charAt(i+3)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=Math.cosh(parseFloat(respuestas[auxcontador]));      
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' && ecuacion.charAt(i+2)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=Math.tanh(parseFloat(respuestas[auxcontador]));
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T' && ecuacion.charAt(i+3)=='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G' && ecuacion.charAt(i+3)=='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=1/Math.tanh(parseFloat(respuestas[auxcontador]));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=1/Math.cosh(parseFloat(respuestas[auxcontador]));
                }
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)=='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=1/Math.sinh(parseFloat(respuestas[auxcontador]));
                }
                //Trigonométricas
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='I' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)!='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)!='H')){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=Math.sin(parseFloat(respuestas[auxcontador]));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='S' && ecuacion.charAt(i+3)!='H'){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                       respuestas[auxcontador]=Math.cos(parseFloat(respuestas[auxcontador]));
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='A' && ecuacion.charAt(i+2)=='N' && ecuacion.charAt(i+3)!='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='T' && ecuacion.charAt(i+1)=='G' && ecuacion.charAt(i+2)!='H')){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        respuestas[auxcontador]=Math.tan(parseFloat(respuestas[auxcontador]));
                } 
                if((ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='T' && ecuacion.charAt(i+3)!='H') || (ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='T' && ecuacion.charAt(i+2)=='G' && ecuacion.charAt(i+3)!='H')){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        respuestas[auxcontador]=1/Math.tan(parseFloat(respuestas[auxcontador]));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='S' && ecuacion.charAt(i+1)=='E' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)!='H'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=1/Math.cos(parseFloat(respuestas[auxcontador]));
                } 
                if(ecuacion.charAt(i-3)!='A' && ecuacion.charAt(i-2)!='R' && ecuacion.charAt(i-1)!='C' && ecuacion.charAt(i)=='C' && ecuacion.charAt(i+1)=='S' && ecuacion.charAt(i+2)=='C' && ecuacion.charAt(i+3)!='H'){
                       auxcontador=respuestas.length-1;
                       contador=respuestas.length-1;
                        respuestas[auxcontador]=1/Math.sin(parseFloat(respuestas[auxcontador]));
                }

                if(ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='N'){
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        respuestas[auxcontador]=Math.log(parseFloat(respuestas[auxcontador]));
                }
                //(LOG(BASE)(NUMERO))
                if(ecuacion.charAt(i)=='L' && ecuacion.charAt(i+1)=='O' && ecuacion.charAt(i+2)=='G'){
                        console.log("Entro a log");
                        auxcontador=respuestas.length-1;
                        contador=respuestas.length-1;
                        auxcontador--;
                        respuestas[auxcontador]=logaritmo(parseFloat(respuestas[auxcontador]),parseFloat(respuestas[contador]));
                }
        } 
    }
return respuestas[0];
}