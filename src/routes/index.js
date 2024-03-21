const { Router } = require("express");

const usersRouter = require("./usersRoutes");
const usersNotes = require("./notesRoutes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/notes", usersNotes);


module.exports = routes;