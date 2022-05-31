import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    const userList = this.listAllUsersUseCase.execute({
      user_id: `${user_id}`,
    });

    return response.json(userList);
  }
}

export { ListAllUsersController };
