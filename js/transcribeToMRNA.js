// Problem# 261
// Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA
// after transcription. DNA has the bases A, T, G and C, while RNA converts to U, A, C and G respectively.
// https://edabit.com/challenge/WxiJviEJGK52AFps3

const convertBase = (base) => {
  switch (base) {
    case "A":
      return "U";

    case "T":
      return "A";

    case "G":
      return "C";

    case "C":
      return "G";
  }
};

const dnaToRna = (dna) => dna.split("").map(convertBase).join("");

module.exports = dnaToRna;
