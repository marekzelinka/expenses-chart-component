export type Expense = {
  day: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
  amount: number;
};

export type Data = {
  expenses: Expense[];
  balance: number;
  spending: {
    amount: number;
    change: number;
    changeType: "positive" | "negative";
  };
};

export const data = {
  expenses: [
    {
      day: "mon",
      amount: 1745,
    },
    {
      day: "tue",
      amount: 3491,
    },
    {
      day: "wed",
      amount: 5236,
    },
    {
      day: "thu",
      amount: 3107,
    },
    {
      day: "fri",
      amount: 2339,
    },
    {
      day: "sat",
      amount: 4328,
    },
    {
      day: "sun",
      amount: 2548,
    },
  ],
  balance: 92148,
  spending: {
    amount: 47833,
    change: 0.024,
    changeType: "negative",
  },
} satisfies Data;
