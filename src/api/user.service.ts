import { fetchImages } from "./fetch.service";
import { parseUsers } from "../utils/user.parser";

export const getUserData = async () => {
  return parseUsers(await fetchImages());
};
