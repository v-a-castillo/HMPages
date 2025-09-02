import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const TechnologyDescription = () => {

     return (
    <div className="space-y-2">
      <Label className="text-gray-600">Description</Label>
      <Textarea
        className="min-h-[200px] text-xs font-mono"
        placeholder={`test`}
         
      />
    </div>
  )

}