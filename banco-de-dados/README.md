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

## Extra: ambientes dev e prod
O dev/prod do exercício 4 era opcional, mas fiz para treinar o que vi na aula de Docker:
- docker-compose.dev.yml (projeto bd-dev): portas 5432 e 27017, pasta dos scripts montada.
- docker-compose.prod.yml (projeto bd-prod): portas 5433 e 27018, sem volume de código e com restart automático.

Os dois sobem ao mesmo tempo, cada um com seus volumes. Para provar a independência, rodei o exercício 2 só no dev: o Bruno mudou de curso no dev (curso_id 2) e continuou no curso 1 no prod. Prints em prints-dev-prod.

docker compose -f docker-compose.dev.yml up -d

docker compose -f docker-compose.prod.yml up -d