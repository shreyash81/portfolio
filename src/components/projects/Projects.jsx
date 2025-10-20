import React from 'react';
import './Projects.css';

const data = [
    {
        id: 1,
        title: "Robot Shop Microservices Deployment",
        techStack: ['Kubernetes', 'AWS EKS', 'Helm', 'Docker', 'GitHub Actions', 'Argo CD'],
        description:
            "Deployed a 12-microservice e-commerce application on AWS EKS using Docker and Helm.",
        features: [
            "Automated CI/CD pipeline with GitHub Actions & Argo CD, reducing manual effort by 80%",
            "Integrated multi-language microservices with MongoDB, MySQL, Redis, RabbitMQ",
            "Configured HPA, health checks, and AWS ALB, improving reliability by 40%"
        ],
        links: {
          
            demo: "https://shreyashsinghchauhan.hashnode.dev/end-to-end-three-tier-architecture-deployment-on-aws-eks-stans-robot-shop"
        }
    },
    {
        id: 2,
        title: "Cloud-Native Deployment on AWS EKS with Fargate",
        techStack: ['Docker', 'AWS EKS', 'Fargate', 'Kubernetes', 'eksctl'],
        description:
            "Deployed a containerized 2048 web app on AWS EKS Fargate, reducing operational overhead by 30%.",
        features: [
            "Managed deployments using Kubernetes Deployments, Services, and Ingress",
            "Automated cluster provisioning with eksctl and AWS CLI",
            "Achieved 99.9% uptime with support for 100+ concurrent users"
        ],
        links: {
            
            demo: "https://shreyashsinghchauhan.hashnode.dev/amazon-elastic-kubernetes-service-eks-project"
        }
    },
    {
        id: 3,
        title: "DevOps-Integrated CI/CD Pipeline",
        techStack: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Helm'],
        description:
            "Built CI/CD pipelines automating build, test, and deployment, reducing manual effort by 80%.",
        features: [
            "Containerized applications with Docker and deployed on Kubernetes via Helm & Argo CD",
            "Optimized pipeline efficiency with parallel Jenkins stages",
            "Reduced deployment time from 2 hours to 20 minutes"
        ],
        links: {
            
            demo: "https://devsecops-integrated-cicd-pipeline.hashnode.dev/devsecops-integrated-cicd-pipeline"
        }
    },
    {
        id: 4,
        title: "Kubernetes Automation",
        techStack: ['Kubernetes', 'Kyverno', 'Argo CD', 'GitOps'],
        description:
            "Managed multi-cloud Kubernetes clusters with automated policies and compliance enforcement.",
        features: [
            "Developed Kyverno policies for generate, validate, mutate, and image verification",
            "Integrated with Argo CD for GitOps-based deployments",
            "Ensured 100% cluster-wide policy compliance"
        ],
        links: {
            
            demo: "https://shreyashsinghchauhan.hashnode.dev/real-time-kubernetes-security-automation"
        }
    },
];

const Projects = () => {
    return (
        <section className="projects container section" id="projects">
            <h2 className="section__title">Projects</h2>

            <div className="projects__container grid">
                {data.map(({ id, title, description, techStack, features, links }) => {
                    return (
                        <div className="projects__card" key={id}>
                            <h3 className="projects__title">{title}</h3>
                            <p className="projects__description">{description}</p>

                            <div className="projects__tech">
                                <h4>Tech Stack:</h4>
                                <div className="tech-tags">
                                    {techStack.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="projects__features">
                                <h4>Key Features:</h4>
                                <ul>
                                    {features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="projects__links">
                                <a
                                    href={links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects__link projects__link--github"
                                >
                                    <i className="uil uil-github-alt"></i>
                                    GitHub
                                </a>
                                <a
                                    href={links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects__link projects__link--demo"
                                >
                                    <i className="uil uil-external-link-alt"></i>
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
