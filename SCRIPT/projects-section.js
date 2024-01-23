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
    Project_Name: "Next Word Predictor",
    Project_Description: "Next Word Predictor Using DL ( RNN ): This project employs deep learning Recurrent Neural Networks ( RNN ) to predict the next word in a sequence of text. Enhance text generation and language modeling with advanced predictive capabilities.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Next-Word-Predictor",
    Live_link: " ",
  },
  {
    Project_Name: "Car Price Predictor Using DL",
    Project_Description: "Car Price Predictor using Deep Learning: Employs neural networks to accurately predict car prices based on mileage, brand, and year. Offers data preprocessing and model evaluation for seamless predictions. Built with Python, TensorFlow, Keras, NumPy, and Pandas.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Car-Price-Predictor-Using-DL",
    Live_link: " ",
  },
  {
    Project_Name: "Customer Churn Prediction Using DL",
    Project_Description: "Customer Churn Prediction Using DL: This project focuses on using deep learning techniques to predict customer churn. By analyzing patterns and trends, the goal is to help businesses proactively retain customers and minimize churn.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Customer-Churn-Prediction-Using-DL",
    Live_link: " ",
  },
  {
    Project_Name: "Cat VS Dog Classifier",
    Project_Description: "Deep learning project using CNN to classify cat and dog images. Implemented in TensorFlow and Keras, trained on a labeled dataset. Includes model code and training data.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Cat-VS-Dog-Classifier",
    Live_link: " ",
  },
  {
    Project_Name: "Handwritten Digit Classifier using ANN",
    Project_Description: "Handwritten Digit Classifier using Artificial Neural Networks (ANN), Implemented in Python with TensorFlow and Keras. Includes model code, training data, and evaluation scripts for accurate digit recognition.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Handwritten-Digit-Classifier-using-ANN",
    Live_link: " ",
  },
  {
    Project_Name: "Admission Predictor",
    Project_Description: "Admission Predictor using Deep Learning: Predicts admission outcomes using neural networks. Features data preprocessing, model evaluation, and Hyperparameter Tuning for the best results.",
    Github_link: "https://github.com/AI-ML-DL-EXPERT/Admission-Predictor",
    Live_link: " ",
  },
  
  
];


Render_Project_section(AIprojects);

function Render_Project_section(projects){
  let projectsHTML = '';
  let direction = 0;
  let direct = "left-project";
  let direct_Animate = "animate-left-project";
  let height = 0;

  if(projects == AIprojects){
    document.querySelector('.AI-project-btn').style.color = 'var(--Button)';
    document.querySelector('.ML-project-btn').style.color = 'var(--secondary-color)';
  } else if(projects == MLprojects){
    document.querySelector('.ML-project-btn').style.color = 'var(--Button)';
    document.querySelector('.AI-project-btn').style.color = 'var(--secondary-color)';
  }

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
