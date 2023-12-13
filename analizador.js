  // Definición de tokens y expresiones regulares
  const tokenRegex = /^(cuara|peso|dólar)$/;
  const amountRegex = /^(0\.25|0\.50|1\.00)$/;

function lexicalAnalysis(input) {
    // ...
    const tokens = input.trim().split(/\s+/);
    const lexemes = [];
    for (const token of tokens) {
        if (token.match(tokenRegex)) {
        lexemes.push(token);
        } else if (token.match(amountRegex)) {
        // Convertir el valor numérico
        const value = parseFloat(token);
        lexemes.push(value);
        } else {
        // Token no válido
        console.error(`Token no válido: ${token}`);
        return null;
        }
    }
    return lexemes;
  }
  
  function syntacticAnalysis(lexemes) {
    // ...
    let totalAmount = 0;

    for (const lexeme of lexemes) {
        if (typeof lexeme === 'number') {
        totalAmount += lexeme;
        }
    }
    return totalAmount;
  }
  
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

  



 