# projTransportadora XQDL

## Projeto full stack, exemplo de conceitos ocmo:
- VMC (Model, View, Controller)
- CRUD (Create, Read, Update, Delete)
- API (Applicaion Programming Interface)
- Testes unitários

## Tecnologias

- Xampp (Para usar o banco de dados mariaDB através do mysql)
- Node.JS Framework para o desenvolvimento de backend
- Visual Studio Code - Ambiente de Programação
- Insomnia

## Depêndencias
- Mysql
- Express
- Cors


## Para testar:

1. Clone este repositório em seu computador e abra ele através do visual studio code
2. Abra o aplicativo Xampp e clique em "Inicie" na linha do mysql
3. Ainda no Xampp clique na opção shell do lado direito do aplicativo e coloque a seguinte linha de código
```bash
mysql -u root 
```
Após isso copie e cole os códigos que estão em './banco/script.sql' e o arquivo que está em './testes/populacaobd.sql', após inserir os códigos já pode fechar o power shell e o xampp, mas não desligue o mysql

4. Abra o terminal do visual studio code e copie e cole os seguintes códigos
```bash
cd api
npm i
node server.js
```
5. Se você receber uma mensagem escrita "Api respondendo na porta 3000", então tudo deve estar funcionando e você ja pode abrir o index.html na pasta front com o live server para ver o que a aplicação faz