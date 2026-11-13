# Exercício 1 - Hello Container

Aplicação Node.js simples que mostra "Hellooooooo from Docker! Editado pela mim msm: Aninha.!", Estava com uma frase padrão que fui testando para ver se tinha aprendido.
rodando em contêiner.

## Arquivos
- Dockerfile: monta a imagem a partir do node:20-alpine (imagem leve)
- docker-compose.yml: faz o build, libera a porta 3000 e monta o index.js como volume
- .dockerignore: deixa fora da imagem o que não precisa (node_modules, .env, etc.)

## Como rodar
docker compose up -d --build

Depois abrir http://localhost:3000

## O que testei
- A página abriu com a mensagem.
- Mudei o texto no index.js, rodei docker compose restart e a mudança apareceu sem rebuild (por causa do volume).