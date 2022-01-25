let projects = [
  {
    name: "Find Words Definitions",
    description: "This was my Web Frontend Development II course's final project. It was built up with vanilla JS and API fetch. It was also developed using the MVC paradigm.",
    path: "https://gnzlplcs.github.io/portfolio/final-project/index.html",
    repo: "https://github.com/gnzlplcs/portfolio/tree/main/final-project",
    rate: "⭐⭐⭐⭐",
    number: 1001,
    image: '1001.png'
  },
  {
    name: "Tic-Tac-Toe",
    description: "The classic Tic-Tac-Toe game, implemented with React, and deployed on Netlify. I have to mention, this was my first React project.",
    path: "https://tic-tac-toe-by-gnzl.netlify.app/",
    repo: 'https://github.com/gnzlplcs/tic-tac-toe-react',
    rate: "⭐⭐⭐",
    number: 1002,
    image: '1002.png'
  },
  {
    name: "Mixed Messages",
    description: "This is a smooth app to get random thoughts. This one was a Codecademy project.",
    path: "https://gnzlplcs.github.io/mixed-messages/",
    repo: "https://github.com/gnzlplcs/mixed-messages",
    rate: "⭐⭐⭐⭐⭐",
    number: 1003,
    image: '1003.png'
  },
  {
    name: "SchoolScreen",
    description: "This was one of my first landing page projects. It seeks simulate an academic platform, like Codecademy or FreeCodeCamp. Although, it has no functionality, the main goal was to master HTML and CSS skills. The code is hosted on Glitch.",
    path: "https://gonzalo-personal-final-project.glitch.me/survey.html",
    repo: "https://glitch.com/edit/#!/gonzalo-personal-final-project",
    rate: "⭐⭐⭐⭐",
    number: 1004,
    image: '1004.png'
  },
  {
    name: "Lima Business",
    description: "This project was another BYU-I assignment. I've created a hard-code api on a JSON file, and simulated fetching from there.",
    path: "https://gnzlplcs.github.io/final-project/",
    repo: "https://github.com/gnzlplcs/gnzlplcs.github.io/tree/master/final-project",
    rate: "⭐⭐⭐",
    number: 1005,
    image: '1004.png'
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