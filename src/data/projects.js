export const projects = [
  {
    id: 1,
    title: "Customer Analytics Platform",
    description:
      "Enterprise-grade customer analytics platform featuring real-time event tracking, behavioral cohort analysis, and interactive dashboards. Built with Java Spring Boot microservices and React frontend, processing millions of events daily via Kafka streams. Includes ML-powered churn prediction and AWS cloud deployment.",
    tech: ["Java", "Spring Boot", "React", "Kafka", "MongoDB", "AWS", "Docker", "Power BI", "Python"],
    github: "https://github.com/hemanthnagalla2001-bit/Customer-analytics-platform",
    live: "https://customer-analytics-platform-delta.vercel.app",
    categories: ["Full Stack", "Cloud", "Backend"],
    featured: true,
  },
  {
    id: 2,
    title: "Loan Approval Decision Engine",
    description:
      "Automated loan approval system using rule-based decision trees and credit risk scoring algorithms. Processes applications in under 200ms with 94% accuracy. Built with Java Spring Boot REST APIs, Oracle Database, and containerized with Docker for scalable deployment.",
    tech: ["Java", "Spring Boot", "Oracle DB", "REST APIs", "Docker", "JUnit", "Maven"],
    github: "https://github.com/hemanthnagalla2001-bit/Loan-approval-decision-engine",
    live: null,
    categories: ["Full Stack", "Backend"],
    featured: true,
  },
  {
    id: 3,
    title: "Construction Reporting Platform",
    description:
      "Data-driven reporting platform for construction project management. Aggregates site data, generates automated progress reports, and visualizes KPIs through interactive dashboards. Built with Python/Pandas for data pipelines and JavaScript for dynamic frontend reporting.",
    tech: ["Python", "Pandas", "SQL", "JavaScript", "Power BI", "Excel", "Flask"],
    github: "https://github.com/hemanthnagalla2001-bit/Construction-Reporting-platform",
    live: "https://dashboard-neon-sigma-79.vercel.app",
    categories: ["Analytics", "Dashboard", "Full Stack"],
    featured: true,
  },
  {
    id: 4,
    title: "Location-Based Store Finder",
    description:
      "Geospatial store finder application with interactive Leaflet.js maps, proximity-based search, and real-time store inventory data. Integrates QGIS spatial analysis with a Python backend and responsive frontend, enabling users to discover nearby stores with route optimization.",
    tech: ["JavaScript", "Python", "SQL", "QGIS", "Leaflet.js", "HTML", "CSS", "Flask"],
    github: "https://github.com/hemanthnagalla2001-bit/Location-based-store-finder",
    live: "https://store-finder-lvly4cr3q-hemanthnagalla2001-bits-projects.vercel.app",
    categories: ["Full Stack", "Analytics"],
    featured: false,
  },
  {
    id: 5,
    title: "Retail Sales Analytics Dashboard",
    description:
      "Comprehensive retail analytics dashboard with sales forecasting, inventory optimization, and customer segmentation. Features interactive visualizations, automated ETL pipelines with Python/Pandas, and a Flask web interface for real-time KPI monitoring.",
    tech: ["Python", "Pandas", "SQL", "Power BI", "Flask", "Excel", "Matplotlib"],
    github: "https://github.com/hemanthnagalla2001-bit/Retail-Sales-Analytics-Dashboard",
    live: null,
    categories: ["Analytics", "Dashboard"],
    featured: false,
  },
  {
    id: 6,
    title: "AI Resume Screening Assistant",
    description:
      "Intelligent resume screening tool powered by NLP and ML algorithms. Automatically parses resumes, matches candidate profiles to job descriptions with semantic similarity scoring, and ranks applicants. Reduces screening time by 80% using Python and scikit-learn.",
    tech: ["Python", "NLP", "scikit-learn", "Flask", "SQLite", "pdfplumber", "pandas"],
    github: "https://github.com/hemanthnagalla2001-bit/ai-resume-screening-assistant",
    live: null,
    categories: ["Full Stack", "Backend", "Analytics"],
    featured: true,
  },
  {
    id: 7,
    title: "Personal Finance & Investment Tracker",
    description:
      "Full-featured personal finance management app with expense categorization, budget tracking, portfolio performance analytics, and investment goal projections. Built with React frontend and comprehensive charting for financial data visualization.",
    tech: ["React", "JavaScript", "Chart.js", "REST APIs", "CSS", "HTML", "LocalStorage"],
    github: "https://github.com/hemanthnagalla2001-bit/personal-finance-investment-tracker",
    live: "https://personal-finance-tracker-six-xi.vercel.app",
    categories: ["Full Stack", "Backend"],
    featured: false,
  },
  {
    id: 8,
    title: "Real-Time Crypto Price Alert System",
    description:
      "Cryptocurrency price monitoring system with configurable alerts, WebSocket real-time feeds, and portfolio tracking. Integrates with multiple exchange APIs, supports custom alert rules, and sends instant notifications. Built with Java Spring Boot and Kafka for event streaming.",
    tech: ["Java", "Spring Boot", "Kafka", "WebSocket", "React", "MongoDB", "AWS Lambda"],
    github: "https://github.com/hemanthnagalla2001-bit/real-time-crypto-price-alert-system",
    live: null,
    categories: ["Full Stack", "Cloud", "Backend"],
    featured: true,
  },
  {
    id: 9,
    title: "Multiplayer Quiz Battle Platform",
    description:
      "Real-time multiplayer quiz platform supporting up to 100 concurrent players. Features live leaderboards, custom quiz creation, time-based scoring, and spectator mode. Built with WebSocket for real-time communication, React for the interactive UI, and Node.js/Express backend.",
    tech: ["React", "Node.js", "WebSocket", "MongoDB", "Express", "JavaScript", "CSS"],
    github: "https://github.com/hemanthnagalla2001-bit/multiplayer-quiz-battle-platform",
    live: "https://quiz-battle-platform.vercel.app",
    categories: ["Full Stack", "Backend"],
    featured: false,
  },
];

export const projectFilters = ["All", "Full Stack", "Backend", "Analytics", "Dashboard", "Cloud", "Live Projects"];
