document.getElementById('simulator-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var whatsapp = document.getElementById('whatsapp').value;
    var quantity = parseFloat(document.getElementById('quantity').value);
    var price = parseFloat(document.getElementById('price').value);
    var cooperative = parseFloat(document.getElementById('cooperative').value);
    var funrural = document.getElementById('funrural').checked;
  
    var totalBruto = price * quantity * 2.2046 * 1000;
  
    if (funrural) {
      totalBruto += totalBruto * 0.02; // Acrescenta 2% se Funrural estiver marcado
    }
  
    // Envia mensagem pelo WhatsApp
    var message = 'Olá, ' + name + '! O valor total bruto é de: $' + totalBruto.toFixed(2);
    // sendWhatsAppMessage(whatsapp, message);
    console.log(message);
    console.log(`Whatsapp: `, whatsapp);
    console.log(`Quantidade: `, quantity);
    console.log(`Preço em Dólar: `, price);
    console.log(`Cooperativa: `, cooperative);
    console.log(`Tem funrural: `, funrural);

    
    // Limpa o formulário
    document.getElementById('simulator-form').reset();
  });
  
  function sendWhatsAppMessage(number, message) {
    // Lógica para enviar mensagem pelo WhatsApp usando o número fornecido
    // Esta parte depende da API ou biblioteca que você esteja usando para enviar mensagens pelo WhatsApp
    // Aqui está apenas um exemplo de como poderia ser feito:
    console.log('Enviando mensagem para o número', number, ':', message);
  }