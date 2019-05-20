import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import DroneSagas from "./droneR";
export default [...ApiErrors, ...WeatherSagas, ...DroneSagas];
