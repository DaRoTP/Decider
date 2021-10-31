import { IOptionsReturn } from "@/types/apiCall";

const binaryPollWithTimeLimit: IOptionsReturn = {
  title: "Some poll that I don't care about",
  descirpion:
    "this is some randome lorem ipsum that I also don't really care about ok thats it about this description or about this poll",
  endDate: "2021-11-19T20:18",
  resultPreview: true,
  userVoted: false,
  type: "BINARY",
};

const selectPollWithTimeLimit: IOptionsReturn = {
  title: "Some poll that I don't care about",
  descirpion:
    "this is some randome lorem ipsum that I also don't really care about ok thats it about this description or about this poll",
  endDate: "2021-11-19T20:18",
  resultPreview: false,
  userVoted: false,
  type: "SELECT",
};

export { binaryPollWithTimeLimit, selectPollWithTimeLimit };
