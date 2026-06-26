// Single source of truth for portfolio content.
// Edit values here; pages consume the structured data.

export type ProjectCategory =
  | "Applied AI"
  | "Data and Analytics"
  | "NLP"
  | "Time Series"
  | "Computer Vision"
  | "Research"
  | "Software and Experimentation";

export type ProjectLabel =
  | "MSc dissertation"
  | "Published research"
  | "Academic project"
  | "Technical case study"
  | "Software internship"
  | "Product concept";

export interface CaseStudySection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  category: string;
  categories: ProjectCategory[];
  label: ProjectLabel;
  year?: string;
  context?: string;
  technologies: string[];
  evidence: string[];
  buttons?: Array<{ label: string; href?: string; type?: "primary" | "ghost" }>;
  externalLinks?: Array<{ label: string; href: string }>;
  coverFallback: string;
  // Optional full case study (only the major ones have all sections)
  atAGlance?: string[];
  problem?: string[];
  whyItMatters?: string[];
  myRole?: string[];
  data?: { paragraphs?: string[]; bullets?: string[] };
  technicalApproach?: { paragraphs?: string[]; bullets?: string[] };
  workflow?: string;
  models?: { groups: Array<{ heading: string; items: string[] }> };
  evaluation?: string[];
  results?: string[];
  explainability?: { paragraphs?: string[]; bullets?: string[] };
  responsibleEvaluation?: string[];
  businessRelevance?: string[];
  limitations?: string[];
  whatILearned?: string[];
  futureImprovement?: string[];
  extraSections?: CaseStudySection[];
  imagePlaceholders?: Array<{ path: string; label: string }>;
  featured?: number; // 1..4 ranking
}

export const profile = {
  name: "Akmam Hasan",
  shortTitle: "Applied AI & Data Professional",
  location: "London, United Kingdom",
  email: "akmamhasan01@gmail.com",
  linkedin: "https://linkedin.com/in/akmamhasan",
  github: "https://github.com/AkmamHasan",
  website: "https://akmam.info",
  cvPath: "/documents/Akmam_Hasan_CV.pdf",
  headshotPath: "/images/akmam-hasan-headshot.jpg",
  availabilityLabel: "Based in London · Open to AI, data, analytics and research opportunities",
  heroHeadline: "Applied AI that makes complex decisions easier to understand.",
  heroSupport:
    "I'm Akmam Hasan, an Applied AI and data professional with an MSc in Applied Artificial Intelligence. I build explainable machine-learning, NLP and data solutions across risk analytics, scientific forecasting and operational decision support.",
  heroSupport2:
    "My work combines careful data preparation, model comparison, explainability and clear communication—so that technical results can support practical human decisions.",
  techLine:
    "Python · SQL · Machine Learning · NLP · Explainable AI · Data Visualisation",
};

export const metrics = [
  { value: "542", label: "Companies in multimodal ESG research" },
  { value: "≈0.71", label: "Weighted F1 in a multimodal classification experiment" },
  { value: "98%", label: "Anomaly-detection accuracy in the project setting" },
  { value: "1", label: "Peer-reviewed Springer publication" },
];

export const processStages = [
  { stage: "Frame", body: "Define the real problem, affected users and what a useful outcome would look like." },
  { stage: "Prepare", body: "Clean and validate data while checking missingness, inconsistent formats, class imbalance and leakage risks." },
  { stage: "Compare", body: "Establish baselines, test appropriate methods and choose metrics that reflect the real use case." },
  { stage: "Explain", body: "Interpret outputs, limitations and uncertainty so that results remain understandable to technical and non-technical audiences." },
  { stage: "Deliver", body: "Translate the proof of concept into dashboards, workflows, monitoring needs and practical next steps." },
];

export const capabilities = [
  {
    group: "Machine learning",
    items: ["Regression and classification", "Feature engineering", "Model benchmarking", "Hyperparameter tuning", "Validation and error analysis", "Class-imbalance handling", "Leakage detection"],
  },
  {
    group: "NLP and deep learning",
    items: ["BERT and ESG-BERT", "Tokenisation", "CLS embeddings", "Text classification", "Early multimodal fusion", "LSTM", "GRU", "ConvLSTM", "CNN workflows"],
  },
  {
    group: "Explainability and responsible AI",
    items: ["SHAP", "Feature attribution", "Transformer attention visualisation", "Interpretable model reporting", "Human oversight", "Limitation and validity analysis"],
  },
  {
    group: "Data and analytics",
    items: ["Python", "SQL and PostgreSQL", "Pandas", "NumPy", "scikit-learn", "LightGBM", "Excel", "Tableau", "Grafana", "Retool"],
  },
  {
    group: "Delivery and systems",
    items: ["Git and GitHub", "Jupyter and Google Colab", "Ubuntu", "OpenStack", "Node-RED", "InfluxDB", "MATLAB and Simulink", "APIs", "Requirements analysis", "SRS documentation", "Stakeholder communication"],
  },
];

export const experience = [
  {
    role: "Customer Advisor",
    org: "B&Q",
    location: "London, United Kingdom",
    dates: "April 2024 – Present",
    summary:
      "Work directly with customers and store teams to solve product, order, collection, return and service issues in a fast-paced retail environment. The role has strengthened practical problem-solving, service recovery, operational awareness and communication with non-technical audiences.",
  },
  {
    role: "Software Engineer Intern",
    org: "Echologyx Ltd",
    location: "",
    dates: "July 2023 – October 2023",
    summary:
      "Supported website optimisation and A/B-testing activities by implementing frontend variants with JavaScript, HTML and CSS, checking quality before release and collaborating with technical and product stakeholders.",
  },
  {
    role: "Requirement Analyst",
    org: "Generic Solutions",
    location: "Bangladesh",
    dates: "April 2021 – May 2022",
    summary:
      "Gathered stakeholder requirements, mapped workflows, prepared software-requirement documentation and translated business needs into structured technical tasks.",
  },
  {
    role: "Project Management Intern",
    org: "Youth Opportunities",
    location: "",
    dates: "June 2022 – February 2023",
    summary:
      "Coordinated webinars, outreach, recruitment support, communication and follow-up activities across remote stakeholders.",
  },
];

export const education = [
  {
    degree: "MSc Applied Artificial Intelligence",
    institution: "London South Bank University",
    location: "London, United Kingdom",
    period: "2023–2025",
    result: "Merit",
    areas: ["Machine Learning", "Deep Learning", "Python Programming for AI and Visualisation", "Research Methods", "Industrial Cyber-Physical Systems", "Future Internet Technologies"],
    dissertation:
      "Multimodal ESG risk prediction using structured ESG indicators, corporate and news text, transformer representations, model comparison and explainability.",
  },
  {
    degree: "BSc Computer Science and Engineering",
    institution: "North South University",
    location: "Bangladesh",
    period: "Graduated 2023",
    result: "CGPA 3.61/4.00 · Distinction",
    areas: ["Specialisation: Artificial Intelligence"],
    dissertation:
      "AI-focused thesis research led to a Springer-published chapter on deep-learning-based cyclone track forecasting.",
  },
];

export const credentials = [
  {
    title: "Prompt Engineering for Everyone",
    issuer: "Cognitive Class · Powered by IBM Developer Skills Network",
    date: "June 2026",
    verifyUrl: "https://courses.cognitiveclass.ai/certificates/6a734031976641f5bd6397563db90143",
    filePath: "/documents/prompt-engineering-certificate.pdf",
  },
];

export const publication = {
  citation:
    'Majid, R., Hasan, A., Mostarin, S., Alam, K.R., & Rahman, R.M. (2024). "A Deep Learning-Based Study for Cyclone Track Forecasting: Comparative Analysis Using Historical Data from the Bay of Bengal." In Networking and Parallel/Distributed Computing Systems, Studies in Computational Intelligence, Vol. 1125. Springer, Cham.',
  doi: "10.1007/978-3-031-53274-0_1",
  doiUrl: "https://doi.org/10.1007/978-3-031-53274-0_1",
  summary:
    "The study compared recurrent deep-learning architectures for predicting cyclone trajectories using historical Bay of Bengal data. Performance was evaluated using both statistical metrics and geographical distance error so that model behaviour could be interpreted in a practical forecasting context.",
};

export const projects: Project[] = [
  // ---------------- LenseESG ----------------
  {
    slug: "lenseesg",
    title: "LenseESG — Explainable Multimodal ESG Risk Intelligence",
    subtitle:
      "Combining structured risk indicators and corporate text to explore more interpretable company-level ESG risk assessment.",
    shortDescription:
      "An end-to-end research pipeline combining structured ESG indicators, company disclosures and news-derived signals to create more interpretable company-risk assessments.",
    category: "Multimodal AI · NLP · Explainability",
    categories: ["Applied AI", "NLP", "Research"],
    label: "MSc dissertation",
    year: "2025",
    context: "MSc Dissertation · London South Bank University · 2025",
    technologies: ["Python", "Pandas", "scikit-learn", "LightGBM", "BERT", "ESG-BERT", "SHAP"],
    evidence: [
      "542 companies",
      "Structured, text-only and multimodal experiments",
      "Approximately 0.71 weighted F1",
      "SHAP and transformer-attention analysis",
    ],
    coverFallback: "LenseESG architecture and explainability visual",
    featured: 1,
    atAGlance: [
      "542 companies",
      "Structured and unstructured data",
      "Regression and classification experiments",
      "Approximately 0.71 weighted F1 in multimodal classification",
      "SHAP and attention-based interpretation",
    ],
    problem: [
      "ESG ratings can differ significantly between providers because different organisations use different sources, definitions, weightings and methodologies. A company may therefore receive a risk score without decision-makers being able to see clearly which evidence drove it.",
      "This project explored whether structured environmental, social, governance and controversy indicators could be combined with company disclosures and news-derived text to produce a more informative and explainable risk-assessment workflow.",
    ],
    whyItMatters: [
      "Financial, sustainability and risk teams need more than a prediction. They need to understand the evidence, assumptions and limitations behind an assessment before using it in a decision.",
    ],
    data: {
      paragraphs: [
        "The project used a final modelling dataset covering 542 companies. The dataset is not representative of every global company; it was assembled for research and benchmarking purposes.",
      ],
      bullets: [
        "Environmental risk indicators",
        "Social risk indicators",
        "Governance risk indicators",
        "Controversy information",
        "Corporate or SEC-style textual content",
        "NewsAPI-derived ESG signals",
        "Additional company-level information where available",
      ],
    },
    workflow:
      "Data collection → cleaning and validation → structured modelling → text modelling → multimodal fusion → evaluation → explainability",
    technicalApproach: {
      bullets: [
        "Missing-data handling",
        "Feature preparation",
        "Model benchmarking",
        "Class-imbalance handling",
        "Leakage checking",
        "Train/test evaluation",
        "Structured versus text-only versus fusion comparison",
      ],
    },
    models: {
      groups: [
        {
          heading: "Structured models",
          items: ["Linear Regression", "Ridge", "Lasso", "k-nearest neighbours", "Support Vector Regression", "Random Forest", "Gradient Boosting", "LightGBM"],
        },
        {
          heading: "Text workflow",
          items: ["BERT", "ESG-BERT", "Tokenisation", "Fine-tuning experiments", "CLS embedding extraction", "Text-only classification"],
        },
        {
          heading: "Multimodal",
          items: ["Combining numeric ESG variables with transformer-derived text representations", "Early-fusion experimentation", "Comparison against weaker text-only results"],
        },
      ],
    },
    results: [
      "The multimodal classification experiment achieved approximately 0.71 weighted F1 in the project evaluation and performed better than the weaker text-only approach.",
      "Structured models also provided strong regression baselines, while SHAP and transformer-attention analysis helped identify influential risk variables and relevant textual signals.",
    ],
    explainability: {
      bullets: [
        "SHAP feature attribution",
        "Feature-level risk drivers",
        "Attention heat-map analysis",
        "Translating model behaviour for non-technical stakeholders",
        "Human oversight",
      ],
    },
    responsibleEvaluation: [
      "During experimentation, leakage-prone configurations involving total ESG risk as an input were identified and corrected. This reinforced the importance of distinguishing genuinely predictive evidence from variables that reveal or closely reproduce the target.",
    ],
    limitations: [
      "ESG labels are provider-dependent.",
      "Company disclosures may contain selective or promotional language.",
      "News coverage is uneven.",
      "A 542-company dataset limits generalisation.",
      "Attention is not a complete explanation of model reasoning.",
      "Provider disagreement cannot be solved by one model.",
      "Further temporal and external validation would be required before practical use.",
    ],
    whatILearned: [
      "Data definitions can matter as much as model choice.",
      "A higher metric does not automatically produce a trustworthy system.",
      "Multimodal systems require careful validation.",
      "Leakage checks are essential.",
      "Explainability must be connected to user decisions.",
      "Human review remains necessary in risk-sensitive work.",
    ],
    futureImprovement: [
      "Expand the company and time coverage.",
      "Improve text quality and document segmentation.",
      "Add evidence retrieval.",
      "Compare additional domain-specific language models.",
      "Evaluate calibration and uncertainty.",
      "Conduct user testing with ESG or risk professionals.",
      "Build a transparent analyst-facing dashboard.",
    ],
    imagePlaceholders: [
      { path: "/images/projects/lenseesg-architecture.png", label: "Pipeline architecture diagram" },
      { path: "/images/projects/lenseesg-model-comparison.png", label: "Model comparison chart" },
      { path: "/images/projects/lenseesg-shap.png", label: "SHAP feature attribution plot" },
      { path: "/images/projects/lenseesg-attention.png", label: "Transformer attention heatmap" },
      { path: "/images/projects/lenseesg-dashboard.png", label: "Analyst-facing dashboard concept" },
    ],
  },

  // ---------------- Cyclone ----------------
  {
    slug: "cyclone-track-forecasting",
    title: "Deep Learning for Cyclone Track Forecasting",
    subtitle:
      "Comparing recurrent deep-learning architectures for sequential cyclone trajectory prediction using historical Bay of Bengal data.",
    shortDescription:
      "A Springer-published comparative study of LSTM, GRU and ConvLSTM models for forecasting cyclone trajectories from historical Bay of Bengal data.",
    category: "Scientific ML · Time Series · Published Research",
    categories: ["Time Series", "Research"],
    label: "Published research",
    year: "2024",
    context: "BSc Research · North South University · Springer publication, 2024",
    technologies: ["Python", "LSTM", "GRU", "ConvLSTM", "Time-series evaluation"],
    evidence: ["Peer-reviewed Springer chapter", "Sequential trajectory modelling", "Multiple error measures", "Practical disaster-risk relevance"],
    externalLinks: [{ label: "View Springer publication", href: "https://doi.org/10.1007/978-3-031-53274-0_1" }],
    coverFallback: "Predicted and observed cyclone trajectories",
    featured: 2,
    atAGlance: [
      "Peer-reviewed Springer publication",
      "Historical Bay of Bengal cyclone data",
      "LSTM, GRU and ConvLSTM",
      "Sequential latitude and longitude prediction",
      "Statistical and kilometre-based evaluation",
    ],
    problem: [
      "Cyclone-track forecasting is important for disaster preparation, but storm movement is sequential, nonlinear and affected by complex environmental behaviour. The research examined how different deep-learning architectures performed when learning trajectory patterns from historical cyclone observations.",
    ],
    data: {
      bullets: ["Latitude", "Longitude", "Maximum wind speed", "Radius information", "Time from initial observation", "Storm-year information", "Sequential trajectory records"],
    },
    workflow:
      "Historical trajectory data → sequential preprocessing → train/test separation → recurrent model training → next-position prediction → statistical and geographical evaluation",
    models: {
      groups: [{ heading: "Architectures compared", items: ["LSTM", "GRU", "ConvLSTM"] }],
    },
    evaluation: ["MSE", "MAE", "RMSE", "R²", "Average distance error in kilometres"],
    myRole: [
      "Akmam contributed to problem formulation, experimentation, comparative analysis, result interpretation and publication-ready technical communication as part of the research team.",
    ],
    results: [
      "The research demonstrated that recurrent neural architectures could learn useful trajectory patterns from historical cyclone sequences, while performance varied by architecture and storm context. Using kilometre-based distance error made the results more understandable than relying only on abstract loss values.",
    ],
    businessRelevance: [
      "The project shows how scientific machine learning can support analysis of physical and geospatial phenomena. The underlying skills also transfer to operational forecasting, predictive maintenance, movement modelling and other sequential prediction problems.",
    ],
    limitations: [
      "Historical-data limitations",
      "Rare and changing storm behaviour",
      "Limited atmospheric variables",
      "Prediction uncertainty",
      "Generalisation across regions",
      "Deep-learning predictions should complement rather than replace meteorological systems",
    ],
    imagePlaceholders: [
      { path: "/images/projects/cyclone-track-map.png", label: "Cyclone track map" },
      { path: "/images/projects/cyclone-model-comparison.png", label: "Model comparison chart" },
      { path: "/images/projects/cyclone-workflow.png", label: "Workflow diagram" },
      { path: "/images/projects/cyclone-publication.png", label: "Publication preview" },
    ],
  },

  // ---------------- Anomaly Detection ----------------
  {
    slug: "edge-anomaly-detection",
    title: "Streaming Anomaly Detection for Cyber-Physical Systems",
    subtitle:
      "Connecting simulated sensor data, machine-learning classification, time-series storage and live operational visualisation.",
    shortDescription:
      "A complete monitoring workflow that connected simulated sensor data, anomaly-detection models, time-series storage and live dashboard reporting.",
    category: "Time Series · Monitoring · Edge Analytics",
    categories: ["Time Series", "Data and Analytics", "Applied AI"],
    label: "Academic project",
    year: "2024",
    context: "MSc Industrial Cyber-Physical Systems Project",
    technologies: ["MATLAB", "Simulink", "Node-RED", "InfluxDB", "Grafana", "Random Forest", "SVM", "k-NN", "Gradient Boosting"],
    evidence: ["98% project accuracy", "Four-model comparison", "Streaming-data workflow", "Operational Grafana dashboard"],
    coverFallback: "Grafana anomaly-monitoring dashboard",
    featured: 3,
    atAGlance: [
      "98% classification accuracy in the project setting",
      "Simulated streaming time-series data",
      "Four-model comparison",
      "End-to-end monitoring workflow",
      "Grafana dashboard",
    ],
    problem: [
      "Cyber-physical and industrial systems produce continuous sensor data. Abnormal behaviour needs to be detected and presented quickly enough for operators to understand what is happening and decide whether intervention is necessary.",
    ],
    workflow:
      "MATLAB/Simulink data generation → Node-RED data flow → InfluxDB time-series storage → model-based anomaly classification → Grafana visualisation",
    models: {
      groups: [{ heading: "Models compared", items: ["Random Forest", "Support Vector Machine", "k-nearest neighbours", "Gradient Boosting"] }],
    },
    results: [
      "The best-performing setup achieved 98% classification accuracy in the academic project setting. More importantly, the work connected model output to an operational monitoring interface rather than leaving results inside a notebook.",
    ],
    explainability: {
      bullets: ["Sensor trends", "Classification status", "Anomaly indicators", "Time-based monitoring", "Operational visibility"],
    },
    limitations: [
      "Simulated rather than live industrial data",
      "Academic test environment",
      "No long-term drift analysis",
      "No production alerting or fail-safe design",
      "Accuracy alone does not capture false-alarm cost",
      "Industrial deployment would require stronger security, latency and reliability testing",
    ],
    futureImprovement: [
      "Add precision, recall and cost-sensitive alert evaluation",
      "Evaluate concept drift",
      "Test streaming latency",
      "Add operator feedback",
      "Use real equipment data",
      "Implement alert thresholds and audit logs",
    ],
    imagePlaceholders: [
      { path: "/images/projects/anomaly-pipeline.png", label: "End-to-end pipeline diagram" },
      { path: "/images/projects/anomaly-grafana.png", label: "Grafana dashboard view" },
      { path: "/images/projects/anomaly-model-results.png", label: "Model comparison chart" },
    ],
  },

  // ---------------- Data Reconciliation ----------------
  {
    slug: "data-reconciliation-dashboard",
    title: "Data Reconciliation and Operations Monitoring Dashboard",
    subtitle:
      "A PostgreSQL and Retool workflow for reconciling operational records, identifying missing items and presenting an actionable exception queue.",
    shortDescription:
      "A sanitised operational analytics case study that reconciled records across two source systems, identified missing encounters and turned exceptions into an actionable dashboard.",
    category: "SQL · PostgreSQL · Retool · Data Operations",
    categories: ["Data and Analytics"],
    label: "Technical case study",
    year: "2026",
    context: "Data Operations Technical Case Study · 2026",
    technologies: ["PostgreSQL", "SQL", "Retool", "Data cleaning", "Reconciliation", "KPI reporting"],
    evidence: ["25,956 source rows", "6,612 valid encounters", "6,330 matched", "282 missing", "95.74% import rate"],
    coverFallback: "Sanitised reconciliation dashboard",
    featured: 4,
    atAGlance: [
      "25,956 source procedure rows",
      "6,612 valid grouped encounters",
      "6,330 matched/imported encounters",
      "282 missing encounters",
      "95.74% import rate",
      "Searchable exception worklist",
    ],
    problem: [
      "Two operational data sources represented the same business events differently. The task was to identify which valid source encounters had not reached the imported system, investigate evidence for likely causes and present the findings in a dashboard that an operations team could use.",
    ],
    data: {
      bullets: [
        "The source file was procedure-level.",
        "One encounter could contain multiple procedure rows.",
        "Names contained formatting variation.",
        "Dates appeared in multiple formats.",
        "The imported source contained duplicate encounter keys.",
        "A valid encounter key required patient, date and rendering provider.",
        "Invalid records needed to be separated from true missing encounters.",
      ],
    },
    workflow:
      "Clean fields → standardise dates → create matching keys → validate rows → group procedures into encounters → deduplicate imported keys → left join sources → generate evidence flags → assign categories → serve dashboard queries",
    technicalApproach: {
      paragraphs: [
        "A reusable PostgreSQL view powered the dashboard, separating cleaning, validation and reconciliation logic so KPI and chart queries could read from a consistent surface.",
      ],
      bullets: ["btrim", "lower", "regexp_replace", "Date parsing", "GROUP BY", "string_agg", "COUNT DISTINCT", "LEFT JOIN", "Evidence flags", "Separate KPI and chart queries"],
    },
    explainability: {
      bullets: [
        "Total encounter KPI",
        "Imported/matched KPI",
        "Missing KPI",
        "Import-rate KPI",
        "Root-cause or evidence-category chart",
        "Provider-level comparison",
        "Monthly trend",
        "Searchable 282-row exception table",
        "Data-quality indicators",
      ],
    },
    results: [
      "The pipeline converted 25,956 procedure-level rows into 6,612 valid encounters. Of those, 6,330 matched the imported data and 282 were missing, producing a 95.74% import rate.",
      "The analysis found strong code-pathway evidence, including 203 missing encounters containing a NORCM marker and 205 containing at least one non-standard code marker. These were treated as evidence-based hypotheses rather than confirmed technical causes.",
    ],
    responsibleEvaluation: [
      "SQL-layer row-count checks",
      "Category totals reconciled to 282",
      "Provider totals reconciled to 6,612",
      "Monthly totals reconciled to 6,612",
      "First and last dates checked",
      "Dashboard table checked against query output",
    ],
    futureImprovement: [
      "Formalise code eligibility and mapping rules",
      "Add pre-import validation",
      "Create a governed exception queue",
      "Retain detailed rejection logs",
      "Run automated daily reconciliation",
      "Add ownership and retry status",
      "Add alert thresholds",
      "Mask sensitive information",
      "Use role-based access",
    ],
    limitations: [
      "No import/rejection logs",
      "No financial or claim-status information",
      "No proof of final production root cause",
      "Associations should not be presented as confirmed causality",
      "Public portfolio version must remain sanitised",
    ],
    extraSections: [
      {
        heading: "Confidentiality",
        paragraphs: [
          "The public case study uses sanitised visuals and does not expose patient information, assessment files, private records or confidential source data.",
        ],
      },
    ],
    imagePlaceholders: [
      { path: "/images/projects/reconciliation-overview.png", label: "Dashboard overview" },
      { path: "/images/projects/reconciliation-kpis.png", label: "KPI tiles" },
      { path: "/images/projects/reconciliation-chart.png", label: "Evidence-category chart" },
      { path: "/images/projects/reconciliation-table-sanitised.png", label: "Sanitised exception table" },
      { path: "/images/projects/reconciliation-sql-workflow.png", label: "SQL workflow diagram" },
    ],
  },

  // ---------------- Supporting projects ----------------
  {
    slug: "bert-question-classification",
    title: "Transformer-Based Stack Overflow Question Classification",
    shortDescription:
      "A BERT-based workflow for categorising unstructured technical questions to support routing, search and knowledge management.",
    category: "NLP Academic Project",
    categories: ["NLP", "Applied AI"],
    label: "Academic project",
    context: "NLP Academic Project",
    technologies: ["Python", "BERT", "NLP", "Tokenisation", "Transformers", "Text classification"],
    evidence: ["Transformer tokenisation and BERT classification", "Class-level evaluation", "Practical routing interpretation"],
    coverFallback: "Question classification workflow",
    problem: [
      "Technical support platforms receive large volumes of unstructured questions. Automatically categorising those questions can support routing, search and knowledge management.",
    ],
    technicalApproach: {
      bullets: [
        "Stack Overflow question text",
        "Text cleaning and preprocessing",
        "Transformer tokenisation",
        "BERT-based classification",
        "Class-level evaluation",
        "Practical routing interpretation",
      ],
    },
    businessRelevance: [
      "The workflow demonstrates how unstructured enquiries can be routed to relevant teams, topics or knowledge resources.",
    ],
    limitations: ["Domain-specific labels", "Class imbalance", "Text length and ambiguity", "Academic rather than production deployment"],
    imagePlaceholders: [{ path: "/images/projects/bert-question-classification.png", label: "BERT classification workflow" }],
  },
  {
    slug: "spam-classification-cloud",
    title: "Spam SMS Classification and Cloud Deployment",
    shortDescription:
      "A text-classification workflow that moved beyond notebook modelling toward execution and comparison across Ubuntu and OpenStack-style environments.",
    category: "Machine Learning · Cloud Environments",
    categories: ["NLP", "Software and Experimentation"],
    label: "Academic project",
    context: "Machine Learning and Cloud Environment Project",
    technologies: ["Python", "Text classification", "Jupyter", "Ubuntu", "OpenStack", "Cloud-deployment fundamentals"],
    evidence: ["Approximately 98% model accuracy in the project setting", "Accuracy, precision, recall, F1", "Environment-performance comparison"],
    coverFallback: "Spam classification cloud workflow",
    technicalApproach: {
      bullets: ["Text preprocessing", "Model training in Jupyter", "Execution comparison across Ubuntu and OpenStack-style environments", "Evaluation using accuracy, precision, recall and F1"],
    },
    limitations: ["Academic dataset", "Accuracy depends on message distribution", "Evolving spam patterns require retraining", "Not a production messaging service"],
    imagePlaceholders: [{ path: "/images/projects/spam-cloud-workflow.png", label: "Cloud workflow diagram" }],
  },
  {
    slug: "facial-expression-recognition",
    title: "Facial Expression Recognition",
    shortDescription: "A CNN-based image-classification workflow covering seven facial-expression categories.",
    category: "Computer Vision Academic Project",
    categories: ["Computer Vision", "Applied AI"],
    label: "Academic project",
    context: "Computer Vision Academic Project",
    technologies: ["Python", "TensorFlow/Keras", "CNN", "Image preprocessing", "Data augmentation", "Model evaluation"],
    evidence: ["Seven-category image classification", "CNN training and validation", "Multi-class evaluation"],
    coverFallback: "Facial expression CNN architecture",
    technicalApproach: {
      bullets: ["Class-structured image data", "Preprocessing", "Data augmentation concepts", "Train/validation separation", "CNN training", "Multi-class evaluation"],
    },
    extraSections: [
      {
        heading: "Responsible-AI note",
        paragraphs: [
          "Facial-expression classification cannot reliably determine a person's internal emotional state. The project should be presented as an image-classification exercise rather than a definitive emotion-reading system.",
        ],
      },
    ],
    imagePlaceholders: [{ path: "/images/projects/facial-expression-project.png", label: "CNN architecture diagram" }],
  },
  {
    slug: "fraud-detection",
    title: "Fraud Detection and Model Benchmarking",
    shortDescription:
      "A comparative classification workflow for identifying suspicious or anomalous transactions using preprocessing, model benchmarking and error analysis.",
    category: "Applied Machine Learning Project",
    categories: ["Applied AI", "Data and Analytics"],
    label: "Academic project",
    context: "Applied Machine Learning Project",
    technologies: ["Random Forest", "SVM", "k-NN", "Logistic Regression", "Gradient Boosting", "MLP", "ROC-AUC"],
    evidence: ["Multi-model benchmarking", "Imbalanced-class evaluation", "Confusion-matrix analysis"],
    coverFallback: "Fraud detection benchmark",
    technicalApproach: {
      bullets: ["Random Forest", "Support Vector Machine", "k-nearest neighbours", "Logistic Regression", "Gradient Boosting", "Multi-layer perceptron", "Scaling", "Outlier handling", "Cross-validation", "ROC-AUC", "Confusion-matrix analysis"],
    },
    limitations: ["Imbalanced-class evaluation", "False-positive and false-negative trade-offs", "Need for human review", "Responsible use in risk-sensitive decisions"],
    imagePlaceholders: [{ path: "/images/projects/fraud-detection-results.png", label: "ROC and confusion-matrix visuals" }],
  },
  {
    slug: "ab-testing",
    title: "A/B Testing and Website Variant Delivery",
    shortDescription:
      "Implementing and quality-checking frontend website variants for controlled experimentation as part of an engineering internship.",
    category: "Software Engineering · Experimentation",
    categories: ["Software and Experimentation"],
    label: "Software internship",
    context: "Software Engineer Internship · Echologyx Ltd",
    technologies: ["JavaScript", "HTML", "CSS", "Optimizely-style workflows", "Browser QA"],
    evidence: ["Variant implementation", "Release-readiness checks", "Agile collaboration"],
    coverFallback: "A/B testing workflow",
    technicalApproach: {
      bullets: ["JavaScript", "HTML", "CSS", "Optimizely-style workflows", "Browser-based QA", "Variant consistency", "Requirement interpretation", "Agile collaboration", "Release-readiness checks"],
    },
    businessRelevance: [
      "The work demonstrates how software implementation, measurement quality and user experience come together in controlled digital experimentation.",
    ],
    extraSections: [
      {
        heading: "Confidentiality",
        paragraphs: ["Confidential client names and experimental results are not disclosed."],
      },
    ],
    imagePlaceholders: [{ path: "/images/projects/ab-testing-workflow.png", label: "Variant delivery workflow" }],
  },
  {
    slug: "recommendation-system",
    title: "Recommendation-System Experiment",
    shortDescription:
      "Explored user–item modelling and recommendation fundamentals to understand how behavioural data can support ranking and personalisation.",
    category: "Applied Machine Learning",
    categories: ["Applied AI"],
    label: "Academic project",
    technologies: ["Python", "Collaborative filtering", "Embeddings"],
    evidence: ["User–item modelling", "Recommendation fundamentals"],
    coverFallback: "Recommendation system experiment",
    imagePlaceholders: [{ path: "/images/projects/recommendation-system.png", label: "User-item interaction diagram" }],
  },
  {
    slug: "ai-business-concept",
    title: "AI-Enabled Business Software Concept",
    shortDescription:
      "A low-code AI-assisted software concept for coaches and small businesses—mapping client management, reminders, scheduling, FAQs and social-media support into practical workflows.",
    category: "Product Concept and Workflow Design",
    categories: ["Software and Experimentation", "Applied AI"],
    label: "Product concept",
    technologies: ["Workflow design", "Automation", "Agentic patterns", "Low-code"],
    evidence: ["Workflow design", "Automation opportunities", "Feature prioritisation"],
    coverFallback: "AI business software concept",
    technicalApproach: {
      bullets: ["User journeys", "Automation opportunities", "Human escalation", "Data privacy", "Agentic workflow concepts", "Feature prioritisation", "Business outcomes"],
    },
    imagePlaceholders: [{ path: "/images/projects/ai-business-concept.png", label: "Concept workflow diagram" }],
  },
];

export const projectCategories: { key: string; label: string }[] = [
  { key: "All", label: "All" },
  { key: "Applied AI", label: "Applied AI" },
  { key: "Data and Analytics", label: "Data and Analytics" },
  { key: "NLP", label: "NLP" },
  { key: "Time Series", label: "Time Series" },
  { key: "Computer Vision", label: "Computer Vision" },
  { key: "Research", label: "Research" },
  { key: "Software and Experimentation", label: "Software and Experimentation" },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectIndex(slug: string): number {
  return projects.findIndex((p) => p.slug === slug);
}

export function getNeighborProjects(slug: string) {
  const idx = getProjectIndex(slug);
  const prev = idx > 0 ? projects[idx - 1] : projects[projects.length - 1];
  const next = idx < projects.length - 1 ? projects[idx + 1] : projects[0];
  return { prev, next };
}
