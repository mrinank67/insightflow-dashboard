"use client"

import {
  Activity,
  BarChart,
  DollarSign,
  File,
  LayoutDashboard,
  Menu,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { DateRangePicker } from '@/components/dashboard/date-range-picker';
import { OverviewCards } from '@/components/dashboard/overview-cards';
import { RevenueChart } from '@/components/dashboard/revenue-chart';
import { UsersChart } from '@/components/dashboard/users-chart';
import { DataTable } from '@/components/dashboard/data-table';
import { payments, revenueData, usersData } from '@/lib/data';
import { ConversionsChart } from '@/components/dashboard/conversions-chart';
import type { Payment } from '@/lib/types';

const cards = [
  {
    title: 'Total Revenue',
    icon: DollarSign,
    value: '$45,231.89',
    change: '+20.1% from last month',
  },
  {
    title: 'Subscriptions',
    icon: Users,
    value: '+2350',
    change: '+180.1% from last month',
  },
  {
    title: 'Conversions',
    icon: BarChart,
    value: '+12,234',
    change: '+19% from last month',
  },
  {
    title: 'Active Now',
    icon: Activity,
    value: '+573',
    change: '+201 since last hour',
  },
]

function downloadCSV(data: Payment[], filename: string) {
  const csvHeader = "ID,Amount,Status,Email,Date\n";
  const csvRows = data.map(p => [p.id, p.amount, p.status, p.email, p.date].join(',')).join('\n');
  const csvContent = csvHeader + csvRows;

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


export default function DashboardPage() {
  const handleExport = () => {
    downloadCSV(payments, 'transactions.csv');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-start gap-4 px-4 py-4">
          <h1 className="font-headline text-2xl font-bold tracking-tight text-primary px-2">
            InsightFlow
          </h1>
          <a
            href="#"
            className="flex w-full items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </a>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-64">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <SheetTitle>Menu</SheetTitle>
              <nav className="grid gap-6 text-lg font-medium">
                <h1 className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
                  <LayoutDashboard className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">InsightFlow</span>
                </h1>
                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LayoutDashboard className="h-5 w-5" />
                  Dashboard
                </a>
              </nav>
            </SheetContent>
          </Sheet>
           <div className="relative ml-auto flex-1 md:grow-0">
             <h2 className="font-headline text-2xl font-semibold">Dashboard</h2>
          </div>
          <div className='flex items-center gap-2'>
            <DateRangePicker />
            <Button size="sm" variant="outline" className="h-9 gap-1" onClick={handleExport}>
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button>
            <ThemeToggle />
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <OverviewCards data={cards}/>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-5">
            <Card className="xl:col-span-3">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <RevenueChart data={revenueData} />
              </CardContent>
            </Card>
            <Card className="xl:col-span-2">
              <CardHeader>
                <CardTitle>New Users</CardTitle>
                <CardDescription>
                  You gained {usersData.reduce((acc, item) => acc + item.newUsers, 0)} new users this year.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UsersChart data={usersData} />
              </CardContent>
            </Card>
          </div>
           <div className="grid gap-4 md:gap-8 lg:grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>
                  Here are the most recent transactions from your store.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DataTable data={payments} />
              </CardContent>
            </Card>
            </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle>Conversion Sources</CardTitle>
                <CardDescription>
                  Breakdown of where your traffic is coming from.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ConversionsChart />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
