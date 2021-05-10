//import "./styles.css";

var status = 1;
var continua = 1;

function Fcalcula(num) {
  const painel = document.getElementById("painel");
  if(painel.value === "0" && num === "0"){
    painel.value = "0";
  } else if(painel.value === "0" && num !== "0"){
    painel.value = num;
  } else {
    painel.value += num;
  }

 let num3 = parseFloat(painel.value);
 andamento(num3);
}

function andamento (painel){
  num1 = document.getElementById("num1");
  num2 = document.getElementById("num2");
  oper = document.getElementById("oper");
  //num1.innerHTML = painel;
  
  if( status != 1 ){
    num2.innerHTML = painel;
  } else {
    num1.innerHTML = painel;
  }
}

function Flimpa(){
  const painel = document.getElementById("painel");
  document.getElementById("num1").innerHTML = "";
  document.getElementById("num2").innerHTML = "";
  document.getElementById("oper").innerHTML = "";
  document.getElementById("result").innerHTML = "";

  painel.value = "";
  num1 = "";
  num2 = "";
  num3 = "";
  ope = "";

  status = 1;
  continua = 1;
}

function Fsegundo (operacao){
  num1 = document.getElementById("num1").innerHTML;
  num2 = document.getElementById("num2").innerHTML;
  oper = document.getElementById("oper");
  const painel = document.getElementById("painel");
  status = 2;

  if(continua !== 1){

    Fresultado();

    let temp = document.getElementById("result").innerHTML;
    num1 = temp;
    num2 = "";
    console.log(num2);
    oper.innerHTML = operacao;
    temp = "";
    painel.value = "";
    continua = 1;
    status = 1;
  
  } else {
    oper.innerHTML = operacao;
    painel.value = "";
  }
  continua = 2;
}

function Fresultado (){
  num1 = parseFloat(document.getElementById("num1").innerHTML);
  num2 = parseFloat(document.getElementById("num2").innerHTML);
  ope = document.getElementById("oper").innerHTML;
  result = document.getElementById("result");

  if(ope === "soma"){
    num1 = num1 + num2;
  } else if ( ope === "subtrai"){
    num1 = num1 - num2;
  } else if ( ope === "multiplica"){
    num1 = num1 * num2;
  } else if ( ope === "divide"){
    num1 = num1 / num2;
  }
  const painel = document.getElementById("painel");
  painel.value = num1;

  result.innerHTML = num1;
  status = 1;
}