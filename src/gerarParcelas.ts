/**
 * @param gerarParcelas Função para gerar parcela de uma compra de forma que os centavos e excedente sejão movidos para a última parcela, deixando as primeiras parcelas **inteiras**. A função recebe duas entradas descritas abaixo e devolve as parcelas em um vetor numérico.
 * @param valor Parâmetro que armazena o valor da compra
 * @param numeroParcelas Parâmentro que armazena o número de parcelas da compra
 * Para gerar parcelas o valor da compra precisa ser acima
 */

export const gerarParcelas = (valor: number, numeroParcelas: number): number[] => {

  /**
   * Valor da compra precisa ser de 20 ou mais para gerar parcelas
   * Valor da parcela não pode ser inferior a 10
   * Número de parcelas não pode ser superior a 10 ou inferior a 2
   */

  if(valor < 20) throw new Error("Valor precisa ser acima de 20")

  if(numeroParcelas < 2) throw new Error("Número de parcelas precisa ser no mínimo 2");

  if(numeroParcelas > 10) throw new Error("Número de parcelas precisa ser no máximo 10");

  const valorParcela: number = Math.floor(valor/numeroParcelas)

  if(valorParcela < 10) throw new Error("Valor da parcela não pode ser inferior a 10");

  const parcelas: number[] = [numeroParcelas]

  for (let i = 0; i < numeroParcelas -1; i++) {
    parcelas[i] = valorParcela
  }

  const ultimaParcela = valor - valorParcela * numeroParcelas
  parcelas[parcelas.length] = valorParcela + parseFloat(ultimaParcela.toFixed(2))

  return parcelas
}
