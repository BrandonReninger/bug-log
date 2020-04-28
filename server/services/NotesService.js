import {
    dbContext
} from "../db/DbContext";
import {
    BadRequest
} from "../utils/Errors";

class NotesService {
    async findAll(query) {
        try {
            let data = await dbContext.Notes.find(query)
            return data
        } catch (error) {

        }
    }
    async delete(id, email) {
        let data = await dbContext.Notes.findOneAndDelete({
            _id: id,
            creatorEmail: email
        })
        if (!data) {
            throw new BadRequest("not quite right")
        }
    }

    async getAll(id) {
        return await dbContext.Notes.find({
            _id: id
        }).populate(
            "creator",
            "name picture"
        );
    }
    async find(query = {}) {
        let note = await dbContext.Notes.find(query);
        if (!note) {
            throw new BadRequest("Invalid Id");
        }
        return note;
    }

    async create(rawData) {
        let note = await dbContext.Notes.create(rawData);
        if (!note) {
            throw new BadRequest("not quite right")
        }
        return note
    }

}

export const notesService = new NotesService();