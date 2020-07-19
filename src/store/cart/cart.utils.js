export const addItemToCart = (cartItems, cartItemToAdd) => {
  let existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToAdd.id)
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      return cartItem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
  cartItems.filter((item) => item.id !== cartItemToRemove.id);
