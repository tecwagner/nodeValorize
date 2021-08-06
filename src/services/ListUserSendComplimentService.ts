import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { getCustomRepository } from "typeorm";

class ListUserSendComplimentService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    );
    const compliments = await complimentsRepositories.find({
      where: {
        user_sender: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return compliments;
  }
}

export { ListUserSendComplimentService };
