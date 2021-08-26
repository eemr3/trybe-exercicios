let chessPiece = "CARROÇA";

switch (chessPiece.toLowerCase()) {
  case "rainha":
    console.log(
      "Move quantas casas quiser na horizontal, vertical ou diagonal"
    );
    break;
  case "rei":
    console.log(
      "Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance"
    );
    break;
  case "bispo":
    console.log("Move na diagonal quantas casa quiser");
    break;
  case "cavalo":
    console.log(
      "Ele pode andar duas casas na horizontal e uma na vertica, ou vice-versa, é uma peça que pode pular outra."
    );
    break;
  case "torre":
    console.log(
      "A torre movimenta-se pela vertical ou horizontal quantas casas quiser."
    );
    break;
  case "peão":
    console.log(
      "Só podem se mover uma casa por vez, exceto em seus primeiros movimentos, quando podem andar por duas casas"
    );
    break;
  default:
    console.log("Não é uma peça de xadrez, assim não possui movimento!");
}
