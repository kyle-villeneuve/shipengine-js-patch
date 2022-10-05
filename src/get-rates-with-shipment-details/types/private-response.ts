/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CalculateRatesResponseBody = PartialShipment & RateResponse;
export type SeId = string;
export type SeId1 = string;
export type ServiceCode = string;
export type OrderSourceName =
  | "amazon_ca"
  | "amazon_us"
  | "brightpearl"
  | "channel_advisor"
  | "cratejoy"
  | "ebay"
  | "etsy"
  | "jane"
  | "groupon_goods"
  | "magento"
  | "paypal"
  | "seller_active"
  | "shopify"
  | "stitch_labs"
  | "squarespace"
  | "three_dcart"
  | "tophatter"
  | "walmart"
  | "woo_commerce"
  | "volusion";
export type TaxableEntityType = "shipper" | "recipient";
export type IdentifierType =
  | "vat"
  | "eori"
  | "ssn"
  | "ein"
  | "tin"
  | "ioss"
  | "pan"
  | "voec";
export type Date = string;
export type DateTime = string;
export type DateTime1 = string;
export type ShipmentStatus =
  | "pending"
  | "processing"
  | "label_purchased"
  | "cancelled";
export type Address = PartialAddress;
export type PostalCode = string;
export type CountryCode = string;
export type AddressResidentialIndicator = "unknown" | "yes" | "no";
export type Address1 = PartialAddress1;
export type PostalCode1 = string;
export type CountryCode1 = string;
export type AddressResidentialIndicator1 = "unknown" | "yes" | "no";
export type SeId2 = string;
export type Address2 = PartialAddress2;
export type PostalCode2 = string;
export type CountryCode2 = string;
export type AddressResidentialIndicator2 = "unknown" | "yes" | "no";
export type DeliveryConfirmation =
  | "none"
  | "delivery"
  | "signature"
  | "adult_signature"
  | "direct_signature"
  | "delivery_mailed";
export type PackageContents =
  | "merchandise"
  | "documents"
  | "gift"
  | "returned_goods"
  | "sample";
export type NonDelivery = "return_to_sender" | "treat_as_abandoned";
export type SeId3 = string;
export type Currency = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type CountryCode3 = string;
export type CountryCode4 = string;
export type BillToParty = "recipient" | "third_party";
export type WeightUnit = "pound" | "ounce" | "gram" | "kilogram";
export type OriginType = "pickup" | "drop_off";
export type CollectOnDeliveryPaymentType =
  | "any"
  | "cash"
  | "cash_equivalent"
  | "none";
export type Currency1 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type OriginType1 = "pickup" | "drop_off";
export type InsuranceProvider =
  | "none"
  | "shipsurance"
  | "carrier"
  | "third_party";
export type OrderSourceName1 =
  | "amazon_ca"
  | "amazon_us"
  | "brightpearl"
  | "channel_advisor"
  | "cratejoy"
  | "ebay"
  | "etsy"
  | "jane"
  | "groupon_goods"
  | "magento"
  | "paypal"
  | "seller_active"
  | "shopify"
  | "stitch_labs"
  | "squarespace"
  | "three_dcart"
  | "tophatter"
  | "walmart"
  | "woo_commerce"
  | "volusion";
export type PackageCode = string;
export type WeightUnit1 = "pound" | "ounce" | "gram" | "kilogram";
export type DimensionUnit = "inch" | "centimeter";
export type Currency2 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type TrackingNumber = string;
export type WeightUnit2 = "pound" | "ounce" | "gram" | "kilogram";
export type SeId4 = string;
export type RateType = "check" | "shipment";
export type SeId5 = string;
export type Currency3 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type Currency4 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type Currency5 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type Currency6 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type Currency7 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type Date1 = string;
export type ValidationStatus = "valid" | "invalid" | "has_warnings" | "unknown";
export type SeId6 = string;
export type RateType1 = "check" | "shipment";
export type SeId7 = string;
export type Currency8 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type Currency9 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type Currency10 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type Currency11 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type Currency12 = "usd" | "cad" | "aud" | "gbp" | "eur" | "nzd";
export type Date2 = string;
export type ValidationStatus1 =
  | "valid"
  | "invalid"
  | "has_warnings"
  | "unknown";
export type SeId8 = string;
export type SeId9 = string;
export type SeId10 = string;
export type RateResponseStatus = "working" | "completed" | "partial" | "error";
export type ErrorSource = "carrier" | "order_source" | "shipengine";
export type ErrorType =
  | "account_status"
  | "business_rules"
  | "validation"
  | "security"
  | "system"
  | "integrations";
export type ErrorCode =
  | "auto_fund_not_supported"
  | "batch_cannot_be_modified"
  | "carrier_conflict"
  | "carrier_disconnected"
  | "carrier_not_connected"
  | "carrier_not_supported"
  | "confirmation_not_supported"
  | "default_warehouse_cannot_be_deleted"
  | "field_conflict"
  | "field_value_required"
  | "forbidden"
  | "identifier_conflict"
  | "identifiers_must_match"
  | "insufficient_funds"
  | "invalid_address"
  | "invalid_billing_plan"
  | "invalid_field_value"
  | "invalid_identifier"
  | "invalid_status"
  | "invalid_string_length"
  | "label_images_not_supported"
  | "meter_failure"
  | "order_source_not_active"
  | "rate_limit_exceeded"
  | "refresh_not_supported"
  | "request_body_required"
  | "return_label_not_supported"
  | "settings_not_supported"
  | "subscription_inactive"
  | "terms_not_accepted"
  | "tracking_not_supported"
  | "trial_expired"
  | "unauthorized"
  | "unknown"
  | "unspecified"
  | "verification_failure"
  | "warehouse_conflict"
  | "webhook_event_type_conflict";

export interface PartialShipment {
  shipment_id?: SeId;
  carrier_id?: SeId1;
  service_code?: ServiceCode;
  external_order_id?: string;
  items?: ShipmentItem[];
  tax_identifiers?: TaxIdentifier[];
  external_shipment_id?: string;
  ship_date?: Date;
  created_at?: DateTime;
  modified_at?: DateTime1;
  shipment_status?: ShipmentStatus & string;
  ship_to?: Address;
  ship_from?: Address1;
  warehouse_id?: SeId2;
  return_to?: Address2;
  confirmation?: DeliveryConfirmation & string;
  customs?: InternationalShipmentOptions;
  advanced_options?: AdvancedShipmentOptions;
  origin_type?: OriginType1;
  insurance_provider?: InsuranceProvider & string;
  /**
   * @minItems 0
   */
  tags?: Tag[];
  order_source_code?: OrderSourceName1;
  /**
   * @minItems 1
   */
  packages?: Package[];
  total_weight?: Weight2;
}
export interface ShipmentItem {
  name?: string;
  sales_order_id?: string;
  sales_order_item_id?: string;
  quantity?: number;
  sku?: string;
  external_order_id?: string;
  external_order_item_id?: string;
  asin?: string;
  order_source_code?: OrderSourceName;
}
export interface TaxIdentifier {
  taxable_entity_type: TaxableEntityType;
  identifier_type: IdentifierType;
  issuing_authority: string;
  value: string;
}
export interface PartialAddress {
  name?: string;
  phone?: string;
  company_name?: string;
  address_line1?: string;
  address_line2?: string;
  address_line3?: string;
  city_locality?: string;
  state_province?: string;
  postal_code?: PostalCode;
  country_code?: CountryCode;
  address_residential_indicator?: AddressResidentialIndicator & string;
}
export interface PartialAddress1 {
  name?: string;
  phone?: string;
  company_name?: string;
  address_line1?: string;
  address_line2?: string;
  address_line3?: string;
  city_locality?: string;
  state_province?: string;
  postal_code?: PostalCode1;
  country_code?: CountryCode1;
  address_residential_indicator?: AddressResidentialIndicator1 & string;
}
export interface PartialAddress2 {
  name?: string;
  phone?: string;
  company_name?: string;
  address_line1?: string;
  address_line2?: string;
  address_line3?: string;
  city_locality?: string;
  state_province?: string;
  postal_code?: PostalCode2;
  country_code?: CountryCode2;
  address_residential_indicator?: AddressResidentialIndicator2 & string;
}
export interface InternationalShipmentOptions {
  contents: PackageContents & string;
  non_delivery: NonDelivery & string;
  /**
   * @minItems 0
   */
  customs_items?: CustomsItem[];
}
export interface CustomsItem {
  customs_item_id: SeId3;
  quantity?: number;
  value?: MonetaryValue;
  harmonized_tariff_code?: string;
  country_of_origin?: CountryCode3;
  unit_of_measure?: string;
  sku?: string;
  sku_description?: string;
}
export interface MonetaryValue {
  currency: Currency;
  amount: number;
}
export interface AdvancedShipmentOptions {
  bill_to_account?: string;
  bill_to_country_code?: CountryCode4;
  bill_to_party?: BillToParty;
  bill_to_postal_code?: string;
  contains_alcohol?: boolean;
  delivered_duty_paid?: boolean;
  dry_ice?: boolean;
  dry_ice_weight?: Weight;
  non_machinable?: boolean;
  saturday_delivery?: boolean;
  use_ups_ground_freight_pricing?: boolean;
  freight_class?: string;
  custom_field1?: string;
  custom_field2?: string;
  custom_field3?: string;
  origin_type?: OriginType;
  shipper_release?: boolean;
  collect_on_delivery?: CollectOnDelivery;
}
export interface Weight {
  value: number;
  unit: WeightUnit;
}
export interface CollectOnDelivery {
  payment_type?: CollectOnDeliveryPaymentType;
  payment_amount?: PaymentAmount;
  [k: string]: unknown;
}
export interface PaymentAmount {
  currency?: Currency1;
  amount?: number;
  [k: string]: unknown;
}
export interface Tag {
  name: string;
}
export interface Package {
  package_code?: PackageCode;
  weight: Weight1;
  dimensions?: Dimensions;
  insured_value?: MonetaryValue1;
  tracking_number?: TrackingNumber;
  label_messages?: LabelMessages;
  external_package_id?: string;
}
export interface Weight1 {
  value: number;
  unit: WeightUnit1;
}
export interface Dimensions {
  unit: DimensionUnit & string;
  length: number;
  width: number;
  height: number;
}
export interface MonetaryValue1 {
  currency: Currency2;
  amount: number;
}
export interface LabelMessages {
  reference1: string;
  reference2: string;
  reference3: string;
}
export interface Weight2 {
  value: number;
  unit: WeightUnit2;
}
export interface RateResponse {
  rate_response?: RatesInformation;
}
export interface RatesInformation {
  rates?: Rate[];
  invalid_rates?: Rate1[];
  rate_request_id?: SeId8;
  shipment_id?: SeId9;
  created_at?: SeId10 & string;
  status?: RateResponseStatus;
  errors?: Error[];
}
export interface Rate {
  rate_id: SeId4;
  rate_type: RateType;
  carrier_id: SeId5;
  shipping_amount: MonetaryValue2;
  insurance_amount: MonetaryValue3;
  confirmation_amount: MonetaryValue4;
  other_amount: MonetaryValue5;
  tax_amount?: MonetaryValue6;
  zone: number;
  package_type: string;
  delivery_days?: number;
  guaranteed_service: boolean;
  estimated_delivery_date?: Date1;
  carrier_delivery_days?: string;
  ship_date?: string;
  negotiated_rate: boolean;
  service_type: string;
  service_code: string;
  trackable: boolean;
  carrier_code: string;
  carrier_nickname: string;
  carrier_friendly_name: string;
  validation_status: ValidationStatus;
  /**
   * @minItems 0
   */
  warning_messages: string[];
  /**
   * @minItems 0
   */
  error_messages: string[];
}
export interface MonetaryValue2 {
  currency: Currency3;
  amount: number;
}
export interface MonetaryValue3 {
  currency: Currency4;
  amount: number;
}
export interface MonetaryValue4 {
  currency: Currency5;
  amount: number;
}
export interface MonetaryValue5 {
  currency: Currency6;
  amount: number;
}
export interface MonetaryValue6 {
  currency: Currency7;
  amount: number;
}
export interface Rate1 {
  rate_id: SeId6;
  rate_type: RateType1;
  carrier_id: SeId7;
  shipping_amount: MonetaryValue7;
  insurance_amount: MonetaryValue8;
  confirmation_amount: MonetaryValue9;
  other_amount: MonetaryValue10;
  tax_amount?: MonetaryValue11;
  zone: number;
  package_type: string;
  delivery_days?: number;
  guaranteed_service: boolean;
  estimated_delivery_date?: Date2;
  carrier_delivery_days?: string;
  ship_date?: string;
  negotiated_rate: boolean;
  service_type: string;
  service_code: string;
  trackable: boolean;
  carrier_code: string;
  carrier_nickname: string;
  carrier_friendly_name: string;
  validation_status: ValidationStatus1;
  /**
   * @minItems 0
   */
  warning_messages: string[];
  /**
   * @minItems 0
   */
  error_messages: string[];
}
export interface MonetaryValue7 {
  currency: Currency8;
  amount: number;
}
export interface MonetaryValue8 {
  currency: Currency9;
  amount: number;
}
export interface MonetaryValue9 {
  currency: Currency10;
  amount: number;
}
export interface MonetaryValue10 {
  currency: Currency11;
  amount: number;
}
export interface MonetaryValue11 {
  currency: Currency12;
  amount: number;
}
export interface Error {
  error_source: ErrorSource;
  error_type: ErrorType;
  error_code: ErrorCode;
  message: string;
}
