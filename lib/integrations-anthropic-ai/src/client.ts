import Anthropic from "@anthropic-ai/sdk";

function makeClient(): Anthropic {
  if (!process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL) {
    throw new Error(
      "AI_INTEGRATIONS_ANTHROPIC_BASE_URL must be set. Did you forget to provision the Anthropic AI integration?",
    );
  }
  if (!process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY) {
    throw new Error(
      "AI_INTEGRATIONS_ANTHROPIC_API_KEY must be set. Did you forget to provision the Anthropic AI integration?",
    );
  }
  return new Anthropic({
    apiKey: process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY,
    baseURL: process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL,
  });
}

let _client: Anthropic | undefined;

export const anthropic: Anthropic = new Proxy({} as Anthropic, {
  get(_target, prop) {
    if (!_client) _client = makeClient();
    const val = Reflect.get(_client, prop, _client);
    if (typeof val === "function") return (val as Function).bind(_client);
    return val;
  },
});
