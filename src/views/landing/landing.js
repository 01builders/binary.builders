import React from 'react';

import Typography from '../../components/typography';

import fromZero from '../../assets/from-zero.png';
import { ReactComponent as Binary } from '../../assets/binary.svg';
import stakeTitle from '../../assets/stake.png';
import supportedTitle from '../../assets/supported-networks.png';
import teamTitle from '../../assets/team-title.png';

import onur from '../../assets/onur.jpg';
import marko from '../../assets/marko.png';
import facu from '../../assets/facu.jpeg';
import julien from '../../assets/julien.png';
import noam from '../../assets/noam.jpeg';
import len from '../../assets/len.png';
import rafa from '../../assets/rafa.png';
// import shawn from '../../assets/shawn.jpg';
import clown from '../../assets/clown.png';

import { ReactComponent as Simple } from '../../assets/stake/simple.svg';
import { ReactComponent as Safe } from '../../assets/stake/safe.svg';
import { ReactComponent as Secure } from '../../assets/stake/secure.svg';

import { ReactComponent as Cosmos } from '../../assets/networks/cosmos.svg';
import Osmosis from '../../assets/osmosis-logo.png';
import Evmos from '../../assets/evmos-logo.png';
import Chihuahua from '../../assets/huahua-logo.png';
import Umee from '../../assets/umee-logo.png';
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
        <Typography className={styles.title}>Ventures</Typography>
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
      
      <div className={styles['stake-container']}>
      <div className={styles['portfolio-container']}>
        <Typography className={styles.title}>Validator</Typography>
        {/* <Typography className={styles.title}>Validator</Typography> */}
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
        <div className={styles.title}>
          {/* <img src={stakeTitle} alt="Stake With Binary Holdings" /> */}
          {/* <Typography align="center" color="white" variant="h1" className={styles.info}>
            Stake With Binary Holdings
          </Typography> */}
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
                Binary Holdings is managed by the engineers who built the Cosmos SDK & the Interchain.
              </Typography>
            </div>
          </div>
        </div>
        <img src={supportedTitle} alt="Supported Networks" className={styles['section-header']}/>
        <div className={styles.cards}>
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
            <a className={styles.icon} target='_blank' rel="noreferrer" href='https://wallet.keplr.app/chains/evmos?modal=validator&chain=evmos_9001-2&validator_address=evmosvaloper1vhuyfr9l7ytd0w9mtdx2033qrc0s6vjj8w37j6'>
              <img src={Evmos} alt="evmos" className={styles.venture} width= '80%'/>
            </a>
          </div>
          <div className={styles['card-network']}>
            <a className={styles.icon} target='_blank' rel="noreferrer" href='https://wallet.keplr.app/chains/umee?modal=validator&chain=umee-1&validator_address=umeevaloper1q5z5vdxtvqmf4eq37pm2xnytc69st382cadf0x'>
              <img src={Umee} alt="umee" className={styles.venture} width= '80%'/>
            </a>
          </div>
          <div className={styles['card-network']}>
            <a className={styles.icon} target='_blank' rel="noreferrer" href='https://chihuahua.omniflix.co/stake'>
              <img src={Chihuahua} alt="chihuahua" className={styles.venture} width= '80%'/>
            </a>
          </div>
          
        </div>
          <Typography className={styles.sub}>
            Click icons to delegate
          </Typography>
        </div>
      </div>
      
      <div className={styles['team-container']}>
        <img src={teamTitle} alt="Team" className={styles['title-img']} />
        <div className={styles.members}>
          <div className={styles.member}>
            <img src={marko} alt="MARKO BARICEVIC" className={styles.pfp} />
            <Typography className={styles.name}>MARKO BARICEVIC</Typography>
            <Typography className={styles.title}>Founder / Cosmos SDK</Typography>
            {/* <Typography className={styles.bio}>Short bio goes here.</Typography> */}
          </div>
          <div className={styles.member}>
            <img src={onur} alt="ONUR AKPOLAT" className={styles.pfp} />
            <Typography className={styles.name}>ONUR AKPOLAT</Typography>
            <Typography className={styles.title}>Founder</Typography>
            {/* <Typography className={styles.bio}>Short bio goes here.</Typography> */}
          </div>
          <div className={styles.member}>
            <img src={clown} alt="ALEKSANDR BEZOBCHUK" className={styles.pfp} />
            <Typography className={styles.name}>ALEKSANDR BEZOBCHUK</Typography>
            <Typography className={styles.title}>Founder / Cosmos SDK</Typography>
            {/* <Typography className={styles.bio}>Short bio goes here.</Typography> */}
          </div>
          <div className={styles.member}>
            <img src={rafa} alt="RAFAEL AVILES" className={styles.pfp} />
            <Typography className={styles.name}>RAFAEL AVILES</Typography>
            <Typography className={styles.title}>Numia</Typography>
            {/* <Typography className={styles.bio}>Short bio goes here.</Typography> */}
          </div>
        </div>
        <div className={styles.members}>
          <div className={styles.member}>
            <img src={clown} alt="STEF SPRINZ" className={styles.pfp} />
            <Typography className={styles.name}>STEF SPRINZ</Typography>
            <Typography className={styles.title}>Builders Program</Typography>
            {/* <Typography className={styles.bio}>Short bio goes here.</Typography> */}
          </div>
          <div className={styles.member}>
            <img src={len} alt="LEN SEITTER" className={styles.pfp} />
            <Typography className={styles.name}>LEN SEITTER</Typography>
            <Typography className={styles.title}>Builders Program</Typography>
            {/* <Typography className={styles.bio}>Short bio goes here.</Typography> */}
          </div>
          <div className={styles.member}>
            <img src={noam} alt="NOAM COHEN" className={styles.pfp} />
            <Typography className={styles.name}>NOAM COHEN</Typography>
            <Typography className={styles.title}>Builders Program</Typography>
            {/* <Typography className={styles.bio}>Short bio goes here.</Typography> */}
          </div>
          <div className={styles.member}>
            <img src={clown} alt="MARC HÖFFL" className={styles.pfp} />
            <Typography className={styles.name}>MARC HÖFFL</Typography>
            <Typography className={styles.title}>Numia</Typography>
            {/* <Typography className={styles.bio}>Short bio goes here.</Typography> */}
          </div>
        </div>
        <div className={styles.members}>
          <div className={styles.member}>
            <img src={clown} alt="FROJDI DYMYLJA" className={styles.pfp} />
            <Typography className={styles.name}>FROJDI DYMYLJA</Typography>
            <Typography className={styles.title}>Cosmos SDK</Typography>
            {/* <Typography className={styles.bio}>Short bio goes here.</Typography> */}
          </div>
          <div className={styles.member}>
            <img src={clown} alt="SAMANTHA RICOTTA" className={styles.pfp} />
            <Typography className={styles.name}>SAMANTHA RICOTTA</Typography>
            <Typography className={styles.title}>Cosmos SDK</Typography>
            {/* <Typography className={styles.bio}>Short bio goes here.</Typography> */}
          </div>
          <div className={styles.member}>
            <img src={julien} alt="JULIEN ROBERT" className={styles.pfp} />
            <Typography className={styles.name}>JULIEN ROBERT</Typography>
            <Typography className={styles.title}>Cosmos SDK</Typography>
            {/* <Typography className={styles.bio}>Short bio goes here.</Typography> */}
          </div>
          <div className={styles.member}>
            <img src={facu} alt="FACUNDO MEDICA" className={styles.pfp} />
            <Typography className={styles.name}>FACUNDO MEDICA</Typography>
            <Typography className={styles.title}>Cosmos SDK</Typography>
            {/* <Typography className={styles.bio}>Short bio goes here.</Typography> */}
          </div>
        </div>
      </div>
    </div >
  );
}

export default Landing;