module.exports = {
  hooks: {
    "pre-commit": "yarn unit-test --silent",
    "prepare-commit-msg": "node scripts/prepareCommitMessage.js $HUSKY_GIT_PARAMS",
  },
};
