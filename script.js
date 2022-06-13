//input Percentage
inputPercentage = () => {
  if (currentNumber.includes('%')) {
    return
  }
  currentNumber = currentNumber/100;
}

//query percentage
const persen = document.querySelector('.percentage');

persen.addEventListener('click', (event) => {
  inputPercentage (event.target.value);
  updateScreen(currentNumber);
})

// input Decimal
inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return
  }
  currentNumber += dot;
}

// query decimal
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
})

// function AC
const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '0';
}

// query AC
const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
})

// function calculate
const calculate = () => {
  let result = ''
  switch (calculationOperator) {
    case '+':
      result = parseFloat (prevNumber) + parseFloat (currentNumber)
      break
    case '-':
      result = parseFloat (prevNumber) - parseFloat (currentNumber)
      break
    case '*':
      result = parseFloat (prevNumber) * parseFloat (currentNumber)
      break
    case '/':
      result = parseFloat (prevNumber) / parseFloat (currentNumber)
      break
    case '%':
      result = parseFloat (prevNumber) / 100
    default:
      return
  }
  currentNumber = result;
  calculationOperator = '';
}

// query untuk equalSign
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
})

// input operator
const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'

  // prevNumber = currentNumber;
  // calculationOperator = operator;
  // currentNumber = '';
}

// query untuk mengaktifkan fungsi operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    updateScreen(calculationOperator);
  })
})

// inputNumber untuk menginput data 
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
  if(currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
}

// query calculatorScreen untuk di tampilkan di layar
const calculatorScreen = document.querySelector(".calculator-screen");

// updateScreen untuk menampilkan angka ke calculatorScreen
const updateScreen = (number) => {
  calculatorScreen.value = number;
}

// query untuk mengambil number menginput, menambahkan, mengurangi data masuk.
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  })
});