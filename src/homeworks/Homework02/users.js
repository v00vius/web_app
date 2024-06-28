const users = [
  {
    firstName: "Alfie",
    lastName: "Wood",
    avatar: "https://randomuser.me/api/portraits/lego/7.jpg",
    occupation: "Judge",
    hobby: "Beer tasting",
  },
  {
    firstName: "Aidan",
    lastName: "Russell",
    avatar: "https://randomuser.me/api/portraits/lego/3.jpg",
    occupation: "Referee",
    hobby: "Stone skipping",
  },
  {
    firstName: "Travis",
    lastName: "Cohen",
    avatar: "https://randomuser.me/api/portraits/lego/8.jpg",
    occupation: "Insurance Agent",
    hobby: "Skateboarding",
  },
  {
    firstName: "Willie",
    lastName: "Haynes",
    avatar: "https://randomuser.me/api/portraits/lego/6.jpg",
    occupation: "Interpreter & Translator",
    hobby: "Trail running",
  },
  {
    firstName: "Yasmin",
    lastName: "Nicholls",
    avatar: "https://randomuser.me/api/portraits/lego/2.jpg",
    occupation: "Systems Analyst",
    hobby: "Butterfly watching",
  },
];

export const getUser = function (id) {
  return id >= 0 && id < users.length ? users[id] : users[0];
};
