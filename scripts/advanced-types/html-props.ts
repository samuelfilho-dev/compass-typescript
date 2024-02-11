interface ErrorContainer {
  [prop: string]: string; // Não sabemos qual prop será (Generico)
}

const erroBag: ErrorContainer = {
  email: "Not a Valid E-mail",
  username: "Must start with character",
};
