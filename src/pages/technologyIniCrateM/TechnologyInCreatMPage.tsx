import { TechnologyDates } from "@shared/components/TechnologyDates"
import { TechnologyDescription } from "@shared/components/TechnologyDescription"
import { TechnologyDetailsForm } from "@shared/components/TechnologyDetailsForm"
import { TechnologyHeader } from "@shared/components/TechnologyHeader"
import { TechnologyTabs } from "@/shared/components/TechnologyTabs"

export const TechnologyInCreatMPage = () =>{

     return (
    <div className="max-w-6xl mx-auto bg-white border border-gray-300 shadow-sm">
      <TechnologyHeader />

      <div className="p-4 space-y-4">
        <TechnologyDetailsForm />
        <TechnologyDescription />
        <TechnologyDates />

        <div className="mt-6">
          <TechnologyTabs />
        </div>
      </div>
    </div>
  )

}