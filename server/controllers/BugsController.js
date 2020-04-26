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
            .post("", this.create)
            .delete("/:id", this.delete)
    }
    async getAll(req, res, next) {
        try {
            let data = await bugsService.getAll();
            res.send({
                data: data,
                message: "got bugs"
            })
        } catch (error) {
            next(error);
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
            let data = await bugsService.create(req.body)
            res.send(data, "bug created!")
            //201 is success status
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            let bug = await bugsService.edit(req.params.id, req.userInfo.email, req.body)
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