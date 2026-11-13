# Banco de Dados

Exercícios de banco relacional (PostgreSQL) e não relacional (MongoDB).
Os dois bancos sobem juntos pelo docker-compose.yml desta pasta. Todos os dados são inventados.

## Como rodar
copy .env.example .env

docker compose up -d

Serviços: db_postgres (porta 5432) e db_mongo (porta 27017), com volumes nomeados e healthcheck.

## Exercícios
- exercicio-1: CREATE TABLE cursos e alunos (PK e FK), INSERT e SELECT. O INSERT com curso_id 99 dá erro de FK, como esperado.
- exercicio-2: INNER JOIN, JOIN com WHERE, UPDATE movendo um aluno de curso e, no extra, LEFT JOIN para achar o curso sem aluno.
- exercicio-3: coleção posts com dois documentos de estruturas diferentes (o segundo tem tags).
- exercicio-4: updateOne adicionando um array de comentários, find por tag, por autor e dentro dos comentários.

Os prints dos resultados estão na pasta prints de cada exercício.

O trecho do exercício 4 sobre docker-compose.dev.yml e docker-compose.prod.yml veio por engano do exercício de Docker, como a Cinthia confirmou no canal. Por isso fiz só a parte de MongoDB.