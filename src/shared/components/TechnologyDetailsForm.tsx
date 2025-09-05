import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import { Checkbox } from "@/shared/components/ui/checkbox"
import { Search, Info } from "lucide-react"

export const TechnologyDetailsForm = () => {

    return (
    <div className="space-y-4">
      {/* First Row */}
      <div className="grid grid-cols-12 gap-4 items-center text-sm">
        <div className="col-span-2">
          <Label className="text-gray-600">TLM Rep</Label>
        </div>
        <div className="col-span-3">
          <div className="flex items-center gap-1">
            <Input placeholder="David Ortiz" className="h-8 text-xs"   />
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Search className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Info className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <Label className="text-gray-600">Program</Label>
        </div>
        <div className="col-span-3">
          <div className="flex items-center gap-1">
            <Input placeholder="TLM Test (EOL 3/31/2021)" className="h-8 text-xs"   />
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Info className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-12 gap-4 items-center text-sm">
        <div className="col-span-2">
          <Label className="text-gray-600">Status</Label>
        </div>
        <div className="col-span-3">
          <Select defaultValue="red">
            <SelectTrigger className="h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="red">Red</SelectItem>
              <SelectItem value="yellow">Yellow</SelectItem>
              <SelectItem value="green">Green</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <Label className="text-gray-600">Number</Label>
        </div>
        <div className="col-span-3">
          <Input placeholder="TSPPL0001654" className="h-8 text-xs"   />
        </div>
        <div className="col-span-1"></div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-12 gap-4 items-center text-sm">
        <div className="col-span-2">
          <Label className="text-gray-600">Project Class</Label>
        </div>
        <div className="col-span-3">
          <Select defaultValue="improvement">
            <SelectTrigger className="h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="improvement">Improvement</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="enhancement">Enhancement</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <Label className="text-gray-600">% Complete</Label>
        </div>
        <div className="col-span-3">
          <Select defaultValue="100">
            <SelectTrigger className="h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="100">100% - Date determined</SelectItem>
              <SelectItem value="75">75% - In Progress</SelectItem>
              <SelectItem value="50">50% - Planning</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1"></div>
      </div>

      {/* Fourth Row */}
      <div className="grid grid-cols-12 gap-4 items-center text-sm">
        <div className="col-span-2">
          <Label className="text-gray-600">Project type</Label>
        </div>
        <div className="col-span-3">
          <Select defaultValue="it-tlm">
            <SelectTrigger className="h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="it-tlm">IT - TLM</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="infrastructure">Infrastructure</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <Label className="text-gray-600">State</Label>
        </div>
        <div className="col-span-3">
          <Select defaultValue="work-in-progress">
            <SelectTrigger className="h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="work-in-progress">Work in Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1"></div>
      </div>

      {/* Fifth Row */}
      <div className="grid grid-cols-12 gap-4 items-center text-sm">
        <div className="col-span-2 flex items-center gap-2">
          <Checkbox id="remove-from-reporting" />
          <Label htmlFor="remove-from-reporting" className="text-gray-600">
            Remove From Reporting
          </Label>
        </div>
        <div className="col-span-3"></div>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <Label className="text-gray-600">TLM stage</Label>
        </div>
        <div className="col-span-3">
          <Select defaultValue="vp-risk-acknowledged">
            <SelectTrigger className="h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vp-risk-acknowledged">VP Risk Acknowledged</SelectItem>
              <SelectItem value="planning">Planning</SelectItem>
              <SelectItem value="execution">Execution</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1"></div>
      </div>

      {/* Sixth Row */}
      <div className="grid grid-cols-12 gap-4 items-center text-sm">
        <div className="col-span-2">
          <Label className="text-gray-600">Extended Support</Label>
        </div>
        <div className="col-span-3">
          <Select defaultValue="unsupported">
            <SelectTrigger className="h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="unsupported">Unsupported</SelectItem>
              <SelectItem value="supported">Supported</SelectItem>
              <SelectItem value="extended">Extended</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <Label className="text-gray-600">Risk Acceptance Reason</Label>
        </div>
        <div className="col-span-3">
          <Input placeholder="dependencies" className="h-8 text-xs"   />
        </div>
        <div className="col-span-1"></div>
      </div>

      {/* Seventh Row */}
      <div className="grid grid-cols-12 gap-4 items-center text-sm">
        <div className="col-span-2">
          <Label className="text-gray-600">Secondary Type</Label>
        </div>
        <div className="col-span-3">
          <Select defaultValue="finmod">
            <SelectTrigger className="h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="finmod">FinMod</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <Label className="text-gray-600"># of Risk Acceptances</Label>
        </div>
        <div className="col-span-3">
          <Input placeholder="1" className="h-8 text-xs"   />
        </div>
        <div className="col-span-1"></div>
      </div>

      {/* Eighth Row */}
      <div className="grid grid-cols-12 gap-4 items-center text-sm">
        <div className="col-span-2">
          <Label className="text-gray-600">Business Area</Label>
        </div>
        <div className="col-span-3">
          <Select defaultValue="corporate-services">
            <SelectTrigger className="h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="corporate-services">Corporate Services</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <Label className="text-gray-600"># of Risk Acceptance Cancelled</Label>
        </div>
        <div className="col-span-3">
          <Input placeholder="1" className="h-8 text-xs"   />
        </div>
        <div className="col-span-1"></div>
      </div>

      {/* Ninth Row */}
      <div className="grid grid-cols-12 gap-4 items-center text-sm">
        <div className="col-span-6"></div>
        <div className="col-span-2">
          <Label className="text-gray-600">Risk Request Submitted</Label>
        </div>
        <div className="col-span-3">
          <Select defaultValue="after-eol">
            <SelectTrigger className="h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="after-eol">AFTER the EoL date</SelectItem>
              <SelectItem value="before-eol">BEFORE the EoL date</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1"></div>
      </div>

      {/* Tenth Row */}
      <div className="grid grid-cols-12 gap-4 items-center text-sm">
        <div className="col-span-6"></div>
        <div className="col-span-2 flex items-center gap-2">
          <Checkbox id="disable-notifications" />
          <Label htmlFor="disable-notifications" className="text-gray-600">
            Disable notifications
          </Label>
        </div>
        <div className="col-span-4"></div>
      </div>
    </div>
  )



}