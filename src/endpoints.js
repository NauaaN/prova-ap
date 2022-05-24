import {dobro,somar,temperatura,passou,tabuada} from './services.js'
import { Router } from 'express'
import { report } from 'process';

const server= Router();

server.get('/dobro/:numero', (req, resp)=> 
{
    try{
        const number= Number(req.params.numero);

        const x= dobro(number);
        resp.send({
            dobro: x
        });
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        }
        )
    }
} )

server.get('/somar',(req,resp) =>{
    try{
        const number= Number(req.query.a);
        const number2= Number(req.query.b);

        const resposta= somar(number, number2)

        resp.send({
            somar: resposta
        });
}   catch(err){
            resp.status(404).send({
                erro: err.message
            })
        }
} )

server.get('/febre', (req,resp) =>{
    try{
        const febril= Number(req.query.a);

        const resposta= temperatura(febril);

        resp.send({
            febril: resposta
        });

    }catch(err){
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.get('/tabuada', (req, resp)=>{
    try{
    const tabu= Number(req.query.a);

    const resposta= tabuada(tabu);

    resp.send({
      tabuada: resposta
    })
} catch(err){
    resp.status(404).send({
        erro: err.message
    })
}
} )

server.post('/passou', (req,resp) =>{
    let n1= req.body.a;
    let n2= req.body.b;
    let n3= req.body.c;

    const resposta= passou(n1,n2,n3);

    resp.send({
        aprovado: resposta
    })

})




export default server;