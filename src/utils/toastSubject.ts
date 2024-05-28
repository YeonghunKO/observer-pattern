type TObserver = (message: string) => void;

interface IToastSubject {
  observers: TObserver[];
  subscribe: (fn: TObserver) => void;
  unSubscribe: (fn: TObserver) => void;
  notify: (message: string) => void;
}

class ToastSubject implements IToastSubject {
  observers: TObserver[];

  constructor() {
    this.observers = [];
  }

  subscribe(fn: TObserver) {
    this.observers.push(fn);
  }

  notify(message: string) {
    this.observers.forEach((fn) => fn(message));
  }
  unSubscribe(functionToRemove: TObserver) {
    this.observers = this.observers.filter((fn) => fn !== functionToRemove);
  }
}

export const toastSubject = new ToastSubject();
