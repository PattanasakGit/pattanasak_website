interface IOneProject {
    name: string;
    github: string;
    description: string;
    images: string[];
    tools: string[];
};

interface IProjectData {
    [key: string]: IOneProject
}