import React from 'react';
import styles from './MobileBar.module.css';

interface Props {
  title: string;
}

class MobileBar extends React.Component<Props> {
  render() {
    return (
      <div className={styles.mobileBar}>
        {this.props.title}
      </div>
    );
  }
}

export default MobileBar;