export default {
    data() {
        return {
            experiences: [
                {
                    company: "Rakuten India",
                    location: "Bengaluru",
                    date: "August 2022 - Present",
                    description: "As a Senior Software Engineer, I develop scalable backend solutions using Java and Spring Boot. I collaborate with cross-functional teams to enhance system architecture and optimize performance.",
                    achievements: [
                        "actively participated in Agile development methodologies, contributing to sprint planning and daily stand‐ups.",
                        "Collaborated with cross‐functional teams to effectively gather and analyze requirements for the project. Designed and implemented scalable and high‐performance solutions that aligned with project goals.",
                        "Conducted code reviews to ensure code quality and best practices were followed.",
                        "Implemented, tested and maintained code for multiple Spring Boot based microservices.",
                        "Implemented asynchronous communication between microservices using Kafka to ensure efficient and scalable data exchange.",
                        "Implemented scalable schedulers to efficiently manage communication with external systems. Leveraged parallel processing capabilities to optimize performance and throughput, processing records in multiple pods simultaneously for enhanced efficiency.",
                        "Implemented robust error handling mechanisms to address API failures, ensuring data integrity and system resilience. Developed a configurable scheduler to automatically retry failed requests, optimizing system efficiency and reducing manual intervention.",
                        "Developed, deployed, and supported several Spring Boot microservices",
                    ],
                    skills: [
                        "Java", "Spring Boot", "Microservices", "Kafka", "Couchbase", "MySQL", "Docker", "Kubernetes", "Git", "Jenkins"
                    ]
                },
                {
                    company: "Tata Consultancy Services",
                    location: "Kolkata",
                    date: "September 2020 - August 2022",
                    description: "Developed enterprise applications using Java and Spring technologies. Involved in the complete software development lifecycle and focused on optimizing database queries for performance.",
                    achievements: [
                        "Developed and implemented a locking mechanism for POS work orders to prevent data conflicts and ensure data integrity.Implemented a manager override feature to address exceptions and maintain operational efficiency.",
                        "Investigated issues and defects to determine the root cause and formulate corrective action recommendations.",
                        "Designed and implemented a POS system enhancement that allowed users to place orders with multiple customized items within a single transaction, significantly improving efficiency and reducing manual effort.",
                        "Optimized application performance by identifying and eliminating bottlenecks in the code and database queries, resulting in a90% reduction in load times from over an hour to under 5 seconds.",
                        "Mentored junior developers, providing guidance, support, and knowledge transfer to foster their professional growth and contributions to the team.",
                    ],
                    skills: [
                        "Java", "J2EE", "Spring", "Oracle PL/SQL",
                        "PostgreSQL", "Servlets", "Jasper Reports", "Git", "Bamboo"
                    ]
                }
                // Add more experiences as needed
            ]
        };
    }
}