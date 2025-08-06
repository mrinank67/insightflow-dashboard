"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Sector } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { source: "google", visitors: 275, fill: "var(--color-google)" },
  { source: "facebook", visitors: 200, fill: "var(--color-facebook)" },
  { source: "instagram", visitors: 187, fill: "var(--color-instagram)" },
  { source: "direct", visitors: 173, fill: "var(--color-direct)" },
  { source: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  google: {
    label: "Google",
    color: "hsl(var(--chart-1))",
  },
  facebook: {
    label: "Facebook",
    color: "hsl(var(--chart-2))",
  },
  instagram: {
    label: "Instagram",
    color: "hsl(var(--chart-3))",
  },
  direct: {
    label: "Direct",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
}

export function ConversionsChart() {
  const id = "donut-interactive"
  const [activeSource, setActiveSource] = React.useState("google")

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <div className="h-[350px] w-full">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square h-full"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="source"
            innerRadius={60}
            strokeWidth={5}
            activeIndex={chartData.findIndex(
              (item) => item.source === activeSource
            )}
            activeShape={({
              outerRadius = 0,
              ...props
            }: React.ComponentProps<typeof Sector>) => (
              <g>
                <Sector {...props} outerRadius={outerRadius + 10} />
                <Sector
                  {...props}
                  outerRadius={outerRadius + 25}
                  innerRadius={outerRadius + 12}
                />
              </g>
            )}
            onMouseOver={(_, index) => {
              setActiveSource(chartData[index].source)
            }}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  const currentData = chartData.find(d => d.source === activeSource);
                  if (!currentData) return null;

                  return (
                    <>
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {currentData.visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                      <text
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 48}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-primary font-bold capitalize"
                      >
                        {currentData.source}
                      </text>
                    </>
                  )
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  )
}
