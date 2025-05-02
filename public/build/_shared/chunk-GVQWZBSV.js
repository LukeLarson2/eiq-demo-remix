import {
  createHotContext
} from "/build/_shared/chunk-ZDVS5MMH.js";
import {
  require_react_dom
} from "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// vendor/exemption-iq/dist/components/ExemptionIqClient.js
var import_react5 = __toESM(require_react(), 1);

// vendor/exemption-iq/dist/components/AvataxCertificateClient.js
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
"use client";
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
  showDownload = false,
  manualValidation = true,
  onCertificateComplete,
  onClose,
  customerInfo,
  shouldPrefillState = true,
  mode,
  onComplete,
  customerCode
}) {
  const [error, setError] = (0, import_react.useState)(null);
  const [isLoading, setIsLoading] = (0, import_react.useState)(true);
  const [isInitialized, setIsInitialized] = (0, import_react.useState)(false);
  const [showCloseButton, setShowCloseButton] = (0, import_react.useState)(false);
  const formContainerRef = (0, import_react.useRef)(null);
  const handleClose = () => {
    if (window.GenCert) {
      window.GenCert.hide();
      onClose();
    }
  };
  (0, import_react.useEffect)(() => {
    if (typeof window !== "undefined" && !document.getElementById("eiq-spin-style")) {
      const style = document.createElement("style");
      style.id = "eiq-spin-style";
      style.textContent = styles.keyframes;
      document.head.appendChild(style);
    }
    if (isInitialized)
      return;
    const initializeCertCapture = () => {
      const script2 = document.createElement("script");
      script2.src = "https://sbx.certcapture.com/gencert2/js";
      script2.crossOrigin = "anonymous";
      script2.onload = () => {
        if (formContainerRef.current && window.GenCert) {
          try {
            window.GenCert.init(formContainerRef.current, {
              token,
              customer_number: customerCode,
              ship_zone: mode === "renew" && shouldPrefillState ? state : "",
              preview: showDownload,
              show_files: showDownload,
              submit_to_stack: manualValidation,
              onCertSuccess: () => {
                var _a;
                setShowCloseButton(true);
                if ((_a = window.GenCert.certificateIds) == null ? void 0 : _a.length) {
                  const certId = window.GenCert.certificateIds[0];
                  onCertificateComplete(certId);
                  onComplete == null ? void 0 : onComplete(true);
                } else {
                  onComplete == null ? void 0 : onComplete(false);
                }
              }
            });
            if (customerInfo && mode === "renew") {
              window.GenCert.setCustomerData({
                name: customerInfo.name,
                address1: customerInfo.addressLine1,
                address2: customerInfo.addressLine2,
                city: customerInfo.city,
                zip: customerInfo.postalCode,
                phone: customerInfo.phoneNumber,
                fax: customerInfo.faxNumber,
                email: customerInfo.emailAddress,
                state
              });
            }
            window.GenCert.setShipZone(state);
            window.GenCert.show();
            setIsLoading(false);
            setIsInitialized(true);
          } catch (err) {
            console.error("Error initializing certificate form:", err);
            setError(
              "Failed to initialize the tax exemption certificate form."
            );
            setIsLoading(false);
            onComplete == null ? void 0 : onComplete(false);
          }
        } else {
          setError("The tax exemption certificate form could not be loaded.");
          setIsLoading(false);
          onComplete == null ? void 0 : onComplete(false);
        }
      };
      script2.onerror = () => {
        console.error("Failed to load certificate widget script.");
        setError("Failed to load the tax exemption certificate system.");
        setIsLoading(false);
        onComplete == null ? void 0 : onComplete(false);
      };
      document.body.appendChild(script2);
      return script2;
    };
    const script = initializeCertCapture();
    return () => {
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
      document.querySelectorAll("style").forEach((style) => {
        var _a;
        if ((_a = style.textContent) == null ? void 0 : _a.includes("form_container iframe")) {
          style.remove();
        }
      });
    };
  }, [
    token,
    state,
    showDownload,
    isInitialized,
    onCertificateComplete,
    customerInfo
  ]);
  if (error) {
    return /* @__PURE__ */ import_react2.default.createElement("div", { style: styles.container }, /* @__PURE__ */ import_react2.default.createElement("div", { style: styles.errorBox }, /* @__PURE__ */ import_react2.default.createElement("p", null, "Error: ", error)));
  }
  return /* @__PURE__ */ import_react2.default.createElement("div", { style: styles.container }, isLoading && /* @__PURE__ */ import_react2.default.createElement("div", { style: styles.loadingOverlay }, /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    },
    /* @__PURE__ */ import_react2.default.createElement("div", { style: styles.spinner }),
    /* @__PURE__ */ import_react2.default.createElement("p", { style: styles.loadingText }, "Loading tax exemption certificate form...")
  )), /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      ref: formContainerRef,
      id: "form_container",
      style: styles.formContainer,
      "aria-label": "Tax Exemption Certificate Form",
      role: "dialog"
    }
  ), showCloseButton && /* @__PURE__ */ import_react2.default.createElement("div", { style: styles.closeBtnContainer }, /* @__PURE__ */ import_react2.default.createElement("button", { onClick: handleClose, style: styles.closeBtn }, "Close Certificate")));
}

// vendor/exemption-iq/dist/components/ExemptionIqClient.js
var import_react6 = __toESM(require_react(), 1);

// vendor/exemption-iq/dist/components/ui/Modal.js
var import_react3 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
"use client";
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
  const overlayRef = (0, import_react3.useRef)(null);
  const [mounted, setMounted] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    setMounted(true);
  }, []);
  if (!isOpen || !mounted)
    return null;
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };
  const modalContent = /* @__PURE__ */ import_react3.default.createElement("div", { ref: overlayRef, onClick: handleOverlayClick, style: styles2.overlay }, /* @__PURE__ */ import_react3.default.createElement("div", { style: styles2.content }, /* @__PURE__ */ import_react3.default.createElement("button", { onClick: onClose, style: styles2.closeButton }, /* @__PURE__ */ import_react3.default.createElement("p", { style: styles2.closeIcon }, "X")), children));
  return (0, import_react_dom.createPortal)(modalContent, document.body);
}

// vendor/exemption-iq/dist/components/ui/PDFModal.js
var import_react4 = __toESM(require_react(), 1);
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
  return /* @__PURE__ */ import_react4.default.createElement(Modal, { isOpen, onClose }, /* @__PURE__ */ import_react4.default.createElement("h2", { style: styles3.heading }, title || "Certificate Preview"), /* @__PURE__ */ import_react4.default.createElement(
    "a",
    {
      href: pdfUrl,
      download: true,
      style: styles3.downloadLink,
      onMouseOver: (e) => e.currentTarget.style.color = styles3.downloadLinkHover.color,
      onMouseOut: (e) => e.currentTarget.style.color = styles3.downloadLink.color
    },
    "Download PDF"
  ), /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement("iframe", { src: pdfUrl, title: "Certificate PDF", style: styles3.iframe })));
}

