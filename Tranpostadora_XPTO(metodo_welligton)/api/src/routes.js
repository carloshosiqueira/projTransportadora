const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const Funcionario = require('./controllers/funcionario');
const Rota = require('./controllers/rota');
const Entrega = require('./controllers/entrega')
const Veiculo = require('./controllers/veiculo');
const Pedido = require('./controllers/pedido');

routes.get('/', (req, res) => {
    res.json("API Transportadora XPTO 1.0")
});

//Funcionando
routes.post('/clientes', Cliente.addCliente);
routes.get('/clientes', Cliente.getClientes);
routes.get('/clientes/:id', Cliente.getClientes);
routes.put('/clientes', Cliente.updateCliente);
routes.delete('/clientes/:id', Cliente.deleteCliente);

//Funcionando
routes.post('/funcionarios', Funcionario.addFuncionario);
routes.get('/funcionarios', Funcionario.getFuncionario);
routes.get('/funcionarios/:id', Funcionario.getFuncionario);
routes.put('/funcionarios', Funcionario.updateFuncionario)
routes.delete('/funcionarios/:id', Funcionario.deleteFuncionario);

//Funcionando
routes.post('/rotas', Rota.addRota);
routes.get('/rotas', Rota.getRota);
routes.get('/rotas/:id', Rota.getRota);
routes.put('/rotas', Rota.updateRota);
routes.delete('/rotas/:id', Rota.deleteRota);

//Rever entrega
routes.post('/entregas', Entrega.addEntrega);
routes.get('/entregas', Entrega.getEntrega);
routes.get('/entregas/:id', Entrega.getEntrega);
routes.put('/entregas', Entrega.updateEntrega);
routes.delete('/entregas/:id', Entrega.deleteEntrega);

//Funcionando
routes.post('/veiculos', Veiculo.addVeiculo);
routes.get('/veiculos', Veiculo.getVeiculos);
routes.get('/veiculos/:placa', Veiculo.getVeiculos);
routes.put('/veiculos', Veiculo.updateVeiculo); // funciona contanto que não mude o nome da placa
routes.delete('/veiculos/:placa', Veiculo.deleteVeiculo);

//Funcionando
routes.post('/pedidos', Pedido.addPedido); 
routes.get('/pedidos', Pedido.getPedido);
routes.get('/pedidos/:id', Pedido.getPedido);
routes.put('/pedidos', Pedido.updatePedido);
routes.delete('/pedidos/:id', Pedido.deletePedido);




module.exports = routes;