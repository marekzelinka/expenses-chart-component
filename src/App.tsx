import { BarChartBigIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <BarChartBigIcon className="size-4" />
          </div>
          Expenses Chart
        </div>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>My balance</CardTitle>
              <CardDescription>$921.48</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Spending - Last 7 days</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="justify-between">
              <div>
                <div>Total this month</div>
                <div>$478.33</div>
              </div>
              <div>
                <div>+2.4%</div>
                <div>from last month</div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
