import Product from '../models/productModel';
import { IProductAtributes } from '../types/productTypes';

export class ProductService{
  async create(data: IProductAtributes): Promise<IProductAtributes>{
      const create = await Product.create({
        name: data.name,
        title: data.title,
        description: data.description,
        price: data.price
      });
      return create.toJSON() satisfies IProductAtributes;
  ;
  }
}