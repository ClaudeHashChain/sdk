export default class Defi {
  constructor(agent) {
    this.agent = agent;
  }

  async deploy(strategy) {
    return {
      success: true,
      strategy
    };
  }
}
