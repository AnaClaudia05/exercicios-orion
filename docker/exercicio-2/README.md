# Exercício 2 - API + Banco de Dados

API em Node.js que guarda a conferência de um item: qtde lançada na conta x quantidade no prontuário, e mostra a diferença (o que ficou sem cobrar).

Dados de teste inventados, sem paciente real.

## Serviços
- api: build pelo Dockerfile da pasta api, porta 3000
- db: imagem oficial postgres:16-alpine, com volume nomeado para os dados

## Variáveis de ambiente
A API lê DB_HOST, DB_USER, DB_PASS e DB_NAME. O DB_HOST é "db", o nome do serviço do banco na rede.
Usuário e senha ficam no arquivo .env, que não vai para o GitHub. Para rodar, copie o .env.example:

copy .env.example .env

## Como rodar
docker compose up -d --build

## Rotas
- GET /health: mostra se a API e o banco estão ok
- GET /conferencias: lista as conferências com a diferença
- POST /conferencias: grava uma conferência

## O que testei
- Gravei duas conferências com curl e vi pelo navegador.
- Rodei docker compose down e depois up: os dados continuaram lá por causa do volume dados_db.