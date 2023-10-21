import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateDataSet(length: number) {
  const randomNumbers = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.random() * 100;
    randomNumbers.push(Math.ceil(randomNumber));
  }

  return randomNumbers;
}

enum Range {
  week= 7,
  month = 30,
    year = 12
}

export function generateDataLabels(input: Range) {
  switch (input) {
    case Range.week: {
      const datesArray = [];
      const today = new Date();

      for (let i = 1; i < (input+1); i++) {
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - i);
        datesArray.push(pastDate.toDateString());
      }

      return datesArray;
    }
    default:
      return []

  }
}

// php >>> js
export function arraySum(input: number[]) {
  return input.reduce((acc, value) => acc + value, 0)
}