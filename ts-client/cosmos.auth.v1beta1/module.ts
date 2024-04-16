// Generated by Ignite ignite.com/cli

import { SigningStargateClient, DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { QueryModuleAccountByNameResponse } from "./types/cosmos/auth/v1beta1/query";
import { MsgUpdateParamsResponse } from "./types/cosmos/auth/v1beta1/tx";
import { QueryAccountsResponse } from "./types/cosmos/auth/v1beta1/query";
import { Params } from "./types/cosmos/auth/v1beta1/auth";
import { BaseAccount } from "./types/cosmos/auth/v1beta1/auth";
import { QueryParamsRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryModuleAccountByNameRequest } from "./types/cosmos/auth/v1beta1/query";
import { Bech32PrefixResponse } from "./types/cosmos/auth/v1beta1/query";
import { AddressStringToBytesRequest } from "./types/cosmos/auth/v1beta1/query";
import { AddressStringToBytesResponse } from "./types/cosmos/auth/v1beta1/query";
import { MsgUpdateParams } from "./types/cosmos/auth/v1beta1/tx";
import { QueryModuleAccountsRequest } from "./types/cosmos/auth/v1beta1/query";
import { ModuleCredential } from "./types/cosmos/auth/v1beta1/auth";
import { GenesisState } from "./types/cosmos/auth/v1beta1/genesis";
import { QueryAccountsRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryParamsResponse } from "./types/cosmos/auth/v1beta1/query";
import { ModuleAccount } from "./types/cosmos/auth/v1beta1/auth";
import { QueryAccountResponse } from "./types/cosmos/auth/v1beta1/query";
import { AddressBytesToStringResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountAddressByIDRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountAddressByIDResponse } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountInfoRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryModuleAccountsResponse } from "./types/cosmos/auth/v1beta1/query";
import { AddressBytesToStringRequest } from "./types/cosmos/auth/v1beta1/query";
import { QueryAccountInfoResponse } from "./types/cosmos/auth/v1beta1/query";
import { Bech32PrefixRequest } from "./types/cosmos/auth/v1beta1/query";


export { QueryModuleAccountByNameResponse, MsgUpdateParamsResponse, QueryAccountsResponse, Params, BaseAccount, QueryParamsRequest, QueryModuleAccountByNameRequest, Bech32PrefixResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, MsgUpdateParams, QueryModuleAccountsRequest, ModuleCredential, GenesisState, QueryAccountsRequest, QueryAccountRequest, QueryParamsResponse, ModuleAccount, QueryAccountResponse, AddressBytesToStringResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryAccountInfoRequest, QueryModuleAccountsResponse, AddressBytesToStringRequest, QueryAccountInfoResponse, Bech32PrefixRequest };

type sendQueryModuleAccountByNameResponseParams = {
  value: QueryModuleAccountByNameResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryAccountsResponseParams = {
  value: QueryAccountsResponse,
  fee?: StdFee,
  memo?: string
};

type sendParamsParams = {
  value: Params,
  fee?: StdFee,
  memo?: string
};

type sendBaseAccountParams = {
  value: BaseAccount,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsRequestParams = {
  value: QueryParamsRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryModuleAccountByNameRequestParams = {
  value: QueryModuleAccountByNameRequest,
  fee?: StdFee,
  memo?: string
};

type sendBech32PrefixResponseParams = {
  value: Bech32PrefixResponse,
  fee?: StdFee,
  memo?: string
};

type sendAddressStringToBytesRequestParams = {
  value: AddressStringToBytesRequest,
  fee?: StdFee,
  memo?: string
};

type sendAddressStringToBytesResponseParams = {
  value: AddressStringToBytesResponse,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};

type sendQueryModuleAccountsRequestParams = {
  value: QueryModuleAccountsRequest,
  fee?: StdFee,
  memo?: string
};

type sendModuleCredentialParams = {
  value: ModuleCredential,
  fee?: StdFee,
  memo?: string
};

type sendGenesisStateParams = {
  value: GenesisState,
  fee?: StdFee,
  memo?: string
};

type sendQueryAccountsRequestParams = {
  value: QueryAccountsRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryAccountRequestParams = {
  value: QueryAccountRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryParamsResponseParams = {
  value: QueryParamsResponse,
  fee?: StdFee,
  memo?: string
};

type sendModuleAccountParams = {
  value: ModuleAccount,
  fee?: StdFee,
  memo?: string
};

type sendQueryAccountResponseParams = {
  value: QueryAccountResponse,
  fee?: StdFee,
  memo?: string
};

type sendAddressBytesToStringResponseParams = {
  value: AddressBytesToStringResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryAccountAddressByIDRequestParams = {
  value: QueryAccountAddressByIDRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryAccountAddressByIDResponseParams = {
  value: QueryAccountAddressByIDResponse,
  fee?: StdFee,
  memo?: string
};

type sendQueryAccountInfoRequestParams = {
  value: QueryAccountInfoRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryModuleAccountsResponseParams = {
  value: QueryModuleAccountsResponse,
  fee?: StdFee,
  memo?: string
};

type sendAddressBytesToStringRequestParams = {
  value: AddressBytesToStringRequest,
  fee?: StdFee,
  memo?: string
};

type sendQueryAccountInfoResponseParams = {
  value: QueryAccountInfoResponse,
  fee?: StdFee,
  memo?: string
};

type sendBech32PrefixRequestParams = {
  value: Bech32PrefixRequest,
  fee?: StdFee,
  memo?: string
};


type queryModuleAccountByNameResponseParams = {
  value: QueryModuleAccountByNameResponse,
};

type msgUpdateParamsResponseParams = {
  value: MsgUpdateParamsResponse,
};

type queryAccountsResponseParams = {
  value: QueryAccountsResponse,
};

type paramsParams = {
  value: Params,
};

type baseAccountParams = {
  value: BaseAccount,
};

type queryParamsRequestParams = {
  value: QueryParamsRequest,
};

type queryModuleAccountByNameRequestParams = {
  value: QueryModuleAccountByNameRequest,
};

type bech32PrefixResponseParams = {
  value: Bech32PrefixResponse,
};

type addressStringToBytesRequestParams = {
  value: AddressStringToBytesRequest,
};

type addressStringToBytesResponseParams = {
  value: AddressStringToBytesResponse,
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams,
};

type queryModuleAccountsRequestParams = {
  value: QueryModuleAccountsRequest,
};

type moduleCredentialParams = {
  value: ModuleCredential,
};

type genesisStateParams = {
  value: GenesisState,
};

type queryAccountsRequestParams = {
  value: QueryAccountsRequest,
};

type queryAccountRequestParams = {
  value: QueryAccountRequest,
};

type queryParamsResponseParams = {
  value: QueryParamsResponse,
};

type moduleAccountParams = {
  value: ModuleAccount,
};

type queryAccountResponseParams = {
  value: QueryAccountResponse,
};

type addressBytesToStringResponseParams = {
  value: AddressBytesToStringResponse,
};

type queryAccountAddressByIdrequestParams = {
  value: QueryAccountAddressByIDRequest,
};

type queryAccountAddressByIdresponseParams = {
  value: QueryAccountAddressByIDResponse,
};

type queryAccountInfoRequestParams = {
  value: QueryAccountInfoRequest,
};

type queryModuleAccountsResponseParams = {
  value: QueryModuleAccountsResponse,
};

type addressBytesToStringRequestParams = {
  value: AddressBytesToStringRequest,
};

type queryAccountInfoResponseParams = {
  value: QueryAccountInfoResponse,
};

type bech32PrefixRequestParams = {
  value: Bech32PrefixRequest,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendQueryModuleAccountByNameResponse({ value, fee, memo }: sendQueryModuleAccountByNameResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryModuleAccountByNameResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryModuleAccountByNameResponse({ value: QueryModuleAccountByNameResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryModuleAccountByNameResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAccountsResponse({ value, fee, memo }: sendQueryAccountsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAccountsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAccountsResponse({ value: QueryAccountsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAccountsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.params({ value: Params.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendBaseAccount({ value, fee, memo }: sendBaseAccountParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendBaseAccount: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.baseAccount({ value: BaseAccount.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendBaseAccount: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryModuleAccountByNameRequest({ value, fee, memo }: sendQueryModuleAccountByNameRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryModuleAccountByNameRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryModuleAccountByNameRequest({ value: QueryModuleAccountByNameRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryModuleAccountByNameRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendBech32PrefixResponse({ value, fee, memo }: sendBech32PrefixResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendBech32PrefixResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.bech32PrefixResponse({ value: Bech32PrefixResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendBech32PrefixResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendAddressStringToBytesRequest({ value, fee, memo }: sendAddressStringToBytesRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendAddressStringToBytesRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.addressStringToBytesRequest({ value: AddressStringToBytesRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendAddressStringToBytesRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendAddressStringToBytesResponse({ value, fee, memo }: sendAddressStringToBytesResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendAddressStringToBytesResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.addressStringToBytesResponse({ value: AddressStringToBytesResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendAddressStringToBytesResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryModuleAccountsRequest({ value, fee, memo }: sendQueryModuleAccountsRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryModuleAccountsRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryModuleAccountsRequest({ value: QueryModuleAccountsRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryModuleAccountsRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendModuleCredential({ value, fee, memo }: sendModuleCredentialParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendModuleCredential: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.moduleCredential({ value: ModuleCredential.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendModuleCredential: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.genesisState({ value: GenesisState.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAccountsRequest({ value, fee, memo }: sendQueryAccountsRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAccountsRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAccountsRequest({ value: QueryAccountsRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAccountsRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAccountRequest({ value, fee, memo }: sendQueryAccountRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAccountRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAccountRequest({ value: QueryAccountRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAccountRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendModuleAccount({ value, fee, memo }: sendModuleAccountParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendModuleAccount: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.moduleAccount({ value: ModuleAccount.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendModuleAccount: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAccountResponse({ value, fee, memo }: sendQueryAccountResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAccountResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAccountResponse({ value: QueryAccountResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAccountResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendAddressBytesToStringResponse({ value, fee, memo }: sendAddressBytesToStringResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendAddressBytesToStringResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.addressBytesToStringResponse({ value: AddressBytesToStringResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendAddressBytesToStringResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAccountAddressByIDRequest({ value, fee, memo }: sendQueryAccountAddressByIDRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAccountAddressByIDRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAccountAddressByIdrequest({ value: QueryAccountAddressByIDRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAccountAddressByIDRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAccountAddressByIDResponse({ value, fee, memo }: sendQueryAccountAddressByIDResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAccountAddressByIDResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAccountAddressByIdresponse({ value: QueryAccountAddressByIDResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAccountAddressByIDResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAccountInfoRequest({ value, fee, memo }: sendQueryAccountInfoRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAccountInfoRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAccountInfoRequest({ value: QueryAccountInfoRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAccountInfoRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryModuleAccountsResponse({ value, fee, memo }: sendQueryModuleAccountsResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryModuleAccountsResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryModuleAccountsResponse({ value: QueryModuleAccountsResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryModuleAccountsResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendAddressBytesToStringRequest({ value, fee, memo }: sendAddressBytesToStringRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendAddressBytesToStringRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.addressBytesToStringRequest({ value: AddressBytesToStringRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendAddressBytesToStringRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendQueryAccountInfoResponse({ value, fee, memo }: sendQueryAccountInfoResponseParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendQueryAccountInfoResponse: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.queryAccountInfoResponse({ value: QueryAccountInfoResponse.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendQueryAccountInfoResponse: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendBech32PrefixRequest({ value, fee, memo }: sendBech32PrefixRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendBech32PrefixRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry});
				let msg = this.bech32PrefixRequest({ value: Bech32PrefixRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendBech32PrefixRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		queryModuleAccountByNameResponse({ value }: queryModuleAccountByNameResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse", value: QueryModuleAccountByNameResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryModuleAccountByNameResponse: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		queryAccountsResponse({ value }: queryAccountsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse", value: QueryAccountsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAccountsResponse: Could not create message: ' + e.message)
			}
		},
		
		params({ value }: paramsParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.Params", value: Params.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Params: Could not create message: ' + e.message)
			}
		},
		
		baseAccount({ value }: baseAccountParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.BaseAccount", value: BaseAccount.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:BaseAccount: Could not create message: ' + e.message)
			}
		},
		
		queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest", value: QueryParamsRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message)
			}
		},
		
		queryModuleAccountByNameRequest({ value }: queryModuleAccountByNameRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest", value: QueryModuleAccountByNameRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryModuleAccountByNameRequest: Could not create message: ' + e.message)
			}
		},
		
		bech32PrefixResponse({ value }: bech32PrefixResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse", value: Bech32PrefixResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Bech32PrefixResponse: Could not create message: ' + e.message)
			}
		},
		
		addressStringToBytesRequest({ value }: addressStringToBytesRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest", value: AddressStringToBytesRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:AddressStringToBytesRequest: Could not create message: ' + e.message)
			}
		},
		
		addressStringToBytesResponse({ value }: addressStringToBytesResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse", value: AddressStringToBytesResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:AddressStringToBytesResponse: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
			}
		},
		
		queryModuleAccountsRequest({ value }: queryModuleAccountsRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest", value: QueryModuleAccountsRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryModuleAccountsRequest: Could not create message: ' + e.message)
			}
		},
		
		moduleCredential({ value }: moduleCredentialParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.ModuleCredential", value: ModuleCredential.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:ModuleCredential: Could not create message: ' + e.message)
			}
		},
		
		genesisState({ value }: genesisStateParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.GenesisState", value: GenesisState.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:GenesisState: Could not create message: ' + e.message)
			}
		},
		
		queryAccountsRequest({ value }: queryAccountsRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest", value: QueryAccountsRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAccountsRequest: Could not create message: ' + e.message)
			}
		},
		
		queryAccountRequest({ value }: queryAccountRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest", value: QueryAccountRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAccountRequest: Could not create message: ' + e.message)
			}
		},
		
		queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse", value: QueryParamsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message)
			}
		},
		
		moduleAccount({ value }: moduleAccountParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.ModuleAccount", value: ModuleAccount.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:ModuleAccount: Could not create message: ' + e.message)
			}
		},
		
		queryAccountResponse({ value }: queryAccountResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse", value: QueryAccountResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAccountResponse: Could not create message: ' + e.message)
			}
		},
		
		addressBytesToStringResponse({ value }: addressBytesToStringResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse", value: AddressBytesToStringResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:AddressBytesToStringResponse: Could not create message: ' + e.message)
			}
		},
		
		queryAccountAddressByIdrequest({ value }: queryAccountAddressByIdrequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest", value: QueryAccountAddressByIDRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAccountAddressByIDRequest: Could not create message: ' + e.message)
			}
		},
		
		queryAccountAddressByIdresponse({ value }: queryAccountAddressByIdresponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse", value: QueryAccountAddressByIDResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAccountAddressByIDResponse: Could not create message: ' + e.message)
			}
		},
		
		queryAccountInfoRequest({ value }: queryAccountInfoRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoRequest", value: QueryAccountInfoRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAccountInfoRequest: Could not create message: ' + e.message)
			}
		},
		
		queryModuleAccountsResponse({ value }: queryModuleAccountsResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse", value: QueryModuleAccountsResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryModuleAccountsResponse: Could not create message: ' + e.message)
			}
		},
		
		addressBytesToStringRequest({ value }: addressBytesToStringRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest", value: AddressBytesToStringRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:AddressBytesToStringRequest: Could not create message: ' + e.message)
			}
		},
		
		queryAccountInfoResponse({ value }: queryAccountInfoResponseParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoResponse", value: QueryAccountInfoResponse.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:QueryAccountInfoResponse: Could not create message: ' + e.message)
			}
		},
		
		bech32PrefixRequest({ value }: bech32PrefixRequestParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest", value: Bech32PrefixRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:Bech32PrefixRequest: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const IgntModule = (test: IgniteClient) => {
	return {
		module: {
			CosmosAuthV1Beta1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default IgntModule;