import AppError from "../../../../shared/AppError";
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
      throw new AppError({
        error: "User not found",
        statusCode: 400,
        category: "USER_NOT_FOUND",
      });
    }

    if (!validUser.admin) {
      throw new AppError({
        error: "User is not admin",
        statusCode: 400,
        category: "USER_NOT_ADMIN",
      });
    }

    const userList = this.usersRepository.list();
    return userList;
  }
}

export { ListAllUsersUseCase };
