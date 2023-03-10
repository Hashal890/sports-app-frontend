export const NavbarLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Register",
    link: "/register",
  },
  {
    id: 3,
    name: "Login",
    link: "/login",
  },
  {
    id: 4,
    name: "My Events",
    link: "/myevents",
  },
  {
    id: 5,
    name: "Events List",
    link: "/list",
  },
];

export const LoginInitState = {
  username: "",
  password: "",
};

export const RegisterInitState = {
  fName: "",
  lName: "",
  username: "",
  password: "",
};

export const MyEventsInitialState = {
  title: "",
  desc: "",
  date: "",
  limit: 0,
};
