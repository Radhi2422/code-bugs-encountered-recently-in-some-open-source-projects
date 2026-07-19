const { assign } = require("./githubService");

async function assignIssue(issueNumber) {

    const reviewers = [
        "Radhi2422"
    ];

    await assign(issueNumber, reviewers);
}

module.exports = {
    assignIssue
};
