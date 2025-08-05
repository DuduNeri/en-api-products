import type { IProductAtributes } from '../types/productTypes';
import { ProductService } from './../services/productServices';

export class ProductController {
  
  async create(data: IProductAtributes){
      return new ProductService().create(data);
  }

  async getProduct(id: string){
    return new ProductService().getProductById(id);
  }

 async getAll(){
    return new ProductService().getAllProducts();
 }

}