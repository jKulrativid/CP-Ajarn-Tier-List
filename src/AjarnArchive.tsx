export interface Ajarn {
  name: string;
  imageUrl: string;
}

export const demoAjarnList: Map<string, Ajarn[]> = new Map([
  [
    "S",
    [
      {
        name: "ATS",
        imageUrl:
          "http://mis.cp.eng.chula.ac.th/view.php?q=instructor/picture&key=00034157",
      },
    ],
  ],
  [
    "A",
    [
      {
        name: "PSA",
        imageUrl:
          "data:image/jpeg;base64,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",
      },
      {
        name: "ATT",
        imageUrl:
          "http://mis.cp.eng.chula.ac.th/view.php?q=instructor/picture&key=00032031",
      },
    ],
  ],
  [
    "B",
    [
      {
        name: "ECN",
        imageUrl:
          "http://mis.cp.eng.chula.ac.th/view.php?q=instructor/picture&key=10020620",
      },
      {
        name: "PSC",
        imageUrl:
          "http://mis.cp.eng.chula.ac.th/view.php?q=instructor/picture&key=1002309",
      },
    ],
  ],
  [
    "C",
    [
      {
        name: "TSV",
        imageUrl:
          "https://mis.cp.eng.chula.ac.th/view.php?q=instructor/picture&key=00040461",
      },
    ],
  ],
  [
    "D",
    [
      {
        name: "ASR",
        imageUrl:
          "http://mis.cp.eng.chula.ac.th/view.php?q=instructor/picture&key=10002126",
      },
      {
        name: "NNN",
        imageUrl:
          "http://mis.cp.eng.chula.ac.th/view.php?q=instructor/picture&key=10013658",
      },
    ],
  ],
  [
    "F",
    [
      {
        name: "PJW",
        imageUrl:
          "http://mis.cp.eng.chula.ac.th/view.php?q=instructor/picture&key=10014333",
      },
    ],
  ],
]);
