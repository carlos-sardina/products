import { IProduct } from '../interfaces';

export const getProducts = () => {
  const products = localStorage.getItem('products') || '[]';
  return JSON.parse(products);
}

export const saveProduct = (product: IProduct) => {
  const products = getProducts();
  localStorage.setItem('products', JSON.stringify([...products, product]));
}

export const deleteProduct = (id: string) => {
  const products = getProducts();
  localStorage.setItem('products', JSON.stringify(products.filter((product: IProduct) => product.id !== id)));
}

export const updateProduct = (product: IProduct) => {
  const products = getProducts();
  localStorage.setItem('products', JSON.stringify(products.map((p: IProduct) => p.id === product.id ? product : p)));
}

export const getProductById = (id: string) => {
  const products = getProducts();
  return products.find((product: IProduct) => product.id === id);
}