const express = require('express');
const Item = require('./models/Item'); // Importe o modelo do item (ou qualquer modelo que você definiu)
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rota para buscar itens
app.get('/dados', async (req, res) => {
  try {
    const itens = await Item.findAll(); // Consulta todos os itens na tabela 'itens'
    res.json(itens);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar itens do banco de dados.' });
  }
});

// Rota para adicionar um item
app.post('/dados', async (req, res) => {
  const { nome, quantidade } = req.body;
  try {
    const novoItem = await Item.create({ nome, quantidade }); // Cria um novo item na tabela 'itens'
    res.status(201).json(novoItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao adicionar um novo item.' });
  }
});

// Rota para deletar um item específico
app.delete('/dados/:id', async (req, res) => {
  const itemId = req.params.id;
  try {
    await Item.destroy({ where: { id: itemId } }); // Deleta o item com o ID fornecido
    res.status(200).json({ message: 'Item deletado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar o item.' });
  }
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro no servidor!');
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor Express em execução na porta ${port}`);
});
