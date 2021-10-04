var flowchat = 0;
var newMessage;
var tutorialID;

$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    alert("bottom!");
  }
});

jQuery(function ($) {
  $('.messages').on('scroll', function () {
    if (this.scrollTop === (this.scrollHeight - this.offsetHeight)) {
      /* console.log(this.scrollHeight);
      console.log(this.innerHeight);
      console.log(this.scrollTop); */

      $(".novasmensagens").hide();

    }
  });
});

$('#ENDButton').click(function () {
  location.reload(true);
  alert('Reloading Page');
  /* console.log("reload"); */
});

function reload() {
  //alert('Reloading Page');
  /* console.log("reload"); */
  location.reload(true);
}

async function fetchDataFBPost() {



  var formValue = document.getElementById("FBForm").value;
  formValue = formValue.replace(/[&\/\\#+()$~%.'"*<>{}-]/g, '');
  formValue = formValue.replace(/[=|!@]/g, '');

  if (formValue.length < 5) {
    alert('Por favor, preencha o compo somente com texto, utilizando no minimo 5 letras');

  }
  else {
    $("#btnsugestao").prop("disabled", true);
    alert('Muito obrigado!');


    /* console.log("form value: " + formValue) */

    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        // your expected POST request payload goes here
        id_tutorial: tutorialID,
        descricao: formValue
      })
    };

    let response = await fetch('https://api-tcc-renan-augusto.herokuapp.com/feedbacks/', settings);

    const data = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
    /* console.log(data); */
    return data;

  }
}

async function fetchDataFalas() {
  let response = await fetch('https://api-tcc-renan-augusto.herokuapp.com/falas/');
  let data = await response.json();
  data = JSON.stringify(data);
  data = JSON.parse(data);
  return data;
}

async function fetchDataImagens() {
  let response = await fetch('https://api-tcc-renan-augusto.herokuapp.com/imagens/');
  let data = await response.json();
  data = JSON.stringify(data);
  data = JSON.parse(data);
  return data;
}

async function fetchDataVideos() {
  let response = await fetch('https://api-tcc-renan-augusto.herokuapp.com/videos/');
  let data = await response.json();
  data = JSON.stringify(data);
  data = JSON.parse(data);
  return data;
}

async function ReadyPost() {
  $(".novasmensagens").hide();
  let getdata = await fetchDataFalas(); // here the data will be return.
  /* console.log(getdata); */ // you are using async await then no need of .then().

  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"

  $('<div class="message new">' + getdata[0].text_fala + "</div>")
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
  console.log("Axel Bot, Projeto de TCC, feito por Augusto e Renan.");
  ReadyPost(); //ao carregar a página chmará a função da mensagem inicial
});

$("#btn1").click(function () {

  switch (flowchat) {
    case 1:
      //Sistema Android
      flowchat = 27;

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
    case 27:
      //Sistema ANdroid: Tamanho da fonte
      flowchat = 28;

      $('<div class="message message-personal">' + document.getElementById("btn1").value + "</div>")
        .appendTo($(".messages"))
        .addClass("new");
      Flowchat(flowchat);
      break;
    case 42:
      //Whatsapp: Compartilhar fotos
      flowchat = 43;

      $('<div class="message message-personal">' + document.getElementById("btn1").value + "</div>")
        .appendTo($(".messages"))
        .addClass("new");
      Flowchat(flowchat);
      break;

  }
});

$("#btn2").click(function () {

  switch (flowchat) {
    case 1:
      flowchat = 2;

      $('<div class="message message-personal">' + document.getElementById("btn2").value + "</div>")
        .appendTo($(".messages"))
        .addClass("new");
      Flowchat(flowchat);
      break;
    case 2:
      //Gmail anexar arquivos
      flowchat = 12

      $('<div class="message message-personal">' + document.getElementById("btn2").value + "</div>")
        .appendTo($(".messages"))
        .addClass("new");
      Flowchat(flowchat);
      break;
    case 27:
      //Sistema Android: Tirar um print da tela
      flowchat = 37;

      $('<div class="message message-personal">' + document.getElementById("btn2").value + "</div>")
        .appendTo($(".messages"))
        .addClass("new");
      Flowchat(flowchat);
      break;
    case 42:
      //Whatsapp: Compartilhar videos do youtube
      flowchat = 51;

      $('<div class="message message-personal">' + document.getElementById("btn2").value + "</div>")
        .appendTo($(".messages"))
        .addClass("new");
      Flowchat(flowchat);
      break;
  }
});

$("#btn3").click(function () {

  switch (flowchat) {
    case 1:
      //Whatsapp
      flowchat = 42;


      $('<div class="message message-personal">' + document.getElementById("btn3").value + "</div>")
        .appendTo($(".messages"))
        .addClass("new");
      Flowchat(flowchat);

      break;
    case 2:
      //Gmail e-mails favoritos
      flowchat = 20

      $('<div class="message message-personal">' + document.getElementById("btn3").value + "</div>")
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
  let getvid = await fetchDataVideos();

  Fala = $('<div class="message new">' + getdata[index].text_fala + "</div>").appendTo($(".messages")).addClass("new");

  switch (index) {
    case 1:
      document.getElementById("btn1").style.visibility = "visible";
      document.getElementById("btn2").style.visibility = "visible";
      document.getElementById("btn3").style.visibility = "visible";

      document.getElementById("btn1").value = "Sistema Android";
      document.getElementById("btn2").value = "G-Mail";
      document.getElementById("btn3").value = "Whatsapp";

      document.getElementById("btn1").disabled = false;
      document.getElementById("btn2").disabled = false;
      document.getElementById("btn3").disabled = false;
      break;

    case 2:
      document.getElementById("btn1").value = "Enviar e-mails";
      document.getElementById("btn2").value = "Anexar arquivos ao e-mail";
      document.getElementById("btn3").value = "Adicionar um e-mail aos favoritos";
      break;

    case 3:
      tutorialEnviarEmail();
      break;

    case 12:
      tutorialAnexoEmail();
      break;

    case 20:
      tutorialEmailsFavoritos();
      break;

    case 27:
      $("#btn3").hide();
      document.getElementById("btn1").value = "Aumentar o tamanho das letras";
      document.getElementById("btn2").value = "Tirar um print da tela";
      break;
    case 28:
      tutorialTamanhoFonte();
      break;
    case 37:
      tutorialPrint();
      break;
    case 42:
      $("#btn3").hide();
      document.getElementById("btn1").value = "Compartilhar imagem ou video";
      document.getElementById("btn2").value = "Compartilhar videos do youtube";
      break;
    case 43:
      tutorialCompartilharFotos();
      break;
    case 51:
      tutorialCompartilharvideos();
      break;
  }

  function tutorialEnviarEmail() {

    $('#videoif').attr('src', getvid[0].video_link);

    $(".novasmensagens").show();
    $(".novasmensagens").fadeOut(20000);
    $("#btn1").hide();
    $("#btn2").hide();
    $("#btn3").hide();
    tutorialID = 1; //ID do tutorial que foi feito, para ser enviado no feedback.

    $('<div class="message new">' + getdata[4].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[5].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[0].img_link + ' class="responsive" alt=" ' + getimg[0].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[6].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[1].img_link + ' class="responsive" alt=" ' + getimg[1].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[7].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[2].img_link + ' class="responsive" alt=" ' + getimg[2].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[8].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[3].img_link + ' class="responsive" alt=" ' + getimg[3].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[9].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="btmodal" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver vídeo</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[10].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#POSTModal" id="btnsugestao">Sugestão</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[11].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="ENDButton" onclick="reload()">Encerrar</button>' + "</div>").appendTo($(".messages")).addClass("new");



  }

  function tutorialAnexoEmail() {
    $('#videoif').attr('src', getvid[1].video_link);

    $(".novasmensagens").show();
    $(".novasmensagens").fadeOut(20000);
    $("#btn1").hide();
    $("#btn2").hide();
    $("#btn3").hide();
    tutorialID = 2; //ID do tutorial que foi feito, para ser enviado no feedback.

    $('<div class="message new">' + getdata[13].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[0].img_link + ' class="responsive" alt=" ' + getimg[0].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[14].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[1].img_link + ' class="responsive" alt=" ' + getimg[1].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[15].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[2].img_link + ' class="responsive" alt=" ' + getimg[2].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[16].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[4].img_link + ' class="responsive" alt=" ' + getimg[4].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[17].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[5].img_link + ' class="responsive" alt=" ' + getimg[5].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[18].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[6].img_link + ' class="responsive" alt=" ' + getimg[6].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[19].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[3].img_link + ' class="responsive" alt=" ' + getimg[3].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[9].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="btmodal" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver vídeo</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[10].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#POSTModal" id="btnsugestao">Sugestão</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[11].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="ENDButton" onclick="reload()">Encerrar</button>' + "</div>").appendTo($(".messages")).addClass("new");

  }

  function tutorialEmailsFavoritos() {
    $('#videoif').attr('src', getvid[3].video_link);

    $(".novasmensagens").show();
    $(".novasmensagens").fadeOut(20000);
    $("#btn1").hide();
    $("#btn2").hide();
    $("#btn3").hide();
    tutorialID = 3; //ID do tutorial que foi feito, para ser enviado no feedback.

    $('<div class="message new">' + getdata[21].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[0].img_link + ' class="responsive" alt=" ' + getimg[0].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[22].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[7].img_link + ' class="responsive" alt=" ' + getimg[7].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[23].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[8].img_link + ' class="responsive" alt=" ' + getimg[8].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[24].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[9].img_link + ' class="responsive" alt=" ' + getimg[9].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[25].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[10].img_link + ' class="responsive" alt=" ' + getimg[10].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[26].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[11].img_link + ' class="responsive" alt=" ' + getimg[11].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[9].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="btmodal" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver vídeo</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[10].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#POSTModal" id="btnsugestao">Sugestão</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[11].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="ENDButton" onclick="reload()">Encerrar</button>' + "</div>").appendTo($(".messages")).addClass("new");


  }

  function tutorialTamanhoFonte() {
    $('#videoif').attr('src', getvid[4].video_link);

    $(".novasmensagens").show();
    $(".novasmensagens").fadeOut(20000);
    $("#btn1").hide();
    $("#btn2").hide();
    $("#btn3").hide();
    tutorialID = 4; //ID do tutorial que foi feito, para ser enviado no feedback.

    $('<div class="message new">' + getdata[29].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[12].img_link + ' class="responsive" alt=" ' + getimg[12].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[30].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[13].img_link + ' class="responsive" alt=" ' + getimg[13].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[31].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[14].img_link + ' class="responsive" alt=" ' + getimg[14].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[32].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[15].img_link + ' class="responsive" alt=" ' + getimg[15].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[33].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[16].img_link + ' class="responsive" alt=" ' + getimg[16].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[34].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[17].img_link + ' class="responsive" alt=" ' + getimg[17].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[35].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[18].img_link + ' class="responsive" alt=" ' + getimg[18].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");


    $('<div class="message new">' + getdata[36].text_fala + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[9].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="btmodal" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver vídeo</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[10].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#POSTModal" id="btnsugestao">Sugestão</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[11].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="ENDButton" onclick="reload()">Encerrar</button>' + "</div>").appendTo($(".messages")).addClass("new");


  }

  function tutorialPrint() {
    $('#videoif').attr('src', getvid[2].video_link);

    $(".novasmensagens").show();
    $(".novasmensagens").fadeOut(20000);
    $("#btn1").hide();
    $("#btn2").hide();
    $("#btn3").hide();
    tutorialID = 5; //ID do tutorial que foi feito, para ser enviado no feedback.

    $('<div class="message new">' + getdata[38].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[19].img_link + ' class="responsive" alt=" ' + getimg[19].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[39].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[20].img_link + ' class="responsive" alt=" ' + getimg[20].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[40].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[21].img_link + ' class="responsive" alt=" ' + getimg[21].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[41].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[22].img_link + ' class="responsive" alt=" ' + getimg[22].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");


    $('<div class="message new">' + getdata[9].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="btmodal" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver vídeo</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[10].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#POSTModal" id="btnsugestao">Sugestão</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[11].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="ENDButton" onclick="reload()">Encerrar</button>' + "</div>").appendTo($(".messages")).addClass("new");


  }

  function tutorialCompartilharFotos() {
    $('#videoif').attr('src', getvid[5].video_link);

    $(".novasmensagens").show();
    $(".novasmensagens").fadeOut(20000);
    $("#btn1").hide();
    $("#btn2").hide();
    $("#btn3").hide();
    tutorialID = 6; //ID do tutorial que foi feito, para ser enviado no feedback.

    $('<div class="message new">' + getdata[44].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[23].img_link + ' class="responsive" alt=" ' + getimg[23].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[45].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[24].img_link + ' class="responsive" alt=" ' + getimg[24].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[46].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[25].img_link + ' class="responsive" alt=" ' + getimg[25].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[47].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[26].img_link + ' class="responsive" alt=" ' + getimg[26].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[48].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[27].img_link + ' class="responsive" alt=" ' + getimg[27].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[49].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[28].img_link + ' class="responsive" alt=" ' + getimg[28].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[50].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[29].img_link + ' class="responsive" alt=" ' + getimg[29].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[9].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="btmodal" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver vídeo</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[10].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#POSTModal" id="btnsugestao">Sugestão</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[11].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="ENDButton" onclick="reload()">Encerrar</button>' + "</div>").appendTo($(".messages")).addClass("new");




  }

  function tutorialCompartilharvideos() {
    $('#videoif').attr('src', getvid[6].video_link);

    $(".novasmensagens").show();
    $(".novasmensagens").fadeOut(20000);
    $("#btn1").hide();
    $("#btn2").hide();
    $("#btn3").hide();
    tutorialID = 7; //ID do tutorial que foi feito, para ser enviado no feedback.

    $('<div class="message new">' + getdata[52].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[30].img_link + ' class="responsive" alt=" ' + getimg[30].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[53].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[31].img_link + ' class="responsive" alt=" ' + getimg[31].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[54].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[32].img_link + ' class="responsive" alt=" ' + getimg[32].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[55].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[33].img_link + ' class="responsive" alt=" ' + getimg[33].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[56].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[34].img_link + ' class="responsive" alt=" ' + getimg[34].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[57].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[35].img_link + ' class="responsive" alt=" ' + getimg[35].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[58].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[36].img_link + ' class="responsive" alt=" ' + getimg[36].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[59].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<img src=' + getimg[37].img_link + ' class="responsive" alt=" ' + getimg[37].img_alt + ' ">' + "</div>").appendTo($(".messages")).addClass("new");

    $('<div class="message new">' + getdata[9].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="btmodal" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver vídeo</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[10].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#POSTModal" id="btnsugestao">Sugestão</button>' + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + getdata[11].text_fala + "</div>").appendTo($(".messages")).addClass("new");
    $('<div class="message new">' + '<button type="button" class="btn btn-danger" id="ENDButton" onclick="reload()">Encerrar</button>' + "</div>").appendTo($(".messages")).addClass("new");





  }


}