// vendor/exemption-iq/dist/server/helpers/getApiUrl.js
function getApiUrl(framework, route) {
  const parts = route.split("/").filter(Boolean);
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

// vendor/exemption-iq/dist/components/ExemptionIqClient.js
"use client";
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
  customerInfo,
  state,
  showDownload = false,
  manualValidation = true,
  buttonText = "Tax Exempt",
  buttonTextColor,
  primaryColor = "#2966B1",
  dangerColor = "#E76F51",
  successColor = "#14AE5C",
  buttonStyles,
  onComplete,
  framework = "next"
}) {
  const [token, setToken] = (0, import_react5.useState)(null);
  const [error, setError] = (0, import_react5.useState)(null);
  const [isLoading, setIsLoading] = (0, import_react5.useState)(false);
  const [showCertForm, setShowCertForm] = (0, import_react5.useState)(false);
  const [certificateId, setCertificateId] = (0, import_react5.useState)(null);
  const [showSuccessState, setShowSuccessState] = (0, import_react5.useState)(false);
  const [matchingCertificate, setMatchingCertificate] = (0, import_react5.useState)(null);
  const [showCertChoiceModal, setShowCertChoiceModal] = (0, import_react5.useState)(false);
  const [previewUrl, setPreviewUrl] = (0, import_react5.useState)(null);
  (0, import_react5.useEffect)(() => {
    if (typeof window !== "undefined" && !document.getElementById("eiq-keyframes")) {
      const style = document.createElement("style");
      style.id = "eiq-keyframes";
      style.innerHTML = styles4.keyframes;
      document.head.appendChild(style);
    }
    const setSessionCookie = async () => {
      try {
        const res = await fetch(getApiUrl(framework, "session"), {
          credentials: "include"
        });
        if (!res.ok)
          throw new Error("Failed to fetch session");
        const data = await res.json();
        document.cookie = `eiq_session_token=${data.token}; path=/; max-age=3600; SameSite=Lax`;
      } catch (err) {
        console.error("\u274C Failed to set session cookie", err);
      }
    };
    setSessionCookie();
  }, []);
  const getButtonColor = () => {
    if (!customerCode)
      return dangerColor;
    if (error)
      return dangerColor;
    if (showSuccessState)
      return successColor;
    return primaryColor;
  };
  const getButtonText = () => {
    if (!customerCode)
      return "No Customer Code";
    if (isLoading)
      return "Processing...";
    if (showSuccessState)
      return "Exempt \u2713";
    return buttonText;
  };
  const handleCertificateGeneration = async () => {
    if (!customerCode || isLoading)
      return;
    setIsLoading(true);
    setError(null);
    try {
      const validateRes = await fetch(getApiUrl(framework, "validate"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerCode, state })
      });
      const validationData = await validateRes.json();
      if (validationData.status === "valid" && validationData.certificates.length > 0) {
        setMatchingCertificate(validationData.certificates[0]);
        setShowCertChoiceModal(true);
        return;
      }
      const tokenResponse = await fetch(getApiUrl(framework, "gencert/token"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerCode, ...customerInfo })
      });
      if (!tokenResponse.ok) {
        throw new Error("Failed to generate certificate token");
      }
      const { token: token2 } = await tokenResponse.json();
      setToken(token2);
      setShowCertForm(true);
    } catch (err) {
      console.error("Certificate generation error:", err);
      setError(err.message || "Failed to generate certificate");
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  };
  const handleCertificateComplete = async (certId) => {
    setCertificateId(certId);
    setShowSuccessState(true);
    setIsLoading(false);
    setShowCertForm(false);
  };
  const handleClose = () => {
    setShowCertForm(false);
    if (certificateId) {
      setShowSuccessState(true);
    }
  };
  return /* @__PURE__ */ import_react6.default.createElement("div", null, !showCertForm && !showSuccessState && /* @__PURE__ */ import_react6.default.createElement(
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
    /* @__PURE__ */ import_react6.default.createElement("span", { style: { display: "inline-flex", alignItems: "center" } }, isLoading && /* @__PURE__ */ import_react6.default.createElement(
      "svg",
      {
        style: styles4.spinner,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ import_react6.default.createElement(
        "circle",
        {
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ import_react6.default.createElement(
        "path",
        {
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ), getButtonText())
  ), showCertChoiceModal && matchingCertificate && /* @__PURE__ */ import_react6.default.createElement(Modal, { isOpen: true, onClose: () => setShowCertChoiceModal(false) }, /* @__PURE__ */ import_react6.default.createElement("div", { style: styles4.certModal }, /* @__PURE__ */ import_react6.default.createElement("h2", { style: { fontSize: "1.125rem", fontWeight: 600 } }, "A valid certificate already exists for ", state), /* @__PURE__ */ import_react6.default.createElement("p", { style: { fontSize: "0.875rem", color: "#4B5563" } }, "You can use this certificate or upload a new one."), /* @__PURE__ */ import_react6.default.createElement("div", { style: styles4.certInfoBox }, /* @__PURE__ */ import_react6.default.createElement("p", null, /* @__PURE__ */ import_react6.default.createElement("strong", null, "Reason:"), " ", matchingCertificate.actualTaxCode.name), /* @__PURE__ */ import_react6.default.createElement("p", null, /* @__PURE__ */ import_react6.default.createElement("strong", null, "Signed:"), " ", new Date(
    matchingCertificate.certificate.signedDate
  ).toLocaleDateString()), /* @__PURE__ */ import_react6.default.createElement("p", null, /* @__PURE__ */ import_react6.default.createElement("strong", null, "Expires:"), " ", matchingCertificate.certificate.expirationDate ? new Date(
    matchingCertificate.certificate.expirationDate
  ).toLocaleDateString() : "N/A"), /* @__PURE__ */ import_react6.default.createElement(
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
  )), /* @__PURE__ */ import_react6.default.createElement("div", { style: styles4.actions }, /* @__PURE__ */ import_react6.default.createElement(
    "button",
    {
      style: styles4.useCertBtn,
      onClick: () => {
        setShowCertChoiceModal(false);
        setShowSuccessState(true);
        onComplete == null ? void 0 : onComplete(true);
      }
    },
    "Use This Certificate"
  ), /* @__PURE__ */ import_react6.default.createElement(
    "button",
    {
      style: {
        ...styles4.uploadCertBtn,
        backgroundColor: primaryColor
      },
      onClick: async () => {
        setShowCertChoiceModal(false);
        const res = await fetch(
          getApiUrl(framework, "gencert/token"),
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ customerCode, ...customerInfo })
          }
        );
        const { token: token2 } = await res.json();
        setToken(token2);
        setShowCertForm(true);
      }
    },
    "Upload New Certificate"
  )))), previewUrl && /* @__PURE__ */ import_react6.default.createElement(
    PDFModal,
    {
      isOpen: !!previewUrl,
      onClose: () => setPreviewUrl(null),
      pdfUrl: previewUrl,
      title: "Certificate PDF Preview"
    }
  ), showCertForm && token && /* @__PURE__ */ import_react6.default.createElement(Modal, { isOpen: true, onClose: handleClose }, /* @__PURE__ */ import_react6.default.createElement(
    AvataxCertificateClient,
    {
      token,
      state,
      showDownload,
      manualValidation,
      onCertificateComplete: handleCertificateComplete,
      onClose: handleClose,
      customerInfo,
      customerCode,
      mode: "renew",
      onComplete
    }
  )), showSuccessState && /* @__PURE__ */ import_react6.default.createElement("div", { style: styles4.success }, /* @__PURE__ */ import_react6.default.createElement(
    "button",
    {
      disabled: true,
      style: {
        ...styles4.successBtn,
        ...buttonStyles ? JSON.parse(buttonStyles) : {}
      }
    },
    "Exempt \u2713"
  )), error && /* @__PURE__ */ import_react6.default.createElement("div", { style: styles4.error }, /* @__PURE__ */ import_react6.default.createElement("p", null, error)));
}

// vendor/exemption-iq/dist/components/ExemptionIqCustomerClient.js
var import_react12 = __toESM(require_react(), 1);

// vendor/exemption-iq/dist/components/ExemptionIqCertificateTable.js
var import_react10 = __toESM(require_react(), 1);

// vendor/exemption-iq/dist/components/ExemptionIqGencertModal.js
var import_react7 = __toESM(require_react(), 1);
"use client";
function ExemptionIqGenCertModal({
  isOpen,
  onClose,
  token,
  state,
  customerCode,
  customerInfo,
  disableCustomerFields = false,
  showDownload = false,
  manualValidation = true,
  onCertificateComplete,
  mode,
  onComplete
}) {
  return /* @__PURE__ */ import_react7.default.createElement(Modal, { isOpen, onClose }, /* @__PURE__ */ import_react7.default.createElement(
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
      customerInfo,
      shouldPrefillState: disableCustomerFields,
      mode: "renew",
      onComplete
    }
  ));
}

// vendor/exemption-iq/dist/components/ExemptionIqAddCertificateButton.js
var import_react8 = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
"use client";
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
];
var styles5 = {
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
  customerInfo,
  buttonText = "Add Certificate",
  buttonTextColor = "#FFFFFF",
  primaryColor = "#2966B1",
  buttonStyles,
  showDownload = false,
  manualValidation = true,
  certificateComplete,
  onComplete
}) {
  const [showStateSelector, setShowStateSelector] = (0, import_react8.useState)(false);
  const [showGenCertModal, setShowGenCertModal] = (0, import_react8.useState)(false);
  const [selectedState, setSelectedState] = (0, import_react8.useState)(null);
  const handleButtonClick = () => {
    if (token && customerCode)
      setShowStateSelector(true);
  };
  const handleStateSubmit = () => {
    if (selectedState) {
      setShowStateSelector(false);
      setShowGenCertModal(true);
    }
  };
  const handleCertificateComplete = () => {
    setShowGenCertModal(false);
    setSelectedState(null);
    certificateComplete();
  };
  const handleCloseAll = () => {
    setShowGenCertModal(false);
    setShowStateSelector(false);
    setSelectedState(null);
  };
  const computedButtonStyle = {
    ...styles5.button,
    backgroundColor: primaryColor,
    color: buttonTextColor,
    cursor: !token || !customerCode ? "not-allowed" : "pointer",
    opacity: !token || !customerCode ? 0.6 : 1,
    ...buttonStyles ? JSON.parse(buttonStyles) : {}
  };
  return /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement(
    "button",
    {
      onClick: handleButtonClick,
      disabled: !token || !customerCode,
      style: computedButtonStyle
    },
    buttonText
  ), showStateSelector && /* @__PURE__ */ import_react9.default.createElement(Modal, { isOpen: showStateSelector, onClose: handleCloseAll }, /* @__PURE__ */ import_react9.default.createElement("div", { style: styles5.modalContent }, /* @__PURE__ */ import_react9.default.createElement("h2", { style: { fontSize: "1.125rem", fontWeight: 600 } }, "Select State for Certificate"), /* @__PURE__ */ import_react9.default.createElement(
    "select",
    {
      style: styles5.select,
      value: selectedState || "",
      onChange: (e) => setSelectedState(e.target.value)
    },
    /* @__PURE__ */ import_react9.default.createElement("option", { value: "", disabled: true }, "-- Choose a state --"),
    CERTCAPTURE_ZONES.map((s) => /* @__PURE__ */ import_react9.default.createElement("option", { key: s, value: s }, s))
  ), /* @__PURE__ */ import_react9.default.createElement("div", { style: styles5.modalActions }, /* @__PURE__ */ import_react9.default.createElement("button", { onClick: handleCloseAll, style: styles5.cancelBtn }, "Cancel"), /* @__PURE__ */ import_react9.default.createElement(
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
  )))), showGenCertModal && selectedState && /* @__PURE__ */ import_react9.default.createElement(Modal, { isOpen: showGenCertModal, onClose: handleCloseAll }, /* @__PURE__ */ import_react9.default.createElement(
    AvataxCertificateClient,
    {
      token,
      state: selectedState,
      customerCode,
      customerInfo,
      showDownload,
      manualValidation,
      shouldPrefillState: false,
      onCertificateComplete: handleCertificateComplete,
      onClose: handleCloseAll,
      mode: "add",
      onComplete
    }
  )));
}

// vendor/exemption-iq/dist/components/ExemptionIqCertificateTable.js
var import_react11 = __toESM(require_react(), 1);
"use client";
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
  showDownload = false,
  manualValidation = true,
  buttonText = "Add New Certificate",
  buttonTextColor,
  primaryColor = "#2966B1",
  successColor = "#14AE5C",
  dangerColor = "#E76F51",
  buttonStyles,
  onComplete,
  framework = "next"
}) {
  const [certificates, setCertificates] = (0, import_react10.useState)(initialCertificates);
  const [previewUrl, setPreviewUrl] = (0, import_react10.useState)(null);
  const [showRenewModal, setShowRenewModal] = (0, import_react10.useState)(false);
  const [isRenewing, setIsRenewing] = (0, import_react10.useState)(false);
  const [selectedCert, setSelectedCert] = (0, import_react10.useState)(null);
  (0, import_react10.useEffect)(() => {
    if (sessionToken) {
      document.cookie = `eiq_session_token=${sessionToken.token}; path=/; max-age=3600; SameSite=Lax`;
    }
  }, []);
  const handleCertificateComplete = async () => {
    try {
      const response = await fetch(getApiUrl(framework, "certificates"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerCode: customer.customerCode })
      });
      if (!response.ok)
        throw new Error("Failed to fetch updated certificates");
      const updated = await response.json();
      setCertificates(updated);
      setIsRenewing(false);
      setShowRenewModal(false);
      setSelectedCert(null);
    } catch (err) {
      console.error("Error refreshing certificates:", err);
    } finally {
      window.location.reload();
    }
  };
  const isExpiringSoon = (expirationDate) => {
    const today = /* @__PURE__ */ new Date();
    const expiry = new Date(expirationDate);
    const days = (expiry.getTime() - today.getTime()) / (1e3 * 60 * 60 * 24);
    return days <= 30 && days >= 0;
  };
  return /* @__PURE__ */ import_react11.default.createElement("div", { style: styles6.container }, previewUrl && /* @__PURE__ */ import_react11.default.createElement(
    PDFModal,
    {
      isOpen: !!previewUrl,
      onClose: () => setPreviewUrl(null),
      pdfUrl: previewUrl,
      title: "Certificate PDF Preview"
    }
  ), /* @__PURE__ */ import_react11.default.createElement("div", { style: styles6.tableHeader }, /* @__PURE__ */ import_react11.default.createElement("h2", { style: styles6.heading }, customer.name, " Exemption Certificates"), /* @__PURE__ */ import_react11.default.createElement(
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
  )), /* @__PURE__ */ import_react11.default.createElement("div", { style: styles6.tableContainer }, /* @__PURE__ */ import_react11.default.createElement("table", { style: styles6.table }, /* @__PURE__ */ import_react11.default.createElement("thead", null, /* @__PURE__ */ import_react11.default.createElement("tr", null, [
    "Status",
    "Exposure Zone",
    "Reason",
    "Signed Date",
    "Expiration Date",
    "Actions"
  ].map((h) => /* @__PURE__ */ import_react11.default.createElement("th", { key: h, style: styles6.th }, h)))), /* @__PURE__ */ import_react11.default.createElement("tbody", null, certificates.map((cert) => /* @__PURE__ */ import_react11.default.createElement("tr", { key: cert.id }, /* @__PURE__ */ import_react11.default.createElement("td", { style: styles6.td }, /* @__PURE__ */ import_react11.default.createElement(
    "span",
    {
      style: {
        textTransform: "capitalize",
        fontWeight: 500,
        color: cert.status === "valid" ? "#16a34a" : cert.status === "expired" ? "#dc2626" : cert.status === "invalid" ? "#ea580c" : "#4b5563"
      }
    },
    cert.status
  )), /* @__PURE__ */ import_react11.default.createElement("td", { style: styles6.td }, cert.exposureZone), /* @__PURE__ */ import_react11.default.createElement("td", { style: styles6.td }, cert.exemptionReason), /* @__PURE__ */ import_react11.default.createElement("td", { style: styles6.td }, cert.signedDate), /* @__PURE__ */ import_react11.default.createElement(
    "td",
    {
      style: {
        ...styles6.td,
        color: isExpiringSoon(cert.expirationDate) ? dangerColor : void 0,
        fontWeight: isExpiringSoon(cert.expirationDate) ? 600 : void 0
      }
    },
    cert.expirationDate
  ), /* @__PURE__ */ import_react11.default.createElement("td", { style: styles6.td }, /* @__PURE__ */ import_react11.default.createElement("div", { style: styles6.actionRow }, /* @__PURE__ */ import_react11.default.createElement(
    "button",
    {
      onClick: () => setPreviewUrl(
        getApiUrl(framework, `certificate/${cert.id}`)
      ),
      title: "View Certificate",
      style: { ...styles6.actionButton, color: primaryColor }
    },
    "View"
  ), /* @__PURE__ */ import_react11.default.createElement(
    "button",
    {
      onClick: () => {
        setSelectedCert(cert);
        setIsRenewing(true);
        setShowRenewModal(true);
      },
      title: "Renew Certificate",
      style: { ...styles6.actionButton, color: successColor }
    },
    "Renew"
  ))))), certificates.length === 0 && /* @__PURE__ */ import_react11.default.createElement("tr", null, /* @__PURE__ */ import_react11.default.createElement("td", { colSpan: 6, style: styles6.emptyCell }, 'No certificates found. Click "Add New Certificate" to create one.'))))), isRenewing && selectedCert && /* @__PURE__ */ import_react11.default.createElement(
    ExemptionIqGenCertModal,
    {
      isOpen: showRenewModal,
      onClose: () => {
        setShowRenewModal(false);
        setIsRenewing(false);
        setSelectedCert(null);
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
      disableCustomerFields: true,
      showDownload,
      manualValidation,
      onCertificateComplete: handleCertificateComplete,
      mode: "renew"
    }
  ));
}

// vendor/exemption-iq/dist/components/ExemptionIqCustomerClient.js
"use client";
function ExemptionIqCustomerClient({
  customerCode,
  customerInfo,
  state,
  showDownload = false,
  manualValidation = true,
  enableGenCertModal = false,
  buttonText = "Add New Certificate",
  buttonTextColor,
  primaryColor = "#2966B1",
  dangerColor = "#E76F51",
  successColor = "#14AE5C",
  buttonStyles,
  onComplete,
  framework = "next"
}) {
  const [token, setToken] = (0, import_react12.useState)(null);
  const [customer, setCustomer] = (0, import_react12.useState)(null);
  const [certificates, setCertificates] = (0, import_react12.useState)([]);
  const [error, setError] = (0, import_react12.useState)(null);
  const [loading, setLoading] = (0, import_react12.useState)(true);
  const [sessionReady, setSessionReady] = (0, import_react12.useState)(false);
  (0, import_react12.useEffect)(() => {
    const establishSession = async () => {
      try {
        const res = await fetch(getApiUrl(framework, "session"), {
          credentials: "include"
        });
        if (!res.ok)
          throw new Error("Failed to fetch session");
        const data = await res.json();
        document.cookie = `eiq_session_token=${data.token}; path=/; max-age=3600; SameSite=Lax`;
        setSessionReady(true);
      } catch (err) {
        console.error("\u274C Failed to set session cookie", err);
        setError("Session initialization failed");
        setLoading(false);
      }
    };
    establishSession();
  }, []);
  (0, import_react12.useEffect)(() => {
    if (!sessionReady)
      return;
    const init = async () => {
      try {
        setLoading(true);
        const tokenRes = await fetch(getApiUrl(framework, "gencert/token"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ customerCode, ...customerInfo })
        });
        const tokenData = await tokenRes.json();
        setToken(tokenData.token);
        setCustomer(tokenData.customer);
        const certRes = await fetch(getApiUrl(framework, "certificates"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ customerCode })
        });
        const certData = await certRes.json();
        setCertificates(certData);
      } catch (err) {
        console.error("\u274C Client component init error:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [sessionReady, customerCode]);
  if (error) {
    return /* @__PURE__ */ import_react12.default.createElement("div", { className: "mt-4 text-red-500" }, /* @__PURE__ */ import_react12.default.createElement("p", null, error));
  }
  if (loading || !token || !customer) {
    return /* @__PURE__ */ import_react12.default.createElement("div", { className: "text-gray-500 italic mt-4" }, "Loading exemption data...");
  }
  return /* @__PURE__ */ import_react12.default.createElement(
    ExemptionIqCertificateTable,
    {
      token,
      certificates,
      customer,
      customerInfo,
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

// vendor/exemption-iq/dist/components/ExemptionIqButton.js
var import_react13 = __toESM(require_react(), 1);
var import_react14 = __toESM(require_react(), 1);
"use client";
if (typeof window !== "undefined" && !document.getElementById("eiq-btn-keyframes")) {
  const style = document.createElement("style");
  style.id = "eiq-btn-keyframes";
  style.innerHTML = `@keyframes spin { to { transform: rotate(360deg); } }`;
  document.head.appendChild(style);
}

// vendor/exemption-iq/dist/components/ExemptionIqServer.js
var import_react15 = __toESM(require_react(), 1);
var baseUrl = typeof process !== "undefined" ? process.env.AVATAX_API_BASE : "https://sandbox-rest.avatax.com/api/v2";

// vendor/exemption-iq/dist/components/ExemptionIqCustomerServer.js
var import_react16 = __toESM(require_react(), 1);

// app/components/ClientOnly.tsx
var import_react17 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ClientOnly.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ClientOnly.tsx"
  );
  import.meta.hot.lastModified = "1746187379664.1348";
}
function ClientOnly({
  children
}) {
  _s();
  const [mounted, setMounted] = (0, import_react17.useState)(false);
  (0, import_react17.useEffect)(() => {
    setMounted(true);
  }, []);
  if (!mounted)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
    fileName: "app/components/ClientOnly.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(ClientOnly, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = ClientOnly;
var _c;
$RefreshReg$(_c, "ClientOnly");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ExemptionIqClient,
  ExemptionIqCustomerClient,
  ClientOnly
};
//# sourceMappingURL=/build/_shared/chunk-GVQWZBSV.js.map
