const { Router } = require("express");

const usersRouter = require("./usersRoutes");
const notesRouter = require("./notesRouter");
const tagsRouter = require("./tagsRouter");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;