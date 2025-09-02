import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "lucide-react"

export const TechnologyDates = () => {

      return (
      <div className="space-y-4">
        {/* Times TCD Updated */}
        <div className="grid grid-cols-12 gap-4 items-center text-sm">
          <div className="col-span-2">
            <Label className="text-gray-600">Times TCD Updated</Label>
          </div>
          <div className="col-span-3">
            <Input value="4" className="h-8 text-xs"   />
          </div>
          <div className="col-span-7"></div>
        </div>

        {/* Targeted Commitment Date */}
        <div className="grid grid-cols-12 gap-4 items-center text-sm">
          <div className="col-span-2">
            <Label className="text-gray-600">Targeted Commitment Date</Label>
          </div>
          <div className="col-span-3">
            <div className="flex items-center gap-1">
              <Input value="2026-12-31" className="h-8 text-xs" />
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <Calendar className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="col-span-7"></div>
        </div>
      </div>
    )

}