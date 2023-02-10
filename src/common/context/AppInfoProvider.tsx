import { createContext, useContext, useState } from 'react';
import { APP_INFO_KEY } from '../constants';
import {
  AppContextType,
  AppInfoProviderProps,
  AppInfoType,
} from './ContextTypes';

const INITIAL_APP_INFO = {
  selectedTeam: null,
  showSplash: true,
};

const AppContext = createContext<AppContextType | null>(null);

const updateStorage = (state: AppInfoType) => {
  localStorage.setItem(APP_INFO_KEY, JSON.stringify(state));
  return state;
};

export const useAppInfo = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error('useAppInfo must be used with AppInfoProvider.');
  }
  return appContext;
};

export const AppInfoProvider = ({ children }: AppInfoProviderProps) => {
  const appData = localStorage.getItem(APP_INFO_KEY);
  const appInfoState = appData ? JSON.parse(appData) : INITIAL_APP_INFO;
  const [appInfo, setAppInfo] = useState(appInfoState);
  const updateAppInfo = (info: AppInfoType) => {
    setAppInfo(info);
    updateStorage(info);
  };

  return (
    <AppContext.Provider value={{ appInfo, updateAppInfo }}>
      {children}
    </AppContext.Provider>
  );
};
