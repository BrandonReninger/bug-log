import {
    dbContext
} from "../db/DbContext";
import {
    BadRequest
} from "../utils/Errors";

class BugsService {
    async getAll() {
        let bugs = await dbContext.Bugs.find().populate(
            "creator",
            "name picture"
        );
        return bugs;
    }
    async getById(id) {
        let res = await dbContext.Bugs.findOne({
            _id: id
        });
        if (!res) {
            throw new BadRequest("Invalid Id");
        }
        return res;
    }

    async create(rawData) {
        let bug = await dbContext.Bugs.create(rawData)
        return bug
    }

    async delete(id, userEmail) {
        let res = await dbContext.Bugs.findOneAndRemove({
            _id: id,
            creatorEmail: userEmail
        })
        if (!res) {
            throw new BadRequest("Invalid id, this is not your bug!")
        }
    }

    async edit(id, userEmail, update) {
        let data = await dbContext.Bugs.findOneAndUpdate({
            _id: id,
            creatorEmail: userEmail
        }, update, {
            new: true
        })
        if (!data) {
            throw new BadRequest("Invalid id, this is not your bug!")
        }
        return data
    }

}

export const bugsService = new BugsService();