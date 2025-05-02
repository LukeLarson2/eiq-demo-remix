import {
  getProducts
} from "/build/_shared/chunk-Y4NXJOBT.js";
import {
  ShoppingCart
} from "/build/_shared/chunk-M36VVXTN.js";
import {
  useCart
} from "/build/_shared/chunk-GPZ4B5UU.js";
import {
  Link
} from "/build/_shared/chunk-RGYMCGNC.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZDVS5MMH.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/products._index.tsx
var import_react2 = __toESM(require_react(), 1);

// app/components/ProductCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ProductCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ProductCard.tsx"
  );
  import.meta.hot.lastModified = "1746186726794.1318";
}
function ProductCard({
  product,
  onAddToCart
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-card animate-fade-in", style: {
    animationDelay: `${parseInt(product.id) * 100}ms`
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-48 w-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.image, alt: product.name, className: "h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105" }, void 0, false, {
      fileName: "app/components/ProductCard.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ProductCard.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ProductCard.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors", children: product.name }, void 0, false, {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: product.description }, void 0, false, {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-medium text-gray-900", children: [
          "$",
          product.price.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/ProductCard.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onAddToCart, className: "inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingCart, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this),
          "Add to Cart"
        ] }, void 0, true, {
          fileName: "app/components/ProductCard.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductCard.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProductCard.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = ProductCard;
var _c;
$RefreshReg$(_c, "ProductCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/products._index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/products._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/products._index.tsx"
  );
  import.meta.hot.lastModified = "1746186726784.1318";
}
function ProductsIndex() {
  _s();
  const {
    addItem
  } = useCart();
  const products = getProducts();
  const [filter, setFilter] = (0, import_react2.useState)("");
  const filteredProducts = filter ? products.filter((product) => product.category === filter) : products;
  const categories = Array.from(new Set(products.map((p) => p.category)));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-bold text-gray-900", children: "Products" }, void 0, false, {
        fileName: "app/routes/products._index.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-gray-700", children: "Filter by:" }, void 0, false, {
          fileName: "app/routes/products._index.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("select", { value: filter, onChange: (e) => setFilter(e.target.value), className: "form-input", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: "", children: "All Categories" }, void 0, false, {
            fileName: "app/routes/products._index.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: category, children: category }, category, false, {
            fileName: "app/routes/products._index.tsx",
            lineNumber: 42,
            columnNumber: 41
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/products._index.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products._index.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products._index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3", children: filteredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductCard, { product, onAddToCart: () => addItem(product) }, product.id, false, {
      fileName: "app/routes/products._index.tsx",
      lineNumber: 48,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/routes/products._index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products._index.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(ProductsIndex, "9A/6xxXE0SM4749WXXGCd/ngETE=", false, function() {
  return [useCart];
});
_c2 = ProductsIndex;
var _c2;
$RefreshReg$(_c2, "ProductsIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductsIndex as default
};
//# sourceMappingURL=/build/routes/products._index-653I5SWA.js.map
