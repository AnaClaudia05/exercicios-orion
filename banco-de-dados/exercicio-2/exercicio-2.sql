-- Exercício 2 - JOINs e filtros
-- Usa as tabelas e os dados do exercício 1 (rodar o exercicio-1.sql antes)

-- 1. Nome do aluno e nome do curso numa consulta só
SELECT a.nome AS aluno, c.nome_curso AS curso
FROM alunos a
INNER JOIN cursos c ON c.id = a.curso_id
ORDER BY a.nome;

-- 2. Só os alunos do curso Engenharia de IA
SELECT a.nome AS aluno, c.nome_curso AS curso
FROM alunos a
INNER JOIN cursos c ON c.id = a.curso_id
WHERE c.nome_curso = 'Engenharia de IA'
ORDER BY a.nome;

-- 3. Mover o Bruno Lima para Auditoria de Contas Hospitalares
UPDATE alunos
SET curso_id = (SELECT id FROM cursos WHERE nome_curso = 'Auditoria de Contas Hospitalares')
WHERE nome = 'Bruno Lima';

-- Conferindo a mudança com o mesmo JOIN do item 1
SELECT a.nome AS aluno, c.nome_curso AS curso
FROM alunos a
INNER JOIN cursos c ON c.id = a.curso_id
ORDER BY a.nome;

-- Extra: cursos sem nenhum aluno matriculado
SELECT c.nome_curso AS curso_sem_aluno
FROM cursos c
LEFT JOIN alunos a ON a.curso_id = c.id
WHERE a.id IS NULL;