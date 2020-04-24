import React from 'react';
import styles from './MobileIcon.module.css';
import MobileAsset from './MobileAsset';

interface Props {
  label: string;
  icon: string;
}

class MobileIcon extends React.Component<Props> {
  render() {
    return (
      <div className={styles.mobileIcon}>
        <div className={styles.mobileIconImage}>
          <MobileAsset cover src={this.props.icon} alt={this.props.label} />
        </div>
        <div className={styles.mobileIconLabel}>
          {this.props.label}
        </div>
      </div>
    );
  }
}

export default MobileIcon;