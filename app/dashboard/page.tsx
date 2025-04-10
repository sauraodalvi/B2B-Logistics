"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MapPin, Plus, Route, Truck, Users } from "lucide-react"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { UpcomingTrips } from "@/components/dashboard/upcoming-trips"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { CreateRouteModal } from "@/components/routes/create-route-modal"

export default function DashboardPage() {
  const [createRouteModalOpen, setCreateRouteModalOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your sample pickup operations</p>
        </div>
        <Button onClick={() => setCreateRouteModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create Route
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DashboardStats
              title="Active Routes"
              value="12"
              description="+2 from last week"
              icon={<Route className="h-4 w-4 text-muted-foreground" />}
            />
            <DashboardStats
              title="Today's Trips"
              value="8"
              description="3 completed, 5 ongoing"
              icon={<Truck className="h-4 w-4 text-muted-foreground" />}
            />
            <DashboardStats
              title="Pickup Partners"
              value="6"
              description="2 currently on duty"
              icon={<Users className="h-4 w-4 text-muted-foreground" />}
            />
            <DashboardStats
              title="Pickup Points"
              value="42"
              description="18 visited today"
              icon={<MapPin className="h-4 w-4 text-muted-foreground" />}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Upcoming Trips</CardTitle>
                <CardDescription>Trips scheduled for the next 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingTrips />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your team</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed analytics will be available here</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Analytics dashboard coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and view reports</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Reports dashboard coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <CreateRouteModal
        open={createRouteModalOpen}
        onOpenChange={setCreateRouteModalOpen}
        onRouteCreated={(route) => {
          console.log("Route created:", route)
          // In a real app, you would update your routes state here
        }}
      />
    </div>
  )
}
