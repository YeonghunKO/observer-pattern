import { toastSubject } from "./toastSubject";

export const showToast = (message: string) => {
  toastSubject.notify(message);
};
