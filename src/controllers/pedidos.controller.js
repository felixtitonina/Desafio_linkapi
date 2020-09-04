// const { apiPipedrive, apiBling } = require('../services/api.external.service');
const helper = require('../services/helper.request.service')
const createOrders = require('../services/createOrder.service')
const dealService = require('../services/deal.service')

module.exports = {
    async integrationOrderWon(req, res) {
        try {
            let url = `${process.env.URL_PIPEDRIVE}/deals?status=${process.env.STATUS}&start=0&api_token=${process.env.TOKEN_PIPEDRIVE}`
            const dealsWithStatusWon = await helper.createRequestGet(url)

            let data = JSON.parse(dealsWithStatusWon.body)
            const deals = data.data;

            const orders = await createOrders.generate(deals)
            function removeItem(arr, refId) {
                return arr.filter(function (i) { return i.cod !== refId; });
            };
            let remover = orders
            let onlyWon = await removeItem(remover, 30)
            if (onlyWon.length != 0) {
                await dealService.registerDeal(onlyWon)
            }
            return res.status(201).json(orders)

        } catch (error) {
            return res.status(500).json(error.stack)
        }

    },

    async finAllOrderWon(req, res) {
        try {
            let { page, limit, wonTime, numero, idPedido } = req.query

            let consolidated = await dealService.consolidated(page, limit, wonTime, numero, idPedido)

            return res.status(200).json(consolidated)

        } catch (error) {
            return res.status(500).json(error.stack)
        }

    },
    async findDate(req, res) {
        try {
            let { date } = req.query

            let consulta = await dealService.getDeal(date)
            let ret = await consulta

            return res.status(200).json(ret)

        } catch (error) {
            res.send(error.stack)

        }
    }

}