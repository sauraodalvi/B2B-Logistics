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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Download, Eye, Filter, MoreHorizontal, Search } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TripsPage() {
  const trips = [
    {
      id: "TR-1234",
      routeName: "North City Hospitals",
      partner: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AJ",
      },
      date: "Apr 9, 2025",
      startTime: "10:30 AM",
      endTime: "2:15 PM",
      stops: {
        total: 8,
        completed: 5,
        pending: 3,
      },
      status: "ongoing",
    },
    {
      id: "TR-1235",
      routeName: "South Labs Circuit",
      partner: {
        name: "Sarah Miller",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SM",
      },
      date: "Apr 9, 2025",
      startTime: "11:45 AM",
      endTime: "3:30 PM",
      stops: {
        total: 6,
        completed: 2,
        pending: 4,
      },
      status: "ongoing",
    },
    {
      id: "TR-1236",
      routeName: "East Medical Centers",
      partner: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DW",
      },
      date: "Apr 9, 2025",
      startTime: "1:15 PM",
      endTime: "5:00 PM",
      stops: {
        total: 5,
        completed: 0,
        pending: 5,
      },
      status: "upcoming",
    },
    {
      id: "TR-1237",
      routeName: "Downtown Clinics",
      partner: {
        name: "Emily Brown",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "EB",
      },
      date: "Apr 9, 2025",
      startTime: "2:30 PM",
      endTime: "6:15 PM",
      stops: {
        total: 7,
        completed: 0,
        pending: 7,
      },
      status: "upcoming",
    },
    {
      id: "TR-1230",
      routeName: "West End Hospitals",
      partner: {
        name: "Emily Brown",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "EB",
      },
      date: "Apr 8, 2025",
      startTime: "9:00 AM",
      endTime: "1:45 PM",
      stops: {
        total: 6,
        completed: 6,
        pending: 0,
      },
      status: "completed",
    },
  ]

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Trip Management</h1>
        <p className="text-muted-foreground">View and manage all pickup trips</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1 sm:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search trips..." className="pl-8" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="ongoing">Ongoing</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
            <span className="sr-only">Date filter</span>
          </Button>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">More filters</span>
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download</span>
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Trip ID</TableHead>
              <TableHead>Route</TableHead>
              <TableHead>Partner</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Stops</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trips.map((trip) => (
              <TableRow key={trip.id}>
                <TableCell className="font-medium">{trip.id}</TableCell>
                <TableCell>{trip.routeName}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={trip.partner.avatar} alt={trip.partner.name} />
                      <AvatarFallback>{trip.partner.initials}</AvatarFallback>
                    </Avatar>
                    <span className="whitespace-nowrap">{trip.partner.name}</span>
                  </div>
                </TableCell>
                <TableCell>{trip.date}</TableCell>
                <TableCell>
                  {trip.startTime} - {trip.endTime}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-full max-w-24 rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-green-500"
                        style={{
                          width: `${(trip.stops.completed / trip.stops.total) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="whitespace-nowrap text-xs">
                      {trip.stops.completed}/{trip.stops.total}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      trip.status === "ongoing"
                        ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400"
                        : trip.status === "completed"
                          ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400"
                          : trip.status === "upcoming"
                            ? "border-orange-500 bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-400"
                            : "border-red-500 bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400"
                    }
                  >
                    {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
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
                      <DropdownMenuItem>
                        <Link href={`/trips/${trip.id}`} className="flex items-center">
                          <Eye className="mr-2 h-4 w-4" />
                          View details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Reassign partner</DropdownMenuItem>
                      <DropdownMenuItem>Export summary</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem disabled={trip.status === "completed"}>
                        {trip.status === "upcoming" ? "Cancel trip" : "End trip"}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
