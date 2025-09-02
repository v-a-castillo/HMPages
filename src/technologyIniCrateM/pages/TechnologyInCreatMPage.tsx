import { TechnologyDates } from "../components/TechnologyDates"
import { TechnologyDescription } from "../components/TechnologyDescription"
import { TechnologyDetailsForm } from "../components/TechnologyDetailsForm"
import { TechnologyHeader } from "../components/TechnologyHeader"
import { TechnologyTabs } from "../components/TechnologyTabs"

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