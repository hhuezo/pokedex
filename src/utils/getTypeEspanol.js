import { TYPE_NOMBRE } from "./constants";

const getNameType = (typo) => TYPE_NOMBRE[typo.toLowerCase()];

export default getNameType;