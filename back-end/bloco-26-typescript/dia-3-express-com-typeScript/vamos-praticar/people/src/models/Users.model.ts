import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUsers from '../interfaces/User.interface';

export default class UsersModel {
  public getAll = async (): Promise<IUsers[]> => {
    const [users] = await connection.execute(
      'SELECT id, name, email FROM people_db.Users',
    );

    return users as IUsers[];
  };

  public getById = async (id: number): Promise<IUsers[]> => {
    const [user] = await connection.execute('SELECT * FROM people_db.Users WHERE id=?', [
      id,
    ]);
    return user as IUsers[];
  };

  public getByEmail = async (email: string): Promise<IUsers[]> => {
    const [user] = await connection.execute(
      'SELECT * FROM people_db.Users WHERE email=?',
      [email],
    );
    return user as IUsers[];
  };

  public createUser = async (
    name: string,
    password: string,
    email: string,
  ): Promise<IUsers> => {
    const [user] = await connection.execute<ResultSetHeader>(
      'INSERT INTO people_db.Users (name, password, email) VALUES(?,?,?)',
      [name, password, email],
    );

    return {
      id: user.insertId,
      name,
      password,
      email,
    };
  };
}
