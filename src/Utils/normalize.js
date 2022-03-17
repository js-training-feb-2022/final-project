import capitalize from "./capitalize";

const normalize = (str) => capitalize(str).replace('-', ' ');

export default normalize;