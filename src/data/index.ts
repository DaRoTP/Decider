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
  meta: {
    maxChoice: 3,
  },
};

const meterPollWithTimeLimit: IOptionsReturn = {
  title: "Some poll that I don't care about",
  descirpion:
    "this is some randome lorem ipsum that I also don't really care about ok thats it about this description or about this poll",
  endDate: "2021-11-19T20:18",
  resultPreview: false,
  userVoted: false,
  type: "METER",
};

const binaryPollOptions: IOption[] = [
  {
    name: "jeden",
    description: "dwa description",
    imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
  },
  {
    name: "dwa",
    description: "dwa description",
    imageSrc: "https://blog.imgur.com/wp-content/uploads/2016/06/PqVjUFZ.jpg",
  },
  {
    name: "trzy",
    description: "dwa description",
    imageSrc: "https://i.imgur.com/X8vQxhF.jpg",
  },
  {
    name: "cztery",
    description: "dwa description",
    imageSrc: "https://pbs.twimg.com/media/FDH-MlPVkAcPEZx.jpg",
  },
  {
    name: "piec",
    description: "dwa description",
    imageSrc: "https://i.imgur.com/eFfmdb3.jpg?fb",
  },
  {
    name: "szesc",
    description: "dwa description",
    imageSrc:
      "https://thumbs.dreamstime.com/z/macro-image-imgur-com-homepage-loaded-screen-web-browser-imgur-com-web-site-selective-focus-180826286.jpg",
  },
  {
    name: "siedem",
    description: "dwa description",
    imageSrc: "https://i.imgur.com/eFfmdb3.jpg?fb",
  },
  {
    name: "osiem",
    description: "dwa description",
    imageSrc: "https://pbs.twimg.com/media/FDH-MlPVkAcPEZx.jpg",
  },
  {
    name: "dziewiec",
    description: "dwa description",
    imageSrc: "https://i.imgur.com/eFfmdb3.jpg?fb",
  },
  {
    name: "dziesiec",
    description: "dwa description",
    imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
  },
  {
    name: "jedenascie",
    description: "dwa description",
    imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
  },
  {
    name: "dwanascie",
    description: "dwa description",
    imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
  },
  {
    name: "trzynascie",
    description: "dwa description",
    imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
  },
  {
    name: "czternascie",
    description: "dwa description",
    imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
  },
  {
    name: "pietnascie",
    description: "dwa description",
    imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
  },
  {
    name: "szesnascie",
    description: "dwa description",
    imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
  },
];

const meterPollOptions: IOption[] = [
  {
    name: "one some title",
    description: "description for this thing",
    imageSrc: "https://i.imgur.com/bm0OQTf.jpg",
  },
  {
    name: "two pther title",
    description: "description for dwdwd lorem4g",
    imageSrc: "https://blog.imgur.com/wp-content/uploads/2016/06/PqVjUFZ.jpg",
  },
  {
    name: "three my ttilte jes",
    description: "descrlorem efe fef ",
    imageSrc: "https://i.imgur.com/X8vQxhF.jpg",
  },
];

const selectPollOptions: IOption[] = [
  {
    name: "jeden",
    description: "jeden description",
    imageSrc: "https://i.imgur.com/eFfmdb3.jpg?fb",
  },
  {
    name: "dwa",
    description: "jeden description",
    imageSrc: "https://i.imgur.com/eFfmdb3.jpg?fb",
  },
  {
    name: "tezy",
    description: "jeden description",
    imageSrc: "https://i.imgur.com/eFfmdb3.jpg?fb",
  },
  {
    name: "cztery",
    description: "jeden description",
    imageSrc: "https://i.imgur.com/eFfmdb3.jpg?fb",
  },
  {
    name: "piec",
    description: "jeden description",
    imageSrc: "https://i.imgur.com/eFfmdb3.jpg?fb",
  },
  {
    name: "szesc",
    description: "jeden description",
    imageSrc: "https://i.imgur.com/eFfmdb3.jpg?fb",
  },
];

const userReturn = {
  username: "someUSer1",
};

const userRegisterReturn = {
  message: "user registered succesffully",
};

const isAuthenticatedReturnTrue = {
  message: "user is Authenticated",
  user: {
    username: "user1",
  },
  isAuthenticated: true,
};

const isAuthenticatedReturnFalse = {
  message: "user is UnAuthorized",
  isAuthenticated: false,
};

export {
  binaryPollWithTimeLimit,
  selectPollWithTimeLimit,
  meterPollWithTimeLimit,
  binaryPollOptions,
  meterPollOptions,
  selectPollOptions,
  userReturn,
  userRegisterReturn,
  isAuthenticatedReturnTrue,
  isAuthenticatedReturnFalse,
};
