import React from 'react';

import Typography from '../../components/typography';

import fromZero from '../../assets/from-zero.png';
import { ReactComponent as Binary } from '../../assets/binary.svg';
import stakeTitle from '../../assets/stake.png';
import supportedTitle from '../../assets/supported-networks.png';
import teamTitle from '../../assets/team-title.png';
import validatorTitle from '../../assets/validator-title.png';
import venturesTitle from '../../assets/ventures-title.png';

import onur from '../../assets/team/onur.jpg';
import marko from '../../assets/team/marko.png';
import facu from '../../assets/team/facu.jpeg';
import julien from '../../assets/team/julien.png';
import noam from '../../assets/team/noam.jpeg';
import len from '../../assets/team/len.png';
import rafa from '../../assets/team/rafa.png';
import alex from '../../assets/team/alex.png';
import marc from '../../assets/team/marc.png';
import sam from '../../assets/team/sam.jpeg';
import frojdi from '../../assets/team/frojdi.jpeg';
import anon from '../../assets/team/anon.png';
import anviksha from '../../assets/team/anviksha.png';
import durgham from '../../assets/team/durgham.png';

import { ReactComponent as Simple } from '../../assets/stake/simple.svg';
import { ReactComponent as Safe } from '../../assets/stake/safe.svg';
import { ReactComponent as Secure } from '../../assets/stake/secure.svg';

import { ReactComponent as Cosmos } from '../../assets/networks/cosmos.svg';
import Osmosis from '../../assets/osmosis-logo.png';
import Penumbra from '../../assets/penumbra-logo.png';
import Celestia from '../../assets/celestia-logo.png';
import Stride from '../../assets/stride-logo.png';
import Quasar from '../../assets/quasar-logo.png';
import Noble from '../../assets/noble-logo.png';
import Numia from '../../assets/numia.png';
import SDK from '../../assets/sdk-logo.png';
import BuildersProgam from '../../assets/bp-logo.png';

import styles from './landing.module.scss';

const Landing = () => {
  return (
    <div className={styles['landing-container']}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <img src={fromZero} alt="From Zero. To One." />
          <Typography className={styles.description}>
            We are a leading group of builders in the Interchain ecosystem providing a range of services with the goal to help building the future of Web3
          </Typography>
        </div>
        <Binary className={styles.binary} />
      </div>
      <div className={styles['portfolio-container']}>
        <div className={styles.heading}>
          <img src={venturesTitle} alt="Ventures" className={styles['title-img']} />
        </div>
        <div className={styles['display-mobile']}>
          <div className={styles.portfolios}>
            <a className={styles.portfolio} target='_blank' rel="noreferrer" href='https://v1.cosmos.network/sdk' style={{ textDecoration: 'none' }}>
              <img src={SDK} alt="SDK" className={styles.venture}/>
            </a>
            <a className={styles.portfolio} target='_blank' rel="noreferrer" href='https://numia.xyz/' style={{ textDecoration: 'none' }}>
              <img src={Numia} alt="Numia" className={styles.venture}/>
            </a>
            <a className={styles.portfolio} target='_blank' rel="noreferrer" href='https://join.builders/' style={{ textDecoration: 'none' }}>
              <img src={BuildersProgam} alt="BuildersProgram" className={styles.venture}/>
            </a>
          </div>
        </div>

        <div className={styles['supported-networks-container']}>
          <div className={styles.networks}>
            <div className={styles['display-desktop']}>
              <div className={styles.networkRight}>
                <div className={styles.info}>
                  <div className={styles.smallerbox}>
                    <div className={styles.imagebox}>
                    <a className={styles.portfolio} target='_blank' rel="noreferrer" href='https://v1.cosmos.network/sdk' style={{ textDecoration: 'none' }}>
                      <img src={SDK} alt="SDK" className={styles.venture}/>
                    </a>
                    </div>
                  </div>
                  <div className={styles.box}>
                    <Typography className={styles.description}>
                    Binary Builders is the primary maintainer of the Cosmos SDK. The Cosmos SDK is the world's most used framework for building application-specific blockchains. 
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={styles.networkLeft}>
                <div className={styles.info}>
                <div className={styles.box}>
                    <Typography className={styles.description}>
                    Numia Data's mission is to make Cosmos on-chain data accessible to anyone. We store data from a variety of Cosmos SDK chains & provide an easy interface to users, making data accessible via SQL, APIs and public dashboards.
                   </Typography>
                  </div>
                  <div className={styles.smallerbox}>
                    <div className={styles.imagebox}>
                      <a className={styles.portfolio} target='_blank' rel="noreferrer" href='https://numia.xyz/' style={{ textDecoration: 'none' }}>
                        <img src={Numia} alt="Numia" className={styles.venture}/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.networkRight}>
                <div className={styles.info}>
                <div className={styles.smallerbox}>
                    <div className={styles.imagebox}>
                    <a className={styles.portfolio} target='_blank' rel="noreferrer" href='https://join.builders/' style={{ textDecoration: 'none' }}>
                      <img src={BuildersProgam} alt="BuildersProgram" className={styles.venture}/>
                    </a>
                    </div>
                  </div>
                  <div className={styles.box}>
                    <Typography className={styles.description}>
                    The Builders Program provides mentorship, structured support and guidance for teams who build in the Interchain, using at least one component of the Cosmos Stack: Tendermint/CometBFT, CosmosSDK, CosmWasm and IBC.                </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles['stake-container']}>
        <div className={styles['portfolio-container']}>
          <div className={styles.heading}>
            <img src={validatorTitle} alt="Validator" className={styles['title-img']} />
          </div>
          <div className={styles['reach-container']}>
            <div className={styles.reach}>
              <Typography className={styles.value}>
                $80M+
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
                Unique delegators
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
          <div className={styles.title}>
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
                  Nominating has never been this easy. Everything you need to join us can be found on this site.
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
                  Binary Builders is managed by the engineers who built the Cosmos SDK & the Interchain.
                </Typography>
              </div>
            </div>
          </div>
        
          <div className={styles.heading}>
            <img src={supportedTitle} alt="Supported Networks" className={styles['title-img-small']} />
          </div>
          <div className={styles['cards-staking']}>
            <div className={styles['card-network']}>
              <a className={styles.icon} target='_blank' rel="noreferrer" href='https://wallet.keplr.app/chains/cosmos-hub?modal=validator&chain=cosmoshub-4&validator_address=cosmosvaloper1e4vye322gkjx8n85jgcclnc7nvdvu82axnr5ll'>
                <Cosmos />
              </a>
            </div>
            <div className={styles['card-network']}>
              <a className={styles.icon} target='_blank' rel="noreferrer" href='https://wallet.keplr.app/chains/osmosis?modal=validator&chain=osmosis-1&validator_address=osmovaloper15czt5nhlnvayqq37xun9s9yus0d6y26d5jws45'>
                <img src={Osmosis} alt="osmosis" className={styles.venture} width= '80%'/>
              </a>
            </div>
            <div className={styles['card-network']}>
              <a className={styles.icon} target='_blank' rel="noreferrer" href='https://penumbra.stakewith.binary.builders/app/#/staking'>
                <img src={Penumbra} alt="penumbra" className={styles.venture} width= '80%'/>
              </a>
            </div>
            <div className={styles['card-network']}>
              <a className={styles.icon} target='_blank' rel="noreferrer" href='https://wallet.keplr.app/chains/celestia?modal=staking&chain=celestia&validator_address=celestiavaloper15kpw453rgqrranltr8pcy9muryf3jjd7esw38j&step_id=2'>
                <img src={Celestia} alt="celestia" className={styles.venture} width= '80%'/>
              </a>
            </div>
          </div>
          <div className={styles['cards-staking']}>
            <div className={styles['card-network']}>
              <a className={styles.icon} target='_blank' rel="noreferrer" href='https://wallet.keplr.app/chains/stride?modal=validator&chain=stride-1&validator_address=stridevaloper1e4vye322gkjx8n85jgcclnc7nvdvu82arenpt9'>
                <img src={Stride} alt="stride" className={styles.venture} width= '80%'/>
              </a>
            </div>
            <div className={styles['card-network']}>
              <a className={styles.icon} target='_blank' rel="noreferrer" href=''>
                <img src={Noble} alt="noble" className={styles.venture} width= '80%'/>
              </a>
            </div>
            <div className={styles['card-network']}>
              <a className={styles.icon} target='_blank' rel="noreferrer" href='https://wallet.keplr.app/chains/quasar?modal=validator&chain=quasar-1&validator_address=quasarvaloper1e4vye322gkjx8n85jgcclnc7nvdvu82af6agkm'>
                <img src={Quasar} alt="quasar" className={styles.venture} width= '80%'/>
              </a>
            </div>

       
          </div>
          <Typography className={styles.sub}>
            Click icons to delegate
          </Typography>
        </div>
      </div>
      
      <div className={styles['team-container']}>
        <div className={styles.heading}>
          <img src={teamTitle} alt="Team" className={styles['title-img']} />
        </div>
        <div className={styles.members}>
          <div className={styles.member}>
            <img src={anon} alt="ALEXANDER PETERS" className={styles.pfp} />
            <Typography className={styles.name}>ALEXANDER PETERS</Typography>
            <Typography className={styles.title}>Cosmos SDK</Typography>
          </div>
          <div className={styles.member}>
            <img src={alex} alt="ALEX SANTOS" className={styles.pfp} />
            <Typography className={styles.name}>ALEX SANTOS</Typography>
            <Typography className={styles.title}>Builders Program</Typography>
          </div>
          <div className={styles.member}>
            <img src={anviksha} alt="ANVIKSHA SINGH" className={styles.pfp} />
            <Typography className={styles.name}>ANVIKSHA SINGH</Typography>
            <Typography className={styles.title}>Marketing</Typography>
          </div>
          <div className={styles.member}>
            <img src={durgham} alt="DURGHAM MUSHTAHA" className={styles.pfp} />
            <Typography className={styles.name}>DURGHAM MUSHTAHA</Typography>
            <Typography className={styles.title}>Builders Program</Typography>
          </div>
          <div className={styles.member}>
            <img src={facu} alt="FACUNDO MEDICA" className={styles.pfp} />
            <Typography className={styles.name}>FACUNDO MEDICA</Typography>
            <Typography className={styles.title}>Cosmos SDK</Typography>
          </div>
        </div>
        <div className={styles.members}>
          <div className={styles.member}>
            <img src={frojdi} alt="FROJDI DYMYLJA" className={styles.pfp} />
            <Typography className={styles.name}>FROJDI DYMYLJA</Typography>
            <Typography className={styles.title}>Cosmos SDK</Typography>
          </div>
          <div className={styles.member}>
            <img src={anon} alt="JOHN REYNOLDS" className={styles.pfp} />
            <Typography className={styles.name}>JOHN REYNOLDS</Typography>
            <Typography className={styles.title}>Cosmos SDK</Typography>
          </div>
          <div className={styles.member}>
            <img src={anon} alt="JONATHAN GIMENO" className={styles.pfp} />
            <Typography className={styles.name}>JONATHAN GIMENO</Typography>
            <Typography className={styles.title}>Consulting</Typography>
          </div>
          <div className={styles.member}>
            <img src={julien} alt="JULIEN ROBERT" className={styles.pfp} />
            <Typography className={styles.name}>JULIEN ROBERT</Typography>
            <Typography className={styles.title}>Cosmos SDK</Typography>
          </div>
          <div className={styles.member}>
            <img src={len} alt="LEN SEITTER" className={styles.pfp} />
            <Typography className={styles.name}>LEN SEITTER</Typography>
            <Typography className={styles.title}>Builders Program</Typography>
          </div>
        </div>
        <div className={styles.members}>
          <div className={styles.member}>
            <img src={marc} alt="MARC HÖFFL" className={styles.pfp} />
            <Typography className={styles.name}>MARC HÖFFL</Typography>
            <Typography className={styles.title}>Numia</Typography>
          </div>
          <div className={styles.member}>
            <img src={marko} alt="MARKO BARICEVIC" className={styles.pfp} />
            <Typography className={styles.name}>MARKO BARICEVIC</Typography>
            <Typography className={styles.title}>Founder / Cosmos SDK</Typography>
          </div>
          <div className={styles.member}>
            <img src={anon} alt="MATTHEW KOCUBINSKI" className={styles.pfp} />
            <Typography className={styles.name}>MATTHEW KOCUBINSKI</Typography>
            <Typography className={styles.title}>Cosmos SDK</Typography>
          </div>
          <div className={styles.member}>
            <img src={noam} alt="NOAM COHEN" className={styles.pfp} />
            <Typography className={styles.name}>NOAM COHEN</Typography>
            <Typography className={styles.title}>Builders Program</Typography>
          </div>
          <div className={styles.member}>
            <img src={onur} alt="ONUR AKPOLAT" className={styles.pfp} />
            <Typography className={styles.name}>ONUR AKPOLAT</Typography>
            <Typography className={styles.title}>Founder</Typography>
          </div>
        </div>
        <div className={styles.members}>
          <div className={styles.member}>
            <img src={rafa} alt="RAFAEL AVILES" className={styles.pfp} />
            <Typography className={styles.name}>RAFAEL AVILES</Typography>
            <Typography className={styles.title}>Numia</Typography>
          </div>
          <div className={styles.member}>
            <img src={sam} alt="SAM RICOTTA" className={styles.pfp} />
            <Typography className={styles.name}>SAM RICOTTA</Typography>
            <Typography className={styles.title}>Cosmos SDK</Typography>
          </div>
          <div className={styles.member}>
            <img src={anon} alt="SEAN KING" className={styles.pfp} />
            <Typography className={styles.name}>SEAN KING</Typography>
            <Typography className={styles.title}>Consulting</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
