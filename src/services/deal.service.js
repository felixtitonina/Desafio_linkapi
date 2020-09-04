const DealModel = require('../models/deals.schema')();

module.exports = {

    async registerDeal(orders) {
        const insertDeal = await orders.map(async (order) => {
            await DealModel.create(order)
        }
        )
        return insertDeal
    },

    async consolidated(page, limit, wonTime, numero, idPedido) {
        limit = parseInt(limit)
        let query = {}

        if (wonTime) {
            query['wonTime'] = wonTime
        }

        if (numero) {
            query['numero'] = numero
        }

        if (idPedido) {
            query['idPedido'] = idPedido
        }
        
        let consulta = await DealModel.paginate(query, { page: page || 1, limit: limit || 10 })

        return consulta

    },
    async getDeal(dateGte) {
        let gte = new Date(dateGte)
        let lt = new Date(dateGte)
        gte.setDate(gte.getDate())
        lt.setDate(lt.getDate() + 1)
        var query = {

            date: {
                $gte: gte,
                $lt: lt
            }
        };
        let ret = await DealModel.find({ "wonTime": query.date })
        let total = ret.reduce((total, valor) => total + valor.valueOrder, 0)
        let data = {
            data: ret,
            consolidatedDay: total
        }
        return data
    }
}


