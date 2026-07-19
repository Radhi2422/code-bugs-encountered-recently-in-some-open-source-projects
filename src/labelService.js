function detectLabels(title = "", body = "") {

    const text = `${title} ${body}`.toLowerCase();

    const labels = [];

    if (
        text.includes("bug") ||
        text.includes("error") ||
        text.includes("crash") ||
        text.includes("failed")
    ) {
        labels.push("bug");
    }

    if (
        text.includes("feature") ||
        text.includes("enhancement") ||
        text.includes("improvement")
    ) {
        labels.push("enhancement");
    }

    if (
        text.includes("documentation") ||
        text.includes("docs") ||
        text.includes("readme")
    ) {
        labels.push("documentation");
    }

    if (
        text.includes("question") ||
        text.includes("help")
    ) {
        labels.push("question");
    }

    if (labels.length === 0) {
        labels.push("needs-triage");
    }

    return labels;
}

module.exports = {
    detectLabels
};
