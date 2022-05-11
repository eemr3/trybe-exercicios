import { Model, INTEGER, STRING, DECIMAL } from 'sequelize';
import db from '.';

class Books extends Model {
  id!: number;
  title!: string;
  price!: number;
  author!: string;
  isbn!: string;
}

Books.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    price: {
      type: DECIMAL,
      allowNull: false,
    },
    author: {
      type: STRING,
      allowNull: false,
    },
    isbn: {
      type: STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'books',
    timestamps: false,
  },
);

export default Books;
