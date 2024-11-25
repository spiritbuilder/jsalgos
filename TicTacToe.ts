type Value = "X" | "O" | null;

type TestCase = {
  gameState: Value[][];
  expect: boolean;
  description: string;
};

const TEST_CASES: TestCase[] = [
  {
    gameState: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    expect: false,
    description: "When game is  empty winner is expected to be false",
  },
  {
    gameState: [
      [null, "X", null],
      [null, "X", null],
      [null, "X", "O"],
    ],
    expect: false,
    description: "When game is  empty winner is expected to be false",
  },
  {
    gameState: [
      ["O", "O", "O"],
      ["O", null, null],
      ["X", null, null],
    ],
    expect: true,
    description: "Expect true and game and line highlight",
  },
  {
    gameState: [
      ["O", "X", "X"],
      ["O", "O", "O"],
      ["X", null, null],
    ],
    expect: true,
    description: "Expect true and game and line highlight",
  },
  {
    gameState: [
      ["O", "O", "X"],
      ["X", "X", null],
      ["O", null, null],
    ],
    expect: false,
    description: "Expect false and game and no highlight",
  },
  {
    gameState: [
      ["O", "O", "X"],
      ["X", "X", "O"],
      ["O", "X", "X"],
    ],
    expect: false,
    description: "Expect false and game and no highlight",
  },
  {
    gameState: [
      ["O", "O", "X"],
      ["X", "O", "O"],
      ["O", "O", "X"],
    ],
    expect: true,
    description: "Expect true and game and no highlight",
  },
  {
    gameState: [
      ["O", "O", "X"],
      ["X", "X", "O"],
      ["X", "X", "X"],
    ],
    expect: true,
    description: "Expect  highlight",
  },
  {
    gameState: [
      ["O", "O", "X"],
      ["X", "O", "O"],
      ["O", "X", "O"],
    ],
    expect: true,
    description: "Expect  highlight",
  },
  {
    gameState: [
      ["O", "X", "O"],
      ["X", "O", "O"],
      ["O", "X", "X"],
    ],
    expect: true,
    description: "Expect  highlight",
  },
];

const TicTakToe = () => {
  let identityMatchLine = Array(3).fill(Array(3).fill(0));

  console.log(identityMatchLine, "matchLine");

  const getIdentityLine = () => {
    return JSON.parse(JSON.stringify(identityMatchLine));
  };

  const matchGameState = (game: Value[][]) => {
    //Test for Horizontal Matches

    for (let i = 0; i < 3; i++) {
      if (
        game[i][0] !== null &&
        game[i][1] === game[i][0] &&
        game[i][0] === game[i][2]
      ) {
        let line = getIdentityLine();
        for (let j = 0; j < game[i].length; j++) line[i] = [1, 1, 1];
        return { value: true, line };
      }
    }

    // Test for Vertical Matches

    for (let i = 0; i < 3; i++) {
      if (
        game[0][i] !== null &&
        game[0][i] === game[1][i] &&
        game[1][i] === game[2][i]
      ) {
        let line = getIdentityLine();
        for (let j = 0; j < game.length; j++) line[j][i] = 1;
        return { value: true, line };
      }
    }

    //check for left down diagonal 0,0 1,1 2,2 ; 2,0 1,1 0,2

    if (
      game[0][0] === game[1][1] &&
      game[1][1] === game[2][2] &&
      game[0][0] !== null
    ) {
      let line = getIdentityLine();
      for (let j = 0; j < game.length; j++) {
        line[j][j] = 1;
      }
      return { value: true, line };
    }

    if (
      game[2][0] === game[1][1] &&
      game[1][1] === game[2][0] &&
      game[2][0] !== null
    ) {
      let line = getIdentityLine();

      for (let j = 0; j < game.length; j++) {
        line[game.length - 1 - j][j] = 1;
      }
      return { value: true, line };
    }

    return { value: false};
  };
  let passes = 0;
  TEST_CASES.map((m) => {
    console.log("===============\n");
    console.log(m.description);
    let { value, line } = matchGameState(m.gameState);

    console.log(value);
    line?.forEach((element: number[]) => {
      console.log(element);
    });
    let passed = value === m.expect;
    if (passed) passes++;
    console.log(passed ? "\nTest Passed\n" : "\nTest Failed\n");
  });

  if (passes === TEST_CASES.length) {
    console.log("\n================");
    console.log("== All Passed ==");
    console.log("================");
  }

};

export default TicTakToe;
