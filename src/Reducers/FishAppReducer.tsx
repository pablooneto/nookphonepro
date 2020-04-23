import { AppState } from '../types';

const capturedFishReducer = (capturedFish:any[] = [], action: any): any[] => {
  switch (action.type) {
    case 'CAPTURE_FISH':
      if (capturedFish.find( (fish) => fish === action.name ) === undefined ) {
		return capturedFish.concat(action.name);
      } else {
      	return capturedFish.concat();
      }
	case 'RELEASE_FISH':
	  return capturedFish.filter( (fish) => fish !== action.name);
	default:
	  return capturedFish;
  }
}

const initialState: AppState = {
	appName: 'Fish App',
	state: {
		capturedFish: []
	}
}

export default function FishAppReducer(app: AppState = initialState, action: any): AppState {
  return {
  	appName: app.appName,
  	state : {
  	  capturedFish : capturedFishReducer(app.state.capturedFish, action)
  	}
  }
}