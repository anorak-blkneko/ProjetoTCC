DROP TABLE imagens;
DROP TABLE tutoriais;
DROP TABLE falas;
DROP TABLE usuarios;
DROP TABLE feedback

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
    img_link VARCHAR(300) NOT NULL
);

--CREATE TABLE FEEDBACK
CREATE TABLE feedback (
	id_fb SERIAL PRIMARY KEY,
	id_tutorial INT REFERENCES tutoriais (id_tutorial),
    descricao VARCHAR(800) NOT NULL
);

--INSERÇÃO DE FEEDBACK
INSERT INTO feedback (id_tutorial, descricao) VALUES (1, 'Top do top');


--INSERÇÃO DE USUARIOS
INSERT INTO usuarios VALUES (1, 'augusto', 'super');
INSERT INTO usuarios VALUES (2, 'renan', 'rena');


--INSERÇÃO DE FALAS
INSERT INTO falas (text_fala) VALUES ('Olá, serei seu assistente virtual, o que gostaria de aprender hoje?');
INSERT INTO falas (text_fala) VALUES ('Posso recomendar estas duas opções:');

INSERT INTO falas (text_fala) VALUES ('Gmail, claro, sobre o que você quer saber?');

INSERT INTO falas (text_fala) VALUES ('Para enviar um e-mail utilizando o Gmail, basta seguir os seguintes passos:');
INSERT INTO falas (text_fala) VALUES ('Primeiramente você precisa ter uma CONTA GOOGLE, para utilizar o Gmail, geralmente algo como "seunome@gmail.com"');
INSERT INTO falas (text_fala) VALUES ('Em seguida tocar no icone do aplicativo, como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('E então clicar em escrever, no canto inferior direito, para escrever um novo e-mail.');
INSERT INTO falas (text_fala) VALUES ('E então preencher os campos "para:" para quem você irá envar o e-mail, assunto e então escrever o e-mail, assim como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('Com tudo preenchido basta clicar no botão azul, no canto superior direito da tela para enviar o e-mail.');
INSERT INTO falas (text_fala) VALUES ('Caso ainda tenha dúvidas, você pode clicar neste botão vermelho para ver nosso video tutorial.');
INSERT INTO falas (text_fala) VALUES ('Gostariamos de saber se este tutorial foi útil, poderia nos ajudar? basta clicar no botão "Sugestão" e dizer o que achou.');
INSERT INTO falas (text_fala) VALUES ('Este é o fim deste tutorial, para encerrar e voltar para o inicio clique no botão "Encerrar" abaixo. Obrigado.');

INSERT INTO falas (text_fala) VALUES ('Para anexar um arquivo a um e-mail utilizando o Gmail, basta seguir os seguintes passos:');
INSERT INTO falas (text_fala) VALUES ('Toque no icone do aplicativo, como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('E então clique em escrever, no canto inferior direito, para escrever um novo e-mail.');
INSERT INTO falas (text_fala) VALUES ('E então preencha os campos "para:" para quem você irá envar o e-mail, assunto e então escrever o e-mail, assim como mostrado na imagem a seguir:');
INSERT INTO falas (text_fala) VALUES ('E então clique no botão em forma de um "clipe de papel", como mostrado na imagem.');
INSERT INTO falas (text_fala) VALUES ('E então selecione a opção "Anexar arquivo", como mostrado na imagem.');
INSERT INTO falas (text_fala) VALUES ('Agora, navegando pelos arquivos do seu dispositivo, procure pelo arquivo que você deseja anexar ao e-mail');
INSERT INTO falas (text_fala) VALUES ('Feito isso o arquivo deve aparecer no corpo do e-mail, então basta clicar no botão azul para enviar seu e-mail.');



--INSERÇÃO DE TUTORIAIS
INSERT INTO tutoriais (nome_tutorial) VALUES ('Enviar email');
INSERT INTO tutoriais (nome_tutorial) VALUES ('Anexar arquivo email');


--INSERÇÃO DE IMAGENS
INSERT INTO imagens (id_tutorial, img_link) VALUES (1, 'https://i.imgur.com/uRlpC5p.png');
INSERT INTO imagens (id_tutorial, img_link) VALUES (1, 'https://i.imgur.com/IY7RX5l.png');
INSERT INTO imagens (id_tutorial, img_link) VALUES (1, 'https://i.imgur.com/wrBcZR3.png');
INSERT INTO imagens (id_tutorial, img_link) VALUES (1, 'https://i.imgur.com/2ZqMdf1.png');


--SELECTS
SELECT * FROM usuarios;
SELECT * FROM falas;
SELECT * FROM imagens;
SELECT * FROM tutoriais;
SELECT * FROM feedback;


--PGADMIN BUGADOOOO