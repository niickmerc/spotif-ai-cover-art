const { Configuration, OpenAIApi } = require("openai");

// note: need to add API KEY to your env variables, cannot have it leaking in code.
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// test.
// getVibe('Space Cowboy - Kacey Musgraves');

// Given a list of song and track names of a playlist, get the vibe of the playlist from chatGPT answer.
async function getVibe(tracks) {
    const preAmble = 'In one sentence, describe the vibe of these songs and what they have in common starting with "The vibe of these songs is:" Do not use the words "lyrics, vocals, characterized":\n'
    const prompt = preAmble + tracks;
    const response = await generateResponse(prompt);
    console.log(response);
}

// given an input prompt, generate a response from chatGPT
async function generateResponse(prompt) {
  const parameters = {
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 100,
    n: 1,
    stop: '\n',
  };

  // Call the completion API
  const response = await openai.createCompletion(parameters);
  const { choices } = response.data;
  const [{ text }] = choices;
  return text.trim();
}
