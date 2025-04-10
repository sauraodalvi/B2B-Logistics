import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Download, MapPin, Phone, User } from "lucide-react"
import Link from "next/link"
import { TripMap } from "@/components/trips/trip-map"
import { TripTimeline } from "@/components/trips/trip-timeline"

export default function TripDetailsPage({ params }: { params: { id: string } }) {
  const tripId = params.id

  // Mock data for the trip
  const trip = {
    id: tripId,
    routeName: "North City Hospitals",
    partner: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AJ",
      phone: "+1 (555) 123-4567",
    },
    date: "Apr 9, 2025",
    startTime: "10:30 AM",
    endTime: "2:15 PM",
    status: "ongoing",
    stops: [
      {
        id: 1,
        name: "City Hospital",
        address: "123 Main St, North City",
        type: "pickup",
        status: "completed",
        scheduledTime: "10:45 AM",
        actualTime: "10:50 AM",
        contact: "Dr. Smith",
        phone: "+1 (555) 987-6543",
      },
      {
        id: 2,
        name: "Metro Clinic",
        address: "456 Park Ave, North City",
        type: "pickup",
        status: "completed",
        scheduledTime: "11:15 AM",
        actualTime: "11:20 AM",
        contact: "Nurse Johnson",
        phone: "+1 (555) 456-7890",
      },
      {
        id: 3,
        name: "Downtown Medical Center",
        address: "789 Broadway, North City",
        type: "pickup",
        status: "completed",
        scheduledTime: "11:45 AM",
        actualTime: "11:50 AM",
        contact: "Dr. Williams",
        phone: "+1 (555) 234-5678",
      },
      {
        id: 4,
        name: "North Checkpoint",
        address: "101 North Blvd, North City",
        type: "checkpoint",
        status: "completed",
        scheduledTime: "12:15 PM",
        actualTime: "12:10 PM",
      },
      {
        id: 5,
        name: "Central Labs",
        address: "202 Center St, North City",
        type: "pickup",
        status: "completed",
        scheduledTime: "12:45 PM",
        actualTime: "12:40 PM",
        contact: "Lab Manager",
        phone: "+1 (555) 345-6789",
      },
      {
        id: 6,
        name: "East Medical Plaza",
        address: "303 East Ave, North City",
        type: "pickup",
        status: "ongoing",
        scheduledTime: "1:15 PM",
        actualTime: null,
        contact: "Dr. Brown",
        phone: "+1 (555) 567-8901",
      },
      {
        id: 7,
        name: "West Checkpoint",
        address: "404 West St, North City",
        type: "checkpoint",
        status: "pending",
        scheduledTime: "1:45 PM",
        actualTime: null,
      },
      {
        id: 8,
        name: "North General Hospital",
        address: "505 Hospital Dr, North City",
        type: "pickup",
        status: "pending",
        scheduledTime: "2:15 PM",
        actualTime: null,
        contact: "Dr. Garcia",
        phone: "+1 (555) 678-9012",
      },
    ],
  }

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Link href="/trips" className="font-medium hover:underline">
          <Button variant="ghost" size="sm" className="gap-1">
            <ChevronLeft className="h-4 w-4" />
            Back to Trips
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trip {trip.id}</h1>
          <p className="text-muted-foreground">
            {trip.routeName} - {trip.date}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline">
            <Phone className="mr-2 h-4 w-4" />
            Call Partner
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Summary
          </Button>
          <Button>Reassign Partner</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Status</div>
              <Badge
                className="text-sm"
                variant="outline"
                className="border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400"
              >
                Ongoing
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Pickup Partner</div>
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={trip.partner.avatar} alt={trip.partner.name} />
                  <AvatarFallback>{trip.partner.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{trip.partner.name}</div>
                  <div className="text-sm text-muted-foreground">{trip.partner.phone}</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Schedule</div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-sm font-medium">Start Time</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {trip.startTime}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">End Time</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {trip.endTime}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Progress</div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <div>Stops Completed</div>
                  <div className="font-medium">5/8</div>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-full w-[62.5%] rounded-full bg-green-500" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-5">
          <Tabs defaultValue="map">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Trip Tracking</CardTitle>
                <TabsList>
                  <TabsTrigger value="map">Map</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  <TabsTrigger value="stops">Stops</TabsTrigger>
                </TabsList>
              </div>
              <CardDescription>Live tracking of the current trip</CardDescription>
            </CardHeader>
            <CardContent>
              <TabsContent value="map" className="m-0">
                <TripMap />
              </TabsContent>
              <TabsContent value="timeline" className="m-0 space-y-4">
                <TripTimeline stops={trip.stops} />
              </TabsContent>
              <TabsContent value="stops" className="m-0">
                <div className="space-y-4">
                  {trip.stops.map((stop) => (
                    <div key={stop.id} className="flex gap-4 rounded-lg border p-4">
                      <div
                        className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full ${
                          stop.status === "completed"
                            ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400"
                            : stop.status === "ongoing"
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400"
                              : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                        }`}
                      >
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{stop.name}</div>
                          <Badge
                            variant="outline"
                            className={
                              stop.status === "completed"
                                ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400"
                                : stop.status === "ongoing"
                                  ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400"
                                  : "border-gray-500 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                            }
                          >
                            {stop.status.charAt(0).toUpperCase() + stop.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">{stop.address}</div>
                        <div className="flex flex-wrap gap-4 pt-1 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span>Scheduled: {stop.scheduledTime}</span>
                          </div>
                          {stop.actualTime && (
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-green-500" />
                              <span>Actual: {stop.actualTime}</span>
                            </div>
                          )}
                          {stop.type === "pickup" && (
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3 text-muted-foreground" />
                              <span>{stop.contact}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
