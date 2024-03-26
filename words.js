const words = [
  { word: "sexuada", clue: "Que tipo de reprodução envolve a fusão de gametas para formar um novo organismo?" },
  { word: "mitose", clue: "Qual é o processo pelo qual as células se dividem para produzir células filhas geneticamente idênticas?" },
  { word: "espermatozoides", clue: "Como são chamados os gametas produzidos pelos machos?" },
  { word: "ovulos", clue: "Como são chamados os gametas produzidos pelas fêmeas?" },
  { word: "testiculos", clue: "Qual é o órgão responsável pela produção e liberação dos espermatozoides?" },
  { word: "ovario", clue: "Qual é o órgão onde o óvulo é produzido e liberado?" },
  { word: "embriogenese", clue: "Qual é o processo pelo qual um novo organismo cresce e se desenvolve a partir de um embrião?" },
  { word: "mestruacao", clue: "Como é chamado o processo cíclico que ocorre no sistema reprodutor feminino?" },
  { word: "parto", clue: "Como é chamado o processo de expulsão do bebê do útero materno?" },
  { word: "placenta", clue: "Qual é o órgão temporário que fornece nutrientes e oxigênio para o feto durante a gestação?" },
  { word: "clonagem", clue: "Qual é o processo pelo qual um organismo é replicado para produzir uma cópia exata dele mesmo?" },
  { word: "fecundacao", clue: "O que acontece quando um espermatozoide penetra no óvulo?" },
  { word: "dna", clue: "Qual é o tipo de ácido que constitui o material genético de quase todos os organismos vivos?" },
  { word: "dna", clue: "Que molécula contém as instruções genéticas que determinam as características hereditárias de um organismo?" },
  { word: "replicacao", clue: "Qual é o processo pelo qual o DNA faz cópias de si mesmo antes da divisão celular?" },
  { word: "ribossomo", clue: "Qual é o organelo celular onde ocorre a síntese de proteínas, com base nas instruções do mRNA?" },
  { word: "mutacao", clue: "Que termo é usado para descrever uma mudança na sequência de nucleotídeos do DNA?" },
  { word: "rna", clue: "Que ácido nucleico é responsável por transportar as instruções genéticas do DNA para a síntese de proteínas?" },
];

export default function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
