const precedence = (op) => {
  if (op === '+') {
    return 1;
  } else if (op === '-') {
    return 1;
  } else if (op === '*') {
    return 2;
  } else {
    return 2;
  }
};

const operation = (op, v1, v2) => {
  if (op === '+') {
    return v1 + v2;
  } else if (op === '-') {
    return v1 - v2;
  } else if (op === '*') {
    return v1 * v2;
  } else {
    return v1 / v2;
  }
};

const evaluate = (formula) => {
  const operands = [];
  const oper = [];
  const expression = formula.split(' ');

  for (let i = 0; i < expression.length; i++) {
    const character = expression[i];
    if (character === ' ') {
      continue;
    }
    if (character === '(') {
      oper.push(character);
    } else if (isFinite(character)) {
      operands.push(Number.parseFloat(character));
    } else if (
      character === '+' ||
      character === '-' ||
      character === '*' ||
      character === '/'
    ) {
      // and precendence of charackter is less or equal to operator's top element
      while (
        oper.length > 0 &&
        oper[oper.length - 1] !== '(' &&
        precedence(character) <= precedence(oper[oper.length - 1])
      ) {
        const v1 = operands.pop();
        const v2 = operands.pop();
        const op = oper.pop();
        const val = operation(op, v1, v2);
        operands.push(val);
      }
      oper.push(character);
    } else {
      //closing bracket => pop until operator !== opening bracket
      while (oper.length > 0 && oper[oper.length - 1] !== '(') {
        const v1 = operands.pop();
        const v2 = operands.pop();
        const op = oper.pop();
        const val = operation(op, v1, v2);
        operands.push(val);
      }
      if (oper.length > 0) {
        oper.pop();
      }
    }
  }

  while (oper.length > 0) {
    const val2 = operands.pop();
    const val1 = operands.pop();
    const optr = oper.pop();

    const finalVal = operation(val1, val2, optr);

    operands.push(finalVal);
  }

  return operands.pop();
};
