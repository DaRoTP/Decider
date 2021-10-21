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
