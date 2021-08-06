import { TagsRepositories } from "../repositories/TagsRepositories";
import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);
    const tags = await tagsRepositories.find();

    // tags = tags.map((tag) => ({ ...tag, nameCustom: `#${tag.name}` }));

    return classToPlain(tags);
  }
}

export { ListTagsService };
