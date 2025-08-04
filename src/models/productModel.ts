import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.UUID,           
    defaultValue: DataTypes.UUIDV4, 
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: "products",
  timestamps: true,
});

export default Product;
