---
title: "Olympus Rises: A New Era for the Cosmos SDK"
date: 2024-09-18
lastmod: 2024-09-18
layout: "post"
categories: ["Cosmos-SDK"]
tags: ["SDK", "Updates"]
highlighted: false
draft: false
image: "/images/blog/2024/olympus.webp"
description: "Binary Builders, led by Onur Akpolat and Marko since 2022, is a technology company that focuses on building, growing, and operating blockchains."
author: "Marko Baricevic"
---


We are thrilled to announce the latest release of the Cosmos SDK, **Olympus (v0.52)**. This release marks a significant evolution in the SDK, bringing a host of new features, improvements, and performance enhancements.

## The Journey So Far

The Cosmos SDK was conceived as a modular framework for building application-specific blockchains, with the vision of enabling seamless connections between chains via IBC. From the early days of development, starting in 2018, the rapidly evolving blockchain space made it challenging to predict its direction. During this period, the team focused on building a robust foundation for the SDK, anticipating current needs and ensuring flexibility to accommodate future trends.

By 2022, it became clear that the industry was moving toward a modular development approach. This realization led the team to comprehensively evaluate and refine the Cosmos SDK to more than just a collection of modules into a versatile middleware capable of supporting a wide range of use cases.

## Olympus: A New Era

The latest release of Cosmos SDK, Olympus, represents the culmination of these efforts, bringing several key improvements and new features:

### Separation of Core Components

One of the major advancements in Olympus is the separation of the SDK into distinct components. This allows developers to utilize the core of the Cosmos SDK independently from the predefined modules like staking, governance, and distribution. This flexibility is crucial for developers looking to build highly customized solutions tailored to their specific needs.

### Protocol Pool

A notable addition in Olympus is the Protocol Pool module, which allows for developer and community funding to be managed natively within the SDK, without the need for vesting accounts. This simplifies the funding process and enhances the governance capabilities of blockchain projects using the Cosmos SDK. Learn more about `x/protocolpool` [here](https://docs.cosmos.network/main/build/modules/protocolpool).

### Governance Overhaul

Governance has been significantly revamped, introducing new proposal types. These changes are designed to enhance the decision-making process within communities, ensuring more robust and transparent governance. Learn more about `x/gov` [here](https://docs.cosmos.network/main/build/modules/gov).

### Accounts Module

The Accounts Module was designed around extending accounts and creating unique experiences for users. We have spent a great deal of time working on this module with a large group of individuals from the ecosystem. By default, the Accounts Module ships with a set of lockup accounts, previously known as vesting accounts, on-chain multisig, and a baseaccount. The Accounts Module will replace the existing x/auth module in the future and allow teams to migrate existing users. Learn more about `x/accounts` [here](https://docs.cosmos.network/main/build/modules/accounts).

### Consensus Key Rotation

The Staking Module went through a redesign to allow consensus key rotation. This allows validators to swap their consensus key without having to spin up a new validator and ask their users to redelegate. Learn more about `x/staking` [here](https://docs.cosmos.network/main/build/modules/staking).

## V2

By adopting Olympus and its new features, developers will be able to migrate to the new version of the Cosmos SDK, v2. By adopting v2 and the various cleanups that were made available, modules can become simpler and depend on less parts of the Cosmos SDK and, potentially, CometBFT. Stay tuned for a detailed blog post on what this enables and what we hope to see from the ecosystem.

## Long Term Support (LTS)

Olympus is the first release of the Cosmos SDK to receive Long Term Support (LTS). This commitment ensures that developers can rely on a stable software environment over the coming years. To know more about the plan for LTS and what it means for users, read the full announcement [here](/blog/announcing-long-term-support-lts).

## Looking Ahead

The Olympus (v0.52) release marks a significant step forward for the SDK. But the journey is far from over. This release lays the groundwork for v2, a new era for the SDK which brings even greater modularity, flexibility, and performance. We remain committed to continuous improvement and innovation, with exciting plans for the future.

Stay tuned for more updates and developments on [X](https://x.com/cosmos_sdk). 