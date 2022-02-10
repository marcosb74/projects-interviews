import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

const initialState = {
  alerta: null,
};
export default function (state = initialState, actions) {
  switch (actions.type) {
    case MOSTRAR_ALERTA:
      return {
        ...state,
        alerta: actions.payload,
      };
    case OCULTAR_ALERTA:
      return {
        ...state,
        alerta: null,
      };
    default:
      return state;
  }
}
