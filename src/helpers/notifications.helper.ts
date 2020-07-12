import { notification } from "antd";

const NOTIFICATION_DURATION = 5;

export const showNetworkError = () => {
  notification["error"]({
    message: "¡Ocurrió un error!",
    description: "No se pudo hacer la petición, inténtelo más tarde.",
    duration: NOTIFICATION_DURATION,
  });
};

export const showActionSuccess = (msg?: string) => {
  notification["success"]({
    message: "¡Felicidades!",
    description: msg ? msg : "La acción se realizó exitosamente.",
    duration: NOTIFICATION_DURATION,
  });
};
