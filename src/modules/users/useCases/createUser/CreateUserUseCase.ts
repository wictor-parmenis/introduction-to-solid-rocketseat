import AppError from "../../../../shared/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExist = this.usersRepository.findByEmail(email);
    if (userAlreadyExist) {
      throw new AppError({
        error: "User already exist",
        statusCode: 400,
        category: "USER_ALREADY_EXIST",
      });
    }
    const user = this.usersRepository.create({ email, name });
    return user;
  }
}

export { CreateUserUseCase };
