module.exports = {
    branches: "main",
    repositoryUrl:
        "https://github.com/mihinduranasinghe/CICD-React-App-Github-Actions",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        "@semantic-release/github",
    ],
};
