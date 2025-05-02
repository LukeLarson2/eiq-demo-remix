import { useState } from "react";
import { ExemptionIqCustomerClient } from "vendor/exemption-iq/dist";
import { ClientOnly } from "~/components/ClientOnly";

const customerInfo = {
  name: "Acme Corporation",
  emailAddress: "purchasing@acmecorp.example",
  addressLine1: "123 Business Ave",
  phoneNumber: "555-123-4567",
  city: "Orlando",
  country: "USA",
  postalCode: "32801",
  region: "FL",
};
export default function Account() {
  const [activeTab, setActiveTab] = useState<"info" | "exemptions">("info");
  const [exemptionComplete, setExemptionComplete] = useState(false);
  const buttonStyles = JSON.stringify({
    width: "100%",
    height: "fit",
  });
  const handleExemptionComplete = (status: boolean) => {
    setExemptionComplete(status);
    return true;
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Customer Account
        </h1>

        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("info")}
              className={`
                whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                ${
                  activeTab === "info"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              Customer Info
            </button>
            <button
              onClick={() => setActiveTab("exemptions")}
              className={`
                whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                ${
                  activeTab === "exemptions"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              Exemptions
            </button>
          </nav>
        </div>

        {activeTab === "info" && (
          <div className="bg-white shadow rounded-lg p-6">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {customerInfo.name}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {customerInfo.emailAddress}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {customerInfo.phoneNumber}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {customerInfo.addressLine1}, {customerInfo.city},{" "}
                  {customerInfo.region} {customerInfo.postalCode},{" "}
                  {customerInfo.country}
                </dd>
              </div>
            </dl>
          </div>
        )}

        {activeTab === "exemptions" && (
          <div className="mt-6">
            <ClientOnly>
              <ExemptionIqCustomerClient
                customerCode="ACME001"
                customerInfo={customerInfo}
                state="Florida"
                primaryColor="#2966B1"
                onComplete={handleExemptionComplete}
                framework="remix"
                buttonStyles={buttonStyles}
                manualValidation={false}
                showDownload={true}
              />
            </ClientOnly>
          </div>
        )}
      </div>
    </div>
  );
}
