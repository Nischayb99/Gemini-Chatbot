import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ask something: ", async (query) => {
  const result = await model.generateContent(query);
  const response = await result.response;
  console.log("Gemini says:", response.text());
  rl.close();
});
