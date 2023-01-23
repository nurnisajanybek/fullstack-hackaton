// import React, { createContext, useContext, useReducer } from "react";
// import { useNavigate } from "react-router-dom";
// import { CART } from "../helpers/consts";
// import { calcSubPrice, calcTotalPrice, getCountProductsInCart } from "../helpers/functions";

// const cartContext = createContext();

// export const useCart = () => {
//     return useContext(cartContext)
// }


// const INIT_STATE = {
//     products: [],
//     pages: 0,
//     categories: [],
//   };
  
//   function reducer(state = INIT_STATE, action) {
//     switch (action.type) {
//       case "GET_PRODUCTS":
//         return {
//           ...state,
//           pages: Math.ceil(action.payload.count / 6),
//           products: action.payload.results,
//         };
//       case "GET_CATEGORIES":
//         return {
//           ...state,
//           categories: action.payload,
//         };
//       default:
//         return state;
//     }
//   }


//     const CartContextProvider = ({ children }) => {
//         const [state, dispatch] = useReducer(reducer, INIT_STATE);
//         const navigate = useNavigate();
      
//         async function getCategories() {
//           try {
//             // const token
//             const res = await axios(`${API}/category/list/`);
//             dispatch({ type: "GET_CATEGORIES", payload: res.data });
//           } catch (error) {
//             console.log(error);
//           }
//         }

   
     
        
//   async function addProductCart(newProduct) {
//     try {
//       const token = JSON.parse(localStorage.getItem("token"));
//       const Authorization = `Bearer ${token.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       const res = await axios.post(`${API}/products/`, newProduct, config);
//       console.log(res);
//       navigate("/products");
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   }



//   async function deleteProduct(id) {
//     try {
//       const token = JSON.parse(localStorage.getItem("token"));
//       const Authorization = `Bearer ${token.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       const res = await axios.delete(`${API}/products/${id}`, config);
//       getProducts();
//     } catch (error) {
//       console.log(error);
//     }
//   }

//     let values = {
//         addProductToCart,
//         deleteCartProduct,
  
//         getCart,
   
//         cart: state.cart,   
//     }
  
//     return <cartContext.Provider value={values} >{children}</cartContext.Provider>;
//   };


//   export default CartContextProvider;