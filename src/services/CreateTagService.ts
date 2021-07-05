import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {
  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error("Nome não econtrado!");
    }

    const tagsAlreadyExists = await tagsRepository.findOne({ name });

    if (tagsAlreadyExists) {
      throw new Error("Tag já existente!");
    }

    const tags = await tagsRepository.create({ name });

    await tagsRepository.save(tags);

    return tags;
  }
}

export { CreateTagService };
