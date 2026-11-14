// Exercício 3 - CRUD básico no MongoDB
// Remove a coleção, se já existir, para o script poder rodar de novo do zero
db.posts.drop();
db.createCollection('posts');

// 1º documento: só titulo, autor e conteudo
db.posts.insertOne({
  titulo: 'Conferência conta x prontuário',
  autor: 'Ana Claudia',
  conteudo: 'Comparar a quantidade lançada na conta com a registrada no prontuário mostra o que ficou sem cobrar.'
});

// 2º documento: os mesmos campos e mais um, tags (array de strings)
db.posts.insertOne({
  titulo: 'Schema flexível na prática',
  autor: 'Bruno Lima',
  conteudo: 'No MongoDB a mesma coleção aceita documentos com campos diferentes.',
  tags: ['nosql', 'flexivel']
});

print('--- find() na coleção posts ---');
printjson(db.posts.find().toArray()); 