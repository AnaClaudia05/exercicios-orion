-- Exercício 1 - SQL básico
-- Apago antes de criar para poder rodar o script de novo do zero
DROP TABLE IF EXISTS alunos;
DROP TABLE IF EXISTS cursos;

CREATE TABLE cursos (
  id SERIAL PRIMARY KEY,
  nome_curso VARCHAR(100) NOT NULL
);

CREATE TABLE alunos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  curso_id INT NOT NULL,
  CONSTRAINT fk_alunos_cursos FOREIGN KEY (curso_id) REFERENCES cursos (id)
);

INSERT INTO cursos (nome_curso) VALUES
  ('Engenharia de IA'),
  ('Auditoria de Contas Hospitalares'),
  ('Ciência de Dados');

INSERT INTO alunos (nome, email, curso_id) VALUES
  ('Ana Souza', 'ana.souza@exemplo.com', 1),
  ('Bruno Lima', 'bruno.lima@exemplo.com', 1),
  ('Carla Mendes', 'carla.mendes@exemplo.com', 2),
  ('Diego Rocha', 'diego.rocha@exemplo.com', 1);

-- Teste da chave estrangeira: o curso 99 não existe, então este INSERT tem que dar erro
INSERT INTO alunos (nome, email, curso_id) VALUES
  ('Aluno Teste', 'aluno.teste@exemplo.com', 99);

SELECT * FROM cursos;

SELECT * FROM alunos;