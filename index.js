const core = require('@actions/core');
const github = require('@actions/github');
const showdown = require('showdown');

try {
  const markdownText = core.getInput('text');
  const converter = new showdown.Converter();
  const html = converter.makeHtml(markdownText);

  console.log(`Hello ${markdownText}!`);
  core.setOutput("html", html);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(error.message);
}
