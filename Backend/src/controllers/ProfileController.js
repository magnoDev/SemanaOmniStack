const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization;

        const indicentes = await connection('incidentes')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(indicentes);
    },
}