export default class Status {
  constructor(agent) {
    this.agent = agent;
  }

  async get() {
    return {
      online: true,
      treasury: 12500,
      activeTasks: 12,
      rewardsPaid: 3400
    };
  }
}
