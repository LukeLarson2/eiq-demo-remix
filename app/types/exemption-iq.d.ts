// This is a type definition file for the exemption-iq package
// In a real implementation, these types would be provided by the package

declare module 'exemption-iq' {
  export interface CustomerInfo {
    name: string;
    emailAddress: string;
    addressLine1: string;
    phoneNumber: string;
    city: string;
    country: string;
    postalCode: string;
    region: string; // State abbreviation (e.g., "FL")
  }

  export interface ExemptionIqClientProps {
    customerCode: string;
    customerInfo: CustomerInfo;
    state: string;
    showDownload?: boolean;
    autoValidateCertificate?: boolean;
    enableGenCertModal?: boolean;
    buttonText?: string;
    buttonTextColor?: string;
    primaryColor?: string;
    dangerColor?: string;
    successColor?: string;
    buttonStyles?: string;
    onComplete: (status: boolean) => boolean;
  }

  export function ExemptionIqClient(props: ExemptionIqClientProps): JSX.Element;
  export function ExemptionIqServer(props: ExemptionIqClientProps): JSX.Element;
}