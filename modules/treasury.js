export default class Treasury {
  constructor(agent) {
    this.agent = agent;
  }

  async balance() {
    return {
      treasury: 12500,
      currency: "USDC"
    };
  }
}
