const mongoose = require('../config/database');
const mongoosePaginate = require('mongoose-paginate')

module.exports = function () {
    const DealsSchema = new mongoose.Schema(
        {
            numero: {
                type: Number,
            },
            idPedido: {
                type: Number,
            },
            organizationName: {
                type: String,
            },
            valueOrder: {
                type: Number,
            },
            wonTime: {
                type: Date,
            },
        },
        { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
    )

    DealsSchema.plugin(mongoosePaginate)

    let schemaModel = mongoose.model('deals-model', DealsSchema)

    return schemaModel
}