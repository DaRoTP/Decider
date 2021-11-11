export interface IPoll {
  id: string;
  title: string;
  isLive: boolean;
}

export interface IOption {
  name: string;
  description?: string;
  imageSrc?: string;
}

export type MeterPollTypes = "INTEGER" | "DECIMAL" | "PERCENTAGE";

export type PollTypes = "BINARY" | "METER" | "SELECT";

export interface IOptionsReturn {
  title: string;
  descirpion?: string;
  endDate?: string;
  resultPreview: boolean;
  userVoted: boolean;
  type: PollTypes;
  meta?: any;
}

export interface ICreatePollPayload {
  type: string;
  title: string;
  description?: string;
  isLimitedByTime: boolean;
  isLiveResult: boolean;
  options: IOption[];
  endDate?: string;
  maxChoice?: number;
}
