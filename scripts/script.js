/* eslint-disable eqeqeq */
/* eslint-disable no-useless-concat */
var flowchat = 0;
var newMessage; //'if i see this, this is an error';

//document.getElementById("btn1").disabled = true;
//document.getElementById("btn1").style.visibility = "hidden";
//document.getElementById("btn2").disabled = true;
//document.getElementById("btn2").style.visibility = "hidden";

function loadREST() {
  //fetch('http://localhost:3300/usuarios/' + flowchat)
  fetch('https://api-tcc-renan-augusto.herokuapp.com/falas/')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);

    

    var obj = data[0].text_fala;

    console.log(obj)
    newMessage = JSON.stringify(obj);
    console.log('new message:' + newMessage);

    return newMessage;
    
    
    
  })
  .catch(function(error){
    console.log(error);
  })

  
}


async function fetchDataFalas(){
  let response = await fetch('https://api-tcc-renan-augusto.herokuapp.com/falas/');
  let data = await response.json();
  data = JSON.stringify(data);
  data = JSON.parse(data);
  return data;
 }


 async function fetchDataImagens(){
  let response = await fetch('https://api-tcc-renan-augusto.herokuapp.com/imagens/');
  let data = await response.json();
  data = JSON.stringify(data);
  data = JSON.parse(data);
  return data;
 }


 async function ReadyPost() {
  let getdata = await fetchDataFalas(); // here the data will be return.
  console.log(getdata); // you are using async await then no need of .then().
  $('<div class="message new">' + getdata[0].text_fala  + "</div>")
    .appendTo($(".messages"))
    .addClass("new");

    flowchat = 1;
    Flowchat(flowchat);
 }


 $("#typesend").click(function () {
  Send();
});


$(".message-submit").ready(function () {
  //SetFlowchatAnswers(); //
  console.log("script run!");
  ReadyPost(); //ao carregar a página chmará a função da mensagem inicial
}); 


$("#btn1").click(function () {
 
  switch(flowchat){
    case 1:
      //code


      $('<div class="message message-personal">' + document.getElementById("btn1").value + "</div>")
      .appendTo($(".messages"))
      .addClass("new");
      Flowchat(flowchat);
    break;
    case 2:
      //Gmail: enviar e-mail
      flowchat = 3;

      $('<div class="message message-personal">' + document.getElementById("btn1").value + "</div>")
      .appendTo($(".messages"))
      .addClass("new");
      Flowchat(flowchat);
    break;
  }

  
});


$("#btn2").click(function () {
  
  switch(flowchat){
    case 1:
      flowchat = 2;

      $('<div class="message message-personal">' + document.getElementById("btn2").value + "</div>")
      .appendTo($(".messages"))
      .addClass("new");
      Flowchat(flowchat);
    break;
    case 2:
      //Gmail anexar arquivos

      $('<div class="message message-personal">' + document.getElementById("btn2").value + "</div>")
      .appendTo($(".messages"))
      .addClass("new");
      Flowchat(flowchat);
    break;
  }
  

});


async function Send() {
  var mensage = $("#inputtype").val();
  //nome = mensage;
  if ($.trim(mensage) == '') {
    return false;
  }
  $('<div class="message message-personal">' + mensage + "</div>")
    .appendTo($(".messages"))
    .addClass("new");
  //flowchat++;
  document.getElementById("inputtype").value = '';
  Flowchat(flowchat);
}

$("#exampleModal").on('hidden.bs.modal', function (e) {
  $("#exampleModal iframe").attr("src", $("#exampleModal iframe").attr("src"));
});

//LEMBRAR: O ARRAY DO JSON COMEÇA EM 0, ENTÃO TODAS AS FALAS DO FLOWCHAR SÃO ID-1 DO BANCO DE DADOS
async function Flowchat(index) {
  let getdata = await fetchDataFalas(); // here the data will be return.
  let getimg = await fetchDataImagens();

  Fala = $('<div class="message new">' + getdata[index].text_fala  + "</div>").appendTo($(".messages")).addClass("new");

  switch(index){
    case 1:
      document.getElementById("btn1").style.visibility = "visible";
      document.getElementById("btn2").style.visibility = "visible";

      document.getElementById("btn1").value = "WhatsApp";
      document.getElementById("btn2").value = "G-Mail";

      document.getElementById("btn1").disabled = false;
      document.getElementById("btn2").disabled = false;
    break;

    case 2:
      document.getElementById("btn1").value = "Enviar e-mails";
      document.getElementById("btn2").value = "Anexar arquivos ao e-mail";
    break;

    case 3:
      tutorialEnviarEmail();
    break;

    
  }

  function tutorialEnviarEmail() {
    $('<div class="message new">' + getdata[4].text_fala  + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[5].text_fala  + "</div>").appendTo($(".messages")).addClass("new");  
    $('<div class="message new">' + '<img src=' + getimg[0].img_link  + ' class="responsive" id="email1" alt="">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[6].text_fala  + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[1].img_link  + ' class="responsive" id="email2" alt="">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[7].text_fala  + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[2].img_link  + ' class="responsive" id="email3" alt="">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[8].text_fala  + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[3].img_link  + ' class="responsive" id="email4" alt="">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[9].text_fala  + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="btmodal" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver vídeo</button>' + "</div>").appendTo($(".messages")).addClass("new");

  }
}





