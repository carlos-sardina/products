import React, { useEffect } from 'react'
import { getProducts, deleteProduct } from '../../services/products';
import { IProduct } from '../../interfaces';
import styled from '@emotion/styled'
import { Header } from '../../components';
import { useNavigate } from 'react-router-dom';

const List = styled.ul({
  listStyle: 'none',
  padding: 0,
})

export const ProductList = () => {
  const [products, setProducts] = React.useState<IProduct[]>([])
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(getProducts());
  }, [])

  const handleDelete = (id: string) => {
    deleteProduct(id);
    setProducts(getProducts());
  }

  return (
    <>
      <Header />
      <List>
        {
          products.map(product => (
            <li key={product.id}>
              <span>{product.name}</span>
              <span>${product.price}</span>
              <button onClick={() => navigate('/products/edit/' + product.id)}>Edit</button>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
              <button>Buy</button>
            </li>
          ))
        }
      </List>
    </>
  )
}
