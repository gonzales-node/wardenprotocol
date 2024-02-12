// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file wardenprotocol/treasury/tx.proto (package wardenprotocol.treasury, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { KeyRequestStatus, KeyType } from "./key_pb.js";
import { SignRequestStatus } from "./signature_pb.js";
import { WalletType } from "./wallet_pb.js";

/**
 * @generated from message wardenprotocol.treasury.MsgNewKeyRequest
 */
export class MsgNewKeyRequest extends Message<MsgNewKeyRequest> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string space_addr = 2;
   */
  spaceAddr = "";

  /**
   * @generated from field: string keychain_addr = 3;
   */
  keychainAddr = "";

  /**
   * @generated from field: wardenprotocol.treasury.KeyType key_type = 4;
   */
  keyType = KeyType.UNSPECIFIED;

  /**
   * @generated from field: uint64 btl = 5;
   */
  btl = protoInt64.zero;

  constructor(data?: PartialMessage<MsgNewKeyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.MsgNewKeyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "space_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "keychain_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "key_type", kind: "enum", T: proto3.getEnumType(KeyType) },
    { no: 5, name: "btl", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewKeyRequest {
    return new MsgNewKeyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewKeyRequest {
    return new MsgNewKeyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewKeyRequest {
    return new MsgNewKeyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewKeyRequest | PlainMessage<MsgNewKeyRequest> | undefined, b: MsgNewKeyRequest | PlainMessage<MsgNewKeyRequest> | undefined): boolean {
    return proto3.util.equals(MsgNewKeyRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.MsgNewKeyRequestResponse
 */
export class MsgNewKeyRequestResponse extends Message<MsgNewKeyRequestResponse> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<MsgNewKeyRequestResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.MsgNewKeyRequestResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewKeyRequestResponse {
    return new MsgNewKeyRequestResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewKeyRequestResponse {
    return new MsgNewKeyRequestResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewKeyRequestResponse {
    return new MsgNewKeyRequestResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewKeyRequestResponse | PlainMessage<MsgNewKeyRequestResponse> | undefined, b: MsgNewKeyRequestResponse | PlainMessage<MsgNewKeyRequestResponse> | undefined): boolean {
    return proto3.util.equals(MsgNewKeyRequestResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.MsgNewKey
 */
export class MsgNewKey extends Message<MsgNewKey> {
  /**
   * @generated from field: bytes public_key = 1;
   */
  publicKey = new Uint8Array(0);

  constructor(data?: PartialMessage<MsgNewKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.MsgNewKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "public_key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewKey {
    return new MsgNewKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewKey {
    return new MsgNewKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewKey {
    return new MsgNewKey().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewKey | PlainMessage<MsgNewKey> | undefined, b: MsgNewKey | PlainMessage<MsgNewKey> | undefined): boolean {
    return proto3.util.equals(MsgNewKey, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.MsgUpdateKeyRequest
 */
export class MsgUpdateKeyRequest extends Message<MsgUpdateKeyRequest> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: uint64 request_id = 2;
   */
  requestId = protoInt64.zero;

  /**
   * @generated from field: wardenprotocol.treasury.KeyRequestStatus status = 3;
   */
  status = KeyRequestStatus.UNSPECIFIED;

  /**
   * Holds the result of the request. If status is approved, the result will
   * contain the requested key's public key that can be used for signing
   * payloads.
   * If status is rejected, the result will contain the reason.
   *
   * @generated from oneof wardenprotocol.treasury.MsgUpdateKeyRequest.result
   */
  result: {
    /**
     * @generated from field: wardenprotocol.treasury.MsgNewKey key = 4;
     */
    value: MsgNewKey;
    case: "key";
  } | {
    /**
     * @generated from field: string reject_reason = 5;
     */
    value: string;
    case: "rejectReason";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<MsgUpdateKeyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.MsgUpdateKeyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "request_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(KeyRequestStatus) },
    { no: 4, name: "key", kind: "message", T: MsgNewKey, oneof: "result" },
    { no: 5, name: "reject_reason", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "result" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateKeyRequest {
    return new MsgUpdateKeyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateKeyRequest {
    return new MsgUpdateKeyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateKeyRequest {
    return new MsgUpdateKeyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateKeyRequest | PlainMessage<MsgUpdateKeyRequest> | undefined, b: MsgUpdateKeyRequest | PlainMessage<MsgUpdateKeyRequest> | undefined): boolean {
    return proto3.util.equals(MsgUpdateKeyRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.MsgUpdateKeyRequestResponse
 */
export class MsgUpdateKeyRequestResponse extends Message<MsgUpdateKeyRequestResponse> {
  constructor(data?: PartialMessage<MsgUpdateKeyRequestResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.MsgUpdateKeyRequestResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateKeyRequestResponse {
    return new MsgUpdateKeyRequestResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateKeyRequestResponse {
    return new MsgUpdateKeyRequestResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateKeyRequestResponse {
    return new MsgUpdateKeyRequestResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateKeyRequestResponse | PlainMessage<MsgUpdateKeyRequestResponse> | undefined, b: MsgUpdateKeyRequestResponse | PlainMessage<MsgUpdateKeyRequestResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateKeyRequestResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.MsgNewSignatureRequest
 */
export class MsgNewSignatureRequest extends Message<MsgNewSignatureRequest> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: uint64 key_id = 2;
   */
  keyId = protoInt64.zero;

  /**
   * @generated from field: bytes data_for_signing = 3;
   */
  dataForSigning = new Uint8Array(0);

  /**
   * @generated from field: uint64 btl = 4;
   */
  btl = protoInt64.zero;

  constructor(data?: PartialMessage<MsgNewSignatureRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.MsgNewSignatureRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "key_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "data_for_signing", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "btl", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewSignatureRequest {
    return new MsgNewSignatureRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewSignatureRequest {
    return new MsgNewSignatureRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewSignatureRequest {
    return new MsgNewSignatureRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewSignatureRequest | PlainMessage<MsgNewSignatureRequest> | undefined, b: MsgNewSignatureRequest | PlainMessage<MsgNewSignatureRequest> | undefined): boolean {
    return proto3.util.equals(MsgNewSignatureRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.MsgNewSignatureRequestResponse
 */
export class MsgNewSignatureRequestResponse extends Message<MsgNewSignatureRequestResponse> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<MsgNewSignatureRequestResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.MsgNewSignatureRequestResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewSignatureRequestResponse {
    return new MsgNewSignatureRequestResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewSignatureRequestResponse {
    return new MsgNewSignatureRequestResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewSignatureRequestResponse {
    return new MsgNewSignatureRequestResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewSignatureRequestResponse | PlainMessage<MsgNewSignatureRequestResponse> | undefined, b: MsgNewSignatureRequestResponse | PlainMessage<MsgNewSignatureRequestResponse> | undefined): boolean {
    return proto3.util.equals(MsgNewSignatureRequestResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.MsgSignedData
 */
export class MsgSignedData extends Message<MsgSignedData> {
  /**
   * @generated from field: bytes signed_data = 1;
   */
  signedData = new Uint8Array(0);

  constructor(data?: PartialMessage<MsgSignedData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.MsgSignedData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "signed_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSignedData {
    return new MsgSignedData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSignedData {
    return new MsgSignedData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSignedData {
    return new MsgSignedData().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSignedData | PlainMessage<MsgSignedData> | undefined, b: MsgSignedData | PlainMessage<MsgSignedData> | undefined): boolean {
    return proto3.util.equals(MsgSignedData, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.MsgFulfilSignatureRequest
 */
export class MsgFulfilSignatureRequest extends Message<MsgFulfilSignatureRequest> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: uint64 request_id = 2;
   */
  requestId = protoInt64.zero;

  /**
   * @generated from field: wardenprotocol.treasury.SignRequestStatus status = 3;
   */
  status = SignRequestStatus.UNSPECIFIED;

  /**
   * Holds the result of the request. If status is approved, the result will
   * contain the signed data that was requested
   * If status is rejected, the result will contain the reason.
   *
   * @generated from oneof wardenprotocol.treasury.MsgFulfilSignatureRequest.result
   */
  result: {
    /**
     * @generated from field: wardenprotocol.treasury.MsgSignedData payload = 4;
     */
    value: MsgSignedData;
    case: "payload";
  } | {
    /**
     * @generated from field: string reject_reason = 5;
     */
    value: string;
    case: "rejectReason";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<MsgFulfilSignatureRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.MsgFulfilSignatureRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "request_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(SignRequestStatus) },
    { no: 4, name: "payload", kind: "message", T: MsgSignedData, oneof: "result" },
    { no: 5, name: "reject_reason", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "result" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFulfilSignatureRequest {
    return new MsgFulfilSignatureRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFulfilSignatureRequest {
    return new MsgFulfilSignatureRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFulfilSignatureRequest {
    return new MsgFulfilSignatureRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFulfilSignatureRequest | PlainMessage<MsgFulfilSignatureRequest> | undefined, b: MsgFulfilSignatureRequest | PlainMessage<MsgFulfilSignatureRequest> | undefined): boolean {
    return proto3.util.equals(MsgFulfilSignatureRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.MsgFulfilSignatureRequestResponse
 */
export class MsgFulfilSignatureRequestResponse extends Message<MsgFulfilSignatureRequestResponse> {
  constructor(data?: PartialMessage<MsgFulfilSignatureRequestResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.MsgFulfilSignatureRequestResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFulfilSignatureRequestResponse {
    return new MsgFulfilSignatureRequestResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFulfilSignatureRequestResponse {
    return new MsgFulfilSignatureRequestResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFulfilSignatureRequestResponse {
    return new MsgFulfilSignatureRequestResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgFulfilSignatureRequestResponse | PlainMessage<MsgFulfilSignatureRequestResponse> | undefined, b: MsgFulfilSignatureRequestResponse | PlainMessage<MsgFulfilSignatureRequestResponse> | undefined): boolean {
    return proto3.util.equals(MsgFulfilSignatureRequestResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.MsgNewSignTransactionRequest
 */
export class MsgNewSignTransactionRequest extends Message<MsgNewSignTransactionRequest> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: uint64 key_id = 2;
   */
  keyId = protoInt64.zero;

  /**
   * @generated from field: wardenprotocol.treasury.WalletType wallet_type = 3;
   */
  walletType = WalletType.UNSPECIFIED;

  /**
   * @generated from field: bytes unsigned_transaction = 4;
   */
  unsignedTransaction = new Uint8Array(0);

  /**
   * @generated from field: uint64 btl = 5;
   */
  btl = protoInt64.zero;

  /**
   * Additional metadata required when parsing the unsigned transaction.
   *
   * @generated from field: google.protobuf.Any metadata = 6;
   */
  metadata?: Any;

  constructor(data?: PartialMessage<MsgNewSignTransactionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.MsgNewSignTransactionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "key_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "wallet_type", kind: "enum", T: proto3.getEnumType(WalletType) },
    { no: 4, name: "unsigned_transaction", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "btl", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "metadata", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewSignTransactionRequest {
    return new MsgNewSignTransactionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewSignTransactionRequest {
    return new MsgNewSignTransactionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewSignTransactionRequest {
    return new MsgNewSignTransactionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewSignTransactionRequest | PlainMessage<MsgNewSignTransactionRequest> | undefined, b: MsgNewSignTransactionRequest | PlainMessage<MsgNewSignTransactionRequest> | undefined): boolean {
    return proto3.util.equals(MsgNewSignTransactionRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.MsgNewSignTransactionRequestResponse
 */
export class MsgNewSignTransactionRequestResponse extends Message<MsgNewSignTransactionRequestResponse> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: uint64 signature_request_id = 2;
   */
  signatureRequestId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgNewSignTransactionRequestResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.MsgNewSignTransactionRequestResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "signature_request_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewSignTransactionRequestResponse {
    return new MsgNewSignTransactionRequestResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewSignTransactionRequestResponse {
    return new MsgNewSignTransactionRequestResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewSignTransactionRequestResponse {
    return new MsgNewSignTransactionRequestResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewSignTransactionRequestResponse | PlainMessage<MsgNewSignTransactionRequestResponse> | undefined, b: MsgNewSignTransactionRequestResponse | PlainMessage<MsgNewSignTransactionRequestResponse> | undefined): boolean {
    return proto3.util.equals(MsgNewSignTransactionRequestResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.treasury.MetadataEthereum
 */
export class MetadataEthereum extends Message<MetadataEthereum> {
  /**
   * @generated from field: uint64 chain_id = 1;
   */
  chainId = protoInt64.zero;

  constructor(data?: PartialMessage<MetadataEthereum>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.treasury.MetadataEthereum";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetadataEthereum {
    return new MetadataEthereum().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetadataEthereum {
    return new MetadataEthereum().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetadataEthereum {
    return new MetadataEthereum().fromJsonString(jsonString, options);
  }

  static equals(a: MetadataEthereum | PlainMessage<MetadataEthereum> | undefined, b: MetadataEthereum | PlainMessage<MetadataEthereum> | undefined): boolean {
    return proto3.util.equals(MetadataEthereum, a, b);
  }
}
