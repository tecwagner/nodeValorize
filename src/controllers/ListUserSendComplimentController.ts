import { Request, Response } from "express";
import { ListUserSendComplimentService } from "../services/ListUserSendComplimentService";

class ListUserSendComplimentController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendComplimentsService = new ListUserSendComplimentService();

    const compliments = await listUserSendComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserSendComplimentController };
