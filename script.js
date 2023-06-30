var urlParams = new URLSearchParams(window.location.search);
var fullName = urlParams.get('fullname');
// document.getElementById('fullname').value = fullName;


document.querySelector('button[type="submit"]').addEventListener('click', function () {
  var quantity = parseFloat(document.getElementById('quantity').value);
  var price = parseFloat(document.getElementById('price').value);
  var cooperative = parseFloat(document.getElementById('cooperative').value);
  var funrural = document.getElementById('funrural').checked;

  var totalBruto = price * quantity * 2.2046 * 1000;
  var message = 'O valor total bruto é de: $' + totalBruto.toFixed(2);
  var url = `enviado.html?message=${encodeURIComponent(message)}&fullname=${encodeURIComponent(fullName)}`;
  window.open(url, '_self');

  console.log(message);
  console.log(`Quantidade: `, quantity);
  console.log(`Preço em Dólar: `, price);
  console.log(`Cooperativa: `, cooperative);
  console.log(`Tem funrural: `, funrural);

  document.getElementById('calculador-form').reset();
});

function sendWhatsAppMessage(number, message) {
  // Lógica para enviar mensagem pelo WhatsApp usando o número fornecido
  // Esta parte depende da API ou biblioteca que você esteja usando para enviar mensagens pelo WhatsApp
  // Aqui está apenas um exemplo de como poderia ser feito:
  console.log('Enviando mensagem para o número', number, ':', message);
}