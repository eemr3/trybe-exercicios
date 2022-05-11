import { Request, Response, NextFunction, response } from 'express';

export default class ValidationUser {
  private validateName = (name: string) => {
    if (!name) return 'O nome é obrigatório';
    if (name.length < 3) return 'O nome tem que ter pelo menos 3 caractares';
  };

  private validateEmail = (email: string) => {
    if (!email) return 'O email é obrigatório';
    if (!email.includes('@') || !email.includes('.com'))
      return 'E-mail no formato incorreto';
  };

  private validatePassword = (password: string) => {
    if (!password) return 'O password é obrigatório';
    if (password.length < 6 || password.length > 12)
      return 'O password deve conter de 6 a 12 caracteres';
  };

  public validate = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void => {
    const { name, password, email } = req.body;
    const errorsName = this.validateName(name);
    const errorsPwd = this.validatePassword(password);
    const errorsEmail = this.validateEmail(email);

    if (errorsName) return res.status(400).json({ message: errorsName });
    if (errorsPwd) return res.status(400).json({ message: errorsPwd });
    if (errorsEmail) return res.status(400).json({ message: errorsEmail });

    next();
  };
}

/**
 *
 * Leonardo Nunes
 * Matheus Benini
 * Gefferson Batista
 * Max Miranda
 */
