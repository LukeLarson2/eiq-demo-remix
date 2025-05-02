import {
  ArrowLeft
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

// app/routes/checkout.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/checkout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/checkout.tsx"
  );
  import.meta.hot.lastModified = "1746186908334.1467";
}
function Checkout() {
  _s();
  const {
    state,
    clearCart
  } = useCart();
  const [exemptionComplete, setExemptionComplete] = (0, import_react.useState)(false);
  const taxRate = 0.08;
  const subtotal = state.total;
  const tax = exemptionComplete ? 0 : subtotal * taxRate;
  const total = subtotal + tax;
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
  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    clearCart();
  };
  const handleExemptionComplete = (status) => {
    setExemptionComplete(status);
    return true;
  };
  if (state.items.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-gray-900", children: "Your cart is empty" }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-gray-500", children: "You cannot proceed to checkout with an empty cart." }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/products", className: "btn btn-primary", children: "View Products" }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 75,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 65,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:flex md:items-center md:justify-between mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-gray-900", children: "Checkout" }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/cart", className: "text-blue-600 hover:text-blue-700 inline-flex items-center mt-2 md:mt-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "mr-1 h-4 w-4" }, void 0, false, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this),
        "Back to Cart"
      ] }, void 0, true, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:grid lg:grid-cols-12 lg:gap-x-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Shipping Information" }, void 0, false, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 96,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "first-name", className: "block text-sm font-medium text-gray-700 mb-1", children: "First name" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 103,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "first-name", name: "first-name", className: "form-input" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 106,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 102,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "last-name", className: "block text-sm font-medium text-gray-700 mb-1", children: "Last name" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 110,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "last-name", name: "last-name", className: "form-input" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 113,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 109,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700 mb-1", children: "Company" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 118,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "company", name: "company", defaultValue: customerInfo.name, className: "form-input" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 121,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "address", className: "block text-sm font-medium text-gray-700 mb-1", children: "Address" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 125,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "address", name: "address", defaultValue: customerInfo.addressLine1, className: "form-input" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 128,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 124,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "city", className: "block text-sm font-medium text-gray-700 mb-1", children: "City" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 133,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "city", name: "city", defaultValue: customerInfo.city, className: "form-input" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 136,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 132,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "state", className: "block text-sm font-medium text-gray-700 mb-1", children: "State" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 140,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "state", name: "state", defaultValue: "Florida", className: "form-input" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 143,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 139,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "postal-code", className: "block text-sm font-medium text-gray-700 mb-1", children: "Postal code" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 147,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "postal-code", name: "postal-code", defaultValue: customerInfo.postalCode, className: "form-input" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 150,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 146,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 155,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "email", defaultValue: customerInfo.emailAddress, className: "form-input" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 158,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 154,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700 mb-1", children: "Phone" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 162,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "tel", id: "phone", name: "phone", defaultValue: customerInfo.phoneNumber, className: "form-input" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 165,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 161,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 100,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 lg:mt-0 lg:col-span-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 sticky top-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Order Summary" }, void 0, false, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 176,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "-my-4 divide-y divide-gray-200", children: state.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "py-4 flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.image, alt: item.name, className: "w-full h-full object-center object-cover" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 185,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 184,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex-1 flex flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-sm font-medium text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: item.name }, void 0, false, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 191,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ml-4", children: [
                  "$",
                  (item.price * item.quantity).toFixed(2)
                ] }, void 0, true, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 192,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 190,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 189,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex items-end justify-between text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: [
                "Qty ",
                item.quantity
              ] }, void 0, true, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 198,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 197,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 188,
              columnNumber: 25
            }, this)
          ] }, item.id, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 183,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 182,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 181,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 pt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-sm text-gray-600", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subtotal" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 207,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "$",
                subtotal.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 208,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 206,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-sm text-gray-600 mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                  "Tax ",
                  exemptionComplete ? "(Exempt)" : "(8%)"
                ] }, void 0, true, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 213,
                  columnNumber: 23
                }, this),
                exemptionComplete && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800", children: "Exemption Applied" }, void 0, false, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 214,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 212,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "$",
                tax.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 218,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 211,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 pt-4 mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Total" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 223,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "$",
                total.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 224,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 222,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 221,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: handlePlaceOrder, className: "w-full btn btn-primary", children: "Place Order" }, void 0, false, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 230,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 229,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 175,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 174,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 83,
    columnNumber: 10
  }, this);
}
_s(Checkout, "fq61Pb26Ga7H2utA4eUToKrnJEA=", false, function() {
  return [useCart];
});
_c = Checkout;
var _c;
$RefreshReg$(_c, "Checkout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Checkout as default
};
//# sourceMappingURL=/build/routes/checkout-2N6GJJ2D.js.map
