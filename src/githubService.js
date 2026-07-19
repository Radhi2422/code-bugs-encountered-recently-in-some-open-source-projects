const { Octokit } = require("@octokit/rest");

const token = process.env.GITHUB_TOKEN;

const [owner, repo] = process.env.REPOSITORY.split("/");

const octokit = new Octokit({
    auth: token
});

async function getIssue(issueNumber) {

    const { data } = await octokit.issues.get({
        owner,
        repo,
        issue_number: issueNumber
    });

    return data;
}

async function addLabels(issueNumber, labels) {

    await octokit.issues.addLabels({
        owner,
        repo,
        issue_number: issueNumber,
        labels
    });

    console.log("Labels Added");
}

async function addComment(issueNumber, body) {

    await octokit.issues.createComment({
        owner,
        repo,
        issue_number: issueNumber,
        body
    });

    console.log("Comment Added");
}

async function assign(issueNumber, assignees) {

    await octokit.issues.addAssignees({
        owner,
        repo,
        issue_number: issueNumber,
        assignees
    });

    console.log("Assigned");
}

module.exports = {
    getIssue,
    addLabels,
    addComment,
    assign
};
