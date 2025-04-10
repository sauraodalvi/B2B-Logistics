"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, ChevronRight, Download, MapPin, Plus, Upload } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function CreateRoutePage() {
  const [date, setDate] = useState<Date>()
  const [activeTab, setActiveTab] = useState("basic-info")

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Link href="/routes" className="font-medium hover:underline">
          Routes
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Create New Route</span>
      </div>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Route</h1>
        <p className="text-muted-foreground">Set up a new sample pickup route</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
          <TabsTrigger value="stops">Add Stops</TabsTrigger>
          <TabsTrigger value="optimize">Optimize Route</TabsTrigger>
        </TabsList>
        <TabsContent value="basic-info" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Route Information</CardTitle>
              <CardDescription>Enter the basic details for your route</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="route-name">Route Name</Label>
                  <Input id="route-name" placeholder="Enter a unique name for this route" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start-date">Trip Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select>
                    <SelectTrigger id="frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-Time</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>End Criteria</Label>
                  <RadioGroup defaultValue="occurrences" className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="occurrences" id="occurrences" />
                      <Label htmlFor="occurrences" className="font-normal">
                        Number of occurrences
                      </Label>
                      <Input className="ml-2 w-20" placeholder="10" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="end-date" id="end-date" />
                      <Label htmlFor="end-date" className="font-normal">
                        End date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn("ml-2 justify-start text-left font-normal", !date && "text-muted-foreground")}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            Select date
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <h3 className="text-lg font-medium">Assign Pickup Partner</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Select a partner who will be responsible for this route
                </p>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      name: "Alex Johnson",
                      role: "Senior Executive",
                      avatar: "/placeholder.svg?height=40&width=40",
                      initials: "AJ",
                      status: "available",
                    },
                    {
                      id: 2,
                      name: "Sarah Miller",
                      role: "Pickup Executive",
                      avatar: "/placeholder.svg?height=40&width=40",
                      initials: "SM",
                      status: "available",
                    },
                    {
                      id: 3,
                      name: "David Wilson",
                      role: "Pickup Executive",
                      avatar: "/placeholder.svg?height=40&width=40",
                      initials: "DW",
                      status: "busy",
                    },
                  ].map((partner) => (
                    <div key={partner.id} className="flex items-center space-x-4 rounded-md border p-4 hover:bg-accent">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={partner.avatar} alt={partner.name} />
                        <AvatarFallback>{partner.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{partner.name}</p>
                        <p className="text-sm text-muted-foreground">{partner.role}</p>
                      </div>
                      <div>
                        <Badge
                          variant="outline"
                          className={cn(
                            partner.status === "available"
                              ? "border-green-500 text-green-500"
                              : "border-orange-500 text-orange-500",
                          )}
                        >
                          {partner.status === "available" ? "Available" : "Busy"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={() => setActiveTab("stops")}>
              Continue
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="stops" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add Stops to Route</CardTitle>
              <CardDescription>Add pickup points and checkpoints to your route</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="manual" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="manual">Add Manually</TabsTrigger>
                  <TabsTrigger value="bulk">Bulk Upload</TabsTrigger>
                </TabsList>
                <TabsContent value="manual" className="space-y-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Stop Type</Label>
                        <RadioGroup defaultValue="pickup" className="flex space-x-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="pickup" id="pickup" />
                            <Label htmlFor="pickup" className="font-normal">
                              Pickup Point
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="checkpoint" id="checkpoint" />
                            <Label htmlFor="checkpoint" className="font-normal">
                              Checkpoint
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="stop-name">Name</Label>
                        <Input id="stop-name" placeholder="Enter stop name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Select>
                          <SelectTrigger id="organization">
                            <SelectValue placeholder="Select organization" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="city-hospital">City Hospital</SelectItem>
                            <SelectItem value="metro-clinic">Metro Clinic</SelectItem>
                            <SelectItem value="central-labs">Central Labs</SelectItem>
                            <SelectItem value="medical-center">Medical Center</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Location Address</Label>
                        <div className="flex space-x-2">
                          <Input id="address" placeholder="Enter address" className="flex-1" />
                          <Button variant="outline" size="icon">
                            <MapPin className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-person">Contact Person</Label>
                        <Input id="contact-person" placeholder="Enter contact name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time-slot">Time Slot (Optional)</Label>
                        <Select>
                          <SelectTrigger id="time-slot">
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                            <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Stop
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Added Stops (0)</h3>
                    <div className="rounded-md border p-8 flex flex-col items-center justify-center text-center">
                      <MapPin className="h-8 w-8 text-muted-foreground mb-2" />
                      <h3 className="text-lg font-medium">No stops added yet</h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Add pickup points and checkpoints to create your route. You can add them manually or upload in
                        bulk.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="bulk" className="space-y-4">
                  <div className="space-y-4">
                    <div className="rounded-md border p-8 flex flex-col items-center justify-center text-center">
                      <div className="mb-4">
                        <Upload className="h-8 w-8 text-muted-foreground mb-2 mx-auto" />
                        <h3 className="text-lg font-medium">Upload Stops</h3>
                        <p className="text-sm text-muted-foreground max-w-md">
                          Download the template, fill it with your stops data, and upload it back.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Download Template
                        </Button>
                        <Button>
                          <Upload className="mr-2 h-4 w-4" />
                          Upload File
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setActiveTab("basic-info")}>
              Back
            </Button>
            <Button onClick={() => setActiveTab("optimize")}>
              Continue
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="optimize" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Optimize Route</CardTitle>
              <CardDescription>Review and optimize your route for efficiency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-8 flex flex-col items-center justify-center text-center">
                <MapPin className="h-8 w-8 text-muted-foreground mb-2" />
                <h3 className="text-lg font-medium">No stops to optimize</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  Add stops to your route first, then you can optimize the route order for efficiency.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setActiveTab("stops")}>
              Back
            </Button>
            <Button>Create Route</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
