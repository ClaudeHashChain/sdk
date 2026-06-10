export default class Tasks {
  constructor(agent) {
    this.agent = agent;
  }

  async create(task) {
    return {
      id: "task_" + Date.now(),
      ...task
    };
  }

  async list() {
    return [
      {
        id: "task_001",
        title: "Research DeFi"
      }
    ];
  }
}
