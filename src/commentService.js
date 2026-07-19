const { addComment } = require("./githubService");

async function welcomeComment(issueNumber) {

    const message = `
## 👋 Thanks for opening this issue!

Our automation bot has received your issue.

### What happens next?

- Labels have been added automatically.
- Maintainers will review it soon.
- If additional information is required, we'll let you know.

Thank you for contributing!
`;

    await addComment(issueNumber, message);
}

module.exports = {
    welcomeComment
};
