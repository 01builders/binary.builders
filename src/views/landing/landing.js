import React from 'react';

import Typography from '../../components/typography';

import fromZero from '../../assets/from-zero.png';
import { ReactComponent as Binary } from '../../assets/binary.svg';
import stakeTitle from '../../assets/stake.png';
import supportedTitle from '../../assets/supported-networks.png';
import teamTitle from '../../assets/team-title.png';

import shawn from '../../assets/shawn.jpg';
import onur from '../../assets/onur.jpg';
import marko from '../../assets/marko.png';
import will from '../../assets/will.jpg';

import { ReactComponent as Simple } from '../../assets/stake/simple.svg';
import { ReactComponent as Safe } from '../../assets/stake/safe.svg';
import { ReactComponent as Secure } from '../../assets/stake/secure.svg';

import { ReactComponent as Polkadot } from '../../assets/networks/polkadot.svg';
import { ReactComponent as PolkadotProtocol } from '../../assets/networks/protocol-polkadot.svg';
import { ReactComponent as PolkadotLogo } from '../../assets/networks/polkadot-logo-2.svg';
import { ReactComponent as Kusama } from '../../assets/networks/kusama.svg';
import { ReactComponent as KusamaProtocol } from '../../assets/networks/protocol-kusama.svg';
import { ReactComponent as Cosmos } from '../../assets/networks/cosmos.svg';
import { ReactComponent as CosmosProtocol } from '../../assets/networks/protocol-cosmos.svg';

import styles from './landing.module.scss';

const Landing = () => {
  return (
    <div className={styles['landing-container']}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <img src={fromZero} alt="From Zero. To One." />
          <Typography className={styles.description}>
            Binary Holdings is a trusted and secure staking service, supporting industry-leading networks to help build the future of Web3
          </Typography>
        </div>
        <Binary className={styles.binary} />
      </div>
      <div className={styles['reach-container']}>
        <div className={styles.reach}>
          <Typography className={styles.value}>
            $100M+
          </Typography>
          <Typography className={styles.info}>
            Total Assets Staked
          </Typography>
        </div>
        <div className={styles.reach}>
          <Typography className={styles.value}>
            300K+
          </Typography>
          <Typography className={styles.info}>
            Unique users
          </Typography>
        </div>
        <div className={styles.reach}>
          <Typography className={styles.value}>
            100%
          </Typography>
          <Typography className={styles.info}>
            Uptime
          </Typography>
        </div>
      </div>
      <div className={styles['stake-container']}>
        <div className={styles.title}>
          {/* <img src={stakeTitle} alt="Stake With Binary Holdings" /> */}
          <Typography align="center" color="white" variant="h1" className={styles.info}>
            Stake With Binary Holdings
          </Typography>
          <Typography align="center" color="white" className={styles.info}>
            Earn crypto native interest rates while simultaneously contributing to our supported Proof of Stake networks
          </Typography>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Simple />
            </div>
            <div className={styles.content}>
              <Typography className={styles.title}>
                Simple
              </Typography>
              <Typography className={styles.description}>
                Nominating has never been this easy. Everything you need to join us can be found on this site. Just install the Polkadot JS Extension.
              </Typography>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Safe />
            </div>
            <div className={styles.content}>
              <Typography className={styles.title}>
                Safe
              </Typography>
              <Typography className={styles.description}>
                The number one customer of Binary Holdings is ourselves. We treat your funds just like our own.
              </Typography>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Secure />
            </div>
            <div className={styles.content}>
              <Typography className={styles.title}>
                Secure
              </Typography>
              <Typography className={styles.description}>
                Binary Holdings is managed by the engineers who built Kusama, Polkadot and Cosmos.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['supported-networks-container']}>
        <img src={supportedTitle} alt="Supported Networks" />
        <div className={styles.networks}>
          <div className={styles.network}>
            <div className={styles['company-wrapper']}>
              <div className={styles.company}>
                <Polkadot />
                <Typography className={styles['network-title']}>
                  Polkadot
                </Typography>
                <Typography className={styles['network-type']} component="div">
                  <div className={styles.circle} />
                  <Typography component="span">
                    Mainnet
                  </Typography>
                </Typography>
                <Typography className={styles.apr}>15% APR</Typography>
              </div>
            </div>
            <div className={styles.info}>
              <PolkadotProtocol />
              <Typography className={styles.description}>
                Polkadot is a scalable heterogeneous multi-chain allowing pooled security and trust-free interchain transactability.
              </Typography>
              <div className={styles.footer}>
                <div className={styles.website}>
                  <Typography>Website</Typography>
                  <Typography component="a" href="https://polkadot.network" target="_blank" rel="noopener noreferrer">polkadot.network</Typography>
                </div>
                <Typography className={styles['stake-wrapper']} component="div">
                  <div className={styles.stake}>
                    <Typography color="white" component="span">
                      STAKE NOW
                    </Typography>
                  </div>
                </Typography>
              </div>
            </div>
          </div>
          <div className={styles.network}>
            <div className={styles['company-wrapper']}>
              <div className={styles.company}>
                <Kusama />
                <Typography className={styles['network-title']}>
                  Kusama
                </Typography>
                <Typography className={styles['network-type']} component="div">
                  <div className={styles.circle} />
                  <Typography component="span">
                    Mainnet
                  </Typography>
                </Typography>
                <Typography className={styles.apr}>15% APR</Typography>
              </div>
            </div>
            <div className={styles.info}>
              <KusamaProtocol />
              <Typography className={styles.description}>
                Kusama is a canary network for Polkadot. It is technologically identical to Polkadot, but has more open and fast governance.
              </Typography>
              <div className={styles.footer}>
                <div className={styles.website}>
                  <Typography>Website</Typography>
                  <Typography component="a" href="https://kusama.network" target="_blank" rel="noopener noreferrer">kusama.network</Typography>
                </div>
                <Typography className={styles['stake-wrapper']} component="div">
                  <div className={styles.stake}>
                    <Typography color="white" component="span">
                      STAKE NOW
                    </Typography>
                  </div>
                </Typography>
              </div>
            </div>
          </div>
          <div className={styles.network}>
            <div className={styles['company-wrapper']}>
              <div className={styles.company}>
                <Cosmos />
                <Typography className={styles['network-title']}>
                  Cosmos
                </Typography>
                <Typography className={styles['network-type']} component="div">
                  <div className={styles.circle} />
                  <Typography component="span">
                    Mainnet
                  </Typography>
                </Typography>
                <Typography className={styles.apr}>10% APR</Typography>
              </div>
            </div>
            <div className={styles.info}>
              <CosmosProtocol />
              <Typography className={styles.description}>
                Cosmos is creating an ecosystem of connected blockchains, they also provide Tendermint SDK, whish developers can easily build their own blockchain.
              </Typography>
              <div className={styles.footer}>
                <div className={styles.website}>
                  <Typography>Website</Typography>
                  <Typography component="a" href="https://cosmos.network" target="_blank" rel="noopener noreferrer">cosmos.network</Typography>
                </div>
                <Typography className={styles['stake-wrapper']} component="div">
                  <div className={styles.stake}>
                    <Typography color="white" component="span">
                      STAKE NOW
                    </Typography>
                  </div>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['portfolio-container']}>
        <Typography className={styles.title}>PORTFOLIO</Typography>
        <div className={styles.portfolios}>
          <div className={styles.portfolio}>
            <PolkadotLogo />
          </div>
          <div className={styles.portfolio}>
            <KusamaProtocol />
          </div>
          <div className={styles.portfolio}>
            <CosmosProtocol />
          </div>
        </div>
      </div>
      <div className={styles['team-container']}>
        <img src={teamTitle} alt="Team" className={styles['title-img']} />
        <div className={styles.members}>
          <div className={styles.member}>
            <img src={marko} alt="MARKO BARICEVIC" className={styles.pfp} />
            <Typography className={styles.name}>MARKO BARICEVIC</Typography>
            <Typography className={styles.title}>Founder</Typography>
            <Typography className={styles.bio}>Short bio goes here.</Typography>
          </div>
          <div className={styles.member}>
            <img src={onur} alt="ONUR AKPOLAT" className={styles.pfp} />
            <Typography className={styles.name}>ONUR AKPOLAT</Typography>
            <Typography className={styles.title}>Founder</Typography>
            <Typography className={styles.bio}>Short bio goes here.</Typography>
          </div>
          <div className={styles.member}>
            <img src={shawn} alt="SHAWN TABRIZI" className={styles.pfp} />
            <Typography className={styles.name}>SHAWN TABRIZI</Typography>
            <Typography className={styles.title}>Founder</Typography>
            <Typography className={styles.bio}>Short bio goes here.</Typography>
          </div>
          <div className={styles.member}>
            <img src={will} alt="WILL PANKIEWICZ" className={styles.pfp} />
            <Typography className={styles.name}>WILL PANKIEWICZ</Typography>
            <Typography className={styles.title}>Founder</Typography>
            <Typography className={styles.bio}>Short bio goes here.</Typography>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Landing;
