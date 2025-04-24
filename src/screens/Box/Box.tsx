import {
    ArrowDownRightIcon,
    ArrowUpRightIcon,
    BarChart3Icon,
    BellIcon,
    ChevronDownIcon,
    DownloadIcon,
    FileTextIcon,
    FilterIcon,
    HomeIcon,
    MenuIcon,
    SearchIcon,
    SettingsIcon,
    UsersIcon,
  } from "lucide-react";
  import React, { useState } from "react";
  import { Badge } from "../../components/ui/badge";
  import { Button } from "../../components/ui/button";
  import { Card, CardContent } from "../../components/ui/card";
  import { Input } from "../../components/ui/input";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../components/ui/table";
  import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
  
  export const Box = (): JSX.Element => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    // Navigation menu items data
    const menuItems = [
      {
        icon: <HomeIcon className="h-5 w-5" />,
        label: "Dashboard",
        active: true,
      },
      { icon: <BarChart3Icon className="h-5 w-5" />, label: "Analytics" },
      { icon: <FileTextIcon className="h-5 w-5" />, label: "Reports" },
      { icon: <UsersIcon className="h-5 w-5" />, label: "Users" },
      { icon: <SettingsIcon className="h-5 w-5" />, label: "Settings" },
    ];
  
    // Stats cards data
    const statsCards = [
      {
        title: "Total Revenue",
        value: "$53,000",
        change: "+12.5%",
        increase: true,
      },
      {
        title: "Subscriptions",
        value: "2,300",
        change: "+15.8%",
        increase: true,
      },
      { title: "Active Users", value: "5,700", change: "-2.3%", increase: false },
      {
        title: "Conversion Rate",
        value: "3.2%",
        change: "+4.7%",
        increase: true,
      },
    ];
  
    // Table data
    const tableData = [
      {
        id: "#3210",
        customer: "Jane Cooper",
        date: "Apr 24, 2023",
        amount: "$300.00",
        status: "Paid",
      },
      {
        id: "#3209",
        customer: "Wade Warren",
        date: "Apr 23, 2023",
        amount: "$150.00",
        status: "Pending",
      },
      {
        id: "#3208",
        customer: "Esther Howard",
        date: "Apr 22, 2023",
        amount: "$450.00",
        status: "Paid",
      },
      {
        id: "#3207",
        customer: "Leslie Alexander",
        date: "Apr 21, 2023",
        amount: "$250.00",
        status: "Failed",
      },
      {
        id: "#3206",
        customer: "Jenny Wilson",
        date: "Apr 20, 2023",
        amount: "$350.00",
        status: "Paid",
      },
    ];
  
    return (
      <div className="flex flex-col md:flex-row h-screen bg-neutralsilver">
        {/* Sidebar */}
        <div className={`md:w-64 bg-neutralwhite border-r border-text-gray-300 flex flex-col ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
          <div className="p-6 border-b border-text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brandprimary rounded-md flex items-center justify-center text-white font-bold">
                D
              </div>
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${item.active ? "bg-tintt-5 text-brandprimary" : "text-neutralgrey hover:bg-neutralsilver"}`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 mt-auto">
            <Card className="bg-tintt-5 border-none">
              <CardContent className="p-4">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Need help?</p>
                  <p className="text-xs text-neutralgrey">
                    Contact our support team
                  </p>
                  <Button className="mt-2 bg-brandprimary hover:bg-shades-2 text-white">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
  
        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-neutralwhite border-b border-text-gray-300 p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden mr-2"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <MenuIcon className="h-6 w-6" />
                </Button>
                <div className="relative w-64">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutralgrey h-4 w-4" />
                  <Input
                    className="pl-10 bg-neutralsilver border-none"
                    placeholder="Search..."
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <BellIcon className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brandprimary rounded-full flex items-center justify-center text-white">
                    JD
                  </div>
                  <span className="font-medium hidden md:inline">John Doe</span>
                  <ChevronDownIcon className="h-4 w-4 text-neutralgrey" />
                </div>
              </div>
            </div>
          </header>
  
          {/* Main content area */}
          <main className="flex-1 overflow-auto p-6">
            <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <h1 className="text-2xl font-bold mb-4 md:mb-0">Dashboard Overview</h1>
              <div className="flex gap-3">
                <Button variant="outline" className="flex items-center gap-2">
                  <DownloadIcon className="h-4 w-4" />
                  Export
                </Button>
                <Button className="bg-brandprimary hover:bg-shades-2 text-white">
                  + Add New
                </Button>
              </div>
            </div>
  
            {/* Stats cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {statsCards.map((card, index) => (
                <Card key={index} className="border border-text-gray-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-neutralgrey">{card.title}</p>
                      <div className="flex items-end justify-between">
                        <h3 className="text-2xl font-bold">{card.value}</h3>
                        <div
                          className={`flex items-center text-xs ${card.increase ? "text-brandprimary" : "text-destructive"}`}
                        >
                          {card.increase ? (
                            <ArrowUpRightIcon className="h-3 w-3" />
                          ) : (
                            <ArrowDownRightIcon className="h-3 w-3" />
                          )}
                          <span>{card.change}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
  
            {/* Chart section */}
            <Card className="mb-6 border border-text-gray-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <h3 className="font-semibold mb-4 md:mb-0">Revenue Overview</h3>
                  <div className="flex items-center gap-2">
                    <Tabs defaultValue="monthly">
                      <TabsList className="bg-neutralsilver">
                        <TabsTrigger value="weekly">Weekly</TabsTrigger>
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                        <TabsTrigger value="yearly">Yearly</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center text-neutralgrey">
                  {/* Chart would go here - using placeholder */}
                  <div className="w-full h-full bg-neutralsilver rounded-md flex items-center justify-center">
                    <BarChart3Icon className="h-12 w-12 text-neutrallgrey" />
                  </div>
                </div>
              </CardContent>
            </Card>
  
            {/* Table section */}
            <Card className="border border-text-gray-300 overflow-x-auto">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="font-semibold mb-4 md:mb-0">Recent Transactions</h3>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <FilterIcon className="h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Invoice ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tableData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{row.id}</TableCell>
                          <TableCell>{row.customer}</TableCell>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>{row.amount}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                row.status === "Paid"
                                  ? "bg-tintt-5 text-brandprimary border-none"
                                  : row.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-800 border-none"
                                    : "bg-red-100 text-red-800 border-none"
                              }
                            >
                              {row.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    );
  };
  