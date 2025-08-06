import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { LayoutDashboard } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside className="hidden h-screen w-64 flex-col border-r bg-background sm:flex">
        <div className="flex h-16 shrink-0 items-center border-b px-6">
          <h1 className="font-headline text-xl font-bold tracking-tight text-primary">
            InsightFlow
          </h1>
        </div>
        <nav className="flex flex-col gap-2 p-4">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
          <Skeleton className="h-8 w-8 sm:hidden" />
          <div className="flex-1">
            <Skeleton className="h-6 w-48" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-9 w-24" />
            <Skeleton className="h-9 w-9 rounded-full" />
          </div>
        </header>
        <main className="flex-1 space-y-8 p-4 pt-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    <Skeleton className="h-4 w-24" />
                  </CardTitle>
                  <Skeleton className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-32" />
                  <Skeleton className="mt-1 h-3 w-40" />
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
            <Card className="col-span-1 lg:col-span-4">
              <CardHeader>
                <CardTitle><Skeleton className="h-6 w-32" /></CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Skeleton className="h-[350px] w-full" />
              </CardContent>
            </Card>
            <Card className="col-span-1 lg:col-span-3">
              <CardHeader>
                <CardTitle><Skeleton className="h-6 w-40" /></CardTitle>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-[350px] w-full" />
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                 <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center py-4">
                  <Skeleton className="h-10 w-64" />
                </div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        {[...Array(5)].map((_, i) => (
                           <TableHead key={i}><Skeleton className="h-5 w-20" /></TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                    {[...Array(10)].map((_, i) => (
                      <TableRow key={i}>
                         {[...Array(5)].map((_, j) => (
                            <TableCell key={j}><Skeleton className="h-5 w-full" /></TableCell>
                         ))}
                      </TableRow>
                     ))}
                    </TableBody>
                  </Table>
                </div>
                 <div className="flex items-center justify-end space-x-2 py-4">
                    <Skeleton className="h-10 w-20" />
                    <Skeleton className="h-10 w-20" />
                 </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
