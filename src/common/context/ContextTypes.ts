export interface ITeam {
  code?: string;
  name?: string;
}

export type AppInfoType = {
  selectedTeam: ITeam | null;
  showSplash: boolean;
};

export type AppContextType = {
  appInfo: AppInfoType;
  updateAppInfo: (info: AppInfoType) => void;
};

export type AppInfoProviderProps = { children: React.ReactNode };
