/**
 * Função que valida placas de carros para o território brasileiro baseado no novo padrão Mercosul. Caso a placa esteja no formato antigo a função a transforma para o novo formato.
 * @param digitos Número da placa a ser validada
 * As placas inseridas devem estar no formato LLLNNNN ou LLLNLNN
 */

export const placa = (digitos: string): string => {

  if (digitos.match(/[a-z]{3}[0-9]{4}$/g)) digitos = digitos.toLocaleUpperCase()

  if (!digitos.match(/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}$/g)) throw new Error("Placa Inválida");

  if (digitos.match(/[A-Z]{3}[0-9]{4}$/g)) {

    const letras: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

    digitos = digitos.split('')
      .map((digito, i) => i === 4 ? letras[parseInt(digito, 10)] : digito)
      .join('')

  }

  return digitos

}
