const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432,
});

async function criarTabela() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS conferencia (
      id SERIAL PRIMARY KEY,
      conta VARCHAR(20) NOT NULL,
      item VARCHAR(100) NOT NULL,
      qtd_conta INT NOT NULL,
      qtd_prontuario INT NOT NULL,
      criado_em TIMESTAMP DEFAULT NOW()
    )
  `);
}

app.get('/', (req, res) => {
  res.send('API de conferência conta x prontuário');
});

app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', banco: 'ok' });
  } catch (erro) {
    res.status(500).json({ status: 'erro', banco: 'fora' });
  }
});

app.get('/conferencias', async (req, res) => {
  const resultado = await pool.query(`
    SELECT id, conta, item, qtd_conta, qtd_prontuario,
           qtd_prontuario - qtd_conta AS diferenca
    FROM conferencia
    ORDER BY id
  `);
  res.json(resultado.rows);
});

app.post('/conferencias', async (req, res) => {
  const { conta, item, qtd_conta, qtd_prontuario } = req.body;

  if (!conta || !item || qtd_conta == null || qtd_prontuario == null) {
    return res.status(400).json({ erro: 'informe conta, item, qtd_conta e qtd_prontuario' });
  }

  const resultado = await pool.query(
    'INSERT INTO conferencia (conta, item, qtd_conta, qtd_prontuario) VALUES ($1, $2, $3, $4) RETURNING *',
    [conta, item, qtd_conta, qtd_prontuario]
  );
  res.status(201).json(resultado.rows[0]);
});

async function iniciar() {
  // o banco pode demorar uns segundos para aceitar conexão
  for (let tentativa = 1; tentativa <= 10; tentativa++) {
    try {
      await criarTabela();
      break;
    } catch (erro) {
      console.log(`Banco ainda não respondeu (tentativa ${tentativa})`);
      await new Promise((r) => setTimeout(r, 3000));
    }
  }

  app.listen(3000, () => {
    console.log('API rodando na porta 3000');
  });
}

iniciar();