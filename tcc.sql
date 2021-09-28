DROP TABLE imagens;
DROP TABLE tutoriais;
DROP TABLE falas;
DROP TABLE usuarios;
DROP TABLE feedback;
DROP TABLE videos;

--CREATE TABLE USUARIOS
CREATE TABLE usuarios (
	id_usuario INT PRIMARY KEY,
    nome_usuario VARCHAR(20) NOT NULL,
	senha_usuario VARCHAR(20) NOT NULL
);


--CREATE TABLE FALAS
CREATE TABLE falas (
	id_fala SERIAL PRIMARY KEY,
    text_fala VARCHAR(300) NOT NULL
);


--CREATE TABLE TUTORIAIS
CREATE TABLE tutoriais (
	id_tutorial SERIAL PRIMARY KEY,
	nome_tutorial VARCHAR(100) NOT NULL
);


--CREATE TABLE IMAGENS
CREATE TABLE imagens (
	id_img SERIAL PRIMARY KEY,
	id_tutorial INT REFERENCES tutoriais (id_tutorial),
    img_link VARCHAR(300) NOT NULL,
	img_alt VARCHAR(125)
);

--CREATE TABLE FEEDBACK
CREATE TABLE feedback (
	id_fb SERIAL PRIMARY KEY,
	id_tutorial INT REFERENCES tutoriais (id_tutorial),
    descricao VARCHAR(800) NOT NULL
);

--CREATE TABLE VIDEOS
CREATE TABLE videos (
	id_video SERIAL PRIMARY KEY,
	id_tutorial INT REFERENCES tutoriais (id_tutorial),
    video_link VARCHAR(300) NOT NULL
);

--INSERÇÃO DE FEEDBACK
INSERT INTO feedback (id_tutorial, descricao) VALUES (1, 'Top do top');


--INSERÇÃO DE USUARIOS
INSERT INTO usuarios VALUES (1, 'augusto', 'super');
INSERT INTO usuarios VALUES (2, 'renan', 'rena');


 --INSERÇÃO DE FALAS
INSERT INTO falas (text_fala) VALUES ('Olá, eu sou Axel, serei seu assistente virtual, no que posso lhe ajudar hoje?');
INSERT INTO falas (text_fala) VALUES ('Posso recomendar estas opções abaixo:');

INSERT INTO falas (text_fala) VALUES ('Gmail, claro! O que gostaria de saber?');

