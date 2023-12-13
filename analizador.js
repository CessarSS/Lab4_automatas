// Definición de tokens y expresiones regulares
const tokenRegex = /^(cuara|peso|dólar)$/i;  // La 'i' hace que sea insensible a mayúsculas/minúsculas
const amountRegex = /^(0\.25|0\.50|1\.00)$/;

// Función para el análisis léxico
function lexicalAnalysis(input) {
  const tokens = input.trim().split(/\s+/);
  const lexemes = [];

  for (const token of tokens) {
    if (token.match(tokenRegex)) {
      lexemes.push({ type: 'TOKEN', value: token });
    } else if (token.match(amountRegex)) {
      const value = parseFloat(token);
      lexemes.push({ type: 'AMOUNT', value });
    } else {
      console.error(`Token no válido: ${token}`);
      return null;
    }
  }

  return lexemes;
}

// Función para el análisis sintáctico
function syntacticAnalysis(lexemes) {
  let totalAmount = 0;

  for (const lexeme of lexemes) {
    if (lexeme.type === 'AMOUNT') {
      totalAmount += lexeme.value;
    }
  }

  return totalAmount;
}

// Función para analizar
function analizar() {
  const userInput = document.getElementById('userInput').value;
  const lexemes = lexicalAnalysis(userInput);

  if (lexemes) {
    const totalAmount = syntacticAnalysis(lexemes);

    if (totalAmount !== null) {
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `
        <p>Análisis léxico exitoso. Saldo total: ${totalAmount.toFixed(2)}</p>
        <p>${totalAmount >= 1.00 ? '¡Saldo suficiente para realizar una compra!' : 'Saldo insuficiente para realizar una compra.'}</p>
      `;
    }
  }
}
