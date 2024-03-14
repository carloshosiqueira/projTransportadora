const e = require('express');
const con = require('../connection/mysql');

//CRUD - CREATE
const addEntrega = (req, res) => {
    if (req.body != null && req.body.placa != null && req.body.motorista != null && req.body.idRota != null && req.body.inicio != null && req.body.fim != null  && req.body.status != null)  {
        const { placa, motorista, idRota, inicio, fim, status } = req.body;
        console.log(req.body)
        con.query('INSERT INTO entrega (placa, motorista, idRota, inicio, fim, status) VALUES (?, ?, ?, ?, ?, ?)', [placa, motorista, idRota, inicio, fim, status], (err, result) => {
            if (err) {
                res.status(500).json('Erro ao adicionar entrega');
                console.log(err, 'isso aqui é o console')
            } else {
                req.body.id = result.insertId;
                res.status(201).json(req.body);
            }
        });
    } else {
        console.log(req.body);
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - READ
const getEntrega = (req, res) => {
    if (req.params.id != null) {
        con.query('SELECT * FROM entrega WHERE idEntrega ='+req.params.id, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar entrega');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM Entrega', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar a entregas');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateEntrega = (req, res) => {
    if (req.body != null && req.body.id != null && req.body.placa != null && req.body.motorista != null && req.body.idRota != null && req.body.inicio != null && req.body.fim != null  && req.body.status != null) {
        const { id, placa, motorista, idRota, inicio, fim, status } = req.body;
        console.log(id) //pegando todos os dados
        con.query('UPDATE Entrega SET placa = ?, motorista = ?, idRota = ?, inicio = ?, fim = ?, status = ? WHERE idEntrega = ?', [placa, motorista, idRota, inicio, fim, status, id ], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(202).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - DELETE
const deleteEntrega = (req, res) => {
    if (req.params != null && req.params.id != null) {
        const { id } = req.params;
        con.query('DELETE FROM entrega WHERE idEntrega = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Entrega não encontrada');
                } else {
                    res.status(200).json('Entrega removida com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}


module.exports = {
    addEntrega,
    getEntrega,
    updateEntrega,
    deleteEntrega
}