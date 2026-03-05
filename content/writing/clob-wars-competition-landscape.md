---
title: "Competition and Environment in the CLOB Space"
date: 2025-07-25
lastmod: 2025-07-25
layout: "post"
categories: ["Analysis", "DeFi"]
tags: ["CLOB", "DEX", "Trading", "DeFi", "Infrastructure"]
highlighted: true
draft: false
image: "/images/blog/2025/CLOB.png"
description: "The CLOB wars are heating up with Hyperliquid's dominance being challenged by innovative projects like Bullet, GTE, and Hibachi. Explore the competitive landscape, opportunities for builders, and why CLOBs represent a return to blockchain's fundamental value propositions."
author: "Binary Research"
---

*TLDR: The CLOB wars are far from over. The competitive landscape is heating up, and several projects aim to offer unique value propositions regarding privacy, token lifecycles, and DeFi and collateral integrations. There is ample opportunity to build infrastructure on top and around CLOB DEXs and expand CLOB products to the existing distribution networks of TradFi and FinTech firms. Overall, the growing CLOB sector significantly contributes to the trends of using zk proofs and blockchains as backend infra instead of "crypto-first" products.*

## What are CLOBs?

Central Limit Order Books (CLOBs) are a trading mechanism that gathers buy orders (bids) and sell orders (asks). Contrary to AMMs, which span liquidity evenly across a given price range, CLOBs enable traders to express concrete price preferences. Consequently, it is easier to provide deep liquidity around the current asset price with better capital efficiency.

![Basic mechanism of a Central Limit Order Book (CLOB) (https://www.researchgate.net/figure/Graphical-representation-of-the-Limit-Order-Book_fig3_284900784).](/images/blog/2025/clob-mechanism.png)

Basic mechanism of a Central Limit Order Book (CLOB) ([https://www.researchgate.net/figure/Graphical-representation-of-the-Limit-Order-Book_fig3_284900784](https://www.researchgate.net/figure/Graphical-representation-of-the-Limit-Order-Book_fig3_284900784)).

![Basic mechanism of an Automated Market Making (AMM) DEX (https://collectiveshift.io/defi/amm-guide/)](/images/blog/2025/amm-mechanism.png)

Basic mechanism of an Automated Market Making (AMM) DEX ([https://collectiveshift.io/defi/amm-guide/](https://collectiveshift.io/defi/amm-guide/))

However, the slow block times and inability to adjust orders on widespread L1s in the 2020 DeFi Summer led to a pivot to AMMs. AMMs worked great to democratize liquidity provision (LPing) for popular pools and to bootstrap liquidity for long-tail assets. Yet, they came at the cost of capital inefficiency and LPers and traders being subject to arbitrageurs and MEV extraction.

While perp DEXs like dydx revived CLOBs on chain, they did not have a breakthrough until the [rise of Hyperliquid in 2024](https://defillama.com/protocol/perps/hyperliquid).

## Hyperliquid.

Hyperliquid was the first on-chain CLOB that allowed you to sign your order tx faster than $HYPE maxis can sign their Tweets with "Hyperliquid."

Hyperliquid currently supports up to [200,000 orders/second](https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/overview) and has a median block time of >200 milliseconds. These capabilities make it competitive with the user experience of any CEX.

Besides its speed, Hyperliquid offers a more compelling UI than any of its previous competitors, provides a broad selection of assets to trade, and makes "market making" accessible to the average user through its [$HLP vault](https://app.hyperliquid.xyz/vaults/0xdfc24b077bc1425ad1dea75bcb6f8158e10df303).

Among its breakthrough innovations are:

- The first fully on-chain perp CLOB orderbook
- Gas-free trading
- Fast order submission and cancellations

Over the last months, Hyperliquid has consistently captured most of the [perp DEX trading volume](https://defillama.com/perps).

## hyperCompetition

We currently identify four key projects in the CLOB competitive landscape that either dominate through usage or work on unique value propositions:

- Hyperliquid
- Bullet on their Solana L2
- GTE on MegaETH
- Hibachi on Celestia

![image.png](/images/blog/2025/clob-competitive-landscape.png)

### Bullet

Bullet is built on top of Solana and the L1´s first network extension. In simple terms, Bullet is building a trading-optimized execution layer-2 with 2ms latency, but it uses Solana for settlement, consensus, and data availability. Zk proofs are used to ensure fairness and verifiability when ordering transactions.

A distinctive feature of Bullet is users´ ability to use major Solana ecosystem assets as cross-collateral. While Hyperliquid offers cross-margin between open positions, a broad variety of cross-collateralization of major liquid assets is yet to be seen. Given the memecoin-heavy portfolio allocation of the average Solana degen, the ability to use them as collateral for perps trading could be a major value proposition from Bullet.

Similar to Hyperliquid, Bullet offers one-click trading. Besides that, Bullet plans to offer natively integrated lending and vaults. These DeFi integrations into the exchange can be interpreted as a competition attempt to HyperEVM, betting on a smoother UX, less friction, and more than two orders of magnitude faster speed.

Finally, Bullet wants to offer direct fiat on-ramps to the app. A successful integration of credit cards or similar vehicles may offer another unique selling point (USP), assuming that the average Solana perps user has more wealth off-chain compared to DeFi OGs in the larger EVM eco.

The $BULLET token (formerly $ZEX) is used for gas fees and staking.

Bullet is currently in testnet: [https://www.bullet.xyz/](https://www.bullet.xyz/).

Having played around with the Bullet testnet a bit, it shows a competitive UX and trading experience. Its resilience is yet to be proven once mainnet is live, but Bullet is a CLOB project worth keeping an eye on.

### GTE

GTE is a DEX built on MegaETH that unifies an AMM, spot CLOB, and perps. Its core USP is the vertical integration from TGEing on GTE to migrating to their AMM and being traded on the CLOB once there is sufficient liquidity. Imagine the flow from a token being created on Solana´s Pump.fun, then having a liquidity pool on Raydium, and being traded on Jupiter, but all-in-one.

The main challenge for traction is to recreate the appetite to launch tokens that we have seen on Solana over the past 12 months. If nobody is willing to provide liquidity for these newly launched assets, the vertical integration from TGE to CLOB remains a cool innovation but will unlikely become the hub for traders and market makers.

GTE aims to offer a latency of only 1ms - the fastest horse in the CLOB race we have seen so far.

### Hibachi

Hibachi is the first CLOB DEX to put privacy features at the core of its value proposition. Since the late May/early June James Wynn saga on Hyperliquid, all positions being publicly visible has become a growing concern for large traders and institutions.

Zk proofs allow Hibachi and validators to verify correct exchange logic without revealing individual user data. Orders are matched off-chain, resulting in post-trade privacy. The state updates are then posted to Celestia DA (data availability). This flow aims to find the best trade-off between preserving privacy without sacrificing latency and cost (which would be the case for full encryption during order matching).

When diving into Hibachi, it makes sense to go on a brief "CLOBs on Blobs" detour. The narrative has recently gained traction among the modular and Celestia communities. It essentially describes a path to scale frequently updated and data-intensive CLOBs by storing data off-chain but verifying it on-chain.

We can understand Blobs as large data buckets, e.g., for the large data chunks coming from a CLOB with hundreds of submitted orders and trades per second. Their integrity is subsequently verified with zk proofs, and the proof is posted on-chain.

### Honorable Mentions

Besides Bullet, GTE, and Hibachi, the CLOB landscape includes some honorable mentions - from newly built apps to OG projects.

- **Rise Chain**
    - Rise Chain is an EVM L2 aiming to compete with GTE's 1ms latency by using "shreds" instead of discrete blocks. It is focused on institutional trading applications and is currently in testnet.
- **Ostium**
    - Ostium is an RWA-focused DEX on Arbitrum that offers perp-like exposure on commodities, fx, and equities. In contrast to the other projects mentioned, it does not operate on a CLOB but on a shared liquidity layer via a unified market making vault. Still, Ostium is worth observing to follow the evolution of CLOBs vs. shared liquidity with tokenized equities becoming available on-chain.
- **Jupiter**
    - Like Ostium, Jupiter utilizes liquidity not from a CLOB but from a liquidity vault, $JLP. Jupiter currently dominates Drift in volume and generated fees. It remains to be seen if Bullet can establish CLOB dominance on Solana.
- **Drift**
    - Drift is Jupiter's CLOB perp DEX competitor in the Solana ecosystem. While it has less liquidity and volume than Jupiter, Drift offers a much broader variety of assets.
- **Aevo**
    - Aevo is an unfortunate example of how CLOB DEXs get farmed for their airdrop and are abandoned right after. Its [daily volume](https://defillama.com/protocol/perps/aevo) has dropped from >$1bn in April 2024 to single-digit millions in summer 2025.
- **Dydx**
    - Finally, we have dydx, the OG CLOB perp DEX. While being the first project to bring CLOB perps on-chain at scale, dydx has had challenges to match the product innovation and UI improvements that Hyperliquid brought to the table. [Daily trading volumes](https://defillama.com/protocol/perps/dydx) of >$1bn in late 2021 have decreased to low nine digits in 2025.

## How Sustainable Are CLOB DEXs' Revenue Models?

In the past, it has been prudent to bet against the sustainability of CLOB DEX volume and generated fees. The rise of dydx was sparked by the $DYDX airdrop, and Aevo's hype was fueled by its imminent airdrop campaign. So far, Hyperliquid is the only CLOB DEX that has kept users loyal for longer than a few weeks.

### Hyperliquid's Dominance

Analyzing the current competitive landscape, Hyperliquid seems hard to dethrone. The project was the first to reach a level of UI, liquidity, and scale that offered a product suite compelling enough to stay even after receiving a six-digit $HYPE airdrop. While on-ramping friction has not been eliminated, permissionless participation in perps trading is a straightforward value proposition (particularly for US users).

Hyperliquid clearly dominates fee generation with $700mm annualized, leaving a large gap to the likes of Jupiter with $50mm, and Drift and dydx with $13mm each.

### Quo Vadis Trading Fees?

CLOB DEX fees are generated from trading fees. Historically, trading fees are a race to the bottom with friction and infrastructure costs decreasing. The meta-countertrend is that we are living in a hyper-financialized world with speculation and trading activities on a steady uptrend.

FinTech brokers like Robinhood do not charge direct commissions for trades but receive payment for orderflow from market makers that execute their customers' orders.

For DEXs, trading fees have been incentivized through token emissions in the past. However, none of these "zero-fee" models are sustainable. With on-chain trading growing and low fees that barely impact small- and medium-sized positions, it is reasonable to expect that CLOB DEXs will not struggle to generate revenue shortly.

Hyperliquid has managed to accrue revenue through token listing fees (HIP-1). While lucrative in the short term, it is hard to uphold the demand for token launches in the long run with much cheaper token launchpads available.

The strongest bear case for CLOB DEX trading fees is a lasting crypto bear market, and participants simply losing interest in the assets available to trade, resulting in lower volumes.

Additionally, a complete absence of token incentives or anticipated airdrops can make it difficult to bootstrap user growth.

### A Brief Outlook On On-chain Trading

The potential improvements offered by upcoming projects in terms of latency and liquidity are incremental and hardly relevant for the average retail or protail user. However, tapping into the capital of other chain ecosystems and offering privacy features can take meaningful CLOB DEX market share away from Hyperliquid over time.

Given continuous improvements and developments of on-chain capital markets, e.g., xStocks ([https://x.com/xStocksFi](https://x.com/xStocksFi)) going live on Solana, or Robinhood announcing tokenized stocks, it is reasonable to assume that the CLOB DEX vs. CEX market share will continue to grow.

This trend does not necessarily mean that more revenue and fees will accrue to decentralized projects and their token holders, but rather that more and more trading will happen on blockchain rails.

## Opportunities To Build

In a world where everything gets financialized, there is an opportunity anywhere where we can enable easier access to degeneracy and leverage.

This is not a call to build the 11th CLOB DEX that has emerged over the last months. Building a robust trading engine, a practical UI, and attracting deep liquidity are incredibly difficult. Additionally, Hyperliquid's success has made the CLOB DEX landscape (hyper)competitive.

Instead, we can identify more opportunities in tooling, unlocking new distribution channels, and new asset classes for CLOB DEXs.

### 1. Bringing new asset classes on-chain

[Robinhood´s ETH CC announcement](https://newsroom.aboutrobinhood.com/robinhood-launches-stock-tokens-reveals-layer-2-blockchain-and-expands-crypto-suite-in-eu-and-us-with-perpetual-futures-and-staking/) to offer stock tokens and crypto perps is the latest confirmation of the thesis that finance will increasingly move on-chain. If you are a technical builder, consider how you can build puzzle pieces in the stack that provide TradFi players and FinTechs value.

TradFi has existing distribution channels, and crypto-native shops have unique technical competencies. The TAM for autistic DeFi Degens is not 8bn people - the TAM for equities, savings accounts, and other existing financial products to use crypto as underlying infra, however, gets much closer to that.

Crypto-native CLOBs should also attempt to unlock additional asset classes. However, they will face an uphill battle for distribution, and regulators are certainly not aligned with total permissionlessness and the absence of KYC.

### 2. Data and Analytics Platforms

CLOB DEXs posting publicly available data on-chain offer new opportunities to build better analytics and data products than TradFi markets. Financial markets are becoming increasingly reflexive and driven by social metrics. Offering on-chain insights is the best way to capitalize on these developments, both from an institutional and retail perspective.

### 3. Mobile UX and Gamification

A key factor to Robinhood's and other neobrokers' success is their ability to simplify and gamify investing. Building mobile-centric UIs for CLOB DEXs can significantly increase casual retail adoption and combat crypto's distribution problem.

### 4. Speculation Infrastructure and Integrations

You are receiving 2% cashback on a $200 grocery shopping bill? Why not use that to fund a 100x $BTC long? Just claimed $5 in staking rewards on your 10 $SOL staked? Time to stock the margin of your 50x $FARTCOIN position.

An increasingly short-term-minded society that is desperately looking for (the illusion of) asymmetric upside will devour frictionless access to GambleFi. Integrating existing on-chain or TradFi financial products into CLOB DEX leverage trading is another opportunity to grow retail adoption and benefit from a rather fee-insensitive customer group.

### 5. "Serious" Money Legos

Finally, CLOB valuations can benefit from ecosystem premia. The $HYPE runup is a prime example of ascribing value to a great application magnified by optimistic expectations around the Hyperliquid ecosystem growth.

Native integrations of DeFi primitives like lending, pre-launch token markets, and yield trading can increase capital efficiency and lower the entry barriers for existing on-chain participants to use CLOB DEXs. Imagine being able to use your lent out $ETH on Morpho or your Uniswap LP position as collateral to get additional exposure to your latest favorite alt.

Another vertical could be building a managed vault with social trading features. Users can tap into prediction and yield trading markets to bet on individual vaults' returns or lock in perpetual futures' funding rates.

### Where to Build

CLOB DEXs require fast execution and produce large data sets. Consequently, DA solutions like Celestia or EigenLayer seem primed to capture the growth of the CLOB sector, unless new projects decide to build their own L1 or L1 extension (like Hyperliquid or Bullet).

The CLOB wars may have created another round of the 2024 heatedly discussed monolithic vs. modular approaches to chains and applications. Tapping into modular ecosystems can significantly scale performance and decrease development costs. However, cross-chain abstraction is not yet at a stage where liquidity can seamlessly transition over to modular ecosystems. Offering blobs as a tool to scale data storage can additionally attract CLOB projects.

## Do CLOBs Offer Upside for Retail?

CLOB DEXs are not reserved for whales, HFT funds, or institutions. There are significant UX improvements and upside for retail and protail traders.

The $DYDX and $HYPE airdrops are among the largest one-time wealth creation events in the industry. Hyperliquid has set aside another double-digit percentage of the $HYPE token supply for upcoming airdrops. Given the competitive fight for users and distribution, it is reasonable to assume that upcoming CLOB DEXs will offer attractive upside for early users. Assuming that the CLOB Wars will remain at the center of attention for a few more months, retail users can expect a positive payout from early participation.

Of the CLOB projects covered in this report, Bullet has an upcoming testnet trading cup: [https://docs.bullet.xyz/campaigns/testnet-trading-cup](https://docs.bullet.xyz/campaigns/testnet-trading-cup), and Ostium has an ongoing points program: [https://ostium.app/points](https://ostium.app/points).

## Have CLOBs Solved Actual Industry Challenges?

Over the past months, our industry has experienced a meaning crisis over the actual utility and seemingly stagnating innovation in crypto. However, CLOBs are a major return to the fundamental value propositions of blockchains: permissionlessness, verifiability, and immutability.

Only Bitcoin as a system hedge and stablecoins as permissionless access to the USD have achieved more PMF than CLOBs. Before CLOBs emerging as an individual sector, we have abstractly described them as "speculation infra." By now, we can identify a clear distinction between innovative and robust products and short-lived metas.

Ultimately, the utility and PMF of financial primitives are judged by their capital inflows and ability to sustainably generate revenues. They do not have to solve any "real-world problem" in the physical sense to be considered useful. A major reason why the Nasdaq 100 is considered a store of value and more fundamentally valuable than crypto memecoins is because the average Nasdaq investor has a much higher time horizon and constitutes more loyal capital.

That being said, the mid- to long-term success of on-chain CLOB projects is highly influenced by the assets available to trade. If CLOBs offer the best access vehicle to assets with a compelling story around technological innovation and investors' hopes of asymmetric financial upside, they will flourish. If users lose interest in crypto assets and CLOBs fail to onboard TradFi assets and equities, they will be remembered as another short-term hyped narrative.

## Further Reads

- Gelato on the coming DEX CLOB Wars: [https://www.gelato.cloud/blog/the-coming-dex-clob-wars-the-history-and-future-of-onchain-clo-bs](https://www.gelato.cloud/blog/the-coming-dex-clob-wars-the-history-and-future-of-onchain-clo-bs)
- Ben Fisch (Espresso) on Cross-chain CLOBs: [https://x.com/benafisch/status/1935045344943075670](https://x.com/benafisch/status/1935045344943075670)
- Jae Haery (Succinct) deep dive into CLOBs on Blobs: [https://x.com/0xjaehaerys/status/1935720081318654288?s=61](https://x.com/0xjaehaerys/status/1935720081318654288?s=61)
- Alyssa on CLOBs on Blobs: [https://x.com/alyssaonchain/status/1937200223853609412](https://x.com/alyssaonchain/status/1937200223853609412)
- Validatus on the CLOBs on Blobs thesis: [https://x.com/stakeingermany/status/1936008646439190949](https://x.com/stakeingermany/status/1936008646439190949)
- Bedlam Research on Builder-Deployed Perps on Hyperliquid: [https://www.bedlamresear.ch/posts/builder-deployed-perps/](https://www.bedlamresear.ch/posts/builder-deployed-perps/)
- The Rollup on CLOBs on Blobs: [https://therollup.co/research/the-clobs-on-blobs-opportunity](https://therollup.co/research/the-clobs-on-blobs-opportunity)

---

*Join Binary Builders as we explore the infrastructure shaping the future of decentralized finance. Follow our journey on [X](https://x.com/binarybuilders_) and dive deeper into blockchain innovation.*