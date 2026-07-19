const { assign } = require("./githubService");

async function assignIssue(issueNumber) {

    const reviewers = [
        "your-github-username"
    ];

    await assign(issueNumber, reviewers);
}

module.exports = {
    assignIssue
};
