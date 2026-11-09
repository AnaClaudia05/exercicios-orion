# Exercício 3 - Ambientes dev e prod

Mesma API do excericio 2 (conferência conta x prontuário), agora com dois ambientes.

## Como foi feito
Um Dockerfile só, com estágios:
- base: parte comum (node:20-alpine, pasta /app, package.json)
- dev: instala tudo, inclusive o nodemon, e liga com live reload
- prod: instala só as dependências de produção, limpa o cache do npm e roda com o usuário node (não root)

Dois arquivos de compose:
- docker-compose.dev.yml: porta 3000, código montado como volume (./api/src)
- docker-compose.prod.yml: porta 3001, sem volume de código, restart automático

O "name" no topo de cada compose separa os ambientes (contêineres, rede e banco próprios), então os dois podem rodar juntos.

## Como rodar
copy .env.example .env

docker compose -f docker-compose.dev.yml up -d --build

docker compose -f docker-compose.prod.yml up -d --build

## O que testei
- Dev: mudei o texto da rota / e salvei. O nodemon reiniciou sozinho e a mudança apareceu sem build.
- Prod: subiu na porta 3001 junto com o dev (4 contêineres rodando ao mesmo tempo).
- Tamanho das imagens: dev 221 MB, prod 200 MB.