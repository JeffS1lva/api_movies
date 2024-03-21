const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class NotesController {

    async create(request, response) {
        const { title, description, rating, tags } = request.body
        const user_id  = request.user.id

        if (rating < 0 || rating > 5) {
            throw new AppError("A nota deve ser entre 0 e 5.");
        }

        const [note_id] = await knex('notes').insert({
            title,
            description,
            rating,
        })

        const tagsInsert = tags.map((name) => {
            return {
                note_id,
                user_id,
                name
            }
        })

        await knex('tags').insert(tagsInsert)

        return response.json()
    }

    
}

module.exports = NotesController