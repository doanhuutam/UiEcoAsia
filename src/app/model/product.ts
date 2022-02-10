export class Product {
  id: number;
  name: string;
  img: string;
  price: string;
  npp: string;

  constructor(id: number, name: string, img: string, price: string, npp: string) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.npp = npp;
  }
}
