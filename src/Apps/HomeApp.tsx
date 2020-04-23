import React from 'react';
import { Link } from "react-router-dom";

import styles from './HomeApp.module.css';

import { MobileIcon, MobileBar} from '../Mobile/Mobile';

class HomeApp extends React.Component {
  render() {
    return (
      <div>
        <MobileBar title="Nook's Helper"/>
        <div className={styles.appsGrid}>
          <Link to="/fish">
            <MobileIcon
              icon="/assets/apps/fish.png"
              label="Fish"
              />
          </Link>
          <Link to="/fish">
            <MobileIcon
              icon="/assets/apps/fish.png"
              label="Fish"
              />
          </Link>
          <Link to="/fish">
            <MobileIcon
              icon="/assets/apps/fish.png"
              label="Fish"
              />
          </Link>
          <Link to="/fish">
            <MobileIcon
              icon="/assets/apps/fish.png"
              label="Fish"
              />
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeApp;