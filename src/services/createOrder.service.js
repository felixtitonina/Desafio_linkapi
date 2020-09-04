const jsontoxml = require('jsontoxml');
const helper = require('./helper.request.service')

module.exports = {
    async generate(dealsPipeDrive) {
        const ordersWon = dealsPipeDrive.map(async (deal) => {
            const xmlConverted = jsontoxml({
                pedido: [
                    {
                        name: 'cliente',
                        children: [
                            { name: 'nome', text: deal.org_id.name }
                        ]
                    },
                    {
                        name: 'itens',
                        children: [
                            {
                                name: 'item',
                                children: [
                                    { name: 'codigo', text: deal.id },
                                    { name: 'descricao', text: 'oportunidade' },
                                    { name: 'qtde', text: 1 },
                                    { name: 'vlr_unit', text: deal.value }
                                ]
                            }
                        ]
                    }
                ]
            })
            let url = `${process.env.URL_BLING}/pedido/json?apikey=${process.env.KEY_BLING}&xml=${xmlConverted}`
            let postOrderBling = await helper.createPostRequest(url)

            if (postOrderBling.body) {
                let newPostOrder = JSON.parse(postOrderBling.body)
                if (newPostOrder.retorno.erros || newPostOrder.retorno.erros != undefined) {
                    const pedido = {
                        cod: newPostOrder.retorno.erros[0].erro.cod,
                        msg: newPostOrder.retorno.erros[0].erro.msg
                    }
                    return pedido
                } else {

                    const pedido = newPostOrder.retorno.pedidos[0].pedido

                    pedido.valueOrder = deal.value;
                    delete pedido.codigos_rastreamento;
                    delete pedido.volumes;
                    pedido.organizationName = deal.org_id.name;
                    pedido.wonTime = deal.won_time;

                    return pedido
                }
            }
            else {
                return postOrderBling.data.retorno.erros[0]
            }

        })
        const allOders = Promise.all(ordersWon).then((values) => {
            return values
        })

        return allOders
    }

}