import { IUser } from "../utils/user.interface";

export const fetchImages = async () => {
  return fetch("https://randomuser.me/api/?results=20")
    .then((response) => {
      return response.json();
    })
    .then((data: { results: IUser[] }) => {
      return data.results;
    });
};
