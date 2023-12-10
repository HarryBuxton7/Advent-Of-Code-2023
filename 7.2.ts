import { readFileSync } from "fs";

function readfile(filename: string) {
  const file = readFileSync(filename, "utf-8").trim();
  const lines = file.split(/\r\n|\n/);
  return lines;
}

main(readfile("example7.txt"));

function main(linesArray) {
  const cardValues = new Map();
  for (const line of linesArray) {
    const [card, value] = line.split(" ");
    cardValues.set(card, value);
  }

  let handSortedByType = [[], [], [], [], [], [], []];
  for (const line of linesArray) {
    const [card, value] = line.split(" ");
    handSortedByType = valueAndPlaceCard(card, value, handSortedByType);
  }

  let unjoinedSortedHands = [[], [], [], [], [], [], []];

  for (let i = 0; i < handSortedByType.length; i++) {
    if (handSortedByType[i].length === 0) {
      continue;
    }
    unjoinedSortedHands[i].push(sortArray(handSortedByType[i]));
  }

  let joinedSortedHand = [];
  for (const hand of unjoinedSortedHands) {
    for (const subHand of hand) {
      for (const card of subHand) {
        joinedSortedHand.push(card);
      }
    }
  }
  let sum = 0;

  for (let i = 0; i < joinedSortedHand.length; i++) {
    sum += cardValues.get(joinedSortedHand[i]) * (i + 1);
  }
  console.log(sum);
}

function valueAndPlaceCard(card: string, value: string, handSortedByType: any) {
  let cardCharacters: string[] = [];
  for (const char of card) {
    cardCharacters.push(char);
  }

  //counts number of duplicates, retrieved from https://bobbyhadz.com/blog/javascript-count-duplicates-in-array#:~:text=To%20count%20the%20duplicates%20in%20an%20array%3A&text=Copied!,%2C%20three%3A%201%7D%20console.
  const duplicatesList: any = cardCharacters.reduce((accumulator, value) => {
    return {
      ...accumulator,
      [value]: (accumulator[value] || 0) + 1,
    };
  }, {});
  const duplicateAmountsArray: number[] = Object.values(duplicatesList);
  if (Math.max(...duplicateAmountsArray) === 5) {
    handSortedByType[6].push(card);
    return handSortedByType;
  }
  if (Math.max(...duplicateAmountsArray) === 4) {
    if (duplicatesList.J === 1 || duplicatesList.J === 4) {
      handSortedByType[6].push(card);
      return handSortedByType;
    }
    handSortedByType[5].push(card);
    return handSortedByType;
  }

  if (
    Math.max(...duplicateAmountsArray) === 3 &&
    Object.values(duplicatesList).length === 2
  ) {
    if (duplicatesList.J === 2 || duplicatesList.J === 3) {
      handSortedByType[6].push(card);
      return handSortedByType;
    }
    handSortedByType[4].push(card);
    return handSortedByType;
  }

  if (
    Math.max(...duplicateAmountsArray) === 3 &&
    Object.values(duplicatesList).length === 3
  ) {
    if (duplicatesList.J === 3 || duplicatesList.J === 1) {
      handSortedByType[5].push(card);
      return handSortedByType;
    }
    handSortedByType[3].push(card);
    return handSortedByType;
  }

  if (
    Math.max(...duplicateAmountsArray) === 2 &&
    duplicateAmountsArray.length === 3
  ) {
    if (duplicatesList.J === 2) {
      handSortedByType[5].push(card);
      return handSortedByType;
    }
    if (duplicatesList.J === 1) {
      handSortedByType[4].push(card);
      return handSortedByType;
    }
    handSortedByType[2].push(card);
    return handSortedByType;
  }

  if (
    Math.max(...duplicateAmountsArray) === 2 &&
    duplicateAmountsArray.length === 4
  ) {
    if (duplicatesList.J === 1 || duplicatesList.J === 2) {
      handSortedByType[3].push(card);
      return handSortedByType;
    }
    handSortedByType[1].push(card);
    return handSortedByType;
  }

  if (Object.values(duplicatesList).length === 5) {
    if (duplicatesList.J === 1) {
      handSortedByType[1].push(card);
      return handSortedByType;
    }
    handSortedByType[0].push(card);
    return handSortedByType;
  }
}

function sortArray(cards: any) {
  cards = cards.map((card) => convertToSortable(card));
  cards.sort();
  cards = cards.map((card) => convertToOriginal(card));
  cards.reverse();
  return cards;
}

function convertToSortable(card: string) {
  card = card.replaceAll("A", "a");
  card = card.replaceAll("K", "b");
  card = card.replaceAll("Q", "c");
  card = card.replaceAll("J", "z");
  card = card.replaceAll("T", "e");
  card = card.replaceAll("9", "f");
  card = card.replaceAll("8", "g");
  card = card.replaceAll("7", "h");
  card = card.replaceAll("6", "i");
  card = card.replaceAll("5", "j");
  card = card.replaceAll("4", "k");
  card = card.replaceAll("3", "l");
  card = card.replaceAll("2", "m");
  return card;
}

function convertToOriginal(card: string) {
  card = card.replaceAll("a", "A");
  card = card.replaceAll("b", "K");
  card = card.replaceAll("c", "Q");
  card = card.replaceAll("z", "J");
  card = card.replaceAll("e", "T");
  card = card.replaceAll("f", "9");
  card = card.replaceAll("g", "8");
  card = card.replaceAll("h", "7");
  card = card.replaceAll("i", "6");
  card = card.replaceAll("j", "5");
  card = card.replaceAll("k", "4");
  card = card.replaceAll("l", "3");
  card = card.replaceAll("m", "2");
  return card;
}
