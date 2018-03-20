import { User } from "./../models/user";

import { HttpServer } from "../server/httpserver";
import { Request, Response } from "restify";

import { userService } from "./../services/user";
import { Controller } from "./controller";

export class UserController implements Controller {
  initialize(httpServer: HttpServer): void {
    httpServer.get("users", this.list.bind(this));
    httpServer.get("user/:id", this.getById.bind(this));
    httpServer.post("user/correct", this.userCorrect.bind(this));
    httpServer.post("user", this.create.bind(this));
    httpServer.put("user/:id", this.update.bind(this));
    httpServer.del("user/:id", this.remove.bind(this));
  }

  private async list(req: Request, res: Response): Promise<void> {
    res.send(await userService.list());
  }

  private async userCorrect(req: Request, res: Response): Promise<void> {
    const user = await userService.userCorrect(req.body);
    res.send(user);
  }

  private async getById(req: Request, res: Response): Promise<void> {
    const user = await userService.getById(req.params.id);
    res.send(user ? 200 : 404, user);
  }

  private async create(req: Request, res: Response): Promise<void> {
    res.send(await userService.create(req.body));
  }

  private async update(req: Request, res: Response): Promise<void> {
    const user = await userService.update(req.body);
    res.send(user);
  }

  private async remove(req: Request, res: Response): Promise<void> {
    res.send(userService.delete(req.params.id));
  }
}
