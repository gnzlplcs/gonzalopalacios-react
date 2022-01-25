let projects = [
  {
    name: "To-Do maker",
    description: "This project it's about a simple Todo App, using LocalStorage",
    path: "https://github.com/gnzlplcs",
    rate: "⭐⭐⭐",
    number: 1001
  },
  {
    name: "Random Thoughts",
    description: "This is a smooth app to get random thoughts",
    path: "https://github.com/gnzlplcs",
    rate: "⭐⭐⭐⭐",
    number: 1002
  },
  {
    name: "Lima Business",
    description: "This project was a BYU-I assignment. I used trending web responsive techniques.",
    path: "https://github.com/gnzlplcs",
    rate: "⭐⭐",
    number: 1003
  }
];

export function getProjects() {
  return projects;
}

export function getProject(number) {
  return projects.find(
    project => project.number === number
  );
}