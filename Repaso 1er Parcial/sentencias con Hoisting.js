function myFunc(){
    return "Hello world"
} //ESTA FUNCION TIENE HOISTING YA QUE ES UNA DECLARACION DE FUNCION

const otherFunc = function() {
    return "Hello World"
} ///ESTA FUNCION NO TIENE HOISTING YA QUE ES UNA EXPRESION DE FUNCION

const otherVar = "Hello World"; //NO TIENE HOISTING XQ ES UNA VARIABLE DEFINIDA CON CONST

let yetAnotherVar = () => {
    function yetAnotherVar() {
        return "Hello world"
    }
}///NO TEIENE HOISTING XQ ES UNA FUNCION FLECHA, ES DECIR, EXPRESION DE FUNCION

var myVar = "hello world" //TIENE HOISTING YA QUE ESTA DECLARADA CON VAR, MIENTRAS QUE CONST Y LET NO TIENEN HOISTING.
