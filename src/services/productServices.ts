import Product from '../models/productModel';
import { IProductAtributes } from '../types/productTypes';

export class ProductService {
  async create(data: IProductAtributes): Promise<IProductAtributes> {
    try {
      if (!data.name || !data.title || !data.description || !data.price) {
        console.log("Preencha todos os campos")
        throw new Error("Preencha todos os campos")
      }
      const create = await Product.create({
        name: data.name,
        title: data.title,
        description: data.description,
        price: data.price
      });
      return create.toJSON() satisfies IProductAtributes;
    } catch (error) {
      console.log("erro detalhado:", error)
      throw new Error;
    }
  }

  async getProductById(id: string): Promise<IProductAtributes> {
    try {
      if (!id) {
        console.log("Id não informado");
        throw new Error("Id não informado");
      }
      const getProduct = await Product.findByPk(id);
      if (!getProduct) {
        console.log("Produto não encontrado");
        throw new Error("Produto não encontrado");
      }
      return getProduct.toJSON() as IProductAtributes;
    } catch (error: any) {
      console.log("Erro detalhado:", error.message || error);
      throw new Error(error.message || "Erro ao buscar produto");
    }
  }

  async getAllProducts(): Promise<IProductAtributes[]> {
    try {
      const products = await Product.findAll();
      return products.map((product) => product.toJSON());
    } catch (error) {
      console.log("erro detalhado:", error)
      throw new Error;
    }
  }
}