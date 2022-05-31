interface IAppErrorProps {
  error: string;
  category: string;
  messages?: Record<string, unknown>;
  statusCode?: number;
}

class AppError {
  public readonly error: string;

  public readonly category: string;

  public readonly messages: Record<string, unknown>;

  public readonly statusCode: number;

  constructor({
    error,
    category,
    messages = {},
    statusCode = 400,
  }: IAppErrorProps) {
    this.error = error;
    this.category = category;
    this.messages = messages;
    this.statusCode = statusCode;
  }
}

export default AppError;
