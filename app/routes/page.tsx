"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download, MoreHorizontal, Plus, Search } from "lucide-react"
import { CreateRouteModal } from "@/components/routes/create-route-modal"

export default function RoutesPage() {
  // Add state for the modal and routes
  const [createRouteModalOpen, setCreateRouteModalOpen] = useState(false)
  const [routes, setRoutes] = useState([
    {
      id: "RT-1001",
      name: "North City Hospitals",
      frequency: "Daily",
      stops: 8,
      partners: 2,
      lastRun: "Today, 10:30 AM",
      nextRun: "Tomorrow, 10:30 AM",
      status: "active",
    },
    {
      id: "RT-1002",
      name: "South Labs Circuit",
      frequency: "Daily",
      stops: 6,
      partners: 1,
      lastRun: "Today, 11:45 AM",
      nextRun: "Tomorrow, 11:45 AM",
      status: "active",
    },
    {
      id: "RT-1003",
      name: "East Medical Centers",
      frequency: "Weekly",
      stops: 5,
      partners: 1,
      lastRun: "Apr 2, 2025",
      nextRun: "Apr 9, 2025",
      status: "active",
    },
    {
      id: "RT-1004",
      name: "Downtown Clinics",
      frequency: "Daily",
      stops: 7,
      partners: 1,
      lastRun: "Today, 2:30 PM",
      nextRun: "Tomorrow, 2:30 PM",
      status: "active",
    },
    {
      id: "RT-1005",
      name: "West End Hospitals",
      frequency: "Weekly",
      stops: 4,
      partners: 1,
      lastRun: "Mar 31, 2025",
      nextRun: "Apr 7, 2025",
      status: "inactive",
    },
  ])

  // Function to handle adding a new route
  const handleRouteCreated = (newRoute) => {
    setRoutes((prevRoutes) => [newRoute, ...prevRoutes])
  }

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Routes</h1>
          <p className="text-muted-foreground">Manage your sample pickup routes</p>
        </div>
        <Button onClick={() => setCreateRouteModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create Route
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search routes..." className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Calendar className="h-4 w-4" />
          <span className="sr-only">Filter by date</span>
        </Button>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
          <span className="sr-only">Download</span>
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Route ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Frequency</TableHead>
              <TableHead>Stops</TableHead>
              <TableHead>Last Run</TableHead>
              <TableHead>Next Run</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {routes.map((route) => (
              <TableRow key={route.id}>
                <TableCell className="font-medium">{route.id}</TableCell>
                <TableCell>{route.name}</TableCell>
                <TableCell>{route.frequency}</TableCell>
                <TableCell>{route.stops}</TableCell>
                <TableCell>{route.lastRun}</TableCell>
                <TableCell>{route.nextRun}</TableCell>
                <TableCell>
                  <Badge
                    variant={route.status === "active" ? "default" : "secondary"}
                    className={route.status === "active" ? "bg-green-500 hover:bg-green-500/80" : ""}
                  >
                    {route.status === "active" ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit route</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Delete route</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add the CreateRouteModal component */}
      <CreateRouteModal
        open={createRouteModalOpen}
        onOpenChange={setCreateRouteModalOpen}
        onRouteCreated={handleRouteCreated}
      />
    </div>
  )
}
