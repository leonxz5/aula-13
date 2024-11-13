//MAP
//percorre todo o array e executa a ação que tivermos programado

// let lista = ["Altamiro", "Barnabé", "Cremildo"];

// lista.map((nome, posicao) => {
//   console.log(`O nome é ${nome} e ele ocupa a posição ${posicao}`);
// });

//REDUCE

//procura reduzir um array normalmente atrevés de operações matemáticas
//transformando todo o conteúdo do array em um único valor

// let numeros = [2, 3, 5, 10];

// let total = numeros.reduce((acumulador, numero, indice, original) => {
//   console.log(`${acumulador} - total até agora`);
//   console.log(`${numero} - valor atual`);
//   console.log(`${indice} - posição até agora`);
//   console.log(`${original} - array original`);

//   console.log("------------------");
//   return (acumulador *= numero);
// });
// console.log(`Total do reduce é ${total}`);

//FIND
//Faz uma busca dentro do array e devolve o primeiro item que ele encontra que corresponde ao criterio de busca

// let listagem = [2, 3, "Marcelo", 5, "Professor"];
// let busca = listagem.find((item2) => {
//   if (item2 == "Marcelo") {
//     return console.log("Nome encontrado");
//   } else {
//     return console.log("Nome não encontrado");
//   }
// });

// console.log(busca);

//FILTER
//Filtra itens dentro do ARRAY

let palavras = ["alface", "beterraba", "cenoura", "dedo", "espinafre"];

//Vamos retornar palavras que tenham menos de 7 letras
resultado = palavras.filter((palavras) => {
  return palavras.length >= 7;
});

console.log(resultado);
