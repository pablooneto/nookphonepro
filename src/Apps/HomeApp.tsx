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
              icon="/assets/apps/fish-app.png"
              label="Fish List"
              />
          </Link>
          <Link to="/flowers">
            <MobileIcon
              icon="/assets/apps/flowers-app.png"
              label="Flower Guide"
              />
          </Link>
          <Link to="/flowers">
            <MobileIcon
              icon="/assets/apps/mystery-islands-app.png"
              label="Mystery Islands"
              />
          </Link>
          <Link to="/settings">
            <MobileIcon
              icon="/assets/apps/settings-app.png"
              label="Settings"
              />
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeApp;