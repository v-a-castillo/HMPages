import { useState } from "react"
import { Button } from "@shared/components/ui/button"
import { Input } from "@shared/components/ui/input"
import { Label } from "@shared/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/components/ui/tabs"
import { Card, CardContent } from "@shared/components/ui/card"
import { Search, Info } from "lucide-react"
import { TechnologyActions } from "./TechnologyActions"


export const TechnologyTabs = () => { 

    const [activeTab, setActiveTab] = useState("location")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-7 bg-gray-100 h-8">
        <TabsTrigger value="location" className="text-xs h-6">
          Location
        </TabsTrigger>
        <TabsTrigger value="dates" className="text-xs h-6">
          Dates
        </TabsTrigger>
        <TabsTrigger value="details" className="text-xs h-6">
          Details
        </TabsTrigger>
        <TabsTrigger value="financials" className="text-xs h-6">
          Financials
        </TabsTrigger>
        <TabsTrigger value="notes" className="text-xs h-6">
          Notes
        </TabsTrigger>
        <TabsTrigger value="preferences" className="text-xs h-6">
          Preferences
        </TabsTrigger>
        <TabsTrigger value="stakeholders" className="text-xs h-6">
          Stakeholders
        </TabsTrigger>
      </TabsList>

      <TabsContent value="location" className="mt-4 space-y-4">
        <Card>
          <CardContent className="p-4 space-y-4">
            {/* Business Application/Service */}
            <div className="grid grid-cols-12 gap-4 items-center text-sm">
              <div className="col-span-2">
                <Label className="text-gray-600">Business Application/Service</Label>
              </div>
              <div className="col-span-3">
                <Select defaultValue="business-application">
                  <SelectTrigger className="h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="business-application">Business Application</SelectItem>
                    <SelectItem value="service">Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-2">
                <Label className="text-gray-600">Status</Label>
              </div>
              <div className="col-span-3">
                <Input value="Operational" className="h-8 text-xs"   />
              </div>
              <div className="col-span-1"></div>
            </div>

            {/* Business Application */}
            <div className="grid grid-cols-12 gap-4 items-center text-sm">
              <div className="col-span-2">
                <Label className="text-gray-600">Business Application</Label>
              </div>
              <div className="col-span-3">
                <div className="flex items-center gap-1">
                  <Input placeholder="ERP-FIN Accounts Receivables" className="h-8 text-xs"   />
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
                <Label className="text-gray-600">IT Application Owner</Label>
              </div>
              <div className="col-span-3">
                <div className="flex items-center gap-1">
                  <Input placeholder="David Ortiz" className="h-8 text-xs"   />
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <Info className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>

            {/* Off platform asset */}
            <div className="grid grid-cols-12 gap-4 items-center text-sm">
              <div className="col-span-2">
                <Label className="text-gray-600">Off platform asset</Label>
              </div>
              <div className="col-span-3"></div>
              <div className="col-span-1"></div>
              <div className="col-span-2">
                <Label className="text-gray-600">IT Application Owner email</Label>
              </div>
              <div className="col-span-3">
                <Input placeholder="david@test.com" className="h-8 text-xs"   />
              </div>
              <div className="col-span-1"></div>
            </div>

            <TechnologyActions />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="dates" className="mt-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Dates content would go here...</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="details" className="mt-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Details content would go here...</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="financials" className="mt-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Financials content would go here...</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notes" className="mt-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Notes content would go here...</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="preferences" className="mt-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Preferences content would go here...</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="stakeholders" className="mt-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">Stakeholders content would go here...</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )


}