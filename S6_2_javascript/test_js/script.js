console.log("coucou motherfucker!");
console.log("va te faire fotre connard!");
/*je ne suis pas une personne grossière
je teste mes codes tout en m'amusant*/
let data1 = "variable en let definie dans le bloc principal";
{//debut de sous bloc

	data1 = "variable en let modifié dans le sous-bloc"
	var data2 = "variable en var definie dans le sous-bloc"
	let data3 = "variable en let definie dans le sous-bloc"


}//fin du sous-bloc

console.log(data1);
console.log(data2);
//console.log(data3);//on aura une erreur car data3 n'est pas visible dans le bloc principal

let a = "bonjour", b = "monde";
console.log(a+""+b);