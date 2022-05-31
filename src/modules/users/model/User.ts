import { v4 as uuid } from "uuid";

class User {
  name: string;
  email: string;
  admin: boolean;
  id: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
    if (!this.updated_at) {
      this.updated_at = new Date();
    }
    if (!this.admin) {
      this.admin = false;
    }
  }
}

export { User };
