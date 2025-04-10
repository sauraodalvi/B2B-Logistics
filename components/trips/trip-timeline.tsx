export function TripTimeline({ stops }) {
  return (
    <div className="space-y-4">
      <div className="relative pl-6">
        <div className="absolute bottom-0 left-2 top-0 w-px bg-border"></div>
        {stops.map((stop, index) => (
          <div key={stop.id} className="relative mb-8 last:mb-0">
            <div
              className={`absolute left-[-25px] flex h-6 w-6 items-center justify-center rounded-full border ${
                stop.status === "completed"
                  ? "border-green-500 bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400"
                  : stop.status === "ongoing"
                    ? "border-blue-500 bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400"
                    : "border-gray-200 bg-gray-100 text-gray-400 dark:border-gray-800 dark:bg-gray-800"
              }`}
            >
              {stop.status === "completed" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : stop.status === "ongoing" ? (
                <div className="h-2 w-2 rounded-full bg-current"></div>
              ) : (
                <div className="h-2 w-2 rounded-full bg-current"></div>
              )}
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">{stop.name}</div>
                <div
                  className={`text-xs ${
                    stop.status === "completed"
                      ? "text-green-600 dark:text-green-400"
                      : stop.status === "ongoing"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-muted-foreground"
                  }`}
                >
                  {stop.status === "completed"
                    ? `Completed at ${stop.actualTime}`
                    : stop.status === "ongoing"
                      ? "In Progress"
                      : `Scheduled for ${stop.scheduledTime}`}
                </div>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stop.address}</div>
              {stop.type === "pickup" && (
                <div className="mt-2 flex flex-wrap gap-4 text-sm">
                  <div>
                    <span className="font-medium">Contact:</span> {stop.contact}
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span> {stop.phone}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
