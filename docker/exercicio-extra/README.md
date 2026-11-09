# Desafio extra - API + Banco + Adminer

Stack com três serviços: a API de conferência (conta x prontuário), o PostgreSQL e o Adminer.

Dados de teste que fui inventando, sem paciente real.

## Serviços
- api: build pelo Dockerfile (estágio dev), porta 3000, código montado como volume, rota /health
- db: postgres:16-alpine, volume nomeado dados_db e healthcheck com pg_isready
- adminer: interface web do banco, porta 8080

A API só sobe depois que o banco fica healthy (depends_on com condition: service_healthy).
Os três estão na rede rede_conferencia, e a API acha o banco pelo nome "db".

## Como rodar
copy .env.example .env  (e trocar a senha)

docker compose up -d --build

## Endereços
- API: http://localhost:3000/health
- Conferências: http://localhost:3000/conferencias
- Adminer: http://localhost:8080 (motor PostgreSQL, servidor db, usuário e base do .env)

## O que testei
- O banco apareceu como healthy e a API só ligou depois dele.
- Gravei pela API (curl) e vi no Adminer.
- Apaguei e gravei pelo Adminer e vi pela API.