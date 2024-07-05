import mysql from "mysql2"
import config from "../config.js"
import PedidosModel from "../../pedidos_loja_doces/src/model/PedidosModel.js"

class PedidoModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(nome_cliente){
        let sql = `INSERT INTO pedidos (nome_pedido,id_cliente) VALUES("${nome_cliente}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"cliente inserido"])
            })
        });
    }

    read(){
        let sql = `SELECT * FROM pedidos ;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }
    update(id_cliente,nome_cliente){
        let sql = `UPDATE clientes SET nome_cliente="${nome_cliente}" WHERE id_cliente="${id_cliente}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Atualizado"])
            })
        });
    }
    delete(id_cliente){
        let sql = `DELETE FROM clientes WHERE id_cliente="${id_cliente}"`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Deletado"])
            })
        });
    }
}

export default new PedidosModel();