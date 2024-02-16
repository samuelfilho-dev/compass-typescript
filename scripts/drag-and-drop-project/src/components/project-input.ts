import { Component } from "./base-component.js";
import * as Validation from "../util/validation.js";
import { Autobind } from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";

// Project Input Class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElementField: HTMLInputElement;
  descriptionElementField: HTMLTextAreaElement;
  peopleElementField: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    this.titleInputElementField = this.element.querySelector(
      "#title"
    )! as HTMLInputElement;

    this.descriptionElementField = this.element.querySelector(
      "#description"
    )! as HTMLTextAreaElement;

    this.peopleElementField = this.element.querySelector(
      "#people"
    )! as HTMLInputElement;
    this.configure();
  }

  configure() {
    this.element.addEventListener("submit", this.sumbitHandler);
  }

  renderContent() {}

  private gatherUserInput(): [string, string, number] | undefined {
    const enteredTitle = this.titleInputElementField.value;
    const enteredDescription = this.descriptionElementField.value;
    const enteredPeople = this.peopleElementField.value;

    const titleValidatable: Validation.Validatable = {
      value: enteredTitle,
      required: true,
    };

    const descriptionValidatable: Validation.Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validation.Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !Validation.validade(titleValidatable) ||
      !Validation.validade(descriptionValidatable) ||
      !Validation.validade(peopleValidatable)
    ) {
      alert("Invalid Input, Please Try Again");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputElementField.value = "";
    this.descriptionElementField.value = "";
    this.peopleElementField.value = "";
  }

  @Autobind
  private sumbitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();

    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);
      this.clearInputs();
    }
  }
}
