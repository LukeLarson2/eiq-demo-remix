import {
  createHotContext
} from "/build/_shared/chunk-ZDVS5MMH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/context/CartContext.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/context/CartContext.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/CartContext.tsx"
  );
  import.meta.hot.lastModified = "1746187567104.1323";
}
var CartContext = (0, import_react.createContext)(void 0);
var initialState = {
  items: [],
  total: 0,
  itemCount: 0
};
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
function calculateItemCount(items) {
  return items.reduce((count, item) => count + item.quantity, 0);
}
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      let updatedItems;
      if (existingItemIndex >= 0) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
      } else {
        updatedItems = [...state.items, {
          ...action.payload,
          quantity: 1
        }];
      }
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        itemCount: calculateItemCount(updatedItems)
      };
    }
    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        itemCount: calculateItemCount(updatedItems)
      };
    }
    case "UPDATE_QUANTITY": {
      const {
        id,
        quantity
      } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, {
          type: "REMOVE_ITEM",
          payload: id
        });
      }
      const updatedItems = state.items.map((item) => item.id === id ? {
        ...item,
        quantity
      } : item);
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        itemCount: calculateItemCount(updatedItems)
      };
    }
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}
function CartProvider({
  children
}) {
  _s();
  const [state, dispatch] = (0, import_react.useReducer)(cartReducer, initialState);
  const [isLoaded, setIsLoaded] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      for (const item of parsed.items) {
        dispatch({
          type: "ADD_ITEM",
          payload: item
        });
      }
    }
    setIsLoaded(true);
  }, []);
  (0, import_react.useEffect)(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(state));
    }
  }, [state, isLoaded]);
  const addItem = (product) => dispatch({
    type: "ADD_ITEM",
    payload: product
  });
  const removeItem = (id) => dispatch({
    type: "REMOVE_ITEM",
    payload: id
  });
  const updateQuantity = (id, quantity) => dispatch({
    type: "UPDATE_QUANTITY",
    payload: {
      id,
      quantity
    }
  });
  const clearCart = () => dispatch({
    type: "CLEAR_CART"
  });
  if (!isLoaded)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartContext.Provider, { value: {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  }, children }, void 0, false, {
    fileName: "app/context/CartContext.tsx",
    lineNumber: 144,
    columnNumber: 10
  }, this);
}
_s(CartProvider, "LzNaNp0NvbFzzhDwnhtLJMh6SdA=");
_c = CartProvider;
function useCart() {
  _s2();
  const context = (0, import_react.useContext)(CartContext);
  if (context === void 0) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
_s2(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
$RefreshReg$(_c, "CartProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CartProvider,
  useCart
};
//# sourceMappingURL=/build/_shared/chunk-GPZ4B5UU.js.map
