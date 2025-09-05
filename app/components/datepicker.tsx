"use client"

import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { format } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatepickerProps {
  date?: Date
  showTime?: boolean
  onChange?: (date: Date | undefined) => void
}

export default function Datepicker(props: DatepickerProps) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(props.date ?? new Date())

  function setTimeOnDate(baseDate: Date | undefined, timeValue: string): Date {
    const [hoursStr, minutesStr] = timeValue.split(":")
    const hours = Number(hoursStr ?? 0)
    const minutes = Number(minutesStr ?? 0)
    const current = baseDate ? new Date(baseDate) : new Date()
    current.setHours(hours)
    current.setMinutes(minutes)
    current.setSeconds(0)
    current.setMilliseconds(0)
    return current
  }

  function mergeDayKeepingTime(newDay: Date | undefined): Date | undefined {
    if (!newDay) return date
    const base = date ?? new Date()
    const merged = new Date(base)
    merged.setFullYear(newDay.getFullYear(), newDay.getMonth(), newDay.getDate())
    return merged
  }

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="border-lime-900 bg-lime-900 justify-between font-normal w-full text-lime-100 p-5"
          >
            {date ? format(date, props.showTime ? 'PPP p' : 'PPP') : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              const next = props.showTime ? mergeDayKeepingTime(date) : date
              setDate(next)
              props.onChange?.(next)
              if (!props.showTime) {
                setOpen(false)
              }
            }}
          />
          {props.showTime && (
            <div className="flex items-center gap-3 p-3 border-t">
              <Label htmlFor="time" className="text-sm">Time</Label>
              <input
                id="time"
                type="time"
                className="rounded-md border px-2 py-1"
                value={date ? `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}` : ""}
                onChange={(e) => {
                  const next = setTimeOnDate(date, e.target.value)
                  setDate(next)
                  props.onChange?.(next)
                }}
              />
              <Button
                type="button"
                variant="secondary"
                onClick={() => setOpen(false)}
              >
                Done
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  )
}
