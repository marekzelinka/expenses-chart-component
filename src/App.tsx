import { ExpensesChart } from "@/components/expenses-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { data } from "@/data";
import { cn } from "@/lib/utils";
import { toCurrencyFromCent } from "@/utils/currency";
import { toPercentageFromNumber } from "@/utils/percentages";
import {
  BarChartBigIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "lucide-react";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-chart-1/10 p-6 md:p-10">
      <div className="flex w-full max-w-[400px] flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-chart-1/70 text-background">
            <BarChartBigIcon aria-hidden className="size-4" />
          </div>
          Expenses Chart
        </div>
        <div className="flex flex-col gap-6">
          <Card className="border-0 bg-chart-1 shadow-none">
            <CardHeader>
              <CardTitle className="text-sm font-normal tracking-tight text-background/70">
                My balance
              </CardTitle>
              <CardDescription className="text-2xl font-bold text-background">
                {toCurrencyFromCent(data.balance)}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Spending - Last 7 days</CardTitle>
            </CardHeader>
            <CardContent>
              <ExpensesChart expenses={data.expenses} />
              <Separator />
            </CardContent>
            <CardFooter>
              <dl className="flex w-full flex-col gap-2">
                <dt className="text-sm tracking-tight text-muted-foreground">
                  Total this month
                </dt>
                <div className="flex items-center justify-between">
                  <dd className="text-5xl font-bold tracking-tighter">
                    {toCurrencyFromCent(data.spending.amount)}
                  </dd>
                  <div className="flex flex-col gap-0 text-right">
                    <dd
                      className={cn(
                        "flex items-baseline justify-end gap-2 text-sm font-medium",
                        data.spending.changeType === "increase"
                          ? "text-red-500"
                          : "text-green-500",
                      )}
                    >
                      {data.spending.changeType === "increase" ? (
                        <TrendingUpIcon
                          aria-hidden
                          className="size-4 shrink-0 self-center text-red-500"
                        />
                      ) : (
                        <TrendingDownIcon
                          aria-hidden
                          className="size-4 shrink-0 self-center text-green-500"
                        />
                      )}
                      <span className="sr-only">
                        {" "}
                        {data.spending.changeType === "increase"
                          ? "increased"
                          : "decreased"}{" "}
                        by{" "}
                      </span>
                      {toPercentageFromNumber(data.spending.change)}
                    </dd>
                    <dd className="text-xs text-muted-foreground">
                      from last month
                    </dd>
                  </div>
                </div>
              </dl>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
