---
sidebar_position: 5
---

# Bridging

## Overview

**Bridging** is a method allowing users to transfer assets across different blockchain networks.

This technology utilizes **cross-chain bridges** – smart contracts that receive and lock tokens on the source chain and then mint a corresponding number of **wrapped tokens** on the destination chain.

Warden's [Omnichain Applications](/learn/glossary#omnichain-application) support bridging through Axelar – see the sections below for details. More integrations are coming soon.

## Axelar

Warden integrates with [x/gmp](/learn/warden-protocol-modules/external-modules#xgmp) – an external module provided by **Axelar**.

This integration enables the support of cross-chain token transfers and general message parsing through Axelar.

## Available chains

Currently Axelar provides [65 connected chains](https://axelarscan.io). This number may change over the course of time as more chains are added.

You can perform transactions on Ethereum, other IBC-enabled chains, and any ECDSA- or EDDSA-based chain supported by the [Keychain](/learn/glossary#keychain) you're using – for example, Bitcoin.