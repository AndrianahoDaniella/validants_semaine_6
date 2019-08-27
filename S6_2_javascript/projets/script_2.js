var hellonumber = parseInt(prompt("De quel nombre veux-tu calculer la factorielle?"));
var fact=1;

for (var i=1 ; i<=hellonumber ; i++){
fact = fact*i ; 
}
alert(fact);
console.log (`et BOUM, voici le resultat, c'est fort, non? ${fact}`);