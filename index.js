const core = require('@actions/core');
const github = require('@actions/github');
const showdown = require('showdown');

try {
  const markdownText = core.getInput('text');
  const converter = new showdown.Converter();
  const html = converter.makeHtml(markdownText);

  core.setOutput("html", html);

} catch (error) {
  core.setFailed(error.message);
}
