class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: Array<string>;
  private _connectedTo: string = '';

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connection: Array<string>,
  ) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connection;
  }

  turnOn() {
    console.log(this._brand, this._size, this._resolution, this._connections);
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(con: string) {
    if (this._connections.includes(con)) {
      this._connectedTo = con;
    } else {
      console.log('Sorry, connection unavaliable');
    }
  }
}

const tv1 = new Tv('Samsung', 45, '4K', ['HDMI', 'USB', 'DVI']);

tv1.turnOn();
tv1.connectedTo = 'HDMI';
console.log(tv1.connectedTo);
