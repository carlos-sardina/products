import React, { useEffect } from 'react'
import { saveProduct, getProductById, updateProduct } from '../../services/products';
import { IProduct } from '../../interfaces';
import styled from '@emotion/styled'
import { Header } from '../../components';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const Form = styled.div({
  display: 'flex',
})

export const ProductForm = () => {
  const [productName, setProductName] = React.useState('')
  const [productPrice, setProductPrice] = React.useState('')
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = id;

  useEffect(() => {
    if (isEdit) {
      const product = getProductById(id);
      setProductName(product.name);
      setProductPrice(product.price);
    }} , [id, isEdit]);

  const handleSubmit = () => {
    const product: IProduct = {
      id: !isEdit ? uuidv4() : id,
      name: productName,
      price: Number(productPrice)
    }
    
    !isEdit ? saveProduct(product) : updateProduct(product);
    navigate('/products/list');
    console.log('saved', product);
  }

  return (
    <>
      <Header />
      <Form>
        <input type="text" placeholder='Product name' value={productName} onChange={(e) => setProductName(e.target.value)} />
        <input type="number" placeholder='Product price' value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        <button onClick={() => handleSubmit()}>{isEdit ? 'Update' : 'Create'}</button>
      </Form>
    </>
  )
}
