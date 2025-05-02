import {
  ClientOnly,
  ExemptionIqCustomerClient
} from "/build/_shared/chunk-GVQWZBSV.js";
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

// app/routes/customer.account.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/customer.account.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/customer.account.tsx"
  );
  import.meta.hot.lastModified = "1746203382352.0667";
}
var customerInfo = {
  name: "Acme Corporation",
  emailAddress: "purchasing@acmecorp.example",
  addressLine1: "123 Business Ave",
  phoneNumber: "555-123-4567",
  city: "Orlando",
  country: "USA",
  postalCode: "32801",
  region: "FL"
};
function Account() {
  _s();
  const [activeTab, setActiveTab] = (0, import_react.useState)("info");
  const [exemptionComplete, setExemptionComplete] = (0, import_react.useState)(false);
  const buttonStyles = JSON.stringify({
    width: "100%",
    height: "fit"
  });
  const handleExemptionComplete = (status) => {
    setExemptionComplete(status);
    return true;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Customer Account" }, void 0, false, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-gray-200 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "-mb-px flex space-x-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setActiveTab("info"), className: `
                whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === "info" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
              `, children: "Customer Info" }, void 0, false, {
        fileName: "app/routes/customer.account.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setActiveTab("exemptions"), className: `
                whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === "exemptions" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
              `, children: "Exemptions" }, void 0, false, {
        fileName: "app/routes/customer.account.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    activeTab === "info" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500", children: "Name" }, void 0, false, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-sm text-gray-900", children: customerInfo.name }, void 0, false, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/customer.account.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500", children: "Email" }, void 0, false, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 79,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-sm text-gray-900", children: customerInfo.emailAddress }, void 0, false, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 80,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/customer.account.tsx",
        lineNumber: 78,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500", children: "Phone" }, void 0, false, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 85,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-sm text-gray-900", children: customerInfo.phoneNumber }, void 0, false, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/customer.account.tsx",
        lineNumber: 84,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500", children: "Address" }, void 0, false, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 91,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-sm text-gray-900", children: [
          customerInfo.addressLine1,
          ", ",
          customerInfo.city,
          ",",
          " ",
          customerInfo.region,
          " ",
          customerInfo.postalCode,
          ",",
          " ",
          customerInfo.country
        ] }, void 0, true, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 92,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/customer.account.tsx",
        lineNumber: 90,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 70,
      columnNumber: 34
    }, this),
    activeTab === "exemptions" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExemptionIqCustomerClient, { customerCode: "ACME001", customerInfo, state: "Florida", primaryColor: "#2966B1", onComplete: handleExemptionComplete, framework: "remix", buttonStyles, manualValidation: false, showDownload: true }, void 0, false, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 103,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 102,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 101,
      columnNumber: 40
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/customer.account.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/customer.account.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(Account, "wspg48A8qJejLRvWHn4uPljb/F8=");
_c = Account;
var _c;
$RefreshReg$(_c, "Account");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Account as default
};
//# sourceMappingURL=/build/routes/customer.account-QNBWHRFK.js.map
