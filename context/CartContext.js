"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.find((item) => item.id === action.payload.id);

      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: action.payload.quantity,
            }
          : item,
      );

    case "CLEAR_CART":
      return [];

    case "LOAD_CART":
      return action.payload;

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  /* Load cart */

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");

      if (savedCart) {
        dispatch({
          type: "LOAD_CART",

          payload: JSON.parse(savedCart),
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  /* Save cart */

  useEffect(() => {
    try {
      localStorage.setItem(
        "cart",

        JSON.stringify(cart),
      );
    } catch (error) {
      console.log(error);
    }
  }, [cart]);

  /* Actions */

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",

      payload: product,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",

      payload: id,
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);

      return;
    }

    dispatch({
      type: "UPDATE_QUANTITY",

      payload: {
        id,
        quantity,
      },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  /* Derived values */

  const cartCount = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.quantity,

      0,
    );
  }, [cart]);

  const cartTotal = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,

      0,
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,

        addToCart,

        removeFromCart,

        updateQuantity,

        clearCart,

        cartCount,

        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
