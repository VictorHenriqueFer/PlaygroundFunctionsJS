// Desafio 1 - Crie a função compareTrue
const girafa = true;
const elefante = true;
const macaco = false;
const compareTrue = (parametro1, parametro2) => {
  if (parametro1 === girafa && parametro2 === elefante) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2 - Crie a função splitSentence
const splitSentence = (parametro1) => parametro1.split(' ');

// Desafio 3 - Crie a função concatName

const concatName = (par1) => `${par1[par1.length - 1]}, ${par1[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (vic, emp) => vic * 3 + emp;

// Desafio 5 - Crie a função highestCount
const highestCount = (numb) => {
  let qtdmaiorNumero = 0;
  let maiorqtd = 0;
  qtdmaiorNumero = Math.max(...numb)
  for (let index = 0; index < numb.length; index += 1) {
    if (qtdmaiorNumero === numb[index]) {
      maiorqtd += 1;
    }
  }
  return maiorqtd;
}
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => (base * height);

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
};
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (array) => {
  let buzzfizz = []
  for (let sam = 0; sam < array.length; sam +=1) {
    if (array[sam] % 3 === 0 && array[sam] % 5 === 0) {
      buzzfizz.push('fizzBuzz')
    } else if (array[sam] % 3 === 0) {
      buzzfizz.push('fizz')
    } else if (array[sam] % 5 === 0) {
      buzzfizz.push('buzz')
    } else {
      buzzfizz.push('bug!')
    }
  }
  return buzzfizz;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]))
// Desafio 9 - Crie a função encode e a função decode
const encode = (troca) => {
  let encodecod
  encodecod = encodecod.replace('a', '1'); encodecod = encodecod.replace('e', '2'); encodecod = encodecod.replace('i', '3'); encodecod = encodecod.replace('o', '4'); encodecod = encodecod.replace('u', '5');
  return encodecod;
}
const decode = (troca) => {
  let decodecod
  decodecod = decodecod.replace('1', 'a'); decodecod = decodecod.replace('2', 'e'); decodecod = decodecod.replace('3', 'i'); decodecod = decodecod.replace('4', 'o'); decodecod = decodecod.replace('5', 'u');
  return decodecod;
}
// achar um codigo que faça a leitura do replace

// Desafio 10 - Crie a função techList

const techList = (tech, nome) => {
  let resultado = [];
  tech.sort();

  if (tech.length === 0) {
    return resultado;
  }
  for (let index in tech.length) {
    resultado.push({ tech: tech[index], nome });
  }
  return resultado;
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};