import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const user = this.usersRepository.create({ email, name });
    const userAlreadyExist = this.usersRepository.findByEmail(email);
    if (userAlreadyExist) {
      throw new Error("User already exist");
    }
    return user;
  }
}

export { CreateUserUseCase };
