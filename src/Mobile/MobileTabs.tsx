import React from 'react';
import styles from './MobileTabs.module.css'; // Import css modules stylesheet as styles

interface Props {
  tabs: string[];
  selectedTab: string;
  onChangeTab: (tabName: string) => void;
}

class MobileTabs extends React.Component<Props> {
  render() {
    return (
      <div className={styles.mobileTabs}>
        {this.props.tabs.map((tab, index) =>
      	  <div
            key={index}
            className={styles.mobileTab + ' ' + (tab === this.props.selectedTab ? styles.selected : '')}
            onClick={() => this.props.onChangeTab(tab)}
            >
      	    {tab}
      	  </div>)}
      </div>
    );
  }
}

export default MobileTabs;