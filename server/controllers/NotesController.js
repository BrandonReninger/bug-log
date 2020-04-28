import express from "express";
import BaseController from "../utils/BaseController";
import {
    valuesService
} from "../services/ValuesService";
import auth0Provider from "@bcwdev/auth0provider";
import {
    notesService
} from "../services/NotesService"

export class NotesController extends BaseController {
    constructor() {
        super("api/notes");
        this.router
            .use(auth0Provider.getAuthorizedUserInfo)
            //.get("", this.getAll)
            .get("/:id", this.findAll)
            // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
            //.post("", this.create)
            .delete("/:id", this.delete)
    }
    async findAll(req, res, next) {
        try {
            let notes = notesService.findAll({
                bugId: req.params.id
            })
            return res.send(notes)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
            req.body.creator = req.user.email;
            let note = notesService.create(req.body)
            return res.status(201).send(note)
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            await notesService.delete(req.params.id, req.userInfo.email)
            return res.send("deleted!")
        } catch (error) {
            next(error)
        }
    }

}