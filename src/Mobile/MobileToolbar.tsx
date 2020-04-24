import React from 'react';
import styles from './MobileToolbar.module.css';
import MobileCheckbox from './MobileCheckbox';

interface Props {
  children: React.ReactNode
}

class MobileToolbar extends React.Component<Props> {
  render() {
    return (
      <div className={styles.mobileToolbar}>
        {this.props.children}
      </div>);
  }
}


interface ToolbarElementProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

class MobileToolbarElement extends React.Component<ToolbarElementProps> {};

export class MobileToolbarButton extends MobileToolbarElement {
  render() {
    return (<div className={styles.mobileToolbarButton + ' ' + (this.props.active ? styles.mobileToolbarButtonActive : '')} onClick={this.props.onClick}>
      {this.props.label}
    </div>);
  }
}

export class MobileToolbarCheckbox extends MobileToolbarElement {
  handleClick () {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  render() {
    return (<MobileCheckbox checked={this.props.active ? this.props.active : false} onChange={(value) => this.handleClick()} label={this.props.label}/>);
  }
}

export default MobileToolbar;