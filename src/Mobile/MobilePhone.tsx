import React from 'react';
import styles from './MobilePhone.module.css'; // Import css modules stylesheet as styles

interface Props {
  children: React.ReactNode
}

interface State {
  time: string;
}

class MobilePhone extends React.Component<Props, State> {
  render() {
    const options = {hour: 'numeric', minute: 'numeric'};
    const time = new Intl.DateTimeFormat(navigator.language, options).format(new Date());

    return (
      <div className={styles.mobilePhone}>
        <div className={styles.topBar}>
          {time}
        </div>
        <div className={styles.openedApp}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MobilePhone;