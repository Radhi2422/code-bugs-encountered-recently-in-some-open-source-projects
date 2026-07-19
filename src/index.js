const { addLabels, getIssue } = require("./githubService");
const { detectLabels } = require("./labelService");
const { assignIssue } = require("./assignmentService");
const { welcomeComment } = require("./commentService");

async function main() {
    try {
        const issueNumber = process.env.ISSUE_NUMBER;

        const issue = await getIssue(issueNumber);

        console.log("Issue Title:", issue.title);

        const labels = detectLabels(issue.title, issue.body);

        console.log(labels);

        if (labels.length > 0) {
            await addLabels(issueNumber, labels);
        }

        await assignIssue(issueNumber);

        await welcomeComment(issueNumber);

        console.log("Issue processed successfully.");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

main();
