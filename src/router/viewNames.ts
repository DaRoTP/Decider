export enum ViewsMain {
  HOME = "Home",
  LOGIN = "Login",
  REGISTER = "Register",
  SETTINGS = "Settings",
  DASHBOARD = "Dashboard",
}

export enum ViewsCreatePoll {
  CONTAINER = "CreatePollContainer",
  BINARY = "BinaryPollCreate",
  SELECT = "SelectPollCreate",
  METER = "MeterPollCreate",
}

export enum ViewsPollSummary {
  BINARY = "BinaryPollSummary",
  SELECT = "SelectPollSummary",
  METER = "MeterPollSummary",
}

export enum ViewsVotingPanel {
  CONTAINER = "VotingPanelContainer",
  SELECT = "SelectPollVotingPanel",
  METER = "MeterPollVotingPanel",
  BINARY = "BinaryPollVotingPanel",
  RESULTS = "PollResults",
  INTRODUCTION = "PollIntroduction",
  CONCLUSION = "PollConclusion",
}
export const Views = {
  MAIN: ViewsMain,
  CREATE_POLL: ViewsCreatePoll,
  POLL_SUMMARY: ViewsPollSummary,
  VOTING_PANNEL: ViewsVotingPanel,
};
