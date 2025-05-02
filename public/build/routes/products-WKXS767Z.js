import {
  ShoppingCart
} from "/build/_shared/chunk-M36VVXTN.js";
import {
  CartProvider,
  useCart
} from "/build/_shared/chunk-GPZ4B5UU.js";
import {
  Link,
  Outlet
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Header.tsx"
  );
  import.meta.hot.lastModified = "1746200947712.072";
}
function Header() {
  _s();
  const {
    state
  } = useCart();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between h-16 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold text-blue-600", children: "TaxSmart Shop" }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 35,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "hidden md:ml-6 md:flex md:space-x-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300", children: "Home" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/products", className: "inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-blue-500", children: "Products" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/customer/account", className: "inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-blue-500", children: "My Account" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/cart", className: "relative p-2 text-gray-400 hover:text-gray-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingCart, { className: "h-6 w-6" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this),
      state.itemCount > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white", children: state.itemCount }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 56,
        columnNumber: 39
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(Header, "ZKIH1ynL/EkZdpr8Vdr0x6UKQrI=", false, function() {
  return [useCart];
});
_c = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer.tsx"
  );
  import.meta.hot.lastModified = "1746186726794.1318";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "bg-white border-t border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "md:flex md:items-center md:justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-8 md:mt-0 md:order-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-center text-sm text-gray-500", children: "\xA9 2025 TaxSmart Shop. All rights reserved." }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center space-x-6 md:order-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Facebook" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 32,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { fillRule: "evenodd", d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Twitter" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 39,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c2 = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/products.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/products.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/products.tsx"
  );
  import.meta.hot.lastModified = "1746186726784.1318";
}
function ProductsLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "flex-1 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/products.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c3 = ProductsLayout;
var _c3;
$RefreshReg$(_c3, "ProductsLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductsLayout as default
};
//# sourceMappingURL=/build/routes/products-WKXS767Z.js.map
