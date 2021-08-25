let estadoAprovacaoAluno = "Lista";

switch (estadoAprovacaoAluno) {
  case "Aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  case "Lista":
    console.log("Você está na nossa lista de espera");
    break;
  case "Reprovada":
    console.log("Você foi reprovada(o)");
    break;
  default:
    console.log("Não se aplica!");
    break;
}
