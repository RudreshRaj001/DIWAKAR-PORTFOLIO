const AIprojects = [
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
    Project_Description: "The Movie Recommender System is a machine learning project that provides personalized movie recommendations. Using advanced recommendation algorithms, this system suggests movies tailored to individual preferences.",
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

const MLprojects = [
  {
    Project_Name: "Health and Fitness Companion",
    Project_Description: "The Health and Fitness Companion is a machine learning project designed to assist users in achieving their fitness goals. Using personalized data and machine learning models, it provides workout recommendations, nutritional advice, and progress tracking.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Health-Fitness-Companion",
    Live_link: " ",
  },
  {
    Project_Name: "Real Estate Price Predictor",
    Project_Description: "The Real Estate Price Predictor is a machine learning project that predicts property prices. Employing various predictive models and real estate data, this project helps users estimate the value of properties based on different features and market trends.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Real-Estate-Price-Predictor",
    Live_link: " ",
  },
  {
    Project_Name: "Weather Forecasting System",
    Project_Description: "The Weather Forecasting System is a machine learning project aimed at predicting weather conditions. Through analysis of meteorological data and advanced algorithms, this project provides accurate weather forecasts for specific locations.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Weather-Forecasting-System",
    Live_link: " ",
  },
  {
    Project_Name: "Music Genre Classifier",
    Project_Description: "The Music Genre Classifier is a machine learning project that classifies music into different genres. Using audio features and machine learning techniques, it enhances music recommendation systems and genre-based playlists.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Music-Genre-Classifier",
    Live_link: " ",
  },
  {
    Project_Name: "Email Priority Sorter",
    Project_Description: "The Email Priority Sorter is a machine learning project designed to prioritize emails based on their importance. Leveraging natural language processing and user behavior analysis, it helps users manage their inbox more efficiently.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Email-Priority-Sorter",
    Live_link: " ",
  },
  {
    Project_Name: "Stock Price Predictor",
    Project_Description: "The Stock Price Predictor is a machine learning project focused on predicting stock prices. By analyzing financial data and market trends, the system provides predictions for stock prices in various markets.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Stock-Price-Predictor",
    Live_link: " ",
  },
];


  let projectsHTML = '';
  let direction = 0;
  let direct = "left-project";
  let direct_Animate = "animate-left-project";
  let height = 0;

  // setting AI button color before first rendering the project section with AI projects
  document.querySelector('.AI-project-btn').style.color = 'var(--Button)';

  AIprojects.forEach((X) => {
    if(direction === 0) {
      direct = "left-project";
      direct_Animate = "animate-left-project";
      direction = 1;
    } else {
      direct = "right-project"
      direct_Animate = "animate-right-project";
      direction = 0;
    };
    projectsHTML += `
    <span>&#x2022;</span>
    <div class="each-project ${direct} ${direct_Animate}">
      <h2>${X.Project_Name}</h2> 
      <h4>${X.Project_Description}</h4>
      <div class="btn-container">
      <a href="${X.Github_link}" target="_blank"><button class="btn">Visit Github</button></a>
      <a href="" target="_blank"><button class="btn">Live preview</button></a>
      </div>
    </div>
  `
  height += 300;
  document.querySelector('.black-center-line').style.height = height + "px";
  });
  document.querySelector('.black-center-line').innerHTML = projectsHTML;


function Render_Project_section(projects){
  let projectsHTML = '';
  let direction = 0;
  let direct = "left-project";
  let direct_Animate = "animate-left-project";
  let height = 0;

  projects.forEach((X) => {
    if(direction === 0) {
      direct = "left-project";
      direct_Animate = "animate-left-project";
      direction = 1;
    } else {
      direct = "right-project"
      direct_Animate = "animate-right-project";
      direction = 0;
    };
    projectsHTML += `
    <span>&#x2022;</span>
    <div class="each-project ${direct} ${direct_Animate}">
      <h2>${X.Project_Name}</h2> 
      <h4>${X.Project_Description}</h4>
      <div class="btn-container">
      <a href="${X.Github_link}" target="_blank"><button class="btn">Visit Github</button></a>
      <a href="" target="_blank"><button class="btn">Live preview</button></a>
      </div>
    </div>
  `
  height += 300;
  document.querySelector('.black-center-line').style.height = height + "px";
  });
  document.querySelector('.black-center-line').innerHTML = projectsHTML;

  // To again make the scroll animations available
  ProjectAnimation();
}
