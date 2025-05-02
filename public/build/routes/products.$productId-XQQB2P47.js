import "/build/_shared/chunk-Y4NXJOBT.js";
import {
  ArrowLeft,
  ShoppingCart
} from "/build/_shared/chunk-M36VVXTN.js";
import {
  useCart
} from "/build/_shared/chunk-GPZ4B5UU.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-RGYMCGNC.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZDVS5MMH.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/products.$productId.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/products.$productId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/products.$productId.tsx"
  );
  import.meta.hot.lastModified = "1746186726784.1318";
}
function ProductDetail() {
  _s();
  const {
    product
  } = useLoaderData();
  const {
    addItem
  } = useCart();
  if (!product) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Product not found" }, void 0, false, {
      fileName: "app/routes/products.$productId.tsx",
      lineNumber: 51,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/products", className: "inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "mr-1 h-4 w-4" }, void 0, false, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      "Back to Products"
    ] }, void 0, true, {
      fileName: "app/routes/products.$productId.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.image, alt: product.name, className: "object-center object-cover w-full h-full" }, void 0, false, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 px-4 sm:px-0 lg:mt-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-extrabold tracking-tight text-gray-900", children: product.name }, void 0, false, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "sr-only", children: "Product information" }, void 0, false, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl text-gray-900", children: [
            "$",
            product.price.toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "sr-only", children: "Description" }, void 0, false, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base text-gray-700", children: product.description }, void 0, false, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => addItem(product), className: "btn btn-primary flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingCart, { className: "mr-2 h-5 w-5" }, void 0, false, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this),
          "Add to Cart"
        ] }, void 0, true, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-gray-900", children: "Details" }, void 0, false, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 border-t border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "divide-y divide-gray-200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-3 flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500", children: "Category" }, void 0, false, {
                fileName: "app/routes/products.$productId.tsx",
                lineNumber: 89,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "text-sm text-gray-900 text-right", children: product.category }, void 0, false, {
                fileName: "app/routes/products.$productId.tsx",
                lineNumber: 90,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.$productId.tsx",
              lineNumber: 88,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-3 flex justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500", children: "SKU" }, void 0, false, {
                fileName: "app/routes/products.$productId.tsx",
                lineNumber: 93,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "text-sm text-gray-900 text-right", children: [
                "SKU-",
                product.id,
                "-",
                product.category.slice(0, 3).toUpperCase()
              ] }, void 0, true, {
                fileName: "app/routes/products.$productId.tsx",
                lineNumber: 94,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.$productId.tsx",
              lineNumber: 92,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.$productId.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$productId.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s(ProductDetail, "CuCWiWKKR1TuNcAhSyPb2+d/nuo=", false, function() {
  return [useLoaderData, useCart];
});
_c = ProductDetail;
var _c;
$RefreshReg$(_c, "ProductDetail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductDetail as default
};
//# sourceMappingURL=/build/routes/products.$productId-XQQB2P47.js.map
