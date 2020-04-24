import React from 'react';
import styles from './MobileAsset.module.css'; // Import css modules stylesheet as styles

interface Props {
  src: string;
  alt: string;
  cover?: boolean;
  contain?: boolean;
}

class MobileAsset extends React.Component<Props> {
  render() {
  	const classes = (this.props.cover ? styles.mobileAssetCover : '') + ' ' + (this.props.contain ? styles.mobileAssetContain : '')
    return (
      <img className={styles.mobileAsset + ' ' + classes} src={process.env.REACT_APP_BASE_URL + this.props.src} alt={this.props.alt} />
    );
  }
}

export default MobileAsset;