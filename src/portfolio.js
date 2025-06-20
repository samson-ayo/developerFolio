/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Samson Olotu",
  title: "Hi, I'm Samson",
  subTitle: emoji("Data Scientist & AI Freelancer | Big Data | NLP | Dashboards"),
  resumeLink: "OLOTU_SAMSON_CV.pdf",// Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/samson-ayo",
  linkedin: "https://www.linkedin.com/in/samson-olotu-mbcs-b30387247/",
  gmail: "olotusamson772@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ANYTHING ANALYSIS, BIG DATA, SENTIMENT ANALYSIS AND VISUALIZATION",
  skills: [
    emoji(
      "⚡ Develop interactive Dashboard and Machine Learning Models"
    ),
    emoji(
      "⚡ Integration of third party services such as AWS and Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "visualization",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
     {
      skillName: "R",
      fontAwesomeClassname: "fas fa-registered"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Salford",
      logo: require("./assets/images/salford_logo.jpg"),
      subHeader: "Master of Science in Data Science (Distinction)",
      duration: "January 2022 - June 2023",
      desc: "Carried out a number of coursework and a research thesis on 'Exploring the Interplay between Dimensionality Reduction, Feature Selection, and Machine Learning Performance'",
      descBullets: [
        "Investigated advanced feature engineering strategies and their impact on machine learning in large datasets.",
        "Developed scalable and interpretable models applicable to healthcare and anomaly detection."
      ]
    },
    {
      schoolName: "University of Unilorin",
      logo: require("./assets/images/University-of-Ilorin-UNILORIN-Courses-and-Requirements.webp"),
      subHeader: "Bachelor of Science in Physics",
      duration: "September 2014 - October 2018",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python (pandas, numpy, matplotlib, spaCy)", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL (PostgreSQL, MySQL)",
      progressPercentage: "75%"
    },
    {
      Stack: "Power BI & Tableau",
      progressPercentage: "80%"
    },
       {
      Stack: "AWS & Azure",
      progressPercentage: "70%"
    },
       {
      Stack: "Machine Learning (Supervised & Unsupervised Learning, Sentiment Analysis, Anomaly Detection in Time Series, Data Preprocessing and Feature Engineering)",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Resources Contribution to GDP in Africa",
  projects: [
    {
      image: require("./assets/images/OIP chart.webp"),
      projectName: "Statistical Analysis and Data Visualization",
      projectDesc: "Understanding the contribution of the different natural resources to the GDP in some African countries using statistical method and dashboard",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/samson-ayo/Resources-Contribution-to-GDP-in-Africa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/download (1).png"),
      projectName: "Hotel Review Analysis",
      projectDesc: "The project involves the application of text mining and sentiment analysis to extract the sentiment from customer's feedback across hotel/resturant in India",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/samson-ayo/Hotel-Review-Sentiment-Analysis"
        }
      ]
    },
    {
      image: require("./assets/images/download 2.png"),
      projectName: "Diebetes Prediction",
      projectDesc: "In this project, we applied a Supervised learning algorithm to predict whether a patient is disbetic or not using Diabetes data from UCI repository. The Algorithm employed is Random Forest and Neural network using Keras",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/samson-ayo/Diabetes-Prediction"
        }
      ]
    },
    {
      image: require("./assets/images/download.png"),
      projectName: "Clustering Travel Interest Reviews",
      projectDesc: "Using the travel reviews dataset, we aim to divide users into clusters of similar interests using their feedback rating information about different destinations across East Asia.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/samson-ayo/Clustering-Travel-Interest-Reviews"
        }
      ]
    },
     {
      image: require("./assets/images/cpn.jpg"),
      projectName: "Child Wellbeing Monitor",
      projectDesc: "The project's purpose is to develop Child Well-Being Monitor, a reporting tool that will break down data on child poverty.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/samson-ayo/Child-Wellbeing-Monitor/tree/main"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications",

  achievementsCards: [
    {
      title: "AWS Data Analytics",
      image: require("./assets/images/image.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "AWS Certification",
          url: "https://www.credly.com/badges/12977158-8c53-481b-a7fa-cf56f0ac5bbe/print"
        },
      ]
    },
    {
      title: "Advanced SQL",
      image: require("./assets/images/OIP.jpeg"),
      imageAlt: "Udemy Action Logo",
      footerLink: [
        {
          name: "Udemy Cerification",
          url: "https://www.udemy.com/certificate/UC-640dc8ae-b394-47d9-8603-f48e066cadea/"
        }
      ]
    },

    {
      title: "Data Analysis with Python",
      image: require("./assets/images/blob.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {name: "IBM Certification", 
          url: "https://www.credly.com/badges/a128a7ff-81e5-40ee-ab5c-0e2b3cce5618/linked_in_profile"},
      ]
    },
       {
      title: "Harnessing the Power of Data with Power BI",
      image: require("./assets/images/MSFT-stacked-logo_FINAL.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {name: "Power BI Certification", 
          url: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~VL21P6RDQ3TG/CERTIFICATE_LANDING_PAGE~VL21P6RDQ3TG.jpeg"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Insights into my work, thinking, and growth.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "/blogs/From_Raw_Data_to_Insights.pdf",
      title: "From Raw Data to Insights: My Approach to Data Cleaning and Exploration",
      description:
        "How I transform raw, messy data into actionable insights using Python, Pandas, and EDA best practices.",
      image: "./data cleaning.png"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in collaborating, hiring, or discussing research? Reach out!.",
  number: "+44 7384848027",
  email_address: "olotusamson772@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};