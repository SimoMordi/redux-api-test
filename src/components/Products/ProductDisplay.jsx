import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/ProductSlice';



const ProductDisplay = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProducts(response.data));  // Dispatching data to the store
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  // Render based on the local `loading` and `error` states
  
  return (
    <div className="productDisplay">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {/* Additional render logic here... */}
    </div>
  );
};

export default ProductDisplay;
