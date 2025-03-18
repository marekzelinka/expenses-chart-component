import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from "@/components/ui/chart";
import type { Expense } from "@/data";
import { toCurrencyFromCent } from "@/utils/currency";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

export function ExpensesChart({ expenses }: { expenses: Expense[] }) {
  const chartConfig = {
    amount: {
      label: "Amount",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={expenses}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickFormatter={(day: string) => day[0].toUpperCase() + day.slice(1)}
        />
        <ChartTooltip content={() => null} />
        <Bar dataKey="amount" fill="var(--color-amount)" radius={8}>
          <LabelList
            position="top"
            offset={6}
            fill="var(--color-foreground)"
            formatter={(amount: number) => toCurrencyFromCent(amount)}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
