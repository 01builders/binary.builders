---
title: "Unburdened By What Has Been"
date: 2024-10-10
lastmod: 2024-10-10
layout: "post"
categories: ["Cosmos-SDK"]
tags: ["SDK", "Updates"]
highlighted: false
draft: false
image: "/images/blog/2024/v2.webp"
description: "The Cosmos SDK is getting a major overhaul with v2, unburdening developers from the constraints of its monolithic architecture. By splitting the system into a flexible server component and a streamlined state transition function, while revamping storage to work directly with databases, the new design gives developers unprecedented freedom to customize their blockchain applications. This architectural evolution moves away from the rigid ABCI-only approach, allowing integration with various consensus engines and marking a significant step toward a more modular, efficient, and developer-friendly blockchain development ecosystem."
author: "Marko Baricevic"
---
*This Blogpost has originally been published on [Medium](https://medium.com/the-interchain-foundation/unburdened-by-what-has-been-a90cd3febefb)*

The Interchain Stack is one of the most widely used stacks for building sovereign decentralized applications. We’ve already seen hundreds of chains launch, with many more teams preparing to launch in the coming quarters.

In 2023, the Cosmos SDK team took a step back and asked ourselves, “How can we level up the software to provide more freedom for application developers?” This led us down two development avenues: v2 and CrossLang. This article focuses on v2 — stay tuned for more on CrossLang.

## What is v2?

First, let’s understand the current state of the Cosmos SDK. Today, the Cosmos SDK is a semi-modular monolith which is difficult to customize or modify. We have seen many users who want to modify the software ending up in a fork which they then have to maintain over time. Seldom are we able to upstream changes from these forks, as doing so would significantly increase our maintenance burden.

BaseApp is a package that handles all the logic for message passing, state management, communication to CometBFT through ABCI, and transaction execution. However, those who have explored BaseApp may have encountered complexities and questioned why certain elements exist within the code. As user demands for new features continue to grow, BaseApp has become increasingly difficult to maintain. Moreover, the current design does not provide a safe and straightforward way to take advantage of designs evolving from the blockchain space.

Taking into account the limitations of BaseApp and the current Cosmos SDK, we have made the decision to not continue to maintain BaseApp and its surrounding packages past a certain point. Our goal is to foster a more enjoyable development experience and deliver the best and most innovative features to our users. This is where v2 comes into play. v2 is designed with a focus on simplification and maximum customization.

We opted to break BaseApp into two separate components: State Transition Function and Server. The consensus server is the component that drives the application.

![v2 Architecture](/images/blog/2024/ubwhb-1.webp)

## Server
Server is the brains of the operation. It houses the client based infrastructure, GRPC & REST, and the connection to the underlying consensus engine. In the past if a user would like to swap consensus engines they were limited to ABCI, in v2 our goal was developer freedom, we removed this limitation. Applications can implement custom consensus engines that directly interact with a state transition function. We are discussing v2 with teams that are working on consensus engines or have them already. These teams are excited about what new offerings they can bring to the ecosystem without needing to work around ABCI. To name a few: Rollkit, Meter.io (recent blog post on ABCI integration), Avalanche (Hyper-SDK), Nethermind (Monomer).

Within the server users have the freedom to customize anything. Users can define custom transaction types and how to decode them, work with any API technology they would like or follow any spec (ETH RPC specification) and custom mempool designs to name a few. As the application above the server does not care for what is going on in the server the freedom for developers is more than what it once was.

## State Transition Function (STF)
The State Transition Function is where all the execution is handled. It is stateless and does not care about the execution model of the application nor how transactions are encoded. Stf has four methods, DeliverBlock, Query, Validate Transaction and Simulate. Within the state transition function there is gas handling and a cache store for writes and reads that is populated via the required information for the transaction.

The state transition function houses gas metering and a cache store for execution. These implementations are meant to be modified and freely customized to handle custom features.

### DeliverBlock
DeliverBlock handles the execution of a block. It is given the decoded transaction in block request struct, this struct contains metadata about the block and a database reader. The State Transition Function has no writing capabilities to the underlying storage layer. It will always return a set of changesets that will be handled by the consensus server. The deliver block phase handles: preblock, beginblock, executing the transaction and endblock.

### Query, ValidateTX, and Simulate
The three methods Query, ValidateTX and Simulate are stateless and light as well. They will execute the requests and return the data to the server allowing for clients to receive responses.

![v2 Architecture](/images/blog/2024/ubwhb-2.webp)

## Storage
As part of our v2 endeavor, we also redesigned how storage works. At the start of this process, we sat down to understand the shortcomings of the existing storage system and identified the separation between storage and commitment as a key issue.

In the blockchain space, commitment structures — such as Merkle trees, vector commitments, and accumulators — are used in order to verify execution, make light clients efficient, and in some cases, facilitate communication with external parties like other blockchains.

When thinking about what the state machine cares about, we identified that the state machine can work directly with the underlying database instead of going to a Merkle tree and traversing the tree to get the information. This allows the state machine to take advantage of well designed databases without needing to work off of complex data structures.

Within the v2 design the system is designed with concurrency in mind. By making this a focus we design the system to be multireader and single write controlled by the consensus server. In the purview of storage it only cares about writing once and allowing the state machine to read from the disk as fast as possible.

![v2 Architecture](/images/blog/2024/ubwhb-3.webp)

## Conclusion
v2 is designed to simplify and accelerate the state machine, allowing users new levels of freedom that were previously restricted. We are currently in the Testnet phase of this work. If you would like to participate or stress test the new system we invite you to reach out.