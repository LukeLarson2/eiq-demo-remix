var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PCVNSAGS.css";

// app/context/CartContext.tsx
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState
} from "react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var CartContext = createContext(void 0), initialState = {
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
function cartReducer(state, action5) {
  switch (action5.type) {
    case "ADD_ITEM": {
      let existingItemIndex = state.items.findIndex(
        (item) => item.id === action5.payload.id
      ), updatedItems;
      return existingItemIndex >= 0 ? (updatedItems = [...state.items], updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + 1
      }) : updatedItems = [...state.items, { ...action5.payload, quantity: 1 }], {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        itemCount: calculateItemCount(updatedItems)
      };
    }
    case "REMOVE_ITEM": {
      let updatedItems = state.items.filter(
        (item) => item.id !== action5.payload
      );
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        itemCount: calculateItemCount(updatedItems)
      };
    }
    case "UPDATE_QUANTITY": {
      let { id, quantity } = action5.payload;
      if (quantity <= 0)
        return cartReducer(state, { type: "REMOVE_ITEM", payload: id });
      let updatedItems = state.items.map(
        (item) => item.id === id ? { ...item, quantity } : item
      );
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
function CartProvider({ children }) {
  let [state, dispatch] = useReducer(cartReducer, initialState), [isLoaded, setIsLoaded] = useState(!1);
  useEffect(() => {
    let savedCart = localStorage.getItem("cart");
    if (savedCart) {
      let parsed = JSON.parse(savedCart);
      for (let item of parsed.items)
        dispatch({ type: "ADD_ITEM", payload: item });
    }
    setIsLoaded(!0);
  }, []), useEffect(() => {
    isLoaded && localStorage.setItem("cart", JSON.stringify(state));
  }, [state, isLoaded]);
  let addItem = (product) => dispatch({ type: "ADD_ITEM", payload: product }), removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id }), updateQuantity = (id, quantity) => dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } }), clearCart = () => dispatch({ type: "CLEAR_CART" });
  return isLoaded ? /* @__PURE__ */ jsxDEV2(
    CartContext.Provider,
    {
      value: { state, addItem, removeItem, updateQuantity, clearCart },
      children
    },
    void 0,
    !1,
    {
      fileName: "app/context/CartContext.tsx",
      lineNumber: 152,
      columnNumber: 5
    },
    this
  ) : null;
}
function useCart() {
  let context = useContext(CartContext);
  if (context === void 0)
    throw new Error("useCart must be used within a CartProvider");
  return context;
}

// app/root.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "icon", href: "/favicon.ico" }
];
function App() {
  return /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { className: "min-h-screen bg-gray-50 text-gray-900", children: [
      /* @__PURE__ */ jsxDEV3(CartProvider, { children: /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/exemption-iq.certificate.$id.ts
var exemption_iq_certificate_id_exports = {};
__export(exemption_iq_certificate_id_exports, {
  loader: () => loader
});

// vendor/exemption-iq/dist/server/helpers/getAvalaraCredentials.js
async function getAvalaraCredentials(sessionToken) {
  let response = await fetch(
    "https://exemptioniq-api.onrender.com/exemptioniq-api/auth/get-credentials",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionToken.token}`,
        "Content-Type": "application/json"
      }
    }
  );
  if (!response.ok)
    throw new Error(
      `Failed to fetch Avalara credentials: ${await response.text()}`
    );
  let data = await response.json();
  return {
    username: data.avatax_username,
    password: data.avatax_password,
    companyId: data.avatax_company_id,
    clientId: data.avatax_client_id,
    baseUrl: data.avatax_base_url
  };
}

// app/routes/exemption-iq.certificate.$id.ts
import { parse } from "cookie";
async function loader({ request, params }) {
  let certificateId = params.id;
  if (!certificateId)
    return new Response("Missing certificate ID", { status: 400 });
  let cookieHeader = request.headers.get("Cookie") || "", sessionToken = parse(cookieHeader).eiq_session_token;
  if (!sessionToken)
    return new Response("Missing session token", { status: 401 });
  try {
    let credentials = await getAvalaraCredentials({ token: sessionToken }), auth = Buffer.from(
      `${credentials.username}:${credentials.password}`
    ).toString("base64"), url = `${process.env.AVATAX_API_BASE}/companies/${credentials.companyId}/certificates/${certificateId}/attachment`, response = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        "X-Avalara-Client": credentials.clientId
      }
    });
    if (!response.ok) {
      let errorText = await response.text();
      return new Response(errorText, { status: response.status });
    }
    let stream = response.body;
    return stream ? new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="certificate-${certificateId}.pdf"`
      }
    }) : new Response("Missing PDF stream", { status: 500 });
  } catch (err) {
    return console.error("\u274C Remix certificate fetch error:", err), new Response("Failed to fetch certificate", { status: 500 });
  }
}

// app/routes/exemption-iq.gencert.token.ts
var exemption_iq_gencert_token_exports = {};
__export(exemption_iq_gencert_token_exports, {
  action: () => action
});
import { parse as parse2 } from "cookie";
async function action({ request }) {
  try {
    let { customerCode, ...customerInfo2 } = await request.json();
    if (!customerCode)
      return new Response("Customer code is required", { status: 400 });
    let cookieHeader = request.headers.get("Cookie") || "", sessionToken = parse2(cookieHeader).eiq_session_token;
    if (!sessionToken)
      return new Response("Missing session token", { status: 401 });
    let credentials = await getAvalaraCredentials({ token: sessionToken }), auth = Buffer.from(
      `${credentials.username}:${credentials.password}`
    ).toString("base64"), baseUrl2 = process.env.AVATAX_API_BASE, companyId = credentials.companyId, fetchCustomer = async () => {
      let res = await fetch(
        `${baseUrl2}/companies/${companyId}/customers/${customerCode}`,
        {
          headers: {
            Authorization: `Basic ${auth}`,
            "X-Avalara-Client": credentials.clientId
          }
        }
      );
      if (!res.ok && res.status !== 404)
        throw new Error(await res.text());
      return res.status === 404 ? null : await res.json();
    }, createCustomer = async () => {
      let payload = {
        companyId,
        customerCode,
        name: customerInfo2.name,
        emailAddress: customerInfo2.emailAddress,
        line1: customerInfo2.addressLine1 || "",
        line2: customerInfo2.addressLine2 || "",
        city: customerInfo2.city || "",
        postalCode: customerInfo2.postalCode || "",
        phoneNumber: customerInfo2.phoneNumber || "",
        faxNumber: customerInfo2.faxNumber || "",
        country: customerInfo2.country || "US",
        region: customerInfo2.region || ""
      }, res = await fetch(`${baseUrl2}/companies/${companyId}/customers`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "X-Avalara-Client": credentials.clientId,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok)
        throw new Error(await res.text());
      return await res.json();
    }, customer = await fetchCustomer() || await createCustomer(), tokenRes = await fetch(
      `${baseUrl2}/companies/${companyId}/ecommercetokens`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "X-Avalara-Client": credentials.clientId,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ customerNumber: customerCode, ...customer })
      }
    );
    if (!tokenRes.ok)
      throw new Error(await tokenRes.text());
    let { token } = await tokenRes.json();
    return new Response(JSON.stringify({ token, customer }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return console.error("\u274C Token generation error:", err), new Response(err.message, { status: 500 });
  }
}

// app/routes/exemption-iq.certificates.ts
var exemption_iq_certificates_exports = {};
__export(exemption_iq_certificates_exports, {
  action: () => action2
});
import { parse as parse3 } from "cookie";
async function action2({ request }) {
  try {
    let { customerCode } = await request.json();
    if (!customerCode)
      return new Response("Missing customerCode", { status: 400 });
    let cookieHeader = request.headers.get("Cookie") || "", sessionToken = parse3(cookieHeader).eiq_session_token;
    if (!sessionToken)
      return new Response("Missing session token", { status: 401 });
    let credentials = await getAvalaraCredentials({ token: sessionToken }), auth = Buffer.from(
      `${credentials.username}:${credentials.password}`
    ).toString("base64"), url = `${process.env.AVATAX_API_BASE}/companies/${credentials.companyId}/customers/${customerCode}?$include=active_certificates`, res = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        "X-Avalara-Client": credentials.clientId
      }
    });
    if (!res.ok) {
      let errorText = await res.text();
      throw new Error(errorText);
    }
    let mapped = ((await res.json())?.activeCertificates || []).map((cert) => ({
      id: String(cert.id),
      signedDate: new Date(cert.certificate.signedDate).toLocaleDateString(),
      expirationDate: cert.certificate.expirationDate ? new Date(cert.certificate.expirationDate).toLocaleDateString() : "N/A",
      exposureZone: cert.exposureZone?.name || "Unknown",
      exemptionReason: cert.actualTaxCode?.name || "",
      status: cert.certificate.valid ? "valid" : "invalid",
      pdfUrl: `/api/exemption-iq/certificate/${cert.id}`
      // Point to your own endpoint if needed
    }));
    return new Response(JSON.stringify(mapped), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (err) {
    return console.error("\u274C Remix certificate action error:", err), new Response(
      JSON.stringify({ error: err.message || "Failed to fetch certificates" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// app/routes/exemption-iq.customer.ts
var exemption_iq_customer_exports = {};
__export(exemption_iq_customer_exports, {
  action: () => action3
});
import { parse as parse4 } from "cookie";
async function action3({ request }) {
  try {
    let { customerCode, ...customerInfo2 } = await request.json();
    if (!customerCode)
      return new Response("Missing customerCode", { status: 400 });
    let cookieHeader = request.headers.get("Cookie") || "", sessionToken = parse4(cookieHeader).eiq_session_token;
    if (!sessionToken)
      return new Response("Missing session token", { status: 401 });
    let credentials = await getAvalaraCredentials({ token: sessionToken }), auth = Buffer.from(
      `${credentials.username}:${credentials.password}`
    ).toString("base64"), baseUrl2 = process.env.AVATAX_API_BASE, customerUrl = `${baseUrl2}/companies/${credentials.companyId}/customers/${customerCode}`, checkRes = await fetch(customerUrl, {
      headers: {
        Authorization: `Basic ${auth}`,
        "X-Avalara-Client": credentials.clientId,
        "Content-Type": "application/json"
      }
    });
    if (checkRes.ok) {
      let existing = await checkRes.json();
      return new Response(existing);
    }
    let payload = {
      companyId: credentials.companyId,
      customerCode,
      ...customerInfo2
    }, createRes = await fetch(
      `${baseUrl2}/companies/${credentials.companyId}/customers`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "X-Avalara-Client": credentials.clientId,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );
    if (!createRes.ok) {
      let errorText = await createRes.text();
      throw new Error(errorText);
    }
    let newCustomer = await createRes.json();
    return new Response(newCustomer);
  } catch (err) {
    return console.error("\u274C Remix customer action error:", err), new Response(
      JSON.stringify({ error: err.message || "Customer creation failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// app/routes/exemption-iq.validate.ts
var exemption_iq_validate_exports = {};
__export(exemption_iq_validate_exports, {
  action: () => action4
});
import { parse as parse5 } from "cookie";
async function action4({ request }) {
  try {
    let { customerCode, state } = await request.json();
    if (!customerCode || !state)
      return new Response(
        JSON.stringify({ error: "Missing customerCode or state" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    let cookieHeader = request.headers.get("Cookie") || "", sessionToken = parse5(cookieHeader).eiq_session_token;
    if (!sessionToken)
      return new Response(JSON.stringify({ error: "Missing session token" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    let credentials = await getAvalaraCredentials({ token: sessionToken }), auth = Buffer.from(
      `${credentials.username}:${credentials.password}`
    ).toString("base64"), url = `${process.env.AVATAX_API_BASE}/companies/${credentials.companyId}/customers/${customerCode}?$include=active_certificates`, res = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        "X-Avalara-Client": credentials.clientId,
        "Content-Type": "application/json"
      }
    });
    if (!res.ok) {
      let errorText = await res.text();
      return console.error("\u274C Avalara validation failed:", res.status, errorText), new Response(
        JSON.stringify({ error: "Avalara validation failed" }),
        {
          status: res.status,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    let validCerts = ((await res.json())?.activeCertificates || []).filter(
      (cert) => cert.exposureZone?.name?.toLowerCase() === state.toLowerCase() && cert.certificate?.valid
    );
    return new Response(
      JSON.stringify({
        status: validCerts.length > 0 ? "valid" : "invalid",
        certificates: validCerts
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (err) {
    return console.error("\u274C Uncaught error in Remix validate route:", err), new Response(
      JSON.stringify({ error: err.message || "Validation failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// app/routes/exemption-iq.session.ts
var exemption_iq_session_exports = {};
__export(exemption_iq_session_exports, {
  loader: () => loader2
});

// vendor/exemption-iq/dist/server/helpers/getSessionToken.js
async function getSessionToken() {
  let username = process.env.EIQ_USERNAME, password = process.env.EIQ_PASSWORD;
  if (!username || !password)
    throw new Error("Missing EIQ credentials in environment variables");
  let response = await fetch(
    "https://exemptioniq-api.onrender.com/exemptioniq-api/auth/plugin-key",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    }
  );
  if (!response.ok)
    throw new Error(
      `Failed to authenticate with EIQ: ${await response.text()}`
    );
  return await response.json();
}

// app/routes/exemption-iq.session.ts
async function loader2({ request }) {
  let sessionToken = await getSessionToken();
  return new Response(JSON.stringify({ token: sessionToken.token }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `eiq_session_token=${sessionToken.token}; Path=/; Max-Age=3600; HttpOnly; SameSite=Lax`
    }
  });
}

// app/routes/products.$productId.tsx
var products_productId_exports = {};
__export(products_productId_exports, {
  default: () => ProductDetail,
  loader: () => loader3
});
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "@remix-run/react";

// app/models/product.ts
var products = [
  {
    id: "1",
    name: "Business Laptop Pro",
    description: "High-performance laptop ideal for business applications and productivity.",
    price: 1299.99,
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Electronics"
  },
  {
    id: "2",
    name: "Office Desk Chair",
    description: "Ergonomic office chair with lumbar support and adjustable height.",
    price: 249.99,
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Furniture"
  },
  {
    id: "3",
    name: "Professional Printer",
    description: "High-capacity printer for business documents with wireless connectivity.",
    price: 399.99,
    image: "https://images.pexels.com/photos/7203788/pexels-photo-7203788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Electronics"
  },
  {
    id: "4",
    name: "Conference Table",
    description: "Large conference table suitable for business meetings and collaborative work.",
    price: 899.99,
    image: "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Furniture"
  },
  {
    id: "5",
    name: "Whiteboard",
    description: "Large magnetic whiteboard for presentations and brainstorming sessions.",
    price: 149.99,
    image: "https://images.pexels.com/photos/6177607/pexels-photo-6177607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Office Supplies"
  },
  {
    id: "6",
    name: "Document Scanner",
    description: "High-speed document scanner for digitizing business documents.",
    price: 299.99,
    image: "https://images.pexels.com/photos/7462601/pexels-photo-7462601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Electronics"
  }
];
function getProducts() {
  return products;
}
function getProduct(id) {
  return products.find((product) => product.id === id);
}

// app/routes/products.$productId.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var loader3 = async ({ params }) => {
  let productId = params.productId, product = getProduct(productId);
  if (!product)
    throw new Response("Product not found", { status: 404 });
  return json({ product });
};
function ProductDetail() {
  let { product } = useLoaderData(), { addItem } = useCart();
  return product ? /* @__PURE__ */ jsxDEV4("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxDEV4(Link, { to: "/products", className: "inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mb-6", children: [
      /* @__PURE__ */ jsxDEV4(ArrowLeft, { className: "mr-1 h-4 w-4" }, void 0, !1, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      "Back to Products"
    ] }, void 0, !0, {
      fileName: "app/routes/products.$productId.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-8", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden", children: /* @__PURE__ */ jsxDEV4(
        "img",
        {
          src: product.image,
          alt: product.name,
          className: "object-center object-cover w-full h-full"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 40,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "mt-10 px-4 sm:px-0 lg:mt-0", children: [
        /* @__PURE__ */ jsxDEV4("h1", { className: "text-3xl font-extrabold tracking-tight text-gray-900", children: product.name }, void 0, !1, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsxDEV4("h2", { className: "sr-only", children: "Product information" }, void 0, !1, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 51,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV4("p", { className: "text-3xl text-gray-900", children: [
            "$",
            product.price.toFixed(2)
          ] }, void 0, !0, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxDEV4("h3", { className: "sr-only", children: "Description" }, void 0, !1, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV4("p", { className: "text-base text-gray-700", children: product.description }, void 0, !1, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "mt-8 flex", children: /* @__PURE__ */ jsxDEV4(
          "button",
          {
            onClick: () => addItem(product),
            className: "btn btn-primary flex-1",
            children: [
              /* @__PURE__ */ jsxDEV4(ShoppingCart, { className: "mr-2 h-5 w-5" }, void 0, !1, {
                fileName: "app/routes/products.$productId.tsx",
                lineNumber: 65,
                columnNumber: 15
              }, this),
              "Add to Cart"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 61,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "mt-10", children: [
          /* @__PURE__ */ jsxDEV4("h3", { className: "text-sm font-medium text-gray-900", children: "Details" }, void 0, !1, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "mt-4 border-t border-gray-200", children: /* @__PURE__ */ jsxDEV4("dl", { className: "divide-y divide-gray-200", children: [
            /* @__PURE__ */ jsxDEV4("div", { className: "py-3 flex justify-between", children: [
              /* @__PURE__ */ jsxDEV4("dt", { className: "text-sm font-medium text-gray-500", children: "Category" }, void 0, !1, {
                fileName: "app/routes/products.$productId.tsx",
                lineNumber: 75,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV4("dd", { className: "text-sm text-gray-900 text-right", children: product.category }, void 0, !1, {
                fileName: "app/routes/products.$productId.tsx",
                lineNumber: 76,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/products.$productId.tsx",
              lineNumber: 74,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "py-3 flex justify-between", children: [
              /* @__PURE__ */ jsxDEV4("dt", { className: "text-sm font-medium text-gray-500", children: "SKU" }, void 0, !1, {
                fileName: "app/routes/products.$productId.tsx",
                lineNumber: 79,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV4("dd", { className: "text-sm text-gray-900 text-right", children: [
                "SKU-",
                product.id,
                "-",
                product.category.slice(0, 3).toUpperCase()
              ] }, void 0, !0, {
                fileName: "app/routes/products.$productId.tsx",
                lineNumber: 80,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/products.$productId.tsx",
              lineNumber: 78,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/products.$productId.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products.$productId.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products.$productId.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products.$productId.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.$productId.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this) : /* @__PURE__ */ jsxDEV4("div", { children: "Product not found" }, void 0, !1, {
    fileName: "app/routes/products.$productId.tsx",
    lineNumber: 28,
    columnNumber: 12
  }, this);
}

// app/routes/customer.account.tsx
var customer_account_exports = {};
__export(customer_account_exports, {
  default: () => Account
});
import { useState as useState10 } from "react";

// vendor/exemption-iq/dist/components/ExemptionIqButton.js
import { useEffect as useEffect4, useState as useState4 } from "react";

// vendor/exemption-iq/dist/components/AvataxCertificateClient.js
import { useEffect as useEffect2, useState as useState2, useRef } from "react";
import React from "react";
var styles = {
  container: {
    width: "100%",
    height: "35rem",
    position: "relative",
    overflowY: "auto"
  },
  loadingOverlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: 10
  },
  spinner: {
    height: "3rem",
    width: "3rem",
    borderRadius: "9999px",
    borderBottom: "2px solid #3b82f6",
    animation: "eiq-spin 1s linear infinite"
  },
  loadingText: {
    marginTop: "1rem",
    color: "#4b5563",
    textAlign: "center"
  },
  formContainer: {
    width: "100%",
    height: "100%"
  },
  closeBtnContainer: {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    display: "flex",
    gap: "0.5rem",
    zIndex: 50
  },
  closeBtn: {
    padding: "0.5rem 1rem",
    backgroundColor: "white",
    color: "#1f2937",
    border: "1px solid #e5e7eb",
    borderRadius: "0.375rem",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out"
  },
  closeBtnHover: {
    backgroundColor: "#f3f4f6"
  },
  errorBox: {
    backgroundColor: "#fef2f2",
    border: "1px solid #fecaca",
    borderRadius: "0.5rem",
    padding: "1rem",
    color: "#b91c1c",
    fontWeight: 500
  },
  keyframes: `
    @keyframes eiq-spin {
      to {
        transform: rotate(360deg);
      }
    }
  `
};
function AvataxCertificateClient({
  token,
  state,
  showDownload = !1,
  manualValidation = !0,
  onCertificateComplete,
  onClose,
  customerInfo: customerInfo2,
  shouldPrefillState = !0,
  mode: mode2,
  onComplete,
  customerCode
}) {
  let [error, setError] = useState2(null), [isLoading, setIsLoading] = useState2(!0), [isInitialized, setIsInitialized] = useState2(!1), [showCloseButton, setShowCloseButton] = useState2(!1), formContainerRef = useRef(null), handleClose = () => {
    window.GenCert && (window.GenCert.hide(), onClose());
  };
  return useEffect2(() => {
    if (typeof window < "u" && !document.getElementById("eiq-spin-style")) {
      let style = document.createElement("style");
      style.id = "eiq-spin-style", style.textContent = styles.keyframes, document.head.appendChild(style);
    }
    if (isInitialized)
      return;
    let script = (() => {
      let script2 = document.createElement("script");
      return script2.src = "https://sbx.certcapture.com/gencert2/js", script2.crossOrigin = "anonymous", script2.onload = () => {
        if (formContainerRef.current && window.GenCert)
          try {
            window.GenCert.init(formContainerRef.current, {
              token,
              customer_number: customerCode,
              ship_zone: mode2 === "renew" && shouldPrefillState ? state : "",
              preview: showDownload,
              show_files: showDownload,
              submit_to_stack: manualValidation,
              onCertSuccess: () => {
                var _a;
                if (setShowCloseButton(!0), (_a = window.GenCert.certificateIds) != null && _a.length) {
                  let certId = window.GenCert.certificateIds[0];
                  onCertificateComplete(certId), onComplete?.(!0);
                } else
                  onComplete?.(!1);
              }
            }), customerInfo2 && mode2 === "renew" && window.GenCert.setCustomerData({
              name: customerInfo2.name,
              address1: customerInfo2.addressLine1,
              address2: customerInfo2.addressLine2,
              city: customerInfo2.city,
              zip: customerInfo2.postalCode,
              phone: customerInfo2.phoneNumber,
              fax: customerInfo2.faxNumber,
              email: customerInfo2.emailAddress,
              state
            }), window.GenCert.setShipZone(state), window.GenCert.show(), setIsLoading(!1), setIsInitialized(!0);
          } catch (err) {
            console.error("Error initializing certificate form:", err), setError(
              "Failed to initialize the tax exemption certificate form."
            ), setIsLoading(!1), onComplete?.(!1);
          }
        else
          setError("The tax exemption certificate form could not be loaded."), setIsLoading(!1), onComplete?.(!1);
      }, script2.onerror = () => {
        console.error("Failed to load certificate widget script."), setError("Failed to load the tax exemption certificate system."), setIsLoading(!1), onComplete?.(!1);
      }, document.body.appendChild(script2), script2;
    })();
    return () => {
      script && document.body.contains(script) && document.body.removeChild(script), document.querySelectorAll("style").forEach((style) => {
        var _a;
        (_a = style.textContent) != null && _a.includes("form_container iframe") && style.remove();
      });
    };
  }, [
    token,
    state,
    showDownload,
    isInitialized,
    onCertificateComplete,
    customerInfo2
  ]), error ? /* @__PURE__ */ React.createElement("div", { style: styles.container }, /* @__PURE__ */ React.createElement("div", { style: styles.errorBox }, /* @__PURE__ */ React.createElement("p", null, "Error: ", error))) : /* @__PURE__ */ React.createElement("div", { style: styles.container }, isLoading && /* @__PURE__ */ React.createElement("div", { style: styles.loadingOverlay }, /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: styles.spinner }),
    /* @__PURE__ */ React.createElement("p", { style: styles.loadingText }, "Loading tax exemption certificate form...")
  )), /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: formContainerRef,
      id: "form_container",
      style: styles.formContainer,
      "aria-label": "Tax Exemption Certificate Form",
      role: "dialog"
    }
  ), showCloseButton && /* @__PURE__ */ React.createElement("div", { style: styles.closeBtnContainer }, /* @__PURE__ */ React.createElement("button", { onClick: handleClose, style: styles.closeBtn }, "Close Certificate")));
}

// vendor/exemption-iq/dist/components/ui/Modal.js
import React2, { useRef as useRef2, useEffect as useEffect3, useState as useState3 } from "react";
import { createPortal } from "react-dom";
var styles2 = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(4px)"
  },
  content: {
    position: "relative",
    width: "100%",
    maxWidth: "48rem",
    margin: "0 auto",
    borderRadius: "0.5rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    maxHeight: "90vh",
    overflow: "auto"
  },
  closeButton: {
    position: "absolute",
    top: "0.75rem",
    right: "0.75rem",
    color: "#6b7280",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    zIndex: 10
  },
  closeIcon: {
    width: "1.5rem",
    height: "1.5rem",
    textAlign: "center",
    lineHeight: "1.5rem"
  }
};
function Modal({ isOpen, onClose, children }) {
  let overlayRef = useRef2(null), [mounted, setMounted] = useState3(!1);
  if (useEffect3(() => {
    setMounted(!0);
  }, []), !isOpen || !mounted)
    return null;
  let handleOverlayClick = (e) => {
    e.target === overlayRef.current && onClose();
  }, modalContent = /* @__PURE__ */ React2.createElement("div", { ref: overlayRef, onClick: handleOverlayClick, style: styles2.overlay }, /* @__PURE__ */ React2.createElement("div", { style: styles2.content }, /* @__PURE__ */ React2.createElement("button", { onClick: onClose, style: styles2.closeButton }, /* @__PURE__ */ React2.createElement("p", { style: styles2.closeIcon }, "X")), children));
  return createPortal(modalContent, document.body);
}

// vendor/exemption-iq/dist/components/ui/PDFModal.js
import React3 from "react";
var styles3 = {
  heading: {
    fontSize: "1.125rem",
    fontWeight: 600,
    marginBottom: "1rem"
  },
  downloadLink: {
    color: "#2563eb",
    textDecoration: "underline",
    display: "block",
    marginTop: "0.5rem",
    transition: "color 0.2s ease-in-out"
  },
  downloadLinkHover: {
    color: "#1d4ed8"
  },
  iframe: {
    width: "100%",
    height: "80vh",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem"
  }
};
function PDFModal({
  isOpen,
  onClose,
  pdfUrl,
  title
}) {
  return /* @__PURE__ */ React3.createElement(Modal, { isOpen, onClose }, /* @__PURE__ */ React3.createElement("h2", { style: styles3.heading }, title || "Certificate Preview"), /* @__PURE__ */ React3.createElement(
    "a",
    {
      href: pdfUrl,
      download: !0,
      style: styles3.downloadLink,
      onMouseOver: (e) => e.currentTarget.style.color = styles3.downloadLinkHover.color,
      onMouseOut: (e) => e.currentTarget.style.color = styles3.downloadLink.color
    },
    "Download PDF"
  ), /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("iframe", { src: pdfUrl, title: "Certificate PDF", style: styles3.iframe })));
}

// vendor/exemption-iq/dist/components/ExemptionIqButton.js
import React4 from "react";

// vendor/exemption-iq/dist/server/helpers/getApiUrl.js
function getApiUrl(framework, route) {
  let parts = route.split("/").filter(Boolean);
  switch (framework) {
    case "remix":
      return `/exemption-iq/${parts.join("/")}`;
    case "next":
    case "astro":
    case "express":
    case "generic":
    default:
      return `/api/exemption-iq/${parts.join("/")}`;
  }
}

// vendor/exemption-iq/dist/components/ExemptionIqButton.js
if (typeof window < "u" && !document.getElementById("eiq-btn-keyframes")) {
  let style = document.createElement("style");
  style.id = "eiq-btn-keyframes", style.innerHTML = "@keyframes spin { to { transform: rotate(360deg); } }", document.head.appendChild(style);
}

// vendor/exemption-iq/dist/components/ExemptionIqServer.js
import React5 from "react";
var baseUrl = typeof process < "u" ? process.env.AVATAX_API_BASE : "https://sandbox-rest.avatax.com/api/v2";

// vendor/exemption-iq/dist/components/ExemptionIqClient.js
import { useEffect as useEffect5, useState as useState5 } from "react";
import React6 from "react";
var styles4 = {
  button: {
    padding: "0.75rem 1.5rem",
    borderRadius: "6px",
    fontWeight: 500,
    transition: "all 150ms ease-in-out",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none"
  },
  spinner: {
    animation: "eiq-spin 1s linear infinite",
    marginRight: "0.75rem",
    height: "1.25rem",
    width: "1.25rem"
  },
  certModal: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  certInfoBox: {
    backgroundColor: "#f9fafb",
    padding: "1rem",
    borderRadius: "0.5rem",
    border: "1px solid #d1d5db"
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "1rem",
    paddingTop: "1rem"
  },
  viewPdfBtn: {
    color: "#2563eb",
    textDecoration: "underline",
    background: "none",
    border: "none",
    padding: 0,
    font: "inherit",
    cursor: "pointer"
  },
  useCertBtn: {
    backgroundColor: "#e5e7eb",
    fontSize: "0.875rem",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer"
  },
  uploadCertBtn: {
    color: "white",
    fontSize: "0.875rem",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer"
  },
  error: {
    marginTop: "1rem",
    color: "#E76F51"
  },
  success: {
    width: "100%"
  },
  successBtn: {
    backgroundColor: "#14AE5C",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    opacity: 0.75,
    cursor: "not-allowed",
    border: "none"
  },
  keyframes: `
    @keyframes eiq-spin {
      to {
        transform: rotate(360deg);
      }
    }
  `
};
function ExemptionIqClient({
  customerCode,
  customerInfo: customerInfo2,
  state,
  showDownload = !1,
  manualValidation = !0,
  buttonText = "Tax Exempt",
  buttonTextColor,
  primaryColor = "#2966B1",
  dangerColor = "#E76F51",
  successColor = "#14AE5C",
  buttonStyles,
  onComplete,
  framework = "next"
}) {
  let [token, setToken] = useState5(null), [error, setError] = useState5(null), [isLoading, setIsLoading] = useState5(!1), [showCertForm, setShowCertForm] = useState5(!1), [certificateId, setCertificateId] = useState5(null), [showSuccessState, setShowSuccessState] = useState5(!1), [matchingCertificate, setMatchingCertificate] = useState5(null), [showCertChoiceModal, setShowCertChoiceModal] = useState5(!1), [previewUrl, setPreviewUrl] = useState5(null);
  useEffect5(() => {
    if (typeof window < "u" && !document.getElementById("eiq-keyframes")) {
      let style = document.createElement("style");
      style.id = "eiq-keyframes", style.innerHTML = styles4.keyframes, document.head.appendChild(style);
    }
    (async () => {
      try {
        let res = await fetch(getApiUrl(framework, "session"), {
          credentials: "include"
        });
        if (!res.ok)
          throw new Error("Failed to fetch session");
        let data = await res.json();
        document.cookie = `eiq_session_token=${data.token}; path=/; max-age=3600; SameSite=Lax`;
      } catch (err) {
        console.error("\u274C Failed to set session cookie", err);
      }
    })();
  }, []);
  let getButtonColor = () => !customerCode || error ? dangerColor : showSuccessState ? successColor : primaryColor, getButtonText = () => customerCode ? isLoading ? "Processing..." : showSuccessState ? "Exempt \u2713" : buttonText : "No Customer Code", handleCertificateGeneration = async () => {
    if (!(!customerCode || isLoading)) {
      setIsLoading(!0), setError(null);
      try {
        let validationData = await (await fetch(getApiUrl(framework, "validate"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ customerCode, state })
        })).json();
        if (validationData.status === "valid" && validationData.certificates.length > 0) {
          setMatchingCertificate(validationData.certificates[0]), setShowCertChoiceModal(!0);
          return;
        }
        let tokenResponse = await fetch(getApiUrl(framework, "gencert/token"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ customerCode, ...customerInfo2 })
        });
        if (!tokenResponse.ok)
          throw new Error("Failed to generate certificate token");
        let { token: token2 } = await tokenResponse.json();
        setToken(token2), setShowCertForm(!0);
      } catch (err) {
        console.error("Certificate generation error:", err), setError(err.message || "Failed to generate certificate"), setToken(null);
      } finally {
        setIsLoading(!1);
      }
    }
  }, handleCertificateComplete = async (certId) => {
    setCertificateId(certId), setShowSuccessState(!0), setIsLoading(!1), setShowCertForm(!1);
  }, handleClose = () => {
    setShowCertForm(!1), certificateId && setShowSuccessState(!0);
  };
  return /* @__PURE__ */ React6.createElement("div", null, !showCertForm && !showSuccessState && /* @__PURE__ */ React6.createElement(
    "button",
    {
      onClick: handleCertificateGeneration,
      disabled: !customerCode || isLoading,
      style: {
        ...styles4.button,
        backgroundColor: getButtonColor(),
        color: buttonTextColor || "#FFFFFF",
        cursor: !customerCode || isLoading ? "not-allowed" : "pointer",
        opacity: !customerCode || isLoading ? 0.7 : 1,
        ...buttonStyles ? JSON.parse(buttonStyles) : {}
      }
    },
    /* @__PURE__ */ React6.createElement("span", { style: { display: "inline-flex", alignItems: "center" } }, isLoading && /* @__PURE__ */ React6.createElement(
      "svg",
      {
        style: styles4.spinner,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ React6.createElement(
        "circle",
        {
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ React6.createElement(
        "path",
        {
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ), getButtonText())
  ), showCertChoiceModal && matchingCertificate && /* @__PURE__ */ React6.createElement(Modal, { isOpen: !0, onClose: () => setShowCertChoiceModal(!1) }, /* @__PURE__ */ React6.createElement("div", { style: styles4.certModal }, /* @__PURE__ */ React6.createElement("h2", { style: { fontSize: "1.125rem", fontWeight: 600 } }, "A valid certificate already exists for ", state), /* @__PURE__ */ React6.createElement("p", { style: { fontSize: "0.875rem", color: "#4B5563" } }, "You can use this certificate or upload a new one."), /* @__PURE__ */ React6.createElement("div", { style: styles4.certInfoBox }, /* @__PURE__ */ React6.createElement("p", null, /* @__PURE__ */ React6.createElement("strong", null, "Reason:"), " ", matchingCertificate.actualTaxCode.name), /* @__PURE__ */ React6.createElement("p", null, /* @__PURE__ */ React6.createElement("strong", null, "Signed:"), " ", new Date(
    matchingCertificate.certificate.signedDate
  ).toLocaleDateString()), /* @__PURE__ */ React6.createElement("p", null, /* @__PURE__ */ React6.createElement("strong", null, "Expires:"), " ", matchingCertificate.certificate.expirationDate ? new Date(
    matchingCertificate.certificate.expirationDate
  ).toLocaleDateString() : "N/A"), /* @__PURE__ */ React6.createElement(
    "button",
    {
      onClick: () => setPreviewUrl(
        getApiUrl(
          framework,
          `certificate/${matchingCertificate.id}`
        )
      ),
      style: styles4.viewPdfBtn
    },
    "View PDF"
  )), /* @__PURE__ */ React6.createElement("div", { style: styles4.actions }, /* @__PURE__ */ React6.createElement(
    "button",
    {
      style: styles4.useCertBtn,
      onClick: () => {
        setShowCertChoiceModal(!1), setShowSuccessState(!0), onComplete?.(!0);
      }
    },
    "Use This Certificate"
  ), /* @__PURE__ */ React6.createElement(
    "button",
    {
      style: {
        ...styles4.uploadCertBtn,
        backgroundColor: primaryColor
      },
      onClick: async () => {
        setShowCertChoiceModal(!1);
        let res = await fetch(
          getApiUrl(framework, "gencert/token"),
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ customerCode, ...customerInfo2 })
          }
        ), { token: token2 } = await res.json();
        setToken(token2), setShowCertForm(!0);
      }
    },
    "Upload New Certificate"
  )))), previewUrl && /* @__PURE__ */ React6.createElement(
    PDFModal,
    {
      isOpen: !!previewUrl,
      onClose: () => setPreviewUrl(null),
      pdfUrl: previewUrl,
      title: "Certificate PDF Preview"
    }
  ), showCertForm && token && /* @__PURE__ */ React6.createElement(Modal, { isOpen: !0, onClose: handleClose }, /* @__PURE__ */ React6.createElement(
    AvataxCertificateClient,
    {
      token,
      state,
      showDownload,
      manualValidation,
      onCertificateComplete: handleCertificateComplete,
      onClose: handleClose,
      customerInfo: customerInfo2,
      customerCode,
      mode: "renew",
      onComplete
    }
  )), showSuccessState && /* @__PURE__ */ React6.createElement("div", { style: styles4.success }, /* @__PURE__ */ React6.createElement(
    "button",
    {
      disabled: !0,
      style: {
        ...styles4.successBtn,
        ...buttonStyles ? JSON.parse(buttonStyles) : {}
      }
    },
    "Exempt \u2713"
  )), error && /* @__PURE__ */ React6.createElement("div", { style: styles4.error }, /* @__PURE__ */ React6.createElement("p", null, error)));
}

// vendor/exemption-iq/dist/components/ExemptionIqCustomerClient.js
import React10, { useEffect as useEffect7, useState as useState8 } from "react";

// vendor/exemption-iq/dist/components/ExemptionIqCertificateTable.js
import { useEffect as useEffect6, useState as useState7 } from "react";

// vendor/exemption-iq/dist/components/ExemptionIqGencertModal.js
import React7 from "react";
function ExemptionIqGenCertModal({
  isOpen,
  onClose,
  token,
  state,
  customerCode,
  customerInfo: customerInfo2,
  disableCustomerFields = !1,
  showDownload = !1,
  manualValidation = !0,
  onCertificateComplete,
  mode: mode2,
  onComplete
}) {
  return /* @__PURE__ */ React7.createElement(Modal, { isOpen, onClose }, /* @__PURE__ */ React7.createElement(
    AvataxCertificateClient,
    {
      token,
      state,
      showDownload,
      manualValidation,
      onCertificateComplete: onCertificateComplete || (() => {
      }),
      onClose,
      customerCode,
      customerInfo: customerInfo2,
      shouldPrefillState: disableCustomerFields,
      mode: "renew",
      onComplete
    }
  ));
}

// vendor/exemption-iq/dist/components/ExemptionIqAddCertificateButton.js
import { useState as useState6 } from "react";
import React8 from "react";
var CERTCAPTURE_ZONES = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Nebraska",
  "Nevada",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
  "Armed Forces Americas",
  "Armed Forces Europe",
  "Armed Forces Pacific"
], styles5 = {
  button: {
    padding: "0.75rem 1.5rem",
    borderRadius: "6px",
    fontWeight: 500,
    transition: "all 150ms ease-in-out",
    border: "none",
    display: "inline-block"
  },
  modalContent: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  select: {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    fontSize: "1rem"
  },
  modalActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "0.75rem"
  },
  cancelBtn: {
    padding: "0.5rem 1rem",
    backgroundColor: "#f3f4f6",
    color: "#374151",
    border: "none",
    borderRadius: "0.375rem",
    cursor: "pointer"
  },
  cancelBtnHover: {
    backgroundColor: "#e5e7eb"
  },
  continueBtn: {
    padding: "0.5rem 1rem",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "0.375rem",
    cursor: "pointer"
  },
  continueBtnDisabled: {
    opacity: 0.5,
    cursor: "not-allowed"
  }
};
function ExemptionIqAddCertificateButton({
  token,
  state,
  customerCode,
  customerInfo: customerInfo2,
  buttonText = "Add Certificate",
  buttonTextColor = "#FFFFFF",
  primaryColor = "#2966B1",
  buttonStyles,
  showDownload = !1,
  manualValidation = !0,
  certificateComplete,
  onComplete
}) {
  let [showStateSelector, setShowStateSelector] = useState6(!1), [showGenCertModal, setShowGenCertModal] = useState6(!1), [selectedState, setSelectedState] = useState6(null), handleButtonClick = () => {
    token && customerCode && setShowStateSelector(!0);
  }, handleStateSubmit = () => {
    selectedState && (setShowStateSelector(!1), setShowGenCertModal(!0));
  }, handleCertificateComplete = () => {
    setShowGenCertModal(!1), setSelectedState(null), certificateComplete();
  }, handleCloseAll = () => {
    setShowGenCertModal(!1), setShowStateSelector(!1), setSelectedState(null);
  }, computedButtonStyle = {
    ...styles5.button,
    backgroundColor: primaryColor,
    color: buttonTextColor,
    cursor: !token || !customerCode ? "not-allowed" : "pointer",
    opacity: !token || !customerCode ? 0.6 : 1,
    ...buttonStyles ? JSON.parse(buttonStyles) : {}
  };
  return /* @__PURE__ */ React8.createElement("div", null, /* @__PURE__ */ React8.createElement(
    "button",
    {
      onClick: handleButtonClick,
      disabled: !token || !customerCode,
      style: computedButtonStyle
    },
    buttonText
  ), showStateSelector && /* @__PURE__ */ React8.createElement(Modal, { isOpen: showStateSelector, onClose: handleCloseAll }, /* @__PURE__ */ React8.createElement("div", { style: styles5.modalContent }, /* @__PURE__ */ React8.createElement("h2", { style: { fontSize: "1.125rem", fontWeight: 600 } }, "Select State for Certificate"), /* @__PURE__ */ React8.createElement(
    "select",
    {
      style: styles5.select,
      value: selectedState || "",
      onChange: (e) => setSelectedState(e.target.value)
    },
    /* @__PURE__ */ React8.createElement("option", { value: "", disabled: !0 }, "-- Choose a state --"),
    CERTCAPTURE_ZONES.map((s) => /* @__PURE__ */ React8.createElement("option", { key: s, value: s }, s))
  ), /* @__PURE__ */ React8.createElement("div", { style: styles5.modalActions }, /* @__PURE__ */ React8.createElement("button", { onClick: handleCloseAll, style: styles5.cancelBtn }, "Cancel"), /* @__PURE__ */ React8.createElement(
    "button",
    {
      onClick: handleStateSubmit,
      disabled: !selectedState,
      style: {
        ...styles5.continueBtn,
        ...selectedState ? {} : styles5.continueBtnDisabled
      }
    },
    "Continue"
  )))), showGenCertModal && selectedState && /* @__PURE__ */ React8.createElement(Modal, { isOpen: showGenCertModal, onClose: handleCloseAll }, /* @__PURE__ */ React8.createElement(
    AvataxCertificateClient,
    {
      token,
      state: selectedState,
      customerCode,
      customerInfo: customerInfo2,
      showDownload,
      manualValidation,
      shouldPrefillState: !1,
      onCertificateComplete: handleCertificateComplete,
      onClose: handleCloseAll,
      mode: "add",
      onComplete
    }
  )));
}

// vendor/exemption-iq/dist/components/ExemptionIqCertificateTable.js
import React9 from "react";
var styles6 = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  },
  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem"
  },
  heading: {
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#1f2937"
  },
  tableContainer: {
    overflowX: "auto"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#ffffff"
  },
  th: {
    padding: "0.75rem 1.5rem",
    textAlign: "left",
    fontSize: "0.75rem",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "#6b7280",
    letterSpacing: "0.05em",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb"
  },
  td: {
    padding: "1rem 1.5rem",
    whiteSpace: "nowrap",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "0.875rem",
    color: "#1f2937"
  },
  actionRow: {
    display: "flex",
    gap: "1.5rem"
  },
  actionButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    font: "inherit",
    transition: "opacity 0.2s ease"
  },
  emptyCell: {
    textAlign: "center",
    color: "#6b7280",
    padding: "1rem"
  }
};
function ExemptionIqCertificateTable({
  token,
  sessionToken,
  certificates: initialCertificates,
  customer,
  state,
  showDownload = !1,
  manualValidation = !0,
  buttonText = "Add New Certificate",
  buttonTextColor,
  primaryColor = "#2966B1",
  successColor = "#14AE5C",
  dangerColor = "#E76F51",
  buttonStyles,
  onComplete,
  framework = "next"
}) {
  let [certificates, setCertificates] = useState7(initialCertificates), [previewUrl, setPreviewUrl] = useState7(null), [showRenewModal, setShowRenewModal] = useState7(!1), [isRenewing, setIsRenewing] = useState7(!1), [selectedCert, setSelectedCert] = useState7(null);
  useEffect6(() => {
    sessionToken && (document.cookie = `eiq_session_token=${sessionToken.token}; path=/; max-age=3600; SameSite=Lax`);
  }, []);
  let handleCertificateComplete = async () => {
    try {
      let response = await fetch(getApiUrl(framework, "certificates"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerCode: customer.customerCode })
      });
      if (!response.ok)
        throw new Error("Failed to fetch updated certificates");
      let updated = await response.json();
      setCertificates(updated), setIsRenewing(!1), setShowRenewModal(!1), setSelectedCert(null);
    } catch (err) {
      console.error("Error refreshing certificates:", err);
    } finally {
      window.location.reload();
    }
  }, isExpiringSoon = (expirationDate) => {
    let today = /* @__PURE__ */ new Date(), days = (new Date(expirationDate).getTime() - today.getTime()) / (1e3 * 60 * 60 * 24);
    return days <= 30 && days >= 0;
  };
  return /* @__PURE__ */ React9.createElement("div", { style: styles6.container }, previewUrl && /* @__PURE__ */ React9.createElement(
    PDFModal,
    {
      isOpen: !!previewUrl,
      onClose: () => setPreviewUrl(null),
      pdfUrl: previewUrl,
      title: "Certificate PDF Preview"
    }
  ), /* @__PURE__ */ React9.createElement("div", { style: styles6.tableHeader }, /* @__PURE__ */ React9.createElement("h2", { style: styles6.heading }, customer.name, " Exemption Certificates"), /* @__PURE__ */ React9.createElement(
    ExemptionIqAddCertificateButton,
    {
      token,
      state,
      customerCode: customer.customerCode,
      customerInfo: {
        name: customer.name,
        emailAddress: customer.emailAddress,
        addressLine1: customer.line1,
        addressLine2: customer.line2,
        city: customer.city,
        postalCode: customer.postalCode,
        phoneNumber: customer.phoneNumber,
        faxNumber: customer.faxNumber,
        country: customer.country,
        region: customer.region
      },
      certificateComplete: handleCertificateComplete,
      showDownload,
      manualValidation,
      buttonText,
      buttonTextColor,
      primaryColor,
      buttonStyles,
      onComplete
    }
  )), /* @__PURE__ */ React9.createElement("div", { style: styles6.tableContainer }, /* @__PURE__ */ React9.createElement("table", { style: styles6.table }, /* @__PURE__ */ React9.createElement("thead", null, /* @__PURE__ */ React9.createElement("tr", null, [
    "Status",
    "Exposure Zone",
    "Reason",
    "Signed Date",
    "Expiration Date",
    "Actions"
  ].map((h) => /* @__PURE__ */ React9.createElement("th", { key: h, style: styles6.th }, h)))), /* @__PURE__ */ React9.createElement("tbody", null, certificates.map((cert) => /* @__PURE__ */ React9.createElement("tr", { key: cert.id }, /* @__PURE__ */ React9.createElement("td", { style: styles6.td }, /* @__PURE__ */ React9.createElement(
    "span",
    {
      style: {
        textTransform: "capitalize",
        fontWeight: 500,
        color: cert.status === "valid" ? "#16a34a" : cert.status === "expired" ? "#dc2626" : cert.status === "invalid" ? "#ea580c" : "#4b5563"
      }
    },
    cert.status
  )), /* @__PURE__ */ React9.createElement("td", { style: styles6.td }, cert.exposureZone), /* @__PURE__ */ React9.createElement("td", { style: styles6.td }, cert.exemptionReason), /* @__PURE__ */ React9.createElement("td", { style: styles6.td }, cert.signedDate), /* @__PURE__ */ React9.createElement(
    "td",
    {
      style: {
        ...styles6.td,
        color: isExpiringSoon(cert.expirationDate) ? dangerColor : void 0,
        fontWeight: isExpiringSoon(cert.expirationDate) ? 600 : void 0
      }
    },
    cert.expirationDate
  ), /* @__PURE__ */ React9.createElement("td", { style: styles6.td }, /* @__PURE__ */ React9.createElement("div", { style: styles6.actionRow }, /* @__PURE__ */ React9.createElement(
    "button",
    {
      onClick: () => setPreviewUrl(
        getApiUrl(framework, `certificate/${cert.id}`)
      ),
      title: "View Certificate",
      style: { ...styles6.actionButton, color: primaryColor }
    },
    "View"
  ), /* @__PURE__ */ React9.createElement(
    "button",
    {
      onClick: () => {
        setSelectedCert(cert), setIsRenewing(!0), setShowRenewModal(!0);
      },
      title: "Renew Certificate",
      style: { ...styles6.actionButton, color: successColor }
    },
    "Renew"
  ))))), certificates.length === 0 && /* @__PURE__ */ React9.createElement("tr", null, /* @__PURE__ */ React9.createElement("td", { colSpan: 6, style: styles6.emptyCell }, 'No certificates found. Click "Add New Certificate" to create one.'))))), isRenewing && selectedCert && /* @__PURE__ */ React9.createElement(
    ExemptionIqGenCertModal,
    {
      isOpen: showRenewModal,
      onClose: () => {
        setShowRenewModal(!1), setIsRenewing(!1), setSelectedCert(null);
      },
      token,
      state: selectedCert.exposureZone,
      customerCode: customer.customerCode,
      customerInfo: {
        name: customer.name,
        emailAddress: customer.emailAddress,
        addressLine1: customer.line1,
        addressLine2: customer.line2,
        city: customer.city,
        postalCode: customer.postalCode,
        phoneNumber: customer.phoneNumber,
        faxNumber: customer.faxNumber,
        country: customer.country,
        region: customer.region
      },
      disableCustomerFields: !0,
      showDownload,
      manualValidation,
      onCertificateComplete: handleCertificateComplete,
      mode: "renew"
    }
  ));
}

// vendor/exemption-iq/dist/components/ExemptionIqCustomerClient.js
function ExemptionIqCustomerClient({
  customerCode,
  customerInfo: customerInfo2,
  state,
  showDownload = !1,
  manualValidation = !0,
  enableGenCertModal = !1,
  buttonText = "Add New Certificate",
  buttonTextColor,
  primaryColor = "#2966B1",
  dangerColor = "#E76F51",
  successColor = "#14AE5C",
  buttonStyles,
  onComplete,
  framework = "next"
}) {
  let [token, setToken] = useState8(null), [customer, setCustomer] = useState8(null), [certificates, setCertificates] = useState8([]), [error, setError] = useState8(null), [loading, setLoading] = useState8(!0), [sessionReady, setSessionReady] = useState8(!1);
  return useEffect7(() => {
    (async () => {
      try {
        let res = await fetch(getApiUrl(framework, "session"), {
          credentials: "include"
        });
        if (!res.ok)
          throw new Error("Failed to fetch session");
        let data = await res.json();
        document.cookie = `eiq_session_token=${data.token}; path=/; max-age=3600; SameSite=Lax`, setSessionReady(!0);
      } catch (err) {
        console.error("\u274C Failed to set session cookie", err), setError("Session initialization failed"), setLoading(!1);
      }
    })();
  }, []), useEffect7(() => {
    if (!sessionReady)
      return;
    (async () => {
      try {
        setLoading(!0);
        let tokenData = await (await fetch(getApiUrl(framework, "gencert/token"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ customerCode, ...customerInfo2 })
        })).json();
        setToken(tokenData.token), setCustomer(tokenData.customer);
        let certData = await (await fetch(getApiUrl(framework, "certificates"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ customerCode })
        })).json();
        setCertificates(certData);
      } catch (err) {
        console.error("\u274C Client component init error:", err), setError(err.message || "Something went wrong");
      } finally {
        setLoading(!1);
      }
    })();
  }, [sessionReady, customerCode]), error ? /* @__PURE__ */ React10.createElement("div", { className: "mt-4 text-red-500" }, /* @__PURE__ */ React10.createElement("p", null, error)) : loading || !token || !customer ? /* @__PURE__ */ React10.createElement("div", { className: "text-gray-500 italic mt-4" }, "Loading exemption data...") : /* @__PURE__ */ React10.createElement(
    ExemptionIqCertificateTable,
    {
      token,
      certificates,
      customer,
      customerInfo: customerInfo2,
      state,
      showDownload,
      manualValidation,
      enableGenCertModal,
      buttonText,
      buttonTextColor,
      primaryColor,
      dangerColor,
      successColor,
      buttonStyles,
      onComplete,
      framework
    }
  );
}

// vendor/exemption-iq/dist/components/ExemptionIqCustomerServer.js
import React11 from "react";

// app/components/ClientOnly.tsx
import { useEffect as useEffect8, useState as useState9 } from "react";
import { Fragment, jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function ClientOnly({ children }) {
  let [mounted, setMounted] = useState9(!1);
  return useEffect8(() => {
    setMounted(!0);
  }, []), mounted ? /* @__PURE__ */ jsxDEV5(Fragment, { children }, void 0, !1, {
    fileName: "app/components/ClientOnly.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this) : null;
}

// app/routes/customer.account.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
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
  let [activeTab, setActiveTab] = useState10("info"), [exemptionComplete, setExemptionComplete] = useState10(!1), buttonStyles = JSON.stringify({
    width: "100%",
    height: "fit"
  }), handleExemptionComplete = (status) => (setExemptionComplete(status), !0);
  return /* @__PURE__ */ jsxDEV6("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxDEV6("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxDEV6("h1", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Customer Account" }, void 0, !1, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "border-b border-gray-200 mb-6", children: /* @__PURE__ */ jsxDEV6("nav", { className: "-mb-px flex space-x-8", children: [
      /* @__PURE__ */ jsxDEV6(
        "button",
        {
          onClick: () => setActiveTab("info"),
          className: `
                whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === "info" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
              `,
          children: "Customer Info"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 35,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6(
        "button",
        {
          onClick: () => setActiveTab("exemptions"),
          className: `
                whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === "exemptions" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
              `,
          children: "Exemptions"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 48,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    activeTab === "info" && /* @__PURE__ */ jsxDEV6("div", { className: "bg-white shadow rounded-lg p-6", children: /* @__PURE__ */ jsxDEV6("dl", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4", children: [
      /* @__PURE__ */ jsxDEV6("div", { children: [
        /* @__PURE__ */ jsxDEV6("dt", { className: "text-sm font-medium text-gray-500", children: "Name" }, void 0, !1, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("dd", { className: "mt-1 text-sm text-gray-900", children: customerInfo.name }, void 0, !1, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/customer.account.tsx",
        lineNumber: 67,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { children: [
        /* @__PURE__ */ jsxDEV6("dt", { className: "text-sm font-medium text-gray-500", children: "Email" }, void 0, !1, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("dd", { className: "mt-1 text-sm text-gray-900", children: customerInfo.emailAddress }, void 0, !1, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/customer.account.tsx",
        lineNumber: 73,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { children: [
        /* @__PURE__ */ jsxDEV6("dt", { className: "text-sm font-medium text-gray-500", children: "Phone" }, void 0, !1, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 80,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("dd", { className: "mt-1 text-sm text-gray-900", children: customerInfo.phoneNumber }, void 0, !1, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/customer.account.tsx",
        lineNumber: 79,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { children: [
        /* @__PURE__ */ jsxDEV6("dt", { className: "text-sm font-medium text-gray-500", children: "Address" }, void 0, !1, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("dd", { className: "mt-1 text-sm text-gray-900", children: [
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
        ] }, void 0, !0, {
          fileName: "app/routes/customer.account.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/customer.account.tsx",
        lineNumber: 85,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this),
    activeTab === "exemptions" && /* @__PURE__ */ jsxDEV6("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV6(ClientOnly, { children: /* @__PURE__ */ jsxDEV6(
      ExemptionIqCustomerClient,
      {
        customerCode: "ACME001",
        customerInfo,
        state: "Florida",
        primaryColor: "#2966B1",
        onComplete: handleExemptionComplete,
        framework: "remix",
        buttonStyles,
        manualValidation: !1,
        showDownload: !0
      },
      void 0,
      !1,
      {
        fileName: "app/routes/customer.account.tsx",
        lineNumber: 100,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 99,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/customer.account.tsx",
      lineNumber: 98,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/customer.account.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/customer.account.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/products._index.tsx
var products_index_exports = {};
__export(products_index_exports, {
  default: () => ProductsIndex
});
import { useState as useState11 } from "react";

// app/components/ProductCard.tsx
import { Link as Link2 } from "@remix-run/react";
import { ShoppingCart as ShoppingCart2 } from "lucide-react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function ProductCard({ product, onAddToCart }) {
  return /* @__PURE__ */ jsxDEV7("div", { className: "product-card animate-fade-in", style: { animationDelay: `${parseInt(product.id) * 100}ms` }, children: [
    /* @__PURE__ */ jsxDEV7(Link2, { to: `/products/${product.id}`, children: /* @__PURE__ */ jsxDEV7("div", { className: "h-48 w-full overflow-hidden", children: /* @__PURE__ */ jsxDEV7(
      "img",
      {
        src: product.image,
        alt: product.name,
        className: "h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 15,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ProductCard.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ProductCard.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxDEV7(Link2, { to: `/products/${product.id}`, children: /* @__PURE__ */ jsxDEV7("h3", { className: "text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors", children: product.name }, void 0, !1, {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { className: "mt-1 text-sm text-gray-500", children: product.description }, void 0, !1, {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV7("span", { className: "text-lg font-medium text-gray-900", children: [
          "$",
          product.price.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/ProductCard.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV7(
          "button",
          {
            onClick: onAddToCart,
            className: "inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV7(ShoppingCart2, { className: "mr-2 h-4 w-4" }, void 0, !1, {
                fileName: "app/components/ProductCard.tsx",
                lineNumber: 35,
                columnNumber: 13
              }, this),
              "Add to Cart"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 31,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/ProductCard.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProductCard.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProductCard.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/products._index.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function ProductsIndex() {
  let { addItem } = useCart(), products2 = getProducts(), [filter, setFilter] = useState11(""), filteredProducts = filter ? products2.filter((product) => product.category === filter) : products2, categories = Array.from(new Set(products2.map((p) => p.category)));
  return /* @__PURE__ */ jsxDEV8("div", { children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "text-2xl font-bold text-gray-900", children: "Products" }, void 0, !1, {
        fileName: "app/routes/products._index.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV8("span", { className: "text-gray-700", children: "Filter by:" }, void 0, !1, {
          fileName: "app/routes/products._index.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8(
          "select",
          {
            value: filter,
            onChange: (e) => setFilter(e.target.value),
            className: "form-input",
            children: [
              /* @__PURE__ */ jsxDEV8("option", { value: "", children: "All Categories" }, void 0, !1, {
                fileName: "app/routes/products._index.tsx",
                lineNumber: 28,
                columnNumber: 13
              }, this),
              categories.map((category) => /* @__PURE__ */ jsxDEV8("option", { value: category, children: category }, category, !1, {
                fileName: "app/routes/products._index.tsx",
                lineNumber: 30,
                columnNumber: 15
              }, this))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/products._index.tsx",
            lineNumber: 23,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/products._index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products._index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3", children: filteredProducts.map((product) => /* @__PURE__ */ jsxDEV8(
      ProductCard,
      {
        product,
        onAddToCart: () => addItem(product)
      },
      product.id,
      !1,
      {
        fileName: "app/routes/products._index.tsx",
        lineNumber: 38,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/products._index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products._index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/checkout.tsx
var checkout_exports = {};
__export(checkout_exports, {
  default: () => Checkout
});
import { useState as useState12 } from "react";
import { Link as Link3 } from "@remix-run/react";
import { ArrowLeft as ArrowLeft2 } from "lucide-react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Checkout() {
  let { state, clearCart } = useCart(), [exemptionComplete, setExemptionComplete] = useState12(!1), taxRate = 0.08, subtotal = state.total, tax = exemptionComplete ? 0 : subtotal * taxRate, total = subtotal + tax, customerInfo2 = {
    name: "Acme Corporation",
    emailAddress: "purchasing@acmecorp.example",
    addressLine1: "123 Business Ave",
    phoneNumber: "555-123-4567",
    city: "Orlando",
    country: "USA",
    postalCode: "32801",
    region: "FL"
  }, handlePlaceOrder = () => {
    alert("Order placed successfully!"), clearCart();
  }, handleExemptionComplete = (status) => (setExemptionComplete(status), !0);
  return state.items.length === 0 ? /* @__PURE__ */ jsxDEV9("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxDEV9("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsxDEV9("div", { className: "text-center py-16", children: [
    /* @__PURE__ */ jsxDEV9("h2", { className: "text-xl font-semibold text-gray-900", children: "Your cart is empty" }, void 0, !1, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9("p", { className: "mt-2 text-gray-500", children: "You cannot proceed to checkout with an empty cart." }, void 0, !1, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV9(Link3, { to: "/products", className: "btn btn-primary", children: "View Products" }, void 0, !1, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 54,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 46,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV9("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxDEV9("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "md:flex md:items-center md:justify-between mb-6", children: [
      /* @__PURE__ */ jsxDEV9("h1", { className: "text-2xl font-bold text-gray-900", children: "Checkout" }, void 0, !1, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9(
        Link3,
        {
          to: "/cart",
          className: "text-blue-600 hover:text-blue-700 inline-flex items-center mt-2 md:mt-0",
          children: [
            /* @__PURE__ */ jsxDEV9(ArrowLeft2, { className: "mr-1 h-4 w-4" }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 73,
              columnNumber: 13
            }, this),
            "Back to Cart"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 69,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "lg:grid lg:grid-cols-12 lg:gap-x-12", children: [
      /* @__PURE__ */ jsxDEV9("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxDEV9("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ jsxDEV9("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Shipping Information" }, void 0, !1, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV9("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxDEV9("div", { children: [
              /* @__PURE__ */ jsxDEV9(
                "label",
                {
                  htmlFor: "first-name",
                  className: "block text-sm font-medium text-gray-700 mb-1",
                  children: "First name"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 88,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV9(
                "input",
                {
                  type: "text",
                  id: "first-name",
                  name: "first-name",
                  className: "form-input"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 94,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 87,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9("div", { children: [
              /* @__PURE__ */ jsxDEV9(
                "label",
                {
                  htmlFor: "last-name",
                  className: "block text-sm font-medium text-gray-700 mb-1",
                  children: "Last name"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 103,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV9(
                "input",
                {
                  type: "text",
                  id: "last-name",
                  name: "last-name",
                  className: "form-input"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 109,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 102,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { children: [
            /* @__PURE__ */ jsxDEV9(
              "label",
              {
                htmlFor: "company",
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: "Company"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 119,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV9(
              "input",
              {
                type: "text",
                id: "company",
                name: "company",
                defaultValue: customerInfo2.name,
                className: "form-input"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 125,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { children: [
            /* @__PURE__ */ jsxDEV9(
              "label",
              {
                htmlFor: "address",
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: "Address"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 135,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV9(
              "input",
              {
                type: "text",
                id: "address",
                name: "address",
                defaultValue: customerInfo2.addressLine1,
                className: "form-input"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 141,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxDEV9("div", { children: [
              /* @__PURE__ */ jsxDEV9(
                "label",
                {
                  htmlFor: "city",
                  className: "block text-sm font-medium text-gray-700 mb-1",
                  children: "City"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 152,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV9(
                "input",
                {
                  type: "text",
                  id: "city",
                  name: "city",
                  defaultValue: customerInfo2.city,
                  className: "form-input"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 158,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 151,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9("div", { children: [
              /* @__PURE__ */ jsxDEV9(
                "label",
                {
                  htmlFor: "state",
                  className: "block text-sm font-medium text-gray-700 mb-1",
                  children: "State"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 168,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV9(
                "input",
                {
                  type: "text",
                  id: "state",
                  name: "state",
                  defaultValue: "Florida",
                  className: "form-input"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 174,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 167,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9("div", { children: [
              /* @__PURE__ */ jsxDEV9(
                "label",
                {
                  htmlFor: "postal-code",
                  className: "block text-sm font-medium text-gray-700 mb-1",
                  children: "Postal code"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 184,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV9(
                "input",
                {
                  type: "text",
                  id: "postal-code",
                  name: "postal-code",
                  defaultValue: customerInfo2.postalCode,
                  className: "form-input"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 190,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 183,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 150,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { children: [
            /* @__PURE__ */ jsxDEV9(
              "label",
              {
                htmlFor: "email",
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: "Email"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 201,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV9(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                defaultValue: customerInfo2.emailAddress,
                className: "form-input"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 207,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 200,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { children: [
            /* @__PURE__ */ jsxDEV9(
              "label",
              {
                htmlFor: "phone",
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: "Phone"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 217,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV9(
              "input",
              {
                type: "tel",
                id: "phone",
                name: "phone",
                defaultValue: customerInfo2.phoneNumber,
                className: "form-input"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 223,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 216,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9("div", { className: "mt-10 lg:mt-0 lg:col-span-5", children: /* @__PURE__ */ jsxDEV9("div", { className: "bg-white rounded-lg shadow-md p-6 sticky top-6", children: [
        /* @__PURE__ */ jsxDEV9("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Order Summary" }, void 0, !1, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 240,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsxDEV9("div", { className: "flow-root", children: /* @__PURE__ */ jsxDEV9("ul", { className: "-my-4 divide-y divide-gray-200", children: state.items.map((item) => /* @__PURE__ */ jsxDEV9("li", { className: "py-4 flex", children: [
            /* @__PURE__ */ jsxDEV9("div", { className: "flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden", children: /* @__PURE__ */ jsxDEV9(
              "img",
              {
                src: item.image,
                alt: item.name,
                className: "w-full h-full object-center object-cover"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 250,
                columnNumber: 27
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 249,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV9("div", { className: "ml-4 flex-1 flex flex-col", children: [
              /* @__PURE__ */ jsxDEV9("div", { children: /* @__PURE__ */ jsxDEV9("div", { className: "flex justify-between text-sm font-medium text-gray-900", children: [
                /* @__PURE__ */ jsxDEV9("h3", { children: item.name }, void 0, !1, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 260,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ jsxDEV9("p", { className: "ml-4", children: [
                  "$",
                  (item.price * item.quantity).toFixed(2)
                ] }, void 0, !0, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 261,
                  columnNumber: 31
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 259,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 258,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV9("div", { className: "flex-1 flex items-end justify-between text-sm", children: /* @__PURE__ */ jsxDEV9("p", { className: "text-gray-500", children: [
                "Qty ",
                item.quantity
              ] }, void 0, !0, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 267,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 266,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 257,
              columnNumber: 25
            }, this)
          ] }, item.id, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 248,
            columnNumber: 23
          }, this)) }, void 0, !1, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 246,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 245,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "border-t border-gray-200 pt-4", children: [
            /* @__PURE__ */ jsxDEV9("div", { className: "flex justify-between text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxDEV9("p", { children: "Subtotal" }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 277,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV9("p", { children: [
                "$",
                subtotal.toFixed(2)
              ] }, void 0, !0, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 278,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 276,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9("div", { className: "flex justify-between text-sm text-gray-600 mt-2", children: [
              /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV9("p", { children: [
                  "Tax ",
                  exemptionComplete ? "(Exempt)" : "(8%)"
                ] }, void 0, !0, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 283,
                  columnNumber: 23
                }, this),
                exemptionComplete && /* @__PURE__ */ jsxDEV9("span", { className: "ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800", children: "Exemption Applied" }, void 0, !1, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 285,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 282,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV9("p", { children: [
                "$",
                tax.toFixed(2)
              ] }, void 0, !0, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 290,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 281,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9("div", { className: "border-t border-gray-200 pt-4 mt-2", children: /* @__PURE__ */ jsxDEV9("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
              /* @__PURE__ */ jsxDEV9("p", { children: "Total" }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 295,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV9("p", { children: [
                "$",
                total.toFixed(2)
              ] }, void 0, !0, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 296,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 294,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 293,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 275,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV9(
            "button",
            {
              type: "button",
              onClick: handlePlaceOrder,
              className: "w-full btn btn-primary",
              children: "Place Order"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 302,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 301,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 244,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 239,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 238,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 66,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

// app/routes/products.tsx
var products_exports = {};
__export(products_exports, {
  default: () => ProductsLayout
});
import { Outlet as Outlet2 } from "@remix-run/react";

// app/components/Header.tsx
import { Link as Link4 } from "@remix-run/react";
import { ShoppingCart as ShoppingCart3 } from "lucide-react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function Header() {
  let { state } = useCart();
  return /* @__PURE__ */ jsxDEV10("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxDEV10("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV10("div", { className: "flex justify-between h-16 items-center", children: [
    /* @__PURE__ */ jsxDEV10("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV10(Link4, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxDEV10("span", { className: "text-xl font-bold text-blue-600", children: "TaxSmart Shop" }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 14,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("nav", { className: "hidden md:ml-6 md:flex md:space-x-8", children: [
      /* @__PURE__ */ jsxDEV10(
        Link4,
        {
          to: "/",
          className: "inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300",
          children: "Home"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 21,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        Link4,
        {
          to: "/products",
          className: "inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-blue-500",
          children: "Products"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 27,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        Link4,
        {
          to: "/customer/account",
          className: "inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-blue-500",
          children: "My Account"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 33,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV10(
      Link4,
      {
        to: "/cart",
        className: "relative p-2 text-gray-400 hover:text-gray-500",
        children: [
          /* @__PURE__ */ jsxDEV10(ShoppingCart3, { className: "h-6 w-6" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          state.itemCount > 0 && /* @__PURE__ */ jsxDEV10("span", { className: "absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white", children: state.itemCount }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 48,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Header.tsx",
        lineNumber: 42,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function Footer() {
  return /* @__PURE__ */ jsxDEV11("footer", { className: "bg-white border-t border-gray-200", children: /* @__PURE__ */ jsxDEV11("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ jsxDEV11("div", { className: "md:flex md:items-center md:justify-between", children: [
    /* @__PURE__ */ jsxDEV11("div", { className: "mt-8 md:mt-0 md:order-1", children: /* @__PURE__ */ jsxDEV11("p", { className: "text-center text-sm text-gray-500", children: "\xA9 2025 TaxSmart Shop. All rights reserved." }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 6,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV11("div", { className: "flex justify-center space-x-6 md:order-2", children: [
      /* @__PURE__ */ jsxDEV11("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
        /* @__PURE__ */ jsxDEV11("span", { className: "sr-only", children: "Facebook" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 13,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV11("path", { fillRule: "evenodd", d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", clipRule: "evenodd" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 15,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 14,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV11("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
        /* @__PURE__ */ jsxDEV11("span", { className: "sr-only", children: "Twitter" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 19,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV11("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 20,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/products.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function ProductsLayout() {
  return /* @__PURE__ */ jsxDEV12(CartProvider, { children: /* @__PURE__ */ jsxDEV12("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxDEV12(Header, {}, void 0, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV12("main", { className: "flex-1 py-8", children: /* @__PURE__ */ jsxDEV12("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV12(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV12(Footer, {}, void 0, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/products.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Link as Link5 } from "@remix-run/react";
import { ShoppingCart as ShoppingCart4 } from "lucide-react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV13("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxDEV13("header", { className: "bg-white shadow-sm py-4", children: /* @__PURE__ */ jsxDEV13("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV13("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV13("h1", { className: "text-2xl font-semibold text-gray-900", children: "TaxSmart Shop" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13(
        Link5,
        {
          to: "/products",
          className: "btn btn-primary",
          children: "Start Shopping"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 11,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("main", { className: "flex-1", children: /* @__PURE__ */ jsxDEV13("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
      /* @__PURE__ */ jsxDEV13("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV13("h2", { className: "text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl", children: "Welcome to TaxSmart Shop" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV13("p", { className: "mt-5 max-w-xl mx-auto text-xl text-gray-500", children: "Shop with confidence using our integrated tax exemption certificate management system." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "mt-10", children: /* @__PURE__ */ jsxDEV13(
          Link5,
          {
            to: "/products",
            className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
            children: [
              /* @__PURE__ */ jsxDEV13(ShoppingCart4, { className: "mr-2 h-5 w-5" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 35,
                columnNumber: 17
              }, this),
              "Browse Products"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 31,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "mt-20", children: [
        /* @__PURE__ */ jsxDEV13("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Features" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsxDEV13("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ jsxDEV13("div", { className: "px-4 py-5 sm:p-6", children: [
            /* @__PURE__ */ jsxDEV13("h4", { className: "text-lg font-medium text-gray-900", children: "Simple Shopping" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 46,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "mt-2 text-sm text-gray-500", children: "Browse products and add them to your cart with just a few clicks." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 47,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ jsxDEV13("div", { className: "px-4 py-5 sm:p-6", children: [
            /* @__PURE__ */ jsxDEV13("h4", { className: "text-lg font-medium text-gray-900", children: "Tax Exemption Management" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 55,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "mt-2 text-sm text-gray-500", children: "Easily manage your tax exemption certificates during checkout." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 56,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { className: "bg-white overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ jsxDEV13("div", { className: "px-4 py-5 sm:p-6", children: [
            /* @__PURE__ */ jsxDEV13("h4", { className: "text-lg font-medium text-gray-900", children: "Secure Checkout" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 64,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "mt-2 text-sm text-gray-500", children: "Complete your purchase with confidence using our secure checkout process." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 65,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 63,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("footer", { className: "bg-white", children: /* @__PURE__ */ jsxDEV13("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ jsxDEV13("p", { className: "text-center text-sm text-gray-500", children: "\xA9 2025 TaxSmart Shop. All rights reserved." }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/cart.tsx
var cart_exports = {};
__export(cart_exports, {
  default: () => Cart
});
import { Link as Link6 } from "@remix-run/react";
import { Trash2, ArrowLeft as ArrowLeft3, ArrowRight } from "lucide-react";
import { useState as useState13 } from "react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function Cart() {
  let { state, updateQuantity, removeItem } = useCart(), [exemptionComplete, setExemptionComplete] = useState13(!1), taxRate = 0.08, subtotal = state.total, tax = exemptionComplete ? 0 : subtotal * taxRate, total = subtotal + tax, handleExemptionComplete = (status) => (setExemptionComplete(status), !0), customerInfo2 = {
    name: "Acme Corporation",
    emailAddress: "purchasing@acmecorp.example",
    addressLine1: "123 Business Ave",
    phoneNumber: "555-123-4567",
    city: "Orlando",
    country: "USA",
    postalCode: "32801",
    region: "FL"
  }, buttonStyles = JSON.stringify({
    width: "100%",
    height: "fit"
  });
  return /* @__PURE__ */ jsxDEV14("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxDEV14("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxDEV14("div", { className: "md:flex md:items-center md:justify-between mb-6", children: [
      /* @__PURE__ */ jsxDEV14("h1", { className: "text-2xl font-bold text-gray-900", children: "Shopping Cart" }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV14(
        Link6,
        {
          to: "/products",
          className: "text-blue-600 hover:text-blue-700 inline-flex items-center mt-2 md:mt-0",
          children: [
            /* @__PURE__ */ jsxDEV14(ArrowLeft3, { className: "mr-1 h-4 w-4" }, void 0, !1, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 47,
              columnNumber: 13
            }, this),
            "Continue Shopping"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/cart.tsx",
          lineNumber: 43,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    state.items.length === 0 ? /* @__PURE__ */ jsxDEV14("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ jsxDEV14("h2", { className: "text-xl font-semibold text-gray-900", children: "Your cart is empty" }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV14("p", { className: "mt-2 text-gray-500", children: "Looks like you haven't added any products to your cart yet." }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV14(Link6, { to: "/products", className: "btn btn-primary", children: "View Products" }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 61,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this) : /* @__PURE__ */ jsxDEV14("div", { className: "lg:grid lg:grid-cols-12 lg:gap-x-12", children: [
      /* @__PURE__ */ jsxDEV14("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxDEV14("div", { className: "border-t border-gray-200 divide-y divide-gray-200", children: state.items.map((item) => /* @__PURE__ */ jsxDEV14("div", { className: "py-6 flex animate-fade-in", children: [
        /* @__PURE__ */ jsxDEV14("div", { className: "flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden", children: /* @__PURE__ */ jsxDEV14(
          "img",
          {
            src: item.image,
            alt: item.name,
            className: "w-full h-full object-center object-cover"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cart.tsx",
            lineNumber: 73,
            columnNumber: 23
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 72,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV14("div", { className: "ml-4 flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsxDEV14("div", { children: [
            /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
              /* @__PURE__ */ jsxDEV14("h3", { children: item.name }, void 0, !1, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 83,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV14("p", { className: "ml-4", children: [
                "$",
                (item.price * item.quantity).toFixed(2)
              ] }, void 0, !0, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 84,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 82,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV14("p", { className: "mt-1 text-sm text-gray-500", children: item.category }, void 0, !1, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 88,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 81,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV14("div", { className: "flex-1 flex items-end justify-between text-sm", children: [
            /* @__PURE__ */ jsxDEV14("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsxDEV14(
                "button",
                {
                  onClick: () => updateQuantity(item.id, item.quantity - 1),
                  className: "text-gray-500 p-1 border border-gray-300 rounded",
                  children: "-"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/cart.tsx",
                  lineNumber: 95,
                  columnNumber: 27
                },
                this
              ),
              /* @__PURE__ */ jsxDEV14("span", { className: "text-gray-800 font-medium", children: item.quantity }, void 0, !1, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 104,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV14(
                "button",
                {
                  onClick: () => updateQuantity(item.id, item.quantity + 1),
                  className: "text-gray-500 p-1 border border-gray-300 rounded",
                  children: "+"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/cart.tsx",
                  lineNumber: 108,
                  columnNumber: 27
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 94,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV14(
              "button",
              {
                type: "button",
                onClick: () => removeItem(item.id),
                className: "text-red-600 hover:text-red-500 inline-flex items-center",
                children: [
                  /* @__PURE__ */ jsxDEV14(Trash2, { className: "h-4 w-4 mr-1" }, void 0, !1, {
                    fileName: "app/routes/cart.tsx",
                    lineNumber: 123,
                    columnNumber: 27
                  }, this),
                  "Remove"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/cart.tsx",
                lineNumber: 118,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 93,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this)
      ] }, item.id, !0, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 71,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 69,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "mt-10 lg:mt-0 lg:col-span-4", children: /* @__PURE__ */ jsxDEV14("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ jsxDEV14("h2", { className: "text-lg font-medium text-gray-900", children: "Order Summary" }, void 0, !1, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 135,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV14("div", { className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-between text-sm text-gray-600", children: [
            /* @__PURE__ */ jsxDEV14("p", { children: "Subtotal" }, void 0, !1, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 141,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV14("p", { children: [
              "$",
              subtotal.toFixed(2)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 142,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 140,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-between text-sm text-gray-600", children: [
            /* @__PURE__ */ jsxDEV14("p", { children: [
              "Tax (",
              exemptionComplete ? "0%" : "8%",
              ")"
            ] }, void 0, !0, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 146,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV14("p", { children: [
              "$",
              tax.toFixed(2)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 147,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 145,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV14("div", { className: "border-t border-gray-200 pt-4", children: /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
            /* @__PURE__ */ jsxDEV14("p", { children: "Total" }, void 0, !1, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 152,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV14("p", { children: [
              "$",
              total.toFixed(2)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 153,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 151,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 150,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 139,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV14("div", { className: "mt-6 space-y-2", children: [
          /* @__PURE__ */ jsxDEV14(ClientOnly, { children: /* @__PURE__ */ jsxDEV14(
            ExemptionIqClient,
            {
              customerCode: "ACME001",
              customerInfo: customerInfo2,
              state: "Florida",
              primaryColor: "#2966B1",
              onComplete: handleExemptionComplete,
              framework: "remix",
              buttonStyles,
              manualValidation: !1,
              showDownload: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/cart.tsx",
              lineNumber: 160,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 159,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV14(Link6, { to: "/checkout", className: "w-full btn btn-primary", children: [
            "Checkout",
            /* @__PURE__ */ jsxDEV14(ArrowRight, { className: "ml-2 h-4 w-4" }, void 0, !1, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 175,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 173,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 158,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 134,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cart.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/cart.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-UESQ7MKD.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-RGYMCGNC.js", "/build/_shared/chunk-ZDVS5MMH.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-LOCLDTOY.js", imports: ["/build/_shared/chunk-GPZ4B5UU.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-DR7WPGBA.js", imports: ["/build/_shared/chunk-M36VVXTN.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/cart": { id: "routes/cart", parentId: "root", path: "cart", index: void 0, caseSensitive: void 0, module: "/build/routes/cart-6DMHUT2T.js", imports: ["/build/_shared/chunk-GVQWZBSV.js", "/build/_shared/chunk-M36VVXTN.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout": { id: "routes/checkout", parentId: "root", path: "checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout-2N6GJJ2D.js", imports: ["/build/_shared/chunk-M36VVXTN.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/customer.account": { id: "routes/customer.account", parentId: "root", path: "customer/account", index: void 0, caseSensitive: void 0, module: "/build/routes/customer.account-QNBWHRFK.js", imports: ["/build/_shared/chunk-GVQWZBSV.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/exemption-iq.certificate.$id": { id: "routes/exemption-iq.certificate.$id", parentId: "root", path: "exemption-iq/certificate/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/exemption-iq.certificate.$id-VVWP6VT5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/exemption-iq.certificates": { id: "routes/exemption-iq.certificates", parentId: "root", path: "exemption-iq/certificates", index: void 0, caseSensitive: void 0, module: "/build/routes/exemption-iq.certificates-SDN3Q3D6.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/exemption-iq.customer": { id: "routes/exemption-iq.customer", parentId: "root", path: "exemption-iq/customer", index: void 0, caseSensitive: void 0, module: "/build/routes/exemption-iq.customer-M6JK35SI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/exemption-iq.gencert.token": { id: "routes/exemption-iq.gencert.token", parentId: "root", path: "exemption-iq/gencert/token", index: void 0, caseSensitive: void 0, module: "/build/routes/exemption-iq.gencert.token-SL7QAOTC.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/exemption-iq.session": { id: "routes/exemption-iq.session", parentId: "root", path: "exemption-iq/session", index: void 0, caseSensitive: void 0, module: "/build/routes/exemption-iq.session-G7HU6OAV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/exemption-iq.validate": { id: "routes/exemption-iq.validate", parentId: "root", path: "exemption-iq/validate", index: void 0, caseSensitive: void 0, module: "/build/routes/exemption-iq.validate-LSVAJEJK.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/products": { id: "routes/products", parentId: "root", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/products-WKXS767Z.js", imports: ["/build/_shared/chunk-M36VVXTN.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/products.$productId": { id: "routes/products.$productId", parentId: "routes/products", path: ":productId", index: void 0, caseSensitive: void 0, module: "/build/routes/products.$productId-XQQB2P47.js", imports: ["/build/_shared/chunk-Y4NXJOBT.js", "/build/_shared/chunk-GPZ4B5UU.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/products._index": { id: "routes/products._index", parentId: "routes/products", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/products._index-653I5SWA.js", imports: ["/build/_shared/chunk-Y4NXJOBT.js", "/build/_shared/chunk-GPZ4B5UU.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "f802f4c4", hmr: { runtime: "/build/_shared/chunk-ZDVS5MMH.js", timestamp: 1746204852333 }, url: "/build/manifest-F802F4C4.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/exemption-iq.certificate.$id": {
    id: "routes/exemption-iq.certificate.$id",
    parentId: "root",
    path: "exemption-iq/certificate/:id",
    index: void 0,
    caseSensitive: void 0,
    module: exemption_iq_certificate_id_exports
  },
  "routes/exemption-iq.gencert.token": {
    id: "routes/exemption-iq.gencert.token",
    parentId: "root",
    path: "exemption-iq/gencert/token",
    index: void 0,
    caseSensitive: void 0,
    module: exemption_iq_gencert_token_exports
  },
  "routes/exemption-iq.certificates": {
    id: "routes/exemption-iq.certificates",
    parentId: "root",
    path: "exemption-iq/certificates",
    index: void 0,
    caseSensitive: void 0,
    module: exemption_iq_certificates_exports
  },
  "routes/exemption-iq.customer": {
    id: "routes/exemption-iq.customer",
    parentId: "root",
    path: "exemption-iq/customer",
    index: void 0,
    caseSensitive: void 0,
    module: exemption_iq_customer_exports
  },
  "routes/exemption-iq.validate": {
    id: "routes/exemption-iq.validate",
    parentId: "root",
    path: "exemption-iq/validate",
    index: void 0,
    caseSensitive: void 0,
    module: exemption_iq_validate_exports
  },
  "routes/exemption-iq.session": {
    id: "routes/exemption-iq.session",
    parentId: "root",
    path: "exemption-iq/session",
    index: void 0,
    caseSensitive: void 0,
    module: exemption_iq_session_exports
  },
  "routes/products.$productId": {
    id: "routes/products.$productId",
    parentId: "routes/products",
    path: ":productId",
    index: void 0,
    caseSensitive: void 0,
    module: products_productId_exports
  },
  "routes/customer.account": {
    id: "routes/customer.account",
    parentId: "root",
    path: "customer/account",
    index: void 0,
    caseSensitive: void 0,
    module: customer_account_exports
  },
  "routes/products._index": {
    id: "routes/products._index",
    parentId: "routes/products",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: products_index_exports
  },
  "routes/checkout": {
    id: "routes/checkout",
    parentId: "root",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
  },
  "routes/products": {
    id: "routes/products",
    parentId: "root",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/cart": {
    id: "routes/cart",
    parentId: "root",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
