import express from "express";
import BaseController from "../utils/BaseController";
import {
    valuesService
} from "../services/ValuesService";
import auth0Provider from "@bcwdev/auth0provider";
import {
    bugsService
} from "../services/BugsService"

export class BugsController extends BaseController {
    constructor() {
        super("api/bugs");
        this.router
            .use(auth0Provider.getAuthorizedUserInfo)
            .get("", this.getAll)
            .get("/:id", this.getById)
            .put("/:id", this.edit)
            .post("", this.create);
    }
    async getAll(req, res, next) {
        try {
            return res.send(["value1", "value2"]);
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            let bug = await bugsService.getById(req.params.id, req.userInfo.email)
            return res.send(bug)
        } catch (error) {
            console.error(error)
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

    async edit(req, res, next) {
        try {
            let bug = await bugsService.edit()
        } catch (error) {
            console.error(error)
        }
    }

}