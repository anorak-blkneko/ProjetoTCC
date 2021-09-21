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
INSERT INTO falas (text_fala) VALUES ('Olá, eu serei seu assistente virtual, no que posso lhe ajudar hoje?');
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







--INSERÇÃO DE TUTORIAIS
INSERT INTO tutoriais (nome_tutorial) VALUES ('Enviar email');
INSERT INTO tutoriais (nome_tutorial) VALUES ('Anexar arquivo email');
INSERT INTO tutoriais (nome_tutorial) VALUES ('Adicionar email aos favoritos');


--INSERÇÃO DE IMAGENS
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (1, 'https://i.imgur.com/uRlpC5p.png', 'Imagem com texto: abra o Gmail, destacando o ícone do Gmail.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (1, 'https://i.imgur.com/IY7RX5l.png', 'Imagem com texto: aperte em escrever, destacando o botão de escrever novos e-mails.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (1, 'https://i.imgur.com/wrBcZR3.png', 'Imagem com texto: preencha os campos, demonstrando como preencher os campos do e-mail.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (1, 'https://i.imgur.com/2ZqMdf1.png', 'Imagem com texto: aperte nesse botão azul para enviar, destacando o botão azul para enviar o email.');

INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (2, 'https://i.imgur.com/ITp8GwK.png', 'Imagem com texto: aperte nesse botão para anexar, destacando o botão de anexar arquivos.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (2, 'https://i.imgur.com/AUqlL4b.png', 'Imagem com texto: agora aperte em anexar arquivo, demonstrando a opção para anexar arquivos.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (2, 'https://i.imgur.com/TKLcWEb.png', 'Imagem com texto: escolha seu arquivo para enviar, demonstrando um arquivo a ser selecionado.');

INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (2, 'https://i.imgur.com/Bo6sKEZ.png', 'Imagem com texto: selecione um email para tornar favorito, demonstrando um email a ser selecionado.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (2, 'https://i.imgur.com/2VaPMY8.png', 'Imagem com texto: clique na estrela do lado direito, indicando o botão para adicionar aos favoritos.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (2, 'https://i.imgur.com/XPvO6TN.png', 'Imagem com texto: agora para ver os favoritos clique aqui, indicando o botão de menu.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (2, 'https://i.imgur.com/J27Mser.png', 'Imagem com texto: clique no com estrela, indicando o botão para acessar a página de favoritos.');
INSERT INTO imagens (id_tutorial, img_link, img_alt) VALUES (2, 'https://i.imgur.com/vvwVYBU.png', 'Imagem com texto: aqui está seu email favorito, mostrando a páginas de emails favoritos.');


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