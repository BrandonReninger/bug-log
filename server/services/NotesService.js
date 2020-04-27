import {
    dbContext
} from "../db/DbContext";
import {
    BadRequest
} from "../utils/Errors";

class NotesService {
    async getAll(id) {
        return await dbContext.Notes.find({
            _id: id
        }).populate(
            "creator",
            "name picture"
        );
    }
    async findById(id) {
        let note = await dbContext.Notes.findById(id);
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