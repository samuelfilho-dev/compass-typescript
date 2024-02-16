namespace App {
  // Project State Management
  type Listener<T> = (items: T[]) => void;

  class State<T> {
    protected listeners: Listener<T>[] = [];

    addListeners(listenerFn: Listener<T>) {
      this.listeners.push(listenerFn);
    }
  }

  export class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
      super();
    }

    addProject(title: string, description: string, numberOfPeople: number) {
      const newProject = new Project(
        Math.random().toString(),
        title,
        description,
        numberOfPeople,
        ProjecStatus.Active
      );

      this.projects.push(newProject);
      this.updateListerns();
    }

    moveProject(projectId: string, newStatus: ProjecStatus) {
      const project = this.projects.find((project) => project.id === projectId);
      if (project && project.status !== newStatus) {
        project.status = newStatus;
      }
      this.updateListerns();
    }

    private updateListerns() {
      for (const listenerFn of this.listeners) {
        listenerFn(this.projects.slice());
      }
    }

    static getInstance() {
      if (this.instance) {
        return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
    }
  }

  export const projectState = ProjectState.getInstance();
}
