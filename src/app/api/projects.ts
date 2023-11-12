import { Project } from "../models/Project";
import { client } from "../utils/contentful";

export const getProjects = async () => {
  return (await client.getEntries()).items.map(
    ({ fields }) => fields
  ) as unknown as Project[];
};
