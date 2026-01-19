import { Service, Education, Publication, Experience, Affiliation } from './types';

export const BUSINESS_NAME = "Harmar Strategic Advisory";
export const SLOGAN = "INTEGRATED BUSINESS, LEGAL & TECHNICAL SOLUTIONS";
export const CONTACT_EMAIL = "harmartim@gmail.com";
export const CONTACT_PHONE = "705.999.3657";

export interface StrategicService extends Service {
  benefits: string[];
}

export const BIO_PARAGRAPHS = [
  "Tim J. Harmar is a Barrister & Solicitor and Strategic Advisor whose practice occupies the rare convergence of law, finance, and engineering. With a career distinguished by high-stakes advocacy—including counsel work before the Supreme Court of Canada—Tim brings a forensic intellect to corporate governance and commercial strategy. He moves beyond the traditional scope of legal counsel, acting as a structural architect for organizations navigating complex regulatory landscapes and industrial pivots.",
  "His advisory perspective is defined by a unique multidisciplinary pedigree. Holding a Master of Engineering (M.Eng) in Cybersecurity Policy from George Washington University, Tim bridges the critical gap between legal risk and technical reality. This is reinforced by a Juris Doctor (JD) and two Master of Laws (LLM) degrees specializing in Business Law and Banking & Financial Services, alongside an MBA in Finance. This powerful combination enables him to guide boards and executives through the intricate geometry of privacy governance, digital resilience, and capital structuring.",
  "Based in Northern Ontario, Tim acts as a catalyst for regional industries facing global mandates. Whether securing public capital for economic development or immunizing high-growth enterprises against cyber-liability, his approach is strictly synthetic: integrating disparate disciplines to engineer durable, competitive advantages. He ensures that legal protection and business acceleration are not opposing forces, but unified objectives."
];

export const SERVICES: StrategicService[] = [
  {
    title: "Strategic Growth & Governance",
    description: "Synthesizing advanced market intelligence with regional economic logic to engineer sustainable expansion. I leverage MBA-level financial rigor to transform abstract corporate vision into execution-ready roadmaps, particularly for organizations facing industrial pivot points or capital restructuring.",
    icon: "fa-chess-knight",
    tags: ["MBA Strategy", "Corporate Growth", "Governance"],
    benefits: [
      "Optimizing operational efficiency to successfully navigate complex industrial transitions and restructuring phases.",
      "Architecting regional economic development frameworks and securing high-value public funding strategies.",
      "Providing Board-level oversight to identify and mitigate systemic commercial risks before they materialize."
    ]
  },
  {
    title: "Corporate & Commercial Counsel",
    description: "Sophisticated legal counsel that bridges the gap between academic theory and commercial reality. I provide high-stakes representation for corporate transactions, municipal frameworks, and regulatory compliance, ensuring legal structures empower rather than inhibit business objectives.",
    icon: "fa-scale-balanced",
    tags: ["JD/LLM Counsel", "Corporate Law", "Transactions"],
    benefits: [
      "Engineering precise commercial contracts that immunize organizations against foreseeable liability and operational friction.",
      "Navigating multi-jurisdictional regulatory frameworks to ensure seamless cross-border compliance and market entry.",
      "Providing proactive General Counsel on corporate governance and risk management to secure long-term operational stability."
    ]
  },
  {
    title: "Civil & Commercial Litigation",
    description: "Delivering formidable advocacy in complex disputes. With experience as counsel before the Supreme Court of Canada, I provide rigorous representation that cuts through procedural complexity. My litigation strategy is always aligned with business reality—focusing on decisive outcomes that protect reputation and assets.",
    icon: "fa-gavel",
    tags: ["Supreme Court Counsel", "Commercial Disputes", "Trial Advocacy"],
    benefits: [
      "Prosecuting and defending high-stakes claims involving breach of contract, shareholder oppression, and professional negligence.",
      "Navigating administrative law proceedings and judicial reviews to challenge or defend regulatory decisions.",
      "Managing complex procedural motions and appellate advocacy to secure favorable rulings at all judicial levels."
    ]
  },
  {
    title: "Privacy Governance & AI Ethics",
    description: "Architecting institutional trust through robust information governance. I align data practices with rigorous global regulations (GDPR/PIPEDA/CPPA) and emerging AI standards, ensuring that data innovation is built upon a foundation of compliance, ethical design, and consumer trust.",
    icon: "fa-fingerprint",
    tags: ["Data Privacy", "CIPP/C Professional", "AI Compliance"],
    benefits: [
      "Implementing AI-ready privacy governance architectures that support ethical algorithm deployment and data processing.",
      "Conducting critical Privacy Impact Assessments (PIA) to de-risk new product launches and data initiatives.",
      "Designing customer-centric transparency protocols that transform regulatory compliance into a competitive brand asset."
    ]
  },
  {
    title: "Cybersecurity Policy & Risk",
    description: "Delivering technical policy solutions for an era of digital volatility. Leveraging a specialized M.Eng in Cybersecurity, I translate complex technical threats into board-level strategic imperatives, bridging the critical communication gap between IT security teams and executive leadership.",
    icon: "fa-shield-halved",
    tags: ["M.Eng Policy", "Cyber Resilience", "Technical Risk"],
    benefits: [
      "Developing comprehensive technical risk mitigation strategies and executive-level incident response playbooks.",
      "Auditing vendor security postures to identify and eliminate hidden third-party supply chain vulnerabilities.",
      "Leading technical due diligence for M&A activities to accurately value digital assets and exposure."
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "A Judicial 'SLAPP' To The Drafters Of Ontario's Anti-SLAPP Legislation",
    outlet: "Municipal World",
    date: "Oct 2016",
    summary: "A critical analysis of judicial interpretation in municipal contexts, focusing on the balance between public participation and protection from vexatious litigation.",
    link: "https://www.municipalworld.com/articles/a-judicial-slapp-to-the-drafters-of-ontarios-anti-slapp-legislation/"
  },
  {
    title: "Federal Government Suspends CASL's Private Right of Action",
    outlet: "Mondaq",
    date: "June 2017",
    summary: "Strategic analysis of the suspension of the private right of action under Canada's Anti-Spam Legislation and its implications for corporate compliance programs.",
    link: "https://www.mondaq.com/canada/it-and-internet/601614/federal-government-suspends-casl39s-private-right-of-action"
  },
  {
    title: "Islamic Securitization: Structuring for Shari'ah Compliance",
    outlet: "Law in International Finance (Carswell)",
    date: "2009",
    summary: "Expert contribution to the leading text on international finance, detailing the structural and legal requirements for Shari'ah-compliant financial instruments.",
    link: "https://store.thomsonreuters.ca/en-ca/products/law-in-international-finance-carswell"
  },
  {
    title: "Regional Industrial Transition: Integrating Cyber-Resilience and Legal Policy",
    outlet: "Strategic Advisory Insights",
    date: "2024",
    summary: "A synthesis of engineering policy and legal risk frameworks for organizations navigating digital transformation in Northern Ontario.",
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Lead Strategist & Principal",
    company: "Harmar Strategic Advisory",
    period: "2023 – Present",
    bullets: [
      "Consulting on Privacy and Cybersecurity risk for high-growth enterprises.",
      "Economic development advisory for municipal bodies in Northern Ontario.",
      "Architecting technical and legal policy frameworks for emerging tech."
    ]
  },
  {
    role: "Lawyer (Barrister & Solicitor)",
    company: "Wishart Law Firm LLP",
    period: "2014 – 2023",
    bullets: [
      "Led pivotal litigation reaching the Supreme Court of Canada.",
      "Advised on multi-million dollar corporate transactions."
    ]
  }
];

export const AFFILIATIONS: Affiliation[] = [
  {
    name: "Law Society of Ontario",
    role: "Barrister & Solicitor",
    link: "https://lso.ca/",
    logoIcon: "fa-certificate"
  }
];