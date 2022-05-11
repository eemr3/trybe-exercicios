import UsersModel from '../models/Users.model';
import IUsers from '../interfaces/User.interface';

export default class UsersService {
  public model = new UsersModel();

  public getAll = async (): Promise<IUsers[]> => {
    const users = await this.model.getAll();

    return users;
  };

  public getById = async (id: number): Promise<IUsers> => {
    const [user] = await this.model.getById(id);
    if (!user) throw new Error('Usuário não encontrado!');

    return user;
  };
  public createUser = async (
    name: string,
    password: string,
    email: string,
  ): Promise<IUsers> => {
    const userExist = await this.model.getByEmail(email);

    if (userExist.length > 0) throw new Error('Usuário já cadastrado');

    const user = await this.model.createUser(name, password, email);

    return user;
  };
}
