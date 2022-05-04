let numero1: number = Number(prompt("ingrese valor"));
let valor: number = 0;
let par: boolean = true;
if (numero1 % 2=== 0) {
 par=true; 

}else{
par=false;
}
switch par {
  case false:
      console.log("impar"); 
    break;

case true:
  console.log("par");

}
