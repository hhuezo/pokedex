import { STAT_NOMBRE } from "./constants";

const getNameStat = (stat) => STAT_NOMBRE[stat.toLowerCase()];

export default getNameStat;