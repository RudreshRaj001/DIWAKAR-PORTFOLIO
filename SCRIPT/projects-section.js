const projects = [
  {
    Project_Name: "Book Recommendation System",
    Project_Description: "The Book Recommendation System is a machine learning project designed to provide personalized book recommendations. It leverages supervised and unsupervised learning techniques to enhance user experience by suggesting books based on their preferences.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Book-Recommendation-System",
    Live_link: " ",
  },
  {
    Project_Name: "Cars Price Predictor",
    Project_Description: "The Cars Price Predictor is a machine learning project that predicts the prices of cars. Employing various predictive models, this project assists users in estimating the value of cars based on different features and specifications.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Cars-Price-Predictor",
    Live_link: " ",
  },
  {
    Project_Name: "Laptop Price Predictor",
    Project_Description: "The Laptop Price Predictor is a machine learning project aimed at predicting the prices of laptops. Through advanced algorithms, this project enables users to estimate the cost of a laptop based on its specifications and features.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Laptop-Price-Predictor",
    Live_link: " ",
  },
  {
    Project_Name: "Movie Recommender System",
    Project_Description: "The Movie Recommender System is a machine learning project that provides personalized movie recommendations. Using advanced recommendation algorithms, this system suggests movies tailored to individual preferences, enhancing the user's movie-watching experience.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Movie-Recommender-System",
    Live_link: " ",
  },
  {
    Project_Name: "SMS Spam Classifier",
    Project_Description: "The SMS Spam Classifier is a machine learning project designed to identify and classify spam messages in SMS communication. Leveraging natural language processing techniques, it helps users filter out unwanted messages.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/SMS-Spam-Classifier",
    Live_link: " ",
  },
  {
    Project_Name: "T20 World Score Predictor",
    Project_Description: "The T20 World Score Predictor is a machine learning project focused on predicting cricket scores in T20 matches. By analyzing historical data and player statistics, the system provides score predictions for upcoming T20 games.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/T20-World-Score-Predictor",
    Live_link: " ",
  },
];


let projectsHTML = '';
let direction = 0;
let direct = "left-project";
let height = 0;

projects.forEach((projects) => {
  if(direction === 0) {
    direct = "left-project";
    direction = 1;
  } else {
    direct = "right-project"
    direction = 0;
  };
  projectsHTML += `
  <span>&#x2022;</span>
  <div class="each-project ${direct}">
    <h2>${projects.Project_Name}</h2> 
    <h4>${projects.Project_Description}</h4>
    <a href="${projects.Github_link}" target="_blank"><button class="btn">Visit Github</button></a>
    <a href="" target="_blank"><button>Live preview</button></a>
  </div>
`
height += 300;
document.querySelector('.black-center-line').style.height = height + "px";
});
console.log(projectsHTML);
document.querySelector('.black-center-line').innerHTML = projectsHTML;
