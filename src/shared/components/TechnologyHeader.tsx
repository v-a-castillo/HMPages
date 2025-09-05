import { Button } from "@shared/components/ui/button"
import { Input } from "@shared/components/ui/input"
import { X } from "lucide-react"

export const TechnologyHeader = () => {
    return (
         <div className="bg-gray-100 border-b border-gray-300 p-4">
        <div className="grid grid-cols-12 gap-4 items-center text-sm">
          <div className="col-span-2 flex items-center gap-2">
            <span className="text-gray-600">Project Name</span>
          </div>
          <div className="col-span-6">
            <Input
              placeholder="Mock Project (EOL 3/31/2021) - ERP-FIN Accounts Receivables"
              className="h-8 text-xs border-gray-300"
               
            />
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-3 flex justify-end">
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )
}