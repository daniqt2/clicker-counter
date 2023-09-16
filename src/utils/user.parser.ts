import { IUser } from "./user.interface";

export const parseUsers = (rawData: any): IUser[] => {
  console.log(rawData);
  return rawData.map((user: any, index: number) => ({
    name: `${user.name.first} ${user.name.last}`,
    id: `${user.id.value}-${index}`,
    email: user.email,
    phone: user.phone,
    picture: user.picture.large,
  }));
};
