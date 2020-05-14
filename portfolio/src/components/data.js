export const content = {
  person: {
    lastname: "Xiao",
    firstname: "Lena",
    email: "lena.sj.xiao@gmail.com",
    bio: "I am experienced in web development and machine learning frameworks."
  },
  skills: {
    languages: { Java: 80, Python: 75, JavaScript: 85 },
    frameworks: { "React/Redux": 80, Angular: 60, PyTorch: 60 },
    database: { MySQL: 80 },
    other: { "machine learning": 70 }
  },
  topics: ["summary", "education", "skills", "experience", "interest"],
  education: [
    {
      university: "University Of Washington",
      start: "September 2017",
      end: "July 2019",
      degree: "Master of Science",
      major: "Chemical Engineering - Data Science Track",
      gpa: "3.76 / 4.0",
      courses: [
        "Java Programming",
        "Algorithm & Analysis",
        "Web Programming",
        "Software Engineering for Data Scientists",
        "Introduction to Artificial Intelligence",
        "Machine Learning",
        "Optimization"
      ]
    },
    {
      university: "Tianjin University",
      degree: "Bachelor of Science",
      start: "September 2013",
      end: "July 2017",
      major: "Biological Engineering"
    }
  ],
  experience: [
    {
      project: "Percolation Visulization App",
      role: "Web Developer",
      start: "July 2019",
      end: "October 2019",
      location: "Seattle, WA",
      content: [
        "Developed an Angular application for visualizing percolation process",
        "Implemented weighted union-find algorithm with path compression to handle interactions and delth first search to optimize the drawing process."
      ]
    },
    {
      project: "Natural Language Processing",
      role: "Researcher",
      start: "December 2018",
      end: "June 2019",
      location: "Seattle, WA",
      content: [
        "Constructed an attetion-based recurrent neural network system using PyTorch and TensorFlow API to analyze text-based protein sequence.",
        "Completed training process over multiple GPU nodes in AWS and Hyak platform."
      ]
    },
    {
      project: "Online Guessing Game Application",
      role: "Full-stack Developer",
      start: "Octorber 2018",
      end: "November 2018",
      location: "Seattle, WA",
      content: [
        "Developed an RESTFul Gussing Game App.",
        "Designed a relational database to process game information using MySQL.",
        "Built a PHP web service to handle HTTP requests.",
        "Implemented non-trivial DOM objects and event handlers to add interactive features to App using JavaScript."
      ]
    },
    {
      project: "Toxicity Assessment Web App",
      role: "Developer & Team Leader",
      start: "March 2018",
      end: "July 2018",
      location: "Seattle, WA",
      content: [
        "Served as the team leader of a five-persion group to collaborate with Pacific Northwest National Laboratory in designing neural network systems that successfully predict toxicity of over 5,000 chemicals.",
        "Used Keras famework to construct a multilayer perceptron (MLP) prototype and wrote unit test using Python unit test framework.",
        "Developed a web application using Plotly.js where user can obtain the toxicity estimation from pretrained MLP model and visulized training process."
      ]
    }
  ],
  projects: [
    {
      name: "Portfolio",
      year: 2020,
      category: "web",
      description: [
        "Created a React page to present the works of my own.",
        "Achieved web animation and page effects using React Hook system.",
        "Structured route flow to navigate through different components."
      ],
      link: "https://github.com/Lenaxiao/Portfolio"
    },
    {
      name: "Streaming App",
      year: 2020,
      category: "web",
      description: [
        "Built a REST-based streaming app that allows user to manipulate data in their account.",
        "Setup a RTMP server and succesfully streaming video from OBS.",
        "Connected React to Redux using redux-thunk middle ware.",
        "Handled authentication and authorizaiton using Google oAuth."
      ],
      link: "https://github.com/Lenaxiao/Streaming-Media"
    },
    {
      name: "Percolation Visulization App",
      year: 2019,
      category: "web",
      description: [
        "Developed an Angular application for visualizing percolation process",
        "Implemented weighted union-find algorithm with path compression to handle interactions and delth first search to optimize the drawing process."
      ],
      link: "https://github.com/Lenaxiao"
    },
    {
      name: "Sliding Puzzle Game",
      category: "algorithm",
      year: "2019",
      description: [
        "Built a sliding puzzle game using Java",
        "Implemented A* algorithm based on different priority functions."
      ],
      link: "https://github.com/Lenaxiao"
    },
    {
      name: "Natural Language Processing",
      year: "2019",
      description: [
        "Constructed an attetion-based recurrent neural network system using PyTorch and TensorFlow API to analyze text-based protein sequence.",
        "Completed training process over multiple GPU nodes in AWS and Hyak platform."
      ],
      link: "https://github.com/Lenaxiao/thermalizer"
    }
  ]
};
