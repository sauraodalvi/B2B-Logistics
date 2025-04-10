import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AJ",
      },
      action: "completed pickup at",
      target: "City Hospital",
      time: "10 minutes ago",
    },
    {
      id: 2,
      user: {
        name: "Sarah Miller",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SM",
      },
      action: "started trip",
      target: "South Labs Circuit",
      time: "25 minutes ago",
    },
    {
      id: 3,
      user: {
        name: "Admin",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "A",
      },
      action: "created new route",
      target: "West Medical Centers",
      time: "1 hour ago",
    },
    {
      id: 4,
      user: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DW",
      },
      action: "was assigned to",
      target: "East Medical Centers",
      time: "2 hours ago",
    },
    {
      id: 5,
      user: {
        name: "Emily Brown",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "EB",
      },
      action: "completed trip",
      target: "TR-1230",
      time: "3 hours ago",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
              <AvatarFallback>{activity.user.initials}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm">
                <span className="font-medium">{activity.user.name}</span>{" "}
                <span className="text-muted-foreground">{activity.action}</span>{" "}
                <span className="font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
