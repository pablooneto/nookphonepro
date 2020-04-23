import React from 'react';
import styles from './MobileList.module.css';
import MobileCheckbox from './MobileCheckbox';

interface ListProps {
  elements: any[];
  children: React.ReactNode
  onSelectElement?: (element: any) => void;
}

interface ListState {
  selectedIndex?: number;
}

class MobileList extends React.Component<ListProps, ListState> {

  constructor(props: any) {
    super(props)
    this.state = {
      selectedIndex: undefined
    }
  }

  selectElement(element: any, index: number) {
    if (this.props.onSelectElement) {
      this.props.onSelectElement(element);
    }
    this.setState({ selectedIndex : index });
  }

  render() {
    const header = (
      <div className={styles.mobileListElement + " " + styles.mobileListElementTitle}>
        {React.Children.map(this.props.children, (child: any) => { 
          return <span 
            className={styles['col-'+child.props.size]}
            >
            {child.props.name}
            </span>
        })}
      </div>);
    return (
      <div className={styles.mobileTabs}>
        {header}
        {this.props.elements.map((listElement, index) => {
            const childrenElements = React.Children.map(this.props.children, (child: any) => { 
              return React.cloneElement(child, {element : listElement});
            });

        	  return (<div 
              key={index}
              className={styles.mobileListElement + ' ' + (index === this.state.selectedIndex ? styles.selected : '')}
              onClick={() => this.selectElement(listElement, index)}
              >
              {childrenElements}
        	  </div>)
        }, this)}
      </div>
    );
  }
}


interface ListElementProps {
  name: string;
  size?: number
  element?: any;
  determineValue: (element: any) => any;
  onChange?: (value: any, element?: any) => void;
}

class MobileListElement extends React.Component<ListElementProps> {};

export class MobileListIcon extends MobileListElement {
  render() {
    return (<div className={styles['col-'+this.props.size]}>
      <img className={styles.mobileListIcon} src={this.props.determineValue(this.props.element)} />
    </div>);
  }
}

export class MobileListLabel extends MobileListElement {
  render() {
    return (<div className={styles['col-'+this.props.size]}>{this.props.determineValue(this.props.element)}</div>);
  }
}


export class MobileListCheck extends MobileListElement {
  handleChange(value: boolean) {
    if (this.props.onChange) {
      this.props.onChange(value, this.props.element);
    }
  }

  render() {
    return (<div className={styles['col-'+this.props.size]}><MobileCheckbox checked={this.props.determineValue(this.props.element)} onChange={(value) => this.handleChange(value)} /></div>);
  }
}

export default MobileList;