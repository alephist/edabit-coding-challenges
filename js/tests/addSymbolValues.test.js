const checkScore = require("../addSymbolValues");

const data = [
  [
    [
      [
        "#",
        "!",
        "O",
        "!!",
        "#",
        "!!",
        "!!",
        "X",
        "!",
        "X",
        "!!!",
        "!!!",
        "X",
        "#"
      ],
      [
        "!",
        "#",
        "!!",
        "!!!",
        "X",
        "X",
        "#",
        "!!",
        "O",
        "!!!",
        "!",
        "!!!",
        "#",
        "O"
      ],
      [
        "O",
        "X",
        "!!!",
        "#",
        "!!!",
        "!",
        "!",
        "!",
        "#",
        "!!",
        "!!!",
        "X",
        "!",
        "X"
      ],
      [
        "#",
        "!!",
        "!!",
        "#",
        "O",
        "!",
        "X",
        "X",
        "!!!",
        "#",
        "#",
        "!!!",
        "#",
        "!"
      ],
      ["#", "O", "X", "X", "!!", "#", "O", "X", "#", "!", "!", "!", "O", "#"],
      [
        "X",
        "!",
        "X",
        "O",
        "!",
        "!",
        "!!",
        "!!",
        "!!",
        "!!",
        "!!!",
        "!!!",
        "!",
        "X"
      ],
      [
        "!!!",
        "!",
        "!!",
        "O",
        "!!!",
        "X",
        "#",
        "#",
        "X",
        "X",
        "!",
        "!",
        "X",
        "!"
      ],
      [
        "!!!",
        "O",
        "!!!",
        "!!!",
        "O",
        "#",
        "!!",
        "!!!",
        "!",
        "!!!",
        "O",
        "O",
        "X",
        "!!!"
      ],
      [
        "!!",
        "X",
        "O",
        "!!!",
        "!!",
        "O",
        "#",
        "X",
        "O",
        "X",
        "!!",
        "X",
        "#",
        "!"
      ],
      [
        "X",
        "#",
        "!!!",
        "!!!",
        "!!",
        "#",
        "!",
        "!!",
        "O",
        "!",
        "O",
        "#",
        "!!!",
        "#"
      ],
      [
        "!",
        "#",
        "!",
        "!!!",
        "!!!",
        "X",
        "!",
        "X",
        "#",
        "!!",
        "!",
        "!!",
        "X",
        "!!!"
      ],
      [
        "!!!",
        "#",
        "#",
        "!!",
        "O",
        "!!",
        "#",
        "!!!",
        "#",
        "#",
        "!!",
        "#",
        "!",
        "O"
      ],
      [
        "!!!",
        "X",
        "O",
        "!!",
        "X",
        "!",
        "O",
        "X",
        "O",
        "!!!",
        "#",
        "#",
        "#",
        "#"
      ],
      [
        "X",
        "X",
        "!!!",
        "!!",
        "O",
        "#",
        "O",
        "#",
        "X",
        "X",
        "X",
        "!!!",
        "!",
        "!!!"
      ]
    ],
    32
  ],
  [
    [
      [
        "!",
        "#",
        "#",
        "O",
        "#",
        "!",
        "X",
        "!!",
        "!!!",
        "!!",
        "O",
        "!!",
        "!!!",
        "!",
        "!"
      ],
      [
        "#",
        "O",
        "!!",
        "!!",
        "X",
        "X",
        "!!!",
        "!",
        "!!!",
        "X",
        "!!!",
        "!!!",
        "#",
        "#",
        "!!!"
      ],
      [
        "X",
        "!!!",
        "!!!",
        "O",
        "!!!",
        "!!",
        "!",
        "#",
        "O",
        "!",
        "!!",
        "!!",
        "!",
        "O",
        "!"
      ],
      [
        "#",
        "!!",
        "O",
        "#",
        "!",
        "X",
        "X",
        "X",
        "X",
        "X",
        "O",
        "O",
        "!!",
        "!!",
        "X"
      ],
      [
        "O",
        "O",
        "!",
        "!",
        "!!",
        "!!!",
        "O",
        "O",
        "!",
        "O",
        "!!",
        "!!",
        "!!",
        "!!",
        "!!!"
      ],
      [
        "!!!",
        "O",
        "O",
        "!!!",
        "!",
        "X",
        "!!",
        "#",
        "!!",
        "!!!",
        "X",
        "!!",
        "!!!",
        "X",
        "!"
      ],
      [
        "!!!",
        "!!",
        "!",
        "#",
        "#",
        "!!",
        "!",
        "X",
        "O",
        "!!",
        "X",
        "!!",
        "!!",
        "#",
        "!!"
      ],
      [
        "X",
        "!!!",
        "!!",
        "O",
        "!!!",
        "O",
        "!",
        "!!",
        "X",
        "#",
        "!",
        "!!!",
        "!!",
        "O",
        "#"
      ],
      [
        "O",
        "O",
        "!",
        "X",
        "O",
        "!",
        "O",
        "X",
        "#",
        "!!!",
        "#",
        "!!",
        "!",
        "O",
        "O"
      ],
      [
        "#",
        "!!",
        "O",
        "!!",
        "!",
        "#",
        "!",
        "O",
        "!!",
        "X",
        "O",
        "!!!",
        "!!",
        "!",
        "!!!"
      ],
      [
        "!!",
        "!!!",
        "O",
        "!!",
        "O",
        "!",
        "!!",
        "!",
        "!!",
        "!!!",
        "X",
        "!!",
        "O",
        "!!!",
        "!!"
      ],
      [
        "!!!",
        "#",
        "!!",
        "#",
        "!!",
        "!!!",
        "#",
        "X",
        "#",
        "X",
        "X",
        "!!",
        "!",
        "!!!",
        "X"
      ],
      [
        "!",
        "X",
        "X",
        "!",
        "!!!",
        "!",
        "!",
        "O",
        "!",
        "X",
        "!!",
        "!!!",
        "!!!",
        "!",
        "!!"
      ],
      [
        "!!!",
        "!",
        "!",
        "!",
        "!",
        "!",
        "!!",
        "X",
        "!!!",
        "O",
        "!!!",
        "!!!",
        "!",
        "!!!",
        "#"
      ],
      [
        "!!!",
        "#",
        "!",
        "O",
        "!",
        "!!",
        "!",
        "!",
        "!!!",
        "!!!",
        "O",
        "!!!",
        "!",
        "!!",
        "!"
      ]
    ],
    0
  ],
  [
    [
      [
        "!",
        "!!!",
        "!",
        "!",
        "!!!",
        "!",
        "X",
        "!!!",
        "!!!",
        "X",
        "!!",
        "X",
        "O",
        "!!!",
        "!!!",
        "!",
        "#"
      ],
      [
        "!!",
        "X",
        "!!!",
        "X",
        "X",
        "O",
        "!!!",
        "!!!",
        "X",
        "!!",
        "!!",
        "!",
        "X",
        "!!",
        "!!",
        "X",
        "!!!"
      ],
      [
        "!!",
        "#",
        "#",
        "!",
        "X",
        "X",
        "X",
        "#",
        "!!",
        "#",
        "X",
        "!!",
        "!!!",
        "!",
        "X",
        "!!!",
        "X"
      ],
      [
        "!!!",
        "!!",
        "O",
        "#",
        "O",
        "!",
        "!!!",
        "!!",
        "X",
        "#",
        "X",
        "!!!",
        "!!!",
        "X",
        "#",
        "X",
        "O"
      ],
      [
        "X",
        "O",
        "!",
        "!!",
        "#",
        "!",
        "X",
        "#",
        "!!!",
        "!!!",
        "O",
        "!",
        "X",
        "!",
        "!",
        "!!",
        "#"
      ],
      [
        "#",
        "!",
        "!!",
        "!!!",
        "!!!",
        "!!!",
        "O",
        "!!",
        "!",
        "!",
        "!!",
        "!",
        "!!!",
        "#",
        "O",
        "!!!",
        "O"
      ],
      [
        "!",
        "!",
        "!!",
        "X",
        "O",
        "!",
        "!!",
        "!!!",
        "!!",
        "!!!",
        "!!!",
        "!",
        "X",
        "X",
        "!!!",
        "!",
        "O"
      ],
      [
        "#",
        "X",
        "!!!",
        "!!",
        "!",
        "!!",
        "!!!",
        "X",
        "O",
        "#",
        "!!!",
        "O",
        "X",
        "X",
        "!!!",
        "O",
        "!!"
      ],
      [
        "!",
        "!!",
        "!!!",
        "!!!",
        "!",
        "!!!",
        "!",
        "!!!",
        "X",
        "!!!",
        "O",
        "#",
        "#",
        "!",
        "O",
        "O",
        "X"
      ],
      [
        "O",
        "X",
        "!",
        "O",
        "X",
        "!",
        "O",
        "!",
        "!!!",
        "#",
        "#",
        "!!",
        "#",
        "#",
        "X",
        "X",
        "#"
      ],
      [
        "#",
        "#",
        "X",
        "#",
        "!!!",
        "!!",
        "!!!",
        "!!",
        "X",
        "O",
        "O",
        "!",
        "!!!",
        "O",
        "!!",
        "!!",
        "O"
      ],
      [
        "#",
        "O",
        "O",
        "O",
        "#",
        "!",
        "!",
        "O",
        "!!!",
        "!!!",
        "!!",
        "!!",
        "O",
        "!!!",
        "!!!",
        "X",
        "O"
      ],
      [
        "O",
        "X",
        "!!",
        "O",
        "!!",
        "!",
        "!!!",
        "X",
        "#",
        "!!",
        "!!!",
        "O",
        "#",
        "!",
        "!!",
        "#",
        "O"
      ],
      [
        "!",
        "!",
        "X",
        "!!!",
        "O",
        "#",
        "#",
        "X",
        "X",
        "!!",
        "!",
        "!!",
        "!",
        "!!",
        "!!!",
        "!",
        "!!"
      ],
      [
        "!!!",
        "!",
        "X",
        "!",
        "O",
        "!!!",
        "O",
        "!!",
        "O",
        "#",
        "X",
        "!!",
        "O",
        "!",
        "X",
        "O",
        "O"
      ],
      [
        "#",
        "X",
        "!",
        "O",
        "!!!",
        "!!",
        "!",
        "X",
        "!",
        "X",
        "!!!",
        "!",
        "X",
        "!",
        "!",
        "X",
        "X"
      ],
      [
        "!",
        "O",
        "X",
        "#",
        "#",
        "#",
        "X",
        "!!!",
        "!",
        "!!",
        "!!!",
        "O",
        "#",
        "!",
        "!!!",
        "!!!",
        "X"
      ]
    ],
    0
  ],
  [
    [
      ["X", "!!!", "#", "#", "!", "#", "!"],
      ["!", "!", "X", "X", "#", "O", "!!!"],
      ["#", "!", "!!!", "X", "O", "!!!", "#"],
      ["!!!", "O", "#", "O", "#", "O", "!!!"],
      ["!!!", "!!", "!", "X", "#", "!!!", "!!!"],
      ["O", "!!", "!!!", "!!!", "X", "#", "X"],
      ["O", "X", "!", "!!!", "!!!", "#", "X"]
    ],
    7
  ],
  [
    [
      [
        "X",
        "!!!",
        "O",
        "!!!",
        "O",
        "!",
        "!!!",
        "!!",
        "X",
        "O",
        "!!",
        "#",
        "!!",
        "!!!",
        "!!",
        "#",
        "#",
        "#",
        "X",
        "O"
      ],
      [
        "X",
        "!",
        "!!!",
        "!!!",
        "#",
        "#",
        "#",
        "X",
        "O",
        "X",
        "X",
        "!!",
        "!",
        "X",
        "X",
        "!!!",
        "!!",
        "!!!",
        "X",
        "#"
      ],
      [
        "!!!",
        "X",
        "O",
        "!!",
        "!!!",
        "!!!",
        "!",
        "!!!",
        "O",
        "!!!",
        "#",
        "!",
        "!",
        "!!!",
        "!!",
        "!!",
        "!!",
        "!",
        "O",
        "!"
      ],
      [
        "!!",
        "X",
        "X",
        "!!",
        "X",
        "!!",
        "!!!",
        "!!",
        "O",
        "#",
        "!!!",
        "!!!",
        "!!",
        "#",
        "O",
        "X",
        "!!",
        "!",
        "!",
        "#"
      ],
      [
        "X",
        "!",
        "#",
        "!",
        "O",
        "!!",
        "X",
        "O",
        "!",
        "#",
        "!!!",
        "!!",
        "!",
        "#",
        "X",
        "!!",
        "!!!",
        "!",
        "O",
        "O"
      ],
      [
        "O",
        "!!!",
        "O",
        "X",
        "#",
        "O",
        "#",
        "!!",
        "!!!",
        "!!",
        "X",
        "!!!",
        "X",
        "X",
        "!!!",
        "!!!",
        "!",
        "X",
        "O",
        "!!!"
      ],
      [
        "X",
        "!!!",
        "!!",
        "O",
        "#",
        "O",
        "!!",
        "X",
        "!!",
        "!!",
        "!!!",
        "O",
        "!",
        "#",
        "!!!",
        "!!!",
        "#",
        "X",
        "!",
        "!!!"
      ],
      [
        "!!!",
        "!!!",
        "O",
        "#",
        "!!",
        "!",
        "#",
        "O",
        "X",
        "#",
        "X",
        "!",
        "!!!",
        "O",
        "!!!",
        "!!",
        "!",
        "!!",
        "O",
        "!"
      ],
      [
        "!",
        "O",
        "O",
        "O",
        "!",
        "O",
        "!!",
        "!",
        "!!",
        "!",
        "#",
        "!",
        "!!",
        "X",
        "!",
        "#",
        "X",
        "!!!",
        "#",
        "!!"
      ],
      [
        "!!!",
        "!!",
        "#",
        "O",
        "!!",
        "X",
        "#",
        "!!!",
        "X",
        "O",
        "!!!",
        "X",
        "!!",
        "X",
        "X",
        "#",
        "!!!",
        "!!",
        "!",
        "#"
      ],
      [
        "O",
        "!!",
        "X",
        "!!",
        "X",
        "#",
        "O",
        "#",
        "!",
        "!",
        "!!!",
        "O",
        "O",
        "!!!",
        "!!!",
        "#",
        "!!",
        "!!",
        "!!",
        "O"
      ],
      [
        "O",
        "#",
        "!!!",
        "#",
        "X",
        "!",
        "!!",
        "!!",
        "!!!",
        "X",
        "!",
        "#",
        "#",
        "O",
        "X",
        "#",
        "O",
        "!",
        "!!",
        "X"
      ],
      [
        "O",
        "!!",
        "!!!",
        "!",
        "!",
        "#",
        "!!",
        "!!!",
        "X",
        "!!",
        "#",
        "O",
        "!!!",
        "!!!",
        "#",
        "#",
        "O",
        "#",
        "O",
        "O"
      ],
      [
        "!",
        "#",
        "X",
        "!",
        "!!!",
        "!!",
        "!!",
        "#",
        "!",
        "#",
        "O",
        "!!",
        "!!!",
        "!!!",
        "!!!",
        "!",
        "!",
        "!",
        "!!!",
        "!"
      ],
      [
        "#",
        "!",
        "O",
        "X",
        "!!!",
        "X",
        "O",
        "!!!",
        "!!!",
        "!!",
        "X",
        "!!",
        "!!",
        "!",
        "!!!",
        "X",
        "!!!",
        "!",
        "!!",
        "X"
      ],
      [
        "!",
        "!!!",
        "X",
        "!",
        "!!!",
        "!!!",
        "!!",
        "!!!",
        "#",
        "X",
        "!!!",
        "!!",
        "#",
        "X",
        "!!",
        "O",
        "O",
        "#",
        "#",
        "#"
      ],
      [
        "!!!",
        "X",
        "!",
        "!",
        "O",
        "!!",
        "O",
        "X",
        "O",
        "O",
        "!",
        "X",
        "#",
        "!",
        "!",
        "O",
        "!!!",
        "#",
        "!",
        "!"
      ],
      [
        "O",
        "#",
        "!!",
        "X",
        "!!",
        "!",
        "O",
        "!",
        "!!!",
        "!",
        "O",
        "O",
        "O",
        "#",
        "!",
        "O",
        "!!!",
        "X",
        "!!!",
        "X"
      ],
      [
        "O",
        "!",
        "!!!",
        "!!",
        "!!",
        "#",
        "!!!",
        "!",
        "#",
        "!!",
        "O",
        "O",
        "O",
        "X",
        "O",
        "O",
        "!!!",
        "X",
        "#",
        "!!"
      ],
      [
        "!",
        "O",
        "!",
        "!",
        "#",
        "!",
        "O",
        "O",
        "X",
        "O",
        "!!",
        "!",
        "!!!",
        "!!!",
        "#",
        "!!!",
        "!!",
        "!",
        "!",
        "!!"
      ]
    ],
    0
  ],
  [
    [
      ["O", "!!!", "!", "!", "!!!", "!", "#", "!!"],
      ["!!", "#", "O", "!!", "X", "#", "!!!", "!!"],
      ["!!!", "#", "!!!", "!!!", "!!!", "!!!", "!!!", "!!"],
      ["!", "!!", "X", "O", "!", "O", "#", "#"],
      ["#", "!!!", "#", "O", "X", "!!", "X", "#"],
      ["!!!", "!!", "#", "O", "!!!", "X", "!!", "!"],
      ["#", "!!!", "O", "X", "#", "#", "!!!", "!!!"],
      ["!!", "#", "!!!", "!", "X", "!!!", "!", "O"]
    ],
    0
  ],
  [
    [
      [
        "!!",
        "!",
        "!!!",
        "X",
        "!!!",
        "X",
        "X",
        "O",
        "X",
        "!!!",
        "#",
        "#",
        "X",
        "O"
      ],
      ["!", "!", "O", "!!", "O", "#", "!", "!!", "!", "!", "#", "X", "X", "X"],
      [
        "!",
        "O",
        "!!",
        "O",
        "!",
        "!!!",
        "#",
        "#",
        "!",
        "!!",
        "!",
        "X",
        "!!!",
        "!!!"
      ],
      [
        "O",
        "!!!",
        "O",
        "!!",
        "O",
        "#",
        "!!",
        "#",
        "!!!",
        "O",
        "#",
        "#",
        "!!!",
        "O"
      ],
      [
        "!!!",
        "O",
        "!!",
        "!!!",
        "!!!",
        "O",
        "X",
        "X",
        "#",
        "!!",
        "!",
        "!!",
        "#",
        "!"
      ],
      [
        "!!",
        "X",
        "#",
        "!",
        "!",
        "!!",
        "!!!",
        "X",
        "!!!",
        "X",
        "X",
        "!!!",
        "!!!",
        "!!"
      ],
      ["#", "X", "X", "X", "#", "O", "X", "!!!", "!", "!", "!!", "X", "#", "O"],
      [
        "#",
        "!!!",
        "!!",
        "!!",
        "!",
        "O",
        "!",
        "!",
        "!",
        "!",
        "X",
        "O",
        "X",
        "!!"
      ],
      [
        "X",
        "O",
        "O",
        "!",
        "X",
        "#",
        "X",
        "#",
        "!!",
        "O",
        "!!",
        "#",
        "!!!",
        "O"
      ],
      [
        "X",
        "#",
        "!!!",
        "#",
        "O",
        "X",
        "#",
        "!",
        "!!!",
        "!!!",
        "#",
        "#",
        "O",
        "#"
      ],
      [
        "#",
        "O",
        "#",
        "!!!",
        "O",
        "#",
        "X",
        "!!",
        "#",
        "!!",
        "X",
        "O",
        "!!",
        "!!"
      ],
      [
        "#",
        "!",
        "!!!",
        "!",
        "O",
        "!!",
        "!",
        "!",
        "!!",
        "X",
        "O",
        "!!!",
        "#",
        "#"
      ],
      [
        "!!",
        "!",
        "#",
        "X",
        "X",
        "!",
        "!!",
        "O",
        "O",
        "O",
        "!!!",
        "X",
        "!!!",
        "#"
      ],
      [
        "X",
        "O",
        "!!!",
        "!!",
        "!!!",
        "X",
        "O",
        "X",
        "#",
        "!!!",
        "!!!",
        "#",
        "!!!",
        "!!!"
      ]
    ],
    42
  ],
  [
    [
      ["!!!", "#", "X", "!", "!!", "O", "X", "!!!", "!!!", "O", "#", "O"],
      ["!", "O", "!!!", "!!!", "!", "!!!", "#", "!!!", "X", "X", "!!!", "#"],
      ["!!", "!", "!", "!", "!!", "X", "O", "O", "X", "O", "!!!", "#"],
      ["!!!", "!", "!", "!!", "#", "!!!", "!!", "O", "#", "#", "X", "#"],
      ["X", "!", "!!!", "!!!", "!", "O", "!!", "#", "#", "!!", "X", "#"],
      ["!", "X", "!!!", "!", "!", "!", "O", "!!!", "X", "!!", "#", "!!!"],
      ["!!", "#", "#", "!!", "!", "!", "X", "X", "#", "!!", "O", "#"],
      ["O", "!", "O", "X", "!!!", "X", "!!", "X", "!", "#", "!", "O"],
      ["O", "!!!", "O", "X", "!", "!!", "O", "#", "!!!", "!", "!!!", "O"],
      ["#", "!!", "!", "O", "X", "!", "!", "!!!", "!!!", "!!!", "!!!", "!!"],
      ["#", "!!!", "#", "!!", "O", "!!", "!!!", "#", "X", "!!", "#", "X"],
      ["#", "#", "!", "X", "!", "!!!", "X", "O", "#", "!", "!", "X"]
    ],
    4
  ],
  [
    [
      ["!!!", "!", "X", "!!!", "!", "#", "!!", "!", "!", "!!", "O"],
      ["#", "X", "!", "!!!", "X", "!", "#", "!!", "!!!", "!!", "X"],
      ["!", "O", "!", "!!!", "#", "X", "X", "!!", "#", "!!!", "!!!"],
      ["#", "O", "!", "!", "!!!", "!", "#", "X", "O", "#", "!"],
      ["!", "X", "O", "X", "!!!", "!!!", "X", "!", "#", "#", "!"],
      ["X", "X", "!!", "X", "X", "X", "X", "!!", "O", "!!!", "O"],
      ["!!!", "!", "O", "!", "O", "!!", "X", "!!", "!", "#", "!"],
      ["!!", "X", "!!!", "!!", "!!", "#", "O", "X", "#", "X", "#"],
      ["X", "O", "!", "O", "O", "!!", "!", "!!!", "#", "#", "!!"],
      ["X", "O", "!!!", "#", "!!", "!", "#", "!!", "!!!", "!", "#"],
      ["#", "!!", "#", "!!", "O", "O", "#", "!", "!", "!!", "#"]
    ],
    23
  ],
  [
    [
      ["!!!", "!!", "X", "!!", "#", "!", "O"],
      ["!!", "!!!", "!!!", "O", "!!", "!!", "!"],
      ["!!!", "O", "!!!", "!", "!!!", "!!", "X"],
      ["!", "!!", "!", "!!", "!!!", "X", "#"],
      ["#", "!!", "!!!", "X", "O", "#", "X"],
      ["X", "X", "!", "X", "!!!", "X", "O"],
      ["O", "!", "!", "!!!", "#", "X", "O"]
    ],
    0
  ],
  [
    [
      ["!!", "!", "!!!", "!!!", "!!", "!", "X"],
      ["#", "!!", "!!", "#", "#", "!", "!!!"],
      ["X", "O", "X", "!", "!", "!", "X"],
      ["!!", "X", "!!", "!", "O", "!", "#"],
      ["!", "X", "!", "O", "O", "#", "O"],
      ["X", "!!!", "O", "X", "X", "#", "!"],
      ["!", "!", "#", "!!!", "O", "#", "!"]
    ],
    13
  ],
  [
    [
      [
        "O",
        "!!!",
        "!!",
        "X",
        "!!",
        "!!!",
        "#",
        "O",
        "#",
        "O",
        "!!",
        "!!!",
        "X",
        "O",
        "!",
        "#",
        "O",
        "X"
      ],
      [
        "!!!",
        "!",
        "!",
        "!",
        "!!!",
        "O",
        "X",
        "#",
        "!!!",
        "#",
        "X",
        "!",
        "O",
        "!",
        "#",
        "!!",
        "X",
        "!"
      ],
      [
        "!",
        "!",
        "!",
        "X",
        "!",
        "!!!",
        "X",
        "!!",
        "!!",
        "O",
        "#",
        "!!",
        "!!!",
        "X",
        "X",
        "!",
        "!!",
        "X"
      ],
      [
        "O",
        "O",
        "#",
        "!!",
        "X",
        "O",
        "X",
        "!!!",
        "O",
        "#",
        "!!",
        "X",
        "X",
        "!!!",
        "#",
        "#",
        "!",
        "#"
      ],
      [
        "O",
        "!!",
        "!!",
        "!",
        "#",
        "O",
        "!!",
        "!",
        "X",
        "#",
        "!!",
        "!!!",
        "!",
        "!",
        "!!!",
        "!",
        "#",
        "!!!"
      ],
      [
        "!",
        "#",
        "!!!",
        "!!",
        "!!!",
        "O",
        "!!!",
        "!",
        "!!!",
        "!!!",
        "#",
        "X",
        "!",
        "!!!",
        "O",
        "#",
        "O",
        "!!"
      ],
      [
        "X",
        "X",
        "O",
        "!!!",
        "!",
        "!",
        "!",
        "!",
        "#",
        "!",
        "#",
        "#",
        "!!",
        "!",
        "X",
        "X",
        "!!!",
        "#"
      ],
      [
        "#",
        "O",
        "!!!",
        "!!",
        "!!!",
        "X",
        "!!",
        "!!!",
        "!",
        "X",
        "!!!",
        "X",
        "!!",
        "!!",
        "!!!",
        "O",
        "!!!",
        "#"
      ],
      [
        "X",
        "X",
        "!",
        "O",
        "X",
        "!!!",
        "X",
        "!",
        "X",
        "!",
        "!!",
        "!!!",
        "#",
        "!!",
        "!!!",
        "#",
        "!!",
        "!!!"
      ],
      [
        "!!!",
        "X",
        "!",
        "!!",
        "!!!",
        "X",
        "!!!",
        "O",
        "!!!",
        "!!!",
        "X",
        "O",
        "O",
        "!!",
        "!!!",
        "!",
        "!",
        "!!"
      ],
      [
        "!",
        "!!",
        "O",
        "!",
        "!!!",
        "#",
        "!",
        "!!",
        "!",
        "!",
        "X",
        "O",
        "#",
        "!!",
        "X",
        "!!",
        "!!!",
        "!"
      ],
      [
        "!",
        "X",
        "!",
        "O",
        "X",
        "!!!",
        "#",
        "O",
        "#",
        "!",
        "!",
        "O",
        "!!!",
        "O",
        "!!",
        "!!!",
        "O",
        "#"
      ],
      [
        "#",
        "!",
        "O",
        "#",
        "!!!",
        "X",
        "O",
        "!",
        "!!!",
        "!",
        "!",
        "O",
        "#",
        "!!",
        "!",
        "!!",
        "O",
        "!!"
      ],
      [
        "#",
        "!!!",
        "!!",
        "!!",
        "O",
        "!!",
        "!!",
        "X",
        "!!!",
        "#",
        "!!",
        "X",
        "!",
        "!!",
        "!!!",
        "!!",
        "#",
        "!!"
      ],
      [
        "!!!",
        "!!",
        "!!!",
        "X",
        "!",
        "O",
        "!",
        "!",
        "!",
        "O",
        "!!",
        "!",
        "O",
        "X",
        "!",
        "!",
        "!!",
        "!!!"
      ],
      [
        "!",
        "O",
        "!!!",
        "!!",
        "!!!",
        "!!",
        "!!!",
        "!!!",
        "X",
        "!!",
        "X",
        "!!!",
        "!!!",
        "!",
        "X",
        "O",
        "!!!",
        "!"
      ],
      [
        "O",
        "!!",
        "#",
        "!!",
        "#",
        "!",
        "O",
        "O",
        "#",
        "O",
        "!",
        "O",
        "#",
        "!",
        "!",
        "!!",
        "X",
        "!!!"
      ],
      [
        "X",
        "!!!",
        "!!",
        "!!!",
        "O",
        "O",
        "O",
        "#",
        "O",
        "O",
        "X",
        "!!",
        "O",
        "O",
        "O",
        "O",
        "!!",
        "!!!"
      ]
    ],
    0
  ],
  [
    [
      ["!!!", "X", "#", "!", "O", "!!", "X", "O", "X", "X", "O", "X"],
      ["#", "X", "X", "X", "X", "!!!", "!!!", "!!", "!!!", "O", "X", "!!!"],
      ["!!!", "#", "!", "O", "!", "#", "!!", "!", "!!", "X", "X", "!!"],
      ["X", "X", "!", "X", "!!!", "!", "O", "X", "X", "O", "X", "O"],
      ["!!", "!", "!!!", "O", "X", "#", "!!", "!!!", "!!!", "#", "!", "O"],
      ["#", "#", "O", "!!", "O", "#", "#", "!!", "O", "#", "X", "X"],
      ["O", "#", "#", "!!", "#", "!", "!!", "!!!", "!!", "O", "!", "!"],
      ["!!!", "O", "X", "!!", "#", "O", "O", "!!", "!!!", "X", "#", "#"],
      ["O", "#", "!!", "!", "O", "!!!", "X", "X", "!!!", "O", "!", "!!!"],
      ["X", "O", "#", "!!!", "!!", "X", "!", "#", "!!!", "!!!", "!!", "!!!"],
      ["#", "O", "O", "!!!", "!!", "!!", "!", "O", "!", "O", "#", "!!"],
      ["O", "#", "!", "!!!", "#", "X", "#", "#", "#", "!!", "O", "#"]
    ],
    62
  ],
  [
    [
      [
        "O",
        "#",
        "X",
        "X",
        "O",
        "!!!",
        "#",
        "X",
        "O",
        "!!!",
        "!",
        "!!",
        "X",
        "X",
        "O",
        "X",
        "!!"
      ],
      [
        "O",
        "O",
        "O",
        "!",
        "!!",
        "O",
        "X",
        "#",
        "O",
        "O",
        "!",
        "#",
        "!!",
        "!!!",
        "!",
        "!",
        "X"
      ],
      [
        "X",
        "O",
        "#",
        "!!!",
        "#",
        "!",
        "!!!",
        "!!",
        "!!",
        "!",
        "O",
        "!!!",
        "!",
        "!",
        "X",
        "X",
        "O"
      ],
      [
        "O",
        "!",
        "#",
        "!!!",
        "!!!",
        "#",
        "X",
        "O",
        "!!!",
        "!!!",
        "!!!",
        "O",
        "!",
        "!!",
        "#",
        "#",
        "O"
      ],
      [
        "!",
        "!!!",
        "!!",
        "#",
        "!!",
        "!",
        "!!!",
        "!",
        "O",
        "!!",
        "X",
        "X",
        "!",
        "#",
        "O",
        "X",
        "#"
      ],
      [
        "X",
        "!",
        "#",
        "!!!",
        "!",
        "!!!",
        "O",
        "X",
        "X",
        "!!",
        "!",
        "O",
        "O",
        "X",
        "O",
        "X",
        "!!!"
      ],
      [
        "#",
        "X",
        "X",
        "O",
        "!",
        "#",
        "!!!",
        "#",
        "#",
        "!!!",
        "!!!",
        "!",
        "!!",
        "!",
        "!!",
        "!!",
        "!!!"
      ],
      [
        "!!!",
        "#",
        "X",
        "!!!",
        "!!!",
        "O",
        "!",
        "O",
        "O",
        "X",
        "O",
        "O",
        "O",
        "!!",
        "X",
        "!",
        "X"
      ],
      [
        "!",
        "X",
        "X",
        "!!!",
        "O",
        "!",
        "!",
        "!",
        "!!",
        "O",
        "!!",
        "!!!",
        "#",
        "#",
        "!!",
        "!!",
        "!"
      ],
      [
        "!",
        "!!",
        "O",
        "X",
        "!!!",
        "X",
        "X",
        "!!!",
        "!!!",
        "X",
        "!",
        "O",
        "O",
        "!!",
        "!!",
        "#",
        "O"
      ],
      [
        "!!",
        "#",
        "X",
        "X",
        "#",
        "#",
        "O",
        "!",
        "O",
        "!!!",
        "!!",
        "!",
        "!!!",
        "!",
        "!",
        "!!!",
        "!"
      ],
      [
        "X",
        "!",
        "!!",
        "!!",
        "O",
        "!!!",
        "!!!",
        "!!!",
        "X",
        "!!",
        "!!",
        "!!",
        "#",
        "X",
        "X",
        "!",
        "X"
      ],
      [
        "!!!",
        "!",
        "X",
        "X",
        "#",
        "O",
        "!",
        "!!",
        "#",
        "!!",
        "!",
        "!!",
        "!",
        "!!",
        "O",
        "X",
        "!!!"
      ],
      [
        "#",
        "!",
        "!!",
        "#",
        "O",
        "!",
        "!",
        "!",
        "X",
        "!",
        "!",
        "O",
        "X",
        "!",
        "X",
        "X",
        "!"
      ],
      [
        "#",
        "X",
        "!!!",
        "!!",
        "O",
        "#",
        "#",
        "!!!",
        "!!!",
        "!!!",
        "O",
        "X",
        "!!",
        "!!",
        "!!!",
        "!!",
        "X"
      ],
      [
        "!!",
        "X",
        "!!",
        "X",
        "O",
        "!",
        "!!!",
        "O",
        "!!",
        "!",
        "X",
        "!",
        "!",
        "O",
        "X",
        "O",
        "#"
      ],
      [
        "!!",
        "#",
        "X",
        "X",
        "X",
        "O",
        "X",
        "!!",
        "!!!",
        "!",
        "!!!",
        "X",
        "!!!",
        "!!",
        "X",
        "X",
        "!!"
      ]
    ],
    0
  ],
  [
    [
      [
        "X",
        "!",
        "!!!",
        "O",
        "!!!",
        "!!",
        "!",
        "#",
        "X",
        "O",
        "X",
        "O",
        "!",
        "O",
        "O",
        "!!",
        "O"
      ],
      [
        "!",
        "O",
        "#",
        "!!!",
        "X",
        "X",
        "#",
        "!!!",
        "!",
        "!",
        "!",
        "!!",
        "O",
        "!!!",
        "X",
        "X",
        "O"
      ],
      [
        "!!!",
        "!",
        "O",
        "X",
        "X",
        "#",
        "!",
        "#",
        "!!",
        "#",
        "!!",
        "O",
        "X",
        "O",
        "!!!",
        "#",
        "!!"
      ],
      [
        "!!",
        "X",
        "!!!",
        "!!!",
        "X",
        "O",
        "#",
        "!",
        "O",
        "!!!",
        "!",
        "!",
        "O",
        "!!!",
        "!!!",
        "!",
        "#"
      ],
      [
        "!",
        "!!",
        "#",
        "#",
        "O",
        "#",
        "X",
        "!!!",
        "O",
        "!",
        "!!!",
        "O",
        "X",
        "!",
        "!!",
        "X",
        "X"
      ],
      [
        "!",
        "X",
        "!",
        "O",
        "#",
        "!",
        "!",
        "X",
        "!",
        "!!",
        "!",
        "X",
        "#",
        "#",
        "!",
        "!!!",
        "!!!"
      ],
      [
        "X",
        "!!",
        "!!",
        "!!!",
        "!!!",
        "#",
        "!",
        "!!",
        "#",
        "O",
        "!!!",
        "X",
        "X",
        "#",
        "!!!",
        "#",
        "#"
      ],
      [
        "O",
        "!!!",
        "X",
        "!!",
        "X",
        "X",
        "!",
        "O",
        "!!",
        "O",
        "!!",
        "O",
        "!",
        "!!!",
        "!!",
        "!!!",
        "!!"
      ],
      [
        "!",
        "!!!",
        "O",
        "!",
        "#",
        "X",
        "X",
        "O",
        "!",
        "#",
        "!!",
        "!!",
        "O",
        "!!",
        "!!",
        "!!",
        "!!"
      ],
      [
        "!!!",
        "!!!",
        "O",
        "#",
        "!!!",
        "!!",
        "!!!",
        "X",
        "X",
        "!!",
        "#",
        "!!!",
        "#",
        "O",
        "X",
        "X",
        "X"
      ],
      [
        "!!!",
        "O",
        "!!",
        "#",
        "!",
        "!!",
        "!!!",
        "!",
        "!",
        "#",
        "!!!",
        "O",
        "X",
        "!!!",
        "!!",
        "O",
        "!!!"
      ],
      [
        "!!",
        "O",
        "!!",
        "!",
        "!",
        "!!",
        "#",
        "#",
        "#",
        "!!",
        "!!!",
        "!!",
        "X",
        "!!",
        "#",
        "O",
        "!!"
      ],
      [
        "O",
        "O",
        "O",
        "#",
        "O",
        "O",
        "#",
        "!!!",
        "#",
        "O",
        "#",
        "!!!",
        "#",
        "X",
        "!!!",
        "!!",
        "O"
      ],
      [
        "X",
        "!!!",
        "O",
        "!",
        "X",
        "X",
        "X",
        "!",
        "#",
        "!!!",
        "!!",
        "!!",
        "!!!",
        "O",
        "!!!",
        "!!",
        "!!!"
      ],
      [
        "!!!",
        "O",
        "#",
        "!!",
        "#",
        "!!",
        "X",
        "O",
        "!!!",
        "O",
        "#",
        "!",
        "O",
        "!!",
        "X",
        "!",
        "#"
      ],
      [
        "!!",
        "!",
        "!!",
        "!",
        "!!!",
        "#",
        "O",
        "!!",
        "O",
        "X",
        "#",
        "X",
        "#",
        "#",
        "!!!",
        "!!",
        "O"
      ],
      [
        "!!",
        "X",
        "O",
        "!!",
        "O",
        "#",
        "!",
        "!!",
        "#",
        "!!",
        "O",
        "#",
        "#",
        "#",
        "#",
        "!!!",
        "X"
      ]
    ],
    25
  ]
];

describe("checkScore", () => {
  describe("Return sum of all symbols", () => {
    test.each(data)("checkScore(%p) = %i", (arr, result) => {
      let actual = checkScore(arr);

      expect(actual).toEqual(result);
    });
  });
});
