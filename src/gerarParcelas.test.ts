import { gerarParcelas } from "./gerarParcelas"

test('Gerar parcelas', () => {
  expect(gerarParcelas(32, 3)).toStrictEqual([10,10,12])
  expect(gerarParcelas(31.31, 3)).toStrictEqual([10, 10, 11.31])
  expect(gerarParcelas(43.31, 4)).toStrictEqual([10, 10, 10, 13.31])
  expect(gerarParcelas(26.51, 2)).toStrictEqual([13, 13.51])
  expect(gerarParcelas(50.99, 5)).toStrictEqual([10, 10, 10, 10, 10.99])
})

test('Valor menor que 20', () => {
  expect( () => gerarParcelas(19, 2)).toThrow()
})

test('Número de parcela menor que 2', () => {
  expect(() => gerarParcelas(10, 1)).toThrow()
})


test('Número de parcelas maior que 10', () => {
  expect(() => gerarParcelas(10, 11)).toThrow()
})


test('Valores negativos', () => {
  expect(() => gerarParcelas(-1, -3)).toThrow()
})


test('Muitas parcelas em valor baixo', () => {
  expect(() => gerarParcelas(10, 10)).toThrow()
})
