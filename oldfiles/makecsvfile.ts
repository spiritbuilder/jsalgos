import fs from "node:fs/promises";
import path from "node:path";

const MAX_ROWS = 500;

export const createCSV = async () => {
  const add = "../make.csv";

  try {
    await fs.unlink(add);
    console.log("DELETED");
  } catch (error) {
    console.log(error);
  }
  try {
    let toprow = "email,amount,memo\n";
    let otherRows = "";
    for (let i = 0; i < MAX_ROWS; i++) {
      otherRows += `tolam@mailinator.com,1,${Date.now() + Math.random()}-${i}${
        i < MAX_ROWS - 1 ? "\n" : ""
      }`;
    }
    await fs.writeFile(add, toprow + otherRows, {
      encoding: "utf-8",
    });
    console.log("CREATED");
  } catch (error) {}
};
