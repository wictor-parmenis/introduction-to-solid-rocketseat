import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const validUser = this.usersRepository.findById(user_id);
    if (!validUser) {
      throw new Error("User not found");
    }

    const userList = this.usersRepository.list();
    return userList;
  }
}

export { ListAllUsersUseCase };
