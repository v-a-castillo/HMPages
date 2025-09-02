import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Info } from "lucide-react"

export const TechnologyActions = () => {
    return (
    <div className="bg-gray-50 p-3 rounded">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Assets</h3>

      <div className="grid grid-cols-12 gap-4 items-center text-sm mb-2">
        <div className="col-span-2">
          <Label className="text-gray-600">Humana App ID</Label>
        </div>
        <div className="col-span-3">
          <Input placeholder="XXX9" className="h-8 text-xs"   />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <Label className="text-gray-600">Delegate</Label>
        </div>
        <div className="col-span-3">
          <div className="flex items-center gap-1">
            <Input className="h-8 text-xs" />
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Search className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center text-sm mb-2">
        <div className="col-span-2">
          <Label className="text-gray-600">Affected CVs Count</Label>
        </div>
        <div className="col-span-3">
          <Input placeholder="0" className="h-8 text-xs"   />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <Label className="text-gray-600">Delegate email</Label>
        </div>
        <div className="col-span-3">
          <Input className="h-8 text-xs" />
        </div>
        <div className="col-span-1"></div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center text-sm mb-2">
        <div className="col-span-6"></div>
        <div className="col-span-2">
          <Label className="text-gray-600">TLM test</Label>
        </div>
        <div className="col-span-3">
          <div className="flex items-center gap-1">
            <Input  className="h-8 text-xs"   />
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Search className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Info className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center text-sm mb-2">
        <div className="col-span-6"></div>
        <div className="col-span-2">
          <Label className="text-gray-600">TLM governance committee SVP</Label>
        </div>
        <div className="col-span-3">
          <div className="flex items-center gap-1">
            <Input placeholder="David O" className="h-8 text-xs"   />
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Search className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Info className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center text-sm">
        <div className="col-span-6"></div>
        <div className="col-span-2">
          <Label className="text-gray-600">Type</Label>
        </div>
        <div className="col-span-3">
          <Select defaultValue="application">
            <SelectTrigger className="h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="application">Application</SelectItem>
              <SelectItem value="service">Service</SelectItem>
              <SelectItem value="infrastructure">Infrastructure</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  )
}