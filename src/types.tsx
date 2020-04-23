export interface RootState {
  apps: AppList
  config: AppConfig
}

export interface AppList {
  [key: string]: AppState;
}

export interface AppConfig {
  [key: string]: AppState;
}


export interface AppState {
	appName: string;
	state: any;
}