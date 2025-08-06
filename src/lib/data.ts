import type { Payment } from './types';

export const payments: Payment[] = [
  { id: '728ed52f', amount: 100, status: 'pending', email: 'm@example.com', date: '2024-05-01' },
  { id: '489e1d42', amount: 125, status: 'processing', email: 'example@gmail.com', date: '2024-05-02' },
  { id: 'fb881e74', amount: 50, status: 'success', email: 'test@test.com', date: '2024-05-03' },
  { id: '417d420f', amount: 200, status: 'pending', email: 'user@me.com', date: '2024-05-04' },
  { id: 'a2b3c4d5', amount: 75, status: 'failed', email: 'contact@domain.org', date: '2024-05-05' },
  { id: 'e6f7g8h9', amount: 150, status: 'success', email: 'another@example.net', date: '2024-05-06' },
  { id: 'i0j1k2l3', amount: 90, status: 'processing', email: 'support@web.dev', date: '2024-05-07' },
  { id: 'm4n5o6p7', amount: 250, status: 'pending', email: 'hello@world.io', date: '2024-05-08' },
  { id: 'q8r9s0t1', amount: 300, status: 'success', email: 'info@company.co', date: '2024-05-09' },
  { id: 'u2v3w4x5', amount: 180, status: 'failed', email: 'admin@portal.app', date: '2024-05-10' },
  { id: 'y6z7a8b9', amount: 220, status: 'pending', email: 'customer@service.biz', date: '2024-05-11' },
  { id: 'c0d1e2f3', amount: 110, status: 'success', email: 'dev@null.com', date: '2024-05-12' },
];

export const revenueData = [
  { month: "January", revenue: 2000 },
  { month: "February", revenue: 1800 },
  { month: "March", revenue: 2200 },
  { month: "April", revenue: 2780 },
  { month: "May", revenue: 1890 },
  { month: "June", revenue: 2390 },
  { month: "July", revenue: 3490 },
  { month: "August", revenue: 3000 },
  { month: "September", revenue: 2800 },
  { month: "October", revenue: 3200 },
  { month: "November", revenue: 3500 },
  { month: "December", revenue: 4100 },
];

export const usersData = [
    { month: "Jan", newUsers: 300 },
    { month: "Feb", newUsers: 250 },
    { month: "Mar", newUsers: 400 },
    { month: "Apr", newUsers: 350 },
    { month: "May", newUsers: 500 },
    { month: "Jun", newUsers: 450 },
    { month: "Jul", newUsers: 600 },
    { month: "Aug", newUsers: 550 },
    { month: "Sep", newUsers: 700 },
    { month: "Oct", newUsers: 650 },
    { month: "Nov", newUsers: 800 },
    { month: "Dec", newUsers: 750 },
];
