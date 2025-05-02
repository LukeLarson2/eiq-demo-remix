import {
  ClientOnly,
  ExemptionIqClient
} from "/build/_shared/chunk-GVQWZBSV.js";
import {
  ArrowLeft,
  ArrowRight,
  Trash2
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

// app/routes/cart.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/cart.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/cart.tsx"
  );
  import.meta.hot.lastModified = "1746204309332.0642";
}
function Cart() {
  _s();
  const {
    state,
    updateQuantity,
    removeItem
  } = useCart();
  const [exemptionComplete, setExemptionComplete] = (0, import_react2.useState)(false);
  const taxRate = 0.08;
  const subtotal = state.total;
  const tax = exemptionComplete ? 0 : subtotal * taxRate;
  const total = subtotal + tax;
  const handleExemptionComplete = (status) => {
    setExemptionComplete(status);
    return true;
  };
  const customerInfo = {
    name: "Acme Corporation",
    emailAddress: "purchasing@acmecorp.example",
    addressLine1: "123 Business Ave",
    phoneNumber: "555-123-4567",
    city: "Orlando",
    country: "USA",
    postalCode: "32801",
    region: "FL"
  };
  const buttonStyles = JSON.stringify({
    width: "100%",
    height: "fit"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:flex md:items-center md:justify-between mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-gray-900", children: "Shopping Cart" }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/products", className: "text-blue-600 hover:text-blue-700 inline-flex items-center mt-2 md:mt-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "mr-1 h-4 w-4" }, void 0, false, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        "Continue Shopping"
      ] }, void 0, true, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    state.items.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-gray-900", children: "Your cart is empty" }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-gray-500", children: "Looks like you haven't added any products to your cart yet." }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/products", className: "btn btn-primary", children: "View Products" }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 79,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 71,
      columnNumber: 37
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:grid lg:grid-cols-12 lg:gap-x-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 divide-y divide-gray-200", children: state.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-6 flex animate-fade-in", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.image, alt: item.name, className: "w-full h-full object-center object-cover" }, void 0, false, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 88,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 87,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex-1 flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: item.name }, void 0, false, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 94,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ml-4", children: [
                "$",
                (item.price * item.quantity).toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 95,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 93,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: item.category }, void 0, false, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 99,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 92,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex items-end justify-between text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => updateQuantity(item.id, item.quantity - 1), className: "text-gray-500 p-1 border border-gray-300 rounded", children: "-" }, void 0, false, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 106,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-800 font-medium", children: item.quantity }, void 0, false, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 110,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => updateQuantity(item.id, item.quantity + 1), className: "text-gray-500 p-1 border border-gray-300 rounded", children: "+" }, void 0, false, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 114,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 105,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => removeItem(item.id), className: "text-red-600 hover:text-red-500 inline-flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-4 w-4 mr-1" }, void 0, false, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 120,
                columnNumber: 27
              }, this),
              "Remove"
            ] }, void 0, true, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 119,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 104,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 91,
          columnNumber: 21
        }, this)
      ] }, item.id, true, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 86,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 85,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 lg:mt-0 lg:col-span-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: "Order Summary" }, void 0, false, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 131,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-sm text-gray-600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subtotal" }, void 0, false, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 137,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "$",
              subtotal.toFixed(2)
            ] }, void 0, true, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 138,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 136,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-sm text-gray-600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Tax (",
              exemptionComplete ? "0%" : "8%",
              ")"
            ] }, void 0, true, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 142,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "$",
              tax.toFixed(2)
            ] }, void 0, true, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 143,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 141,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Total" }, void 0, false, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 148,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "$",
              total.toFixed(2)
            ] }, void 0, true, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 149,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 147,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 146,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 135,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExemptionIqClient, { customerCode: "ACME001", customerInfo, state: "Florida", primaryColor: "#2966B1", onComplete: handleExemptionComplete, framework: "remix", buttonStyles, manualValidation: false, showDownload: true }, void 0, false, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 156,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 155,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/checkout", className: "w-full btn btn-primary", children: [
            "Checkout",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "ml-2 h-4 w-4" }, void 0, false, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 161,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 159,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 154,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 130,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 83,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/cart.tsx",
    lineNumber: 62,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/cart.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_s(Cart, "Wu9dPzsaOY0iQ8oAm5OVSEEhEP0=", false, function() {
  return [useCart];
});
_c = Cart;
var _c;
$RefreshReg$(_c, "Cart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Cart as default
};
//# sourceMappingURL=/build/routes/cart-6DMHUT2T.js.map
