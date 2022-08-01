import mongoose from 'mongoose';

const options = {
  user: 'eemr3', // Usuário do banco de dados.
  pass: '123456', // senha do usuário do banco de dados.
  dbName: 'model_example',
};

const connection = (mongoDatabaseURI = 'mongodb://localhost:27017/') =>
  mongoose.connect(mongoDatabaseURI, options);

export default connection;
