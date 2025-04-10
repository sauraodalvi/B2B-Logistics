import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye } from "lucide-react"
import Link from "next/link"

export function UpcomingTrips() {
  const trips = [
    {
      id: "TR-1234",
      routeName: "North City Hospitals",
      partner: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AJ",
      },
      startTime: "10:30 AM",
      stops: 8,
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
      startTime: "11:45 AM",
      stops: 6,
      status: "upcoming",
    },
    {
      id: "TR-1236",
      routeName: "East Medical Centers",
      partner: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DW",
      },
      startTime: "1:15 PM",
      stops: 5,
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
      startTime: "2:30 PM",
      stops: 7,
      status: "upcoming",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="grid grid-cols-6 p-4 text-sm font-medium text-muted-foreground">
          <div>Trip ID</div>
          <div className="col-span-2">Route</div>
          <div>Partner</div>
          <div>Start Time</div>
          <div className="text-right">Actions</div>
        </div>
        <div className="divide-y">
          {trips.map((trip) => (
            <div key={trip.id} className="grid grid-cols-6 items-center p-4">
              <div className="font-medium">{trip.id}</div>
              <div className="col-span-2">
                <div className="font-medium">{trip.routeName}</div>
                <div className="text-sm text-muted-foreground">{trip.stops} stops</div>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={trip.partner.avatar} alt={trip.partner.name} />
                  <AvatarFallback>{trip.partner.initials}</AvatarFallback>
                </Avatar>
                <div className="text-sm">{trip.partner.name}</div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={trip.status === "ongoing" ? "default" : "outline"}
                  className={trip.status === "ongoing" ? "bg-green-500 hover:bg-green-500/80" : ""}
                >
                  {trip.startTime}
                </Badge>
              </div>
              <div className="text-right">
                <Link href={`/trips/${trip.id}`}>
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View trip</span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <Link href="/trips">
          <Button variant="outline">View All Trips</Button>
        </Link>
      </div>
    </div>
  )
}
