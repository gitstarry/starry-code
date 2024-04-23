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

  emit(type, params) {
    if (!this.eventMap.has(type)) {
      throw new Error(`type:${type} is not exit`);
    }
    this.eventMap.get(type).forEach((handler) => {
      try {
        handler(params);
      } catch (err) {
        console.error(`error in event handler for ${type}:${err}`);
      }
    });
  }
  off(type, handler) {
    if (!this.eventMap.has(type)) {
      throw new Error(`type:${type} is not exit`);
    }
    const handlers = this.eventMap.get(type);
    const index = handlers.indexOf(handler); //##
    if (index === -1) {
      throw new Error("handler is not registered");
    }
    handlers.splice(index, 1); //##
  }
}
