/*
*Ejercicio 3 Tema 2 de eloquentjavascript.net
*
*/
var boardSize=64;
var chessBoard ="";
for (var i = 1; i <= boardSize; i++) { 
	for (var j = 1; j <= boardSize; j++) { 
		if (j%2==0){
			if (i%2==0){
				chessBoard +=" ";
			}else{
				chessBoard +="#";
			}
		}else{
			if (i%2==0){
				chessBoard +="#";
			}else{
				chessBoard +=" ";
			}
		}
	}
	chessBoard +="\n";
}

console.log (chessBoard);
