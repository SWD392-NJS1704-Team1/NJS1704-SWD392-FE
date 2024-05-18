import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer";
import shell from "shelljs";

const initHeaders = () => {
  console.log(
    chalk.yellowBright(
      figlet.textSync("COMMIT MSG", {
        font: "isometric3",
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
};

const selectMsgType = () => {
  const questions = [
    {
      type: "list",
      name: "msgType",
      message: "What is the commit message type?",
      choices: [
        "🧹 perf",
        "🎸 feat",
        "🔧 fix",
        "😈 refactor",
        "💄 style",
        "👀 test",
        "🔧 build",
        "⚙️  ci",
        "📘 docs",
      ],
      filter: function (val) {
        return val.split(" ")[1];
      },
    },
    {
      type: "input",
      name: "msgContent",
      message: "What is your message?",
    },
    {
      type: "confirm",
      name: "allowedToPush",
      message: "Do you want to push the commit?",
    },
  ];

  return inquirer.prompt(questions);
};

const run = async () => {
  initHeaders();
  const answer = await selectMsgType();
  const finalCommitMsg = [answer.msgType, answer.msgContent].join(": ");
  shell.exec(`git commit -m "${finalCommitMsg}"`);

  if (answer.allowedToPush) {
    const currentBranch = shell.exec("git branch --show-current").stdout;
    shell.exec(`git push -u origin ${currentBranch}`);
  }
};

run();
