import React from 'react';
import Redux from 'redux';
import { connect } from "react-redux";
import styles from './HomeApp.module.css';
import fishdb from './fishdb.json';
import { RootState } from '../../types'

import {
  MobileBar,
  MobileTabs,
  MobileList,
  MobileListIcon,
  MobileListLabel,
  MobileListCheck,
  MobileCheckbox,
  MobileToolbar,
  MobileToolbarButton,
  MobileToolbarCheckbox
} from '../../Mobile/Mobile';

export interface OwnProps {
}

interface StateProps {
  capturedFish: string[];
}
     
interface DispatchProps {
  captureFish: (fishName: string) => void;
  releaseFish: (fishName: string) => void;
}
 
type Props = StateProps & DispatchProps & OwnProps

interface State {
  selectedTab: string;
  hideCaptured: boolean;
  fish_list: Fish[];
}

interface Fish {
  name: string;
  image: string;
  price : number;
  location : string;
  size : number;
  time : string;
  Jan : boolean;
  Feb : boolean;
  Mar : boolean;
  Apr : boolean;
  May : boolean;
  Jun : boolean;
  Jul : boolean;
  Aug : boolean;
  Sep : boolean;
  Oct : boolean;
  Nov : boolean;
  Dec : boolean;
}


class ConnectedFishApp extends React.Component<Props, State> {

  constructor(props: any) {
    super(props)
    this.state = {
      selectedTab: "Now",
      hideCaptured: true,
      fish_list: []
    }
  }

  componentDidMount() {
    this.applyFilter("Now", true);
  }

  applyFilter(filter: string, hideCaptured: boolean) {
    const now = new Date();
    const monthName = new Intl.DateTimeFormat('en', {month:'short'}).format(now);

    const monthFilter = (filter === 'Now' || filter === 'Today') ? monthName.charAt(0).toUpperCase() + monthName.slice(1) : null;
    const timeFilter = (filter === 'Now') ? now.getHours() > 15 && now.getHours() < 21 ? '4 PM - 9 AM' : '9 AM - 4 PM' : null;

    const filtered_list: Fish[] = fishdb.filter( (fish: any) => {
      const captured = this.props.capturedFish.find( (fishName:string) => fishName === fish.name) !== undefined;
      return (!hideCaptured || !captured) && (monthFilter === null || fish[monthFilter]) && (timeFilter === null || fish.time === timeFilter || fish.time === 'All day')
    })

    this.setState({
      selectedTab: "Now",
      fish_list: filtered_list
    });
  }

  selectTab(selectedTab: string) {
    this.applyFilter(selectedTab, this.state.hideCaptured);
    this.setState({ selectedTab: selectedTab });
  }

  determineIcon (element: any) {
    return process.env.REACT_APP_BASE_URL + '/assets/fish-app/' + element.image + '.png';
  }

  determineCaptured (element: any) {
    if (this.props.capturedFish) {
      return this.props.capturedFish.find( (fishName) => fishName === element.name ) !== undefined;
    } else {
      return false;
    }
  }

  toggleHideCaptured () {
    this.applyFilter(this.state.selectedTab, !this.state.hideCaptured);
    this.setState({ hideCaptured: !this.state.hideCaptured });
  }

  toggleCapture (captured: boolean, element: any) {
    if (captured) {
      this.props.captureFish(element.name);
    } else {
      this.props.releaseFish(element.name);
    }
  }

  render() {
  	const tabs = ['Now', 'Today', 'Always'];
    return (
      <div>
        <MobileBar title="Fish"/>
        <MobileToolbar>
          <MobileToolbarButton label="Now"    active={this.state.selectedTab=="Now"}    onClick={()=>this.selectTab("Now")}/>
          <MobileToolbarButton label="Today"  active={this.state.selectedTab=="Today"}  onClick={()=>this.selectTab("Today")}/>
          <MobileToolbarButton label="Always" active={this.state.selectedTab=="Always"} onClick={()=>this.selectTab("Always")}/>
          <MobileToolbarCheckbox active={this.state.hideCaptured} label="Hide catched" onClick={() => this.toggleHideCaptured()}/>
        </MobileToolbar>

        <MobileList elements={this.state.fish_list}>
          <MobileListIcon  size={1} name=""        determineValue={(element: any) => this.determineIcon(element)} />
          <MobileListLabel size={6} name="Name"    determineValue={(element: any) => element.name} />
          <MobileListLabel size={2} name="Pricing" determineValue={(element: any) => element.price } />
          <MobileListLabel size={2} name="Size"    determineValue={(element: any) => element.size } />
          <MobileListCheck size={1} name=""        determineValue={(element: any) => this.determineCaptured(element) } onChange={(checked: any, element: any) => this.toggleCapture(checked, element) } />
        </MobileList>
      </div>
    );
  }
}

const mapStateToProps = (app: RootState, ownProps: OwnProps): StateProps => {
  return {
    capturedFish : app.apps.fishApp.state.capturedFish
  };
}

const mapDispatchToProps = (dispatch: Redux.Dispatch): DispatchProps => {
  return {
    captureFish: (fishName: string) => dispatch({type: 'CAPTURE_FISH', name: fishName}),
    releaseFish: (fishName: string) => dispatch({type: 'RELEASE_FISH', name: fishName})
  };
}


const FishApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedFishApp);


export default FishApp;