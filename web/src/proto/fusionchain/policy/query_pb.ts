// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file fusionchain/policy/query.proto (package fusionchain.policy, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Action, ActionStatus } from "./action_pb.js";
import { Policy } from "./policy_pb.js";

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message fusionchain.policy.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fusionchain.policy.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message fusionchain.policy.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: fusionchain.policy.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fusionchain.policy.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * @generated from message fusionchain.policy.QueryVerifyRequest
 */
export class QueryVerifyRequest extends Message<QueryVerifyRequest> {
  /**
   * @generated from field: string policy = 1;
   */
  policy = "";

  /**
   * @generated from field: string payload = 2;
   */
  payload = "";

  constructor(data?: PartialMessage<QueryVerifyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fusionchain.policy.QueryVerifyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "policy", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "payload", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVerifyRequest {
    return new QueryVerifyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVerifyRequest {
    return new QueryVerifyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVerifyRequest {
    return new QueryVerifyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryVerifyRequest | PlainMessage<QueryVerifyRequest> | undefined, b: QueryVerifyRequest | PlainMessage<QueryVerifyRequest> | undefined): boolean {
    return proto3.util.equals(QueryVerifyRequest, a, b);
  }
}

/**
 * @generated from message fusionchain.policy.QueryVerifyResponse
 */
export class QueryVerifyResponse extends Message<QueryVerifyResponse> {
  /**
   * @generated from field: bool result = 1;
   */
  result = false;

  constructor(data?: PartialMessage<QueryVerifyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fusionchain.policy.QueryVerifyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVerifyResponse {
    return new QueryVerifyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVerifyResponse {
    return new QueryVerifyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVerifyResponse {
    return new QueryVerifyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryVerifyResponse | PlainMessage<QueryVerifyResponse> | undefined, b: QueryVerifyResponse | PlainMessage<QueryVerifyResponse> | undefined): boolean {
    return proto3.util.equals(QueryVerifyResponse, a, b);
  }
}

/**
 * @generated from message fusionchain.policy.QueryActionsRequest
 */
export class QueryActionsRequest extends Message<QueryActionsRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryActionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fusionchain.policy.QueryActionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryActionsRequest {
    return new QueryActionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryActionsRequest {
    return new QueryActionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryActionsRequest {
    return new QueryActionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryActionsRequest | PlainMessage<QueryActionsRequest> | undefined, b: QueryActionsRequest | PlainMessage<QueryActionsRequest> | undefined): boolean {
    return proto3.util.equals(QueryActionsRequest, a, b);
  }
}

/**
 * @generated from message fusionchain.policy.QueryActionsResponse
 */
export class QueryActionsResponse extends Message<QueryActionsResponse> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 1;
   */
  pagination?: PageResponse;

  /**
   * @generated from field: repeated fusionchain.policy.Action actions = 2;
   */
  actions: Action[] = [];

  constructor(data?: PartialMessage<QueryActionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fusionchain.policy.QueryActionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageResponse },
    { no: 2, name: "actions", kind: "message", T: Action, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryActionsResponse {
    return new QueryActionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryActionsResponse {
    return new QueryActionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryActionsResponse {
    return new QueryActionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryActionsResponse | PlainMessage<QueryActionsResponse> | undefined, b: QueryActionsResponse | PlainMessage<QueryActionsResponse> | undefined): boolean {
    return proto3.util.equals(QueryActionsResponse, a, b);
  }
}

/**
 * @generated from message fusionchain.policy.PolicyResponse
 */
export class PolicyResponse extends Message<PolicyResponse> {
  /**
   * @generated from field: fusionchain.policy.Policy policy = 1;
   */
  policy?: Policy;

  /**
   * @generated from field: google.protobuf.Any metadata = 2;
   */
  metadata?: Any;

  constructor(data?: PartialMessage<PolicyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fusionchain.policy.PolicyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "policy", kind: "message", T: Policy },
    { no: 2, name: "metadata", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PolicyResponse {
    return new PolicyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PolicyResponse {
    return new PolicyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PolicyResponse {
    return new PolicyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PolicyResponse | PlainMessage<PolicyResponse> | undefined, b: PolicyResponse | PlainMessage<PolicyResponse> | undefined): boolean {
    return proto3.util.equals(PolicyResponse, a, b);
  }
}

/**
 * @generated from message fusionchain.policy.QueryPoliciesRequest
 */
export class QueryPoliciesRequest extends Message<QueryPoliciesRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryPoliciesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fusionchain.policy.QueryPoliciesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPoliciesRequest {
    return new QueryPoliciesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPoliciesRequest {
    return new QueryPoliciesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPoliciesRequest {
    return new QueryPoliciesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPoliciesRequest | PlainMessage<QueryPoliciesRequest> | undefined, b: QueryPoliciesRequest | PlainMessage<QueryPoliciesRequest> | undefined): boolean {
    return proto3.util.equals(QueryPoliciesRequest, a, b);
  }
}

/**
 * @generated from message fusionchain.policy.QueryPoliciesResponse
 */
export class QueryPoliciesResponse extends Message<QueryPoliciesResponse> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 1;
   */
  pagination?: PageResponse;

  /**
   * @generated from field: repeated fusionchain.policy.PolicyResponse policies = 2;
   */
  policies: PolicyResponse[] = [];

  constructor(data?: PartialMessage<QueryPoliciesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fusionchain.policy.QueryPoliciesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageResponse },
    { no: 2, name: "policies", kind: "message", T: PolicyResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPoliciesResponse {
    return new QueryPoliciesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPoliciesResponse {
    return new QueryPoliciesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPoliciesResponse {
    return new QueryPoliciesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPoliciesResponse | PlainMessage<QueryPoliciesResponse> | undefined, b: QueryPoliciesResponse | PlainMessage<QueryPoliciesResponse> | undefined): boolean {
    return proto3.util.equals(QueryPoliciesResponse, a, b);
  }
}

/**
 * @generated from message fusionchain.policy.QueryPolicyByIdRequest
 */
export class QueryPolicyByIdRequest extends Message<QueryPolicyByIdRequest> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<QueryPolicyByIdRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fusionchain.policy.QueryPolicyByIdRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPolicyByIdRequest {
    return new QueryPolicyByIdRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPolicyByIdRequest {
    return new QueryPolicyByIdRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPolicyByIdRequest {
    return new QueryPolicyByIdRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPolicyByIdRequest | PlainMessage<QueryPolicyByIdRequest> | undefined, b: QueryPolicyByIdRequest | PlainMessage<QueryPolicyByIdRequest> | undefined): boolean {
    return proto3.util.equals(QueryPolicyByIdRequest, a, b);
  }
}

/**
 * @generated from message fusionchain.policy.QueryPolicyByIdResponse
 */
export class QueryPolicyByIdResponse extends Message<QueryPolicyByIdResponse> {
  /**
   * @generated from field: fusionchain.policy.PolicyResponse policy = 1;
   */
  policy?: PolicyResponse;

  constructor(data?: PartialMessage<QueryPolicyByIdResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fusionchain.policy.QueryPolicyByIdResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "policy", kind: "message", T: PolicyResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPolicyByIdResponse {
    return new QueryPolicyByIdResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPolicyByIdResponse {
    return new QueryPolicyByIdResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPolicyByIdResponse {
    return new QueryPolicyByIdResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryPolicyByIdResponse | PlainMessage<QueryPolicyByIdResponse> | undefined, b: QueryPolicyByIdResponse | PlainMessage<QueryPolicyByIdResponse> | undefined): boolean {
    return proto3.util.equals(QueryPolicyByIdResponse, a, b);
  }
}

/**
 * @generated from message fusionchain.policy.QueryActionsByAddressRequest
 */
export class QueryActionsByAddressRequest extends Message<QueryActionsByAddressRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  /**
   * @generated from field: string address = 2;
   */
  address = "";

  /**
   * @generated from field: fusionchain.policy.ActionStatus status = 3;
   */
  status = ActionStatus.UNSPECIFIED;

  constructor(data?: PartialMessage<QueryActionsByAddressRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fusionchain.policy.QueryActionsByAddressRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(ActionStatus) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryActionsByAddressRequest {
    return new QueryActionsByAddressRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryActionsByAddressRequest {
    return new QueryActionsByAddressRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryActionsByAddressRequest {
    return new QueryActionsByAddressRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryActionsByAddressRequest | PlainMessage<QueryActionsByAddressRequest> | undefined, b: QueryActionsByAddressRequest | PlainMessage<QueryActionsByAddressRequest> | undefined): boolean {
    return proto3.util.equals(QueryActionsByAddressRequest, a, b);
  }
}

/**
 * @generated from message fusionchain.policy.QueryActionsByAddressResponse
 */
export class QueryActionsByAddressResponse extends Message<QueryActionsByAddressResponse> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 1;
   */
  pagination?: PageResponse;

  /**
   * @generated from field: repeated fusionchain.policy.Action actions = 2;
   */
  actions: Action[] = [];

  constructor(data?: PartialMessage<QueryActionsByAddressResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "fusionchain.policy.QueryActionsByAddressResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageResponse },
    { no: 2, name: "actions", kind: "message", T: Action, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryActionsByAddressResponse {
    return new QueryActionsByAddressResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryActionsByAddressResponse {
    return new QueryActionsByAddressResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryActionsByAddressResponse {
    return new QueryActionsByAddressResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryActionsByAddressResponse | PlainMessage<QueryActionsByAddressResponse> | undefined, b: QueryActionsByAddressResponse | PlainMessage<QueryActionsByAddressResponse> | undefined): boolean {
    return proto3.util.equals(QueryActionsByAddressResponse, a, b);
  }
}

