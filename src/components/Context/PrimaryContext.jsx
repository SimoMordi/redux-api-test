import { createContext } from 'react';
import useFetchProducts from '../Products/useFetchProducts';

// create context
const ProductContext = createContext();

// create provider component
const PrimaryProvider = ({ children }) => {
    const { products } = useFetchProducts();
  

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};


export { PrimaryProvider, ProductContext};
