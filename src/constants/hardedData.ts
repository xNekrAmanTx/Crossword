import { Interface } from "readline";

const initialData = [
  {
    source_language: "en",
    word: "man",
    character_grid: [
      ["i", "q", "\u00ed", "l", "n", "n", "m", "\u00f3"],
      ["f", "t", "v", "\u00f1", "b", "m", "h", "a"],
      ["h", "j", "\u00e9", "t", "e", "t", "o", "z"],
      ["x", "\u00e1", "o", "i", "e", "\u00f1", "m", "\u00e9"],
      ["q", "\u00e9", "i", "\u00f3", "q", "s", "b", "s"],
      ["c", "u", "m", "y", "v", "l", "r", "x"],
      ["\u00fc", "\u00ed", "\u00f3", "m", "o", "t", "e", "k"],
      ["a", "g", "r", "n", "n", "\u00f3", "s", "m"],
    ],
    word_locations: {
      "6,1,6,2,6,3,6,4,6,5,6,6": "hombre",
    },
    target_language: "es",
  },
  {
    source_language: "en",
    word: "woman",
    character_grid: [
      ["v", "\u00e1", "q", "t", "b", "f", "q"],
      ["y", "x", "i", "a", "\u00fc", "v", "a"],
      ["r", "d", "y", "\u00ed", "t", "n", "a"],
      ["f", "v", "\u00f3", "w", "l", "a", "v"],
      ["b", "u", "\u00fa", "j", "q", "h", "\u00e1"],
      ["c", "o", "m", "u", "j", "e", "r"],
      ["h", "o", "d", "\u00fa", "w", "d", "\u00fc"],
    ],
    word_locations: {
      "2,5,3,5,4,5,5,5,6,5": "mujer",
    },
    target_language: "es",
  },

  {
    source_language: "en",
    word: "boy",
    character_grid: [
      ["x", "c", "e", "x", "c", "i", "o"],
      ["e", "z", "q", "r", "h", "w", "y"],
      ["\u00f1", "\u00e9", "\u00f1", "w", "i", "n", "\u00e1"],
      ["o", "l", "a", "\u00e1", "c", "i", "n"],
      ["r", "v", "\u00f1", "s", "o", "\u00f1", "w"],
      ["k", "m", "w", "a", "\u00fc", "o", "w"],
      ["\u00f3", "r", "\u00fa", "b", "l", "g", "\u00fa"],
    ],
    word_locations: {
      "5,2,5,3,5,4,5,5": "ni\u00f1o",
      "4,0,4,1,4,2,4,3,4,4": "chico",
    },
    target_language: "es",
  },

  {
    source_language: "en",
    word: "girl",
    character_grid: [
      ["o", "s", "\u00f3", "x", "h", "\u00f1", "h"],
      ["\u00fc", "r", "g", "o", "l", "\u00fa", "b"],
      ["a", "t", "c", "h", "i", "c", "a"],
      ["u", "\u00fa", "r", "w", "\u00e1", "t", "\u00e9"],
      ["p", "n", "v", "r", "q", "m", "l"],
      ["f", "d", "t", "e", "a", "\u00f3", "l"],
      ["u", "t", "n", "i", "\u00f1", "a", "s"],
    ],
    word_locations: {
      "2,2,3,2,4,2,5,2,6,2": "chica",
      "2,6,3,6,4,6,5,6": "ni\u00f1a",
    },
    target_language: "es",
  },
  {
    source_language: "en",
    word: "am",
    character_grid: [
      ["d", "c", "e", "h", "p"],
      ["f", "e", "\u00fc", "p", "t"],
      ["s", "s", "\u00f3", "\u00ed", "l"],
      ["o", "s", "\u00ed", "\u00f1", "a"],
      ["y", "g", "i", "o", "n"],
    ],
    word_locations: {
      "0,2,0,3,0,4": "soy",
    },
    target_language: "es",
  },
  {
    source_language: "en",
    word: "she",
    character_grid: [
      ["z", "n", "w", "f", "m", "\u00e9"],
      ["d", "\u00f3", "q", "w", "n", "e"],
      ["z", "\u00e1", "v", "e", "\u00f3", "l"],
      ["r", "c", "z", "z", "m", "l"],
      ["\u00fc", "m", "\u00e1", "\u00fc", "n", "a"],
      ["e", "a", "e", "x", "\u00f1", "h"],
    ],
    word_locations: {
      "5,1,5,2,5,3,5,4": "ella",
    },
    target_language: "es",
  },
  {
    source_language: "en",
    word: "apple",
    character_grid: [
      ["\u00fa", "k", "\u00fc", "b", "\u00ed", "n", "z", "d", "o"],
      ["u", "\u00e1", "n", "g", "e", "y", "z", "o", "\u00f1"],
      ["o", "\u00e9", "\u00fa", "\u00e1", "v", "e", "x", "u", "m"],
      ["c", "w", "d", "z", "t", "k", "m", "l", "a"],
      ["u", "b", "o", "w", "\u00ed", "a", "u", "q", "n"],
      ["g", "s", "m", "e", "c", "n", "k", "\u00fa", "z"],
      ["a", "o", "v", "t", "p", "\u00fa", "\u00e9", "k", "a"],
      ["f", "j", "i", "j", "n", "i", "b", "\u00f3", "n"],
      ["s", "q", "l", "j", "j", "f", "q", "g", "a"],
    ],
    word_locations: {
      "8,2,8,3,8,4,8,5,8,6,8,7,8,8": "manzana",
    },
    target_language: "es",
  },
  {
    source_language: "en",
    word: "eat",
    character_grid: [
      ["i", "a", "c", "j", "r", "w"],
      ["k", "b", "n", "o", "u", "v"],
      ["v", "x", "z", "f", "m", "a"],
      ["u", "l", "o", "p", "e", "o"],
      ["l", "\u00fa", "\u00e9", "q", "j", "e"],
      ["a", "h", "\u00fa", "l", "k", "w"],
    ],
    word_locations: {
      "2,0,3,1,4,2,5,3": "como",
    },
    target_language: "es",
  },
  {
    source_language: "en",
    word: "bread",
    character_grid: [
      ["\u00fc", "\u00e1", "p", "a", "n"],
      ["k", "a", "k", "m", "l"],
      ["a", "x", "q", "e", "h"],
      ["p", "s", "a", "j", "\u00ed"],
      ["\u00e1", "q", "l", "j", "l"],
    ],
    word_locations: {
      "2,0,3,0,4,0": "pan",
    },
    target_language: "es",
  },
];

type DataType = Array<{
  source_language: string,
  word: string,
  character_grid: Array<Array<string>>,
  word_locations: any,
  target_language: string,
}>

export const data : DataType = initialData.map(({ character_grid, ...rest }) =>
  ({character_grid.map((row) => row.map((str) => decodeURI(str))), ...rest})
);
