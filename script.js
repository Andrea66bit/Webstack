// Define the phases
const phases = [
  "Therapy sessions with peers to talk about things each person is going through",
  "Reading for ten minutes",
  "Exercising regularly",
  "Maintaining healthy eating habits",
  "Practicing mindful meditation",
  "Maintaining a healthy sleeping schedule",
  "Socializing",
  "Pursuing hobbies",
  "Journaling",
  "Engaging in mind-stimulating activities",
  "Practicing relaxation techniques",
  "Participating in outdoor activities",
  "Attending therapy and counseling",
  "Gratitude journaling",
  "Using gratitude imagery",
  "Repeating affirmations",
  "Tracking mood changes",
  "Practicing mindful breathing",
  "Engaging in progressive muscle relaxation",
  "Applying cognitive restructuring techniques",
  "Going for meditative walks",
  "Practicing self-compassion exercises",
  "Participating in yoga",
  "Engaging in body scan meditations"
];

// Function to display phases
function displayPhases() {
  const phaseList = document.getElementById("phases");
  phaseList.innerHTML = ""; // Clear previous content
  phases.forEach((phase, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${phase}`;
    phaseList.appendChild(listItem);
  });
}

// Function to display mental health questions
function displayQuestions() {
  const questions = [
    "How do I feel right now, both physically and emotionally?",
    "What activities make me feel good about myself?",
    "How am I taking care of my physical health?",
    "What are my personal goals for mental health?",
    "What coping mechanisms do I have when I feel stressed?",
    "Do I have a supportive social network?",
    "Am I seeking professional help if needed?",
    "What am I grateful for today?",
    "How do I respond to negative thoughts or feelings?",
    "Am I relaxing and engaging in activities I enjoy?",
    "Am I getting adequate sleep, nutrition, and exercise?"
  ];

  const questionsList = document.getElementById("questions");
  questionsList.innerHTML = ""; // Clear previous content
  questions.forEach((question, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${question}`;
    questionsList.appendChild(listItem);
  });
}

// Event listener for when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Display phases and questions
  displayPhases();
  displayQuestions();
});
