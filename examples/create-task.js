import { ClaudeHash } from "../src/index.js";

const agent = new ClaudeHash({
  apiKey: "demo-key"
});

const task = await agent.tasks.create({
  title: "Find New Yield Farms",
  description: "Research profitable DeFi protocols",
  reward: 50
});

console.log(task);import { ClaudeHash } from "../src/index.js";

const agent = new ClaudeHash({
  apiKey: "demo-key"
});

const task = await agent.tasks.create({
  title: "Find New Yield Farms",
  description: "Research profitable DeFi protocols",
  reward: 50
});

console.log(task);
