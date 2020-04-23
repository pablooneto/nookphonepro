import { RootState } from '../../types'
import { Dispatch } from 'redux';

export const FishAppMapStateToProps = (app: RootState) => {
  return {
    capturedFish : []
  };
}

export const FishAppMapDispatchToProps = (dispatch: Dispatch) => {
  return {
    captureFish: (fishName: string) => dispatch({type: 'CAPTURE_FISH', name: fishName}),
    releaseFish: (fishName: string) => dispatch({type: 'RELEASE_FISH', name: fishName})
  };
}
