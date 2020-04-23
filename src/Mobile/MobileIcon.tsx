import React from 'react';
import styles from './MobileIcon.module.css'; // Import css modules stylesheet as styles

interface Props {
  label: string;
  icon: string;
}

class MobileIcon extends React.Component<Props> {
  render() {
    return (
      <div className={styles.mobileApp}>
        <img src={this.props.icon} alt={this.props.label}/>
      </div>
    );
  }
}

export default MobileIcon;