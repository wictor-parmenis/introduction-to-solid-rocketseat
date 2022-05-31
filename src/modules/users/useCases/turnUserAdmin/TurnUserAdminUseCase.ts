import AppError from "../../../../shared/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new AppError({
        error: "User not found",
        statusCode: 404,
        category: "USER_NOT_FOUND",
      });
    }
    user.admin = true;
    return user;
  }
}

export { TurnUserAdminUseCase };
