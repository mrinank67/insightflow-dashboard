"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart"


const chartConfig = {
  newUsers: {
    label: "New Users",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function UsersChart({ data }: { data: any[] }) {
  return (
    <ChartContainer config={chartConfig} className="h-[350px] w-full">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis 
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <Tooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="newUsers" fill="hsl(var(--primary))" radius={8} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
