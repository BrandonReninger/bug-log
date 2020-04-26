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
            .get("", this.getAll)
            // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
            .post("", this.create);
    }
    async getAll(req, res, next) {
        try {
            let notes = notesService.getAll()
            res.send({
                data: notes,
                message: "created note!"
            })
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
            req.body.creator = req.user.email;
            res.send(req.body);
        } catch (error) {
            next(error);
        }
    }
}