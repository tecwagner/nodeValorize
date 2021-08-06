import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ListTagsController } from "./controllers/ListTagsController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplimentController } from "./controllers/ListUserSendComplimentController";
import { ListUserReceiveComplimentController } from "./controllers/ListUserReceiveComplimentController";

const router = Router();

const authenticateUserController = new AuthenticateUserController();

const createUserController = new CreateUserController();
const listUserController = new ListUsersController();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController =
  new ListUserSendComplimentController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentController();

//Login
router.post("/login", authenticateUserController.handle);

//Users
router.post("/api/users", ensureAuthenticated, createUserController.handle);
router.get("/api/users", ensureAuthenticated, listUserController.handle);

//Tags
router.post(
  "/api/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.get("/api/tags", ensureAuthenticated, listTagsController.handle);

//Compliments
router.post(
  "/api/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);
router.get(
  "/api/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);
router.get(
  "/api/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);

export { router };
