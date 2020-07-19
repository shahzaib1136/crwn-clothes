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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  let existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1)
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  else
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToRemove.id && cartItem.quantity > 0)
        return { ...cartItem, quantity: cartItem.quantity - 1 };

      return cartItem;
    });
};
