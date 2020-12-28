export default function CartReducer(cart, action) {
  switch (action.type) {
    case "add":
      const { id, sku } = action;
      const itemsInCart = cart.find((s) => s.sku === sku);
      if (itemsInCart) {
        return cart.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...cart, { id, sku, quantity: 1 }];
      }
    case "updateQuantity": {
      const { sku, quantity } = action;
      return quantity === 0
        ? cart.filter((s) => s.sku !== sku)
        : cart.map((s) => (s.sku === sku ? { ...s, quantity } : s));
    }

    default:
      throw new Error("Unhandled Action", action.type);
  }
}
