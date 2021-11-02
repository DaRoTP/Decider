import { IOptionsReturn, IOption } from "@/types";

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

const binaryPollOptions: IOption[][] = [
  [
    {
      name: "jeden",
      description: "dwa description",
      imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
    },
    {
      name: "dwa",
      description: "dwa description",
      imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
    },
  ],
  [
    {
      name: "trzy",
      description: "dwa description",
      imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
    },
    {
      name: "cztery",
      description: "dwa description",
      imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
    },
  ],
  [
    {
      name: "piec",
      description: "dwa description",
      imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
    },
    {
      name: "szesc",
      description: "dwa description",
      imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
    },
  ],
];

const meterPollOptions: IOption[] = [
  {
    name: "one some title",
    description: "description for this thing",
    imageSrc: "dwdwd",
  },
  {
    name: "two pther title",
    description: "description for dwdwd lorem4g",
    imageSrc: "dwdwd",
  },
  {
    name: "three my ttilte jes",
    description: "descrlorem efe fef ",
    imageSrc: "dwdwd",
  },
];

const selectPollOptions: IOption[][] = [
  [
    { name: "jeden", description: "jeden description" },
    { name: "dwa", description: "jeden description" },
    { name: "tezy", description: "jeden description" },
    { name: "cztery", description: "jeden description" },
  ],
  [
    { name: "cztery", description: "jeden description" },
    { name: "piec", description: "jeden description" },
    { name: "szesc", description: "jeden description" },
    { name: "siedem", description: "jeden description" },
  ],
  [
    { name: "osiem", description: "jeden description" },
    { name: "dzieiwc", description: "jeden description" },
    { name: "dzieisiec", description: "jeden description" },
    { name: "jedenyscie", description: "jeden description" },
  ],
];

export {
  binaryPollWithTimeLimit,
  selectPollWithTimeLimit,
  binaryPollOptions,
  meterPollOptions,
  selectPollOptions,
};
