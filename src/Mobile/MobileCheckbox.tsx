import React from 'react';
import styles from './MobileCheckbox.module.css'; // Import css modules stylesheet as styles

interface Props {
  checked: boolean,
  label?: string
  onChange?: (checked: boolean) => void
}

class MobileCheckbox extends React.Component<Props> {

  handleClick() {
    if (this.props.onChange) {
      this.props.onChange(!this.props.checked);
    }
  }

  render() {
    return (
      <div className={styles.mobileCheckbox} onClick={() => this.handleClick()}>
        <div className={styles.check + ' ' + (this.props.checked ? styles.checked : '')}>
        </div>
        {this.props.label && <div className={styles.label}>
          {this.props.label}
        </div>}
      </div>
    );
  }
}

export default MobileCheckbox;