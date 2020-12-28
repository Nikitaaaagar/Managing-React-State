//Implementation without Reducer
// import React from "react";
// import "./App.css";
// import Header from "./Header";
// import Footer from "./Footer";
// import Products from "./Products";
// import { Routes, Route } from "react-router-dom";
// import Detail from "./Details";
// import Cart from "./Cart";

// export default function App() {
//   const [cart, setCart] = React.useState([]);

//   function setItemToCart(id, sku) {
//     setCart((items) => {
//       const itemsInCart = items.find((s) => s.sku === sku);
//       if (itemsInCart) {
//         return items.map((i) =>
//           i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       } else {
//         return [...items, { id, sku, quantity: 1 }];
//       }
//     });
//   }

//   function updateQuantity(sku, quantity) {
//     setCart((items) => {
//       return quantity === 0
//         ? items.filter((s) => s.sku !== sku)
//         : items.map((s) => (s.sku === sku ? { ...s, quantity } : s));
//     });
//   }

//   return (
//     <>
//       <div className="content">
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
//             <Route path="/:category" element={<Products />} />
//             <Route
//               path="/:category/:id"
//               element={<Detail setItemToCart={setItemToCart} />}
//             />
//             <Route
//               path="/cart"
//               element={<Cart cart={cart} updateQuantity={updateQuantity} />}
//             />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </>
//   );
// }

//Implementation using Reducer
import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Details";
import Cart from "./Cart";
import CartReducer from "./CardReducer";

export default function App() {
  let initialCartState = [];

  const [cart, dispatch] = React.useReducer(CartReducer, initialCartState);

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route
              path="/:category/:id"
              element={<Detail dispatch={dispatch} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} dispatch={dispatch} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
