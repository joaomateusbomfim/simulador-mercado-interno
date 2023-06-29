document.getElementById('calculador-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var quantity = parseFloat(document.getElementById('quantity').value);
    var price = parseFloat(document.getElementById('price').value);
    var cooperative = parseFloat(document.getElementById('cooperative').value);
    var funrural = document.getElementById('funrural').checked;
  
    var totalBruto = price * quantity * 2.2046 * 1000;
  
    if (funrural) {
      totalBruto += totalBruto * 0.02; // Acrescenta 2% se Funrural estiver marcado
    }
  
    // Envia mensagem pelo WhatsApp
    var message = 'O valor total bruto é de: $' + totalBruto.toFixed(2);
    // sendWhatsAppMessage(whatsapp, message);
    console.log(message);
    console.log(`Quantidade: `, quantity);
    console.log(`Preço em Dólar: `, price);
    console.log(`Cooperativa: `, cooperative);
    console.log(`Tem funrural: `, funrural);

    
    
    // abrir página para confirmar recebimento
    
    /*
    document.querySelector('button[type="submit"]').addEventListener('click', function() {
       var url = `sucess.html?message=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
    */
    // Limpa o formulário
    document.getElementById('calculador-form').reset();
  });
  
  function sendWhatsAppMessage(number, message) {
    // Lógica para enviar mensagem pelo WhatsApp usando o número fornecido
    // Esta parte depende da API ou biblioteca que você esteja usando para enviar mensagens pelo WhatsApp
    // Aqui está apenas um exemplo de como poderia ser feito:
    console.log('Enviando mensagem para o número', number, ':', message);
  }
  document.querySelector('button[type="submit"]').addEventListener('click', function() {
    window.open('enviado.html', '_blank');
  });