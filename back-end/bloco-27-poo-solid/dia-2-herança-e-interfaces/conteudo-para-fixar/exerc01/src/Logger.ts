interface ILogger {
  log(parm: string): void;
}

interface DataBase {
  Logger: ILogger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements ILogger {
  log(parm: string): void {
    console.log(parm);
  }
}

class ConsoleLogger2 implements ILogger {
  log(parm: string): void {
    console.debug(parm);
  }
}

class ExampleDatabase implements DataBase {
  constructor(public Logger: ConsoleLogger) {}
  save(key: string, value: string): void {
    const param = `${key}: ${value}`;
    this.Logger.log(param);
  }
}

const log = new ConsoleLogger();

const obj1 = new ExampleDatabase(log);
obj1.save('name', 'João');
