---
sidebar_position: 1
---

# Introduction

## Omnichain Applications

**Omnichain Applications** (**OApps**) are a powerful evolution of traditional smart contracts. They allow signing transactions at any chain, while traditional smart contract applications only target users of a single chain.

An example of an OApp is [SpaceWard](/learn/glossary#spaceward) – our application functioning as the front-end interface for Warden.

This section explains how to build the backend and frontend of an OApp. Here you'll also find guides for running a [node](/learn/glossary#warden-protocol-node) and a [Keychain](/learn/glossary#keychain) in the test mode.

## Omnichain Contracts

The main part of any Omnichain Application is an **Omnichain Contract**: a smart contract that allows signing transactions and messages at any destination chain. For this reason, OApp development starts with building a custom Omnichain Contract.

As shown below, the Warden Protocol integrates with two external modules allowing you to execute two types of smart contracts.

### CosmWasm contracts

The [`x/wasm`](/learn/warden-protocol-modules/external-modules#xwasm) Warden module allows executing WebAssembly smart contracts developed with [CosmWasm](https://cosmwasm.com) and **Rust**.

### EVM contracts

The [`x/evm`](/learn/warden-protocol-modules/external-modules#xevm) Warden module allows executing Ethereum Virtual Machine (EVM) contracts charged by [Evmos](https://docs.evmos.org/protocol/modules/evm). They are written in **Solidity**.

## Get started

To get started, check our list of developer resources in the [Useful links](useful-links) section.

*Please note that this section is under construction. More information is coming soon.*

<!--- Contents:

- What is an OApp and how is it built? (briefly)
- Links to other docs related to this section
- A link to the article with CosmWasm docs and tutorials

--->