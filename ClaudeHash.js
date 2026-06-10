import Treasury from "./modules/treasury.js";
import Tasks from "./modules/tasks.js";
import Defi from "./modules/defi.js";
import Status from "./modules/status.js";

export default class ClaudeHash {
  constructor(config) {
    this.apiKey = config.apiKey;

    this.treasury = new Treasury(this);
    this.tasks = new Tasks(this);
    this.defi = new Defi(this);
    this.statusModule = new Status(this);
  }

  async initialize() {
    return true;
  }

  async status() {
    return this.statusModule.get();
  }
}
