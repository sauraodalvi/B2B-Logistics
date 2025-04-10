"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  LayoutDashboard,
  Menu,
  Route,
  Truck,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  const [b2bExpanded, setB2BExpanded] = useState(true)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "relative z-20 flex h-full flex-col border-r bg-background transition-all duration-300",
        expanded ? "w-64" : "w-16",
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          {expanded ? (
            <span className="text-xl font-bold">LabTrack</span>
          ) : (
            <span className="text-xl font-bold">LT</span>
          )}
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setExpanded(!expanded)}>
          {expanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      <ScrollArea className="flex-1 py-2">
        <nav className="flex flex-col gap-1 px-2">
          <NavItem
            icon={<LayoutDashboard className="h-5 w-5" />}
            label="Dashboard"
            expanded={expanded}
            active={pathname === "/dashboard"}
          />
          <NavItem
            icon={<Calendar className="h-5 w-5" />}
            label="Appointments"
            expanded={expanded}
            active={pathname === "/appointments"}
          />
          <div className="py-1">
            <div
              className={cn(
                "flex cursor-pointer items-center rounded-md px-2 py-1.5 hover:bg-accent",
                b2bExpanded && expanded && "mb-1",
              )}
              onClick={() => expanded && setB2BExpanded(!b2bExpanded)}
            >
              <ClipboardList className="h-5 w-5 mr-2" />
              {expanded && (
                <>
                  <span className="flex-1 text-sm">B2B Collections</span>
                  {b2bExpanded ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </>
              )}
            </div>
            {expanded && b2bExpanded && (
              <div className="ml-4 flex flex-col gap-1 pl-2 border-l">
                <NavItem
                  href="/routes"
                  icon={<Route className="h-5 w-5" />}
                  label="Routes"
                  expanded={expanded}
                  active={pathname === "/routes"}
                  nested
                />
                <NavItem
                  href="/trips"
                  icon={<Truck className="h-5 w-5" />}
                  label="Trip Management"
                  expanded={expanded}
                  active={pathname === "/trips"}
                  nested
                />
              </div>
            )}
          </div>
        </nav>
      </ScrollArea>
      <div className="border-t p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            <span className="text-xs font-medium">LA</span>
          </div>
          {expanded && (
            <div>
              <p className="text-sm font-medium">Lab Admin</p>
              <p className="text-xs text-muted-foreground">Central Lab</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface NavItemProps {
  href?: string
  icon: React.ReactNode
  label: string
  expanded: boolean
  active: boolean
  nested?: boolean
  onClick?: () => void
}

function NavItem({ href, icon, label, expanded, active, nested = false, onClick }: NavItemProps) {
  const Component = href ? Link : "div"
  const props = href ? { href } : {}

  return (
    <Component
      {...props}
      className={cn(
        "flex items-center rounded-md px-2 py-1.5 text-muted-foreground",
        href || onClick ? "hover:bg-accent hover:text-foreground cursor-pointer" : "cursor-default",
        active && "bg-accent text-foreground",
        nested && "text-xs",
      )}
      onClick={onClick}
    >
      <span className={cn("mr-2", !expanded && "mr-0")}>{icon}</span>
      {expanded && <span className="text-sm">{label}</span>}
    </Component>
  )
}
