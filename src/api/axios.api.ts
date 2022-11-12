import axios from "axios";
import { User } from "../store/reuducers/users.slice";
export const axiosApi = axios.create({
  baseURL: "http://localhost:3001",
});

export interface MakeUserData {
  name: string;
  surname: string;
  age: string;
  email: string;
  country: string;
}

export class UsersApi {
  static async getUsers(page: number, itemsCount: number) {
    return await axiosApi.get<User[]>(
      `/users?_page=${page}&_limit=${itemsCount}`
    );
  }

  static async makeUser({ name, surname, age, email, country }: MakeUserData) {
    return await axiosApi.post(`/users`, {
      name,
      surname,
      age,
      email,
      country,
    });
  }
}