INSERT INTO falas (text_fala) VALUES ('Para enviar um e-mail utilizando o Gmail, basta seguir os seguintes passos:');
INSERT INTO falas (text_fala) VALUES ('Primeiro, você precisa ter uma conta no Google, para utilizar o Gmail, geralmente algo como: "seunome@gmail.com"');
INSERT INTO falas (text_fala) VALUES ('Em seguida, você irá tocar no icone do aplicativo, como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('Após realizar a ação, você deve clicar em "Escrever" no canto inferior direito para produzir um novo e-mail.');
INSERT INTO falas (text_fala) VALUES ('E então, preencher os campos "para:" indicando a pessoa à quem você irá enviar o e-mail. Em seguida, escrever no campo "assunto:" o motivo do e-mail e então preencher o campo "e-mail:" com o conteúdo a ser enviado, assim como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('Com todos os campos preenchidos, basta clicar no botão azul no canto superior direito da tela para enviar o e-mail.');
INSERT INTO falas (text_fala) VALUES ('Caso ainda tenha dúvidas, você pode clicar neste botão vermelho para ver nosso vídeo tutorial.');
INSERT INTO falas (text_fala) VALUES ('Gostariamos de saber se este tutorial foi útil para você, poderia nos ajudar? Basta clicar no botão "Sugestão" abaixo e dizer o que achou.');
INSERT INTO falas (text_fala) VALUES ('Este é o fim do tutorial, para encerrar e voltar ao inicio clique no botão "Encerrar". Obrigado!');

INSERT INTO falas (text_fala) VALUES ('Para anexar um arquivo a um e-mail utilizando o Gmail, basta seguir os seguintes passos:');
INSERT INTO falas (text_fala) VALUES ('Toque no icone do aplicativo, como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('E então clique no canto inferior direito, para escrever um novo e-mail conforme mostrado na imagem abaixo.');
INSERT INTO falas (text_fala) VALUES ('Em seguida, preencher os campos "para:" indicando a pessoa à quem você irá enviar o e-mail. Em seguida, escrever no campo "assunto:" o motivo do e-mail e então preencher o campo "e-mail:" com o conteúdo a ser enviado, assim como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('Após realizar a ação, clique no botão em forma de um "clipe de papel", como mostrado na imagem.');
INSERT INTO falas (text_fala) VALUES ('Então, selecione a opção "Anexar arquivo", como mostrado na imagem.');
INSERT INTO falas (text_fala) VALUES ('Agora, navegando pelos arquivos do seu dispositivo, procure pelo arquivo que você deseja anexar ao e-mail e dê um clique nele.');
INSERT INTO falas (text_fala) VALUES ('Feito isso o arquivo deve aparecer no corpo do e-mail, basta clicar no botão azul para enviá-lo.');

INSERT INTO falas (text_fala) VALUES ('Para adicionar um e-mail aos favoritos no Gmail, basta seguir os seguintes passos:');
INSERT INTO falas (text_fala) VALUES ('Toque no icone do aplicativo, como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('Encontre o e-mail que deseja marcar como "favorito".');
INSERT INTO falas (text_fala) VALUES ('Clique na estrela, no lado direito do e-mail desejado, ela ficará amarela, indicando que foi marcada, assim como mostra a imagem.');
INSERT INTO falas (text_fala) VALUES ('Em seguida, para ver os e-mails marcados como "favoritos" clique no icone com três linhas, no canto superior esquerdo, como mostrado na imagem.');
INSERT INTO falas (text_fala) VALUES ('Clique em "Com estrela".');
INSERT INTO falas (text_fala) VALUES ('Aqui estarão listados todos os seus e-mails que você marcou como favorito.');

INSERT INTO falas (text_fala) VALUES ('Sistema Android, claro! O que gostaria de saber?');

INSERT INTO falas (text_fala) VALUES ('Para alterar o tamanho da fonte de seu dispositivo, basta seguir os seguintes passos:');
INSERT INTO falas (text_fala) VALUES ('Toque no icone de configurações do seu dispositivo, como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('Encontre a opção "acessibilidade"');
INSERT INTO falas (text_fala) VALUES ('Então clique em "tamanho da fonte", como indicado na imagem.');
INSERT INTO falas (text_fala) VALUES ('Clique na letra "A" grande para aumentar o tamanho das fontes, você também pode clicar na letra "A" pequena para diminuir a fonte.');
INSERT INTO falas (text_fala) VALUES ('Clique na seta no canto superior esquerdo para para voltar.');
INSERT INTO falas (text_fala) VALUES ('Agora, clique em "Tamanho da exibição", como indicado na imagem.');
INSERT INTO falas (text_fala) VALUES ('Aqui você pode clicar no "+" para aumentar o tamanho das conversas ou no "-" para diminuir o tamanho.');
INSERT INTO falas (text_fala) VALUES ('Lembre-se que mudar o tamanho de exibição pode alterar o posicionamento de alguns apps.');

INSERT INTO falas (text_fala) VALUES ('Para fazer a captura da tela do seu celular, siga o seguinte passo:');
INSERT INTO falas (text_fala) VALUES ('Segure o botão de desligar e o botão de abaixar o volume ao mesmo tempo, como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('A tela de seu celular deve piscar, com uma animação e som, indicando que deu certo.');
INSERT INTO falas (text_fala) VALUES ('Agora, para verificarmos como ficou a captura de tela puxe a aba de notificações para baixo, como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('Basta clicar na notificação referente ao print para visualiza-lo.');




--INSERÇÃO DE TUTORIAIS
INSERT INTO tutoriais (nome_tutorial) VALUES ('Enviar email');
INSERT INTO tutoriais (nome_tutorial) VALUES ('Anexar arquivo email');
INSERT INTO tutoriais (nome_tutorial) VALUES ('Adicionar email aos favoritos');
INSERT INTO tutoriais (nome_tutorial) VALUES ('Aumentar o tamanho dos textos');
INSERT INTO tutoriais (nome_tutorial) VALUES ('Tirar print da tela.');



--INSERÇÃO DE IMAGENS
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (1, 'https://i.imgur.com/uRlpC5p.png', 'Imagem com texto: abra o Gmail, destacando o ícone do Gmail.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (1, 'https://i.imgur.com/IY7RX5l.png', 'Imagem com texto: aperte em escrever, destacando o botão de escrever novos e-mails.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (1, 'https://i.imgur.com/wrBcZR3.png', 'Imagem com texto: preencha os campos, demonstrando como preencher os campos do e-mail.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (1, 'https://i.imgur.com/2ZqMdf1.png', 'Imagem com texto: aperte nesse botão azul para enviar, destacando o botão azul para enviar o email.');

INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (2, 'https://i.imgur.com/ITp8GwK.png', 'Imagem com texto: aperte nesse botão para anexar, destacando o botão de anexar arquivos.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (2, 'https://i.imgur.com/AUqlL4b.png', 'Imagem com texto: agora aperte em anexar arquivo, demonstrando a opção para anexar arquivos.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (2, 'https://i.imgur.com/TKLcWEb.png', 'Imagem com texto: escolha seu arquivo para enviar, demonstrando um arquivo a ser selecionado.');

INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (3, 'https://i.imgur.com/Bo6sKEZ.png', 'Imagem com texto: selecione um email para tornar favorito, demonstrando um email a ser selecionado.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (3, 'https://i.imgur.com/2VaPMY8.png', 'Imagem com texto: clique na estrela do lado direito, indicando o botão para adicionar aos favoritos.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (3, 'https://i.imgur.com/XPvO6TN.png', 'Imagem com texto: agora para ver os favoritos clique aqui, indicando o botão de menu.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (3, 'https://i.imgur.com/J27Mser.png', 'Imagem com texto: clique no com estrela, indicando o botão para acessar a página de favoritos.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (3, 'https://i.imgur.com/vvwVYBU.png', 'Imagem com texto: aqui está seu email favorito, mostrando a páginas de emails favoritos.');

INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (4, 'https://i.imgur.com/0ooJq1Q.png', 'Imagem com texto: abra as configurações, destacando o icone de configurações.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (4, 'https://i.imgur.com/2VLwNUn.png', 'Imagem com texto: procure por acessibilidade, indicando o botão de acessibilidade.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (4, 'https://i.imgur.com/94CYtfn.png', 'Imagem com texto: clique em tamanho da fonte, indicando a opção tamanho da fonte.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (4, 'https://i.imgur.com/7SOZHeZ.png', 'Imagem com texto: clique no A em maiusculo para aumentar o tamanho do texto, indicando o botão A.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (4, 'https://i.imgur.com/I1Blzag.png', 'Imagem com texto: clique na seta para voltar, indicando a seta para voltar.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (4, 'https://i.imgur.com/t3BrmdA.png', 'Imagem com texto: clique em tamanho de exibição, indicando a opção tamanho da exibição.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (4, 'https://i.imgur.com/vT22OBK.png', 'Imagem com texto: clique no + para aumentar o tamanho da conversa, indicando o botão de +.');

INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (5, 'https://i.imgur.com/KMyojZz.png', 'Imagem com texto: segure o botão de desligar e ao mesmo tempo o de abaixar volume, indicando os botões.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (5, 'https://i.imgur.com/mBp4xHy.png', 'Imagem com texto: se a tela piscar desse jeito, funcionou!, mostrando como a tela deve ficar.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (5, 'https://i.imgur.com/j3ifr6Z.png', 'Imagem com texto: puxe a aba de notificação para baixo, indicando onde deslizar o dedo.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (5, 'https://i.imgur.com/cAaR2GM.png', 'Imagem com texto: clique na notificação para ver o print, indicando a notificação da captura de tela.');



--INSERÇÃO DE VIDEO
INSERT INTO videos (id_tutorial, video_link) VALUES (1, 'https://www.youtube.com/embed/pQw-L8hajtg');
INSERT INTO videos (id_tutorial, video_link) VALUES (2, 'https://www.youtube.com/embed/YL4y-VIDAvA');



--SELECTS
SELECT * FROM usuarios;
SELECT * FROM falas;
SELECT * FROM imagens;
SELECT * FROM tutoriais;
SELECT * FROM feedback;


--PGADMIN BUGADOOOO