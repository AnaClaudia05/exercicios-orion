// Exercício 4 - Consultas avançadas no MongoDB
// Usa a coleção posts do exercício 3 (rodar o exercicio-3.js antes)

// 1. updateOne: adiciona comentarios (array de documentos) no post da Ana Claudia
const resultado = db.posts.updateOne(
  { titulo: 'Conferência conta x prontuário' },
  {
    $set: {
      comentarios: [
        { autor: 'Carla Mendes', texto: 'Bom exemplo de dado virando informação.', data: new Date('2026-11-12') },
        { autor: 'Diego Rocha', texto: 'Dá para fazer o mesmo com equipos.', data: new Date('2026-11-12') }
      ]
    }
  }
);
print('--- resultado do updateOne ---');
printjson(resultado);

print('--- post depois do updateOne ---');
printjson(db.posts.findOne({ titulo: 'Conferência conta x prontuário' }));

// 2. Só os posts com a tag "nosql" (consulta dentro de um array)
print('--- posts com a tag nosql ---');
printjson(db.posts.find({ tags: 'nosql' }).toArray());

// 3. Só os posts de um autor específico
print('--- posts da autora Ana Claudia ---');
printjson(db.posts.find({ autor: 'Ana Claudia' }).toArray());

// Extra: consulta dentro dos documentos do array comentarios
print('--- posts com comentário da Carla Mendes ---');
printjson(db.posts.find({ 'comentarios.autor': 'Carla Mendes' }).toArray());