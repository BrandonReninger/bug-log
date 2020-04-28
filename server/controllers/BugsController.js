import express from "express";
import BaseController from "../utils/BaseController";
import {
    valuesService
} from "../services/ValuesService";
import auth0Provider from "@bcwdev/auth0provider";
import {
    bugsService
} from "../services/BugsService"
import {
    notesService
} from "../services/NotesService";

export class BugsController extends BaseController {
    constructor() {
        super("api/bugs");
        this.router
            .use(auth0Provider.getAuthorizedUserInfo)
            .get("", this.getAll)
            .get("/:id", this.getById)
            .get("/:id/notes", this.getNotesByBugId)
            .put("/:id", this.edit)
            .post("", this.create)
            .post('/:id/notes', this.postNote)
            .delete("/:id", this.delete)
        //.delete("/:id/notes/:id")
    }
    async getAll(req, res, next) {
        try {
            let data = await bugsService.getAll();
            return res.status(201).send(data)
        } catch (error) {
            next(error);
        }
    }

    async postNote(req, res, next) {
        try {
            req.body.creatorEmail = req.userInfo.email
            let data = await notesService.create(req.body)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async getNotesByBugId(req, res, next) {
        try {
            let bug = await notesService.find({
                bugId: req.params.id
            })
            res.send(bug)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            let bug = await bugsService.getById(req.params.id)
            return res.send(bug)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
            req.body.creatorEmail = req.userInfo.email
            let bug = await bugsService.create(req.body)
            res.send({
                data: bug,
                message: "post created"
            })
            //201 is success status
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            let bug = await bugsService.edit(req.params.id, req.body)
            return res.send(bug)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            let bug = await bugsService.delete(req.params.id)
            res.send("successfully deleted")
        } catch (error) {

        }
    }

}