import { ClaudeHash } from "../src/index.js";

const agent = new ClaudeHash({
  apiKey: "demo-key"
});

const balance = await agent.treasury.balance();

console.log(balance);
