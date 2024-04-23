class EventEmitter {
  constructor() {
    this.eventMap = new Map();
  }

  on(type, handler) {
    if (!(handler instanceof Function)) {
      throw new Error("handler is not a function");
    }
    if (!this.eventMap.has(type)) {
      this.eventMap.set(type, []);
    }
    this.eventMap.get(type).push(handler);
  }

  once(type, handler) {
    const wrappedHandler = (...args) => {
      handler(...args);
      this.off(type, wrappedHandler);
    };
    this.on(type, wrappedHandler);
  }

  emit(type, ...params) {
    if (!this.eventMap.has(type)) {
      throw new Error(`type:${type} is not exit`);
    }
    this.eventMap
      .get(type)
      .slice()
      .forEach((handler) => {
        try {
          handler(...params);
        } catch (err) {
          console.error(`error in event handler for ${type}:${err}`);
        }
      });
  }

  off(type, handler) {
    if (!this.eventMap.has(type)) {
      throw new Error(`type:${type} is not exit`);
    }
    if (!handler) {
      this.eventMap.delete(type);
      return;
    }
    const handlers = this.eventMap.get(type);
    const index = handlers.indexOf(handler);
    if (index === -1) {
      throw new Error("handler is not registered");
    }
    handlers.splice(index, 1);
  }
}
