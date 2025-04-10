"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Plus, Info } from "lucide-react"

export default function PatientRegistrationForm() {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="flex-1 p-6 overflow-auto">
        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Patient ID</label>
              <div className="text-sm">908</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Patient Type</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Patient Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Regular</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="vip">VIP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Optional Patient ID (MRN)</label>
              <Input placeholder="Enter Patient ID (MRN)" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">National ID Number</label>
              <div className="relative">
                <Input placeholder="" />
                <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Designation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr">Mr.</SelectItem>
                  <SelectItem value="mrs">Mrs.</SelectItem>
                  <SelectItem value="ms">Ms.</SelectItem>
                  <SelectItem value="dr">Dr.</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter Patient Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input placeholder="Enter Patient Name" />
                <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender <span className="text-red-500">*</span>
              </label>
              <RadioGroup defaultValue="male" className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <div className="grid grid-cols-3 gap-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 31 }, (_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">January</SelectItem>
                    <SelectItem value="2">February</SelectItem>
                    <SelectItem value="3">March</SelectItem>
                    <SelectItem value="4">April</SelectItem>
                    <SelectItem value="5">May</SelectItem>
                    <SelectItem value="6">June</SelectItem>
                    <SelectItem value="7">July</SelectItem>
                    <SelectItem value="8">August</SelectItem>
                    <SelectItem value="9">September</SelectItem>
                    <SelectItem value="10">October</SelectItem>
                    <SelectItem value="11">November</SelectItem>
                    <SelectItem value="12">December</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 100 }, (_, i) => (
                      <SelectItem key={i} value={(2025 - i).toString()}>
                        {2025 - i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <Input placeholder="Age" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
              <div className="relative">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="years">Years</SelectItem>
                    <SelectItem value="months">Months</SelectItem>
                    <SelectItem value="days">Days</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="ghost" size="icon" className="absolute right-8 top-0">
                  <span className="text-gray-400">×</span>
                </Button>
              </div>
            </div>

            <div className="col-span-3">
              <Button variant="link" className="text-blue-500 p-0 h-auto">
                Clear
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
              <div className="flex">
                <div className="w-16">
                  <Select defaultValue="in">
                    <SelectTrigger className="border-r-0 rounded-r-none">
                      <SelectValue>
                        <span className="flex items-center">
                          <span className="text-xs">🇮🇳</span>
                        </span>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in">🇮🇳 +91</SelectItem>
                      <SelectItem value="us">🇺🇸 +1</SelectItem>
                      <SelectItem value="uk">🇬🇧 +44</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1 relative">
                  <Input className="rounded-l-none" placeholder="91234 56789" />
                  <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number Belongs To</label>
              <RadioGroup defaultValue="patient" className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="patient" id="phone-patient" />
                  <Label htmlFor="phone-patient">Patient</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="relative" id="phone-relative" />
                  <Label htmlFor="phone-relative">Relative/Guardian</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="col-span-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="send-whatsapp" />
                <label
                  htmlFor="send-whatsapp"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Send whatsapp message to patient
                </label>
                <Info className="h-4 w-4 text-blue-500" />
              </div>
            </div>

            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input placeholder="Email" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organisation</label>
              <div className="relative">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Organisation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="org1">Organisation 1</SelectItem>
                    <SelectItem value="org2">Organisation 2</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="ghost" size="icon" className="absolute right-8 top-0">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Referral</label>
              <div className="relative">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Referral" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ref1">Referral 1</SelectItem>
                    <SelectItem value="ref2">Referral 2</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="ghost" size="icon" className="absolute right-8 top-0">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-1">
                <Button variant="link" className="text-blue-500 p-0 h-auto text-xs">
                  Add Shared Referral
                </Button>
              </div>
            </div>

            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <Input placeholder="Address" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <Input placeholder="City" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="state1">State 1</SelectItem>
                  <SelectItem value="state2">State 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
              <Input placeholder="District" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
              <Input placeholder="Pincode" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Passport Number</label>
              <Input placeholder="Passport Number" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Medical Option Code</label>
              <Input placeholder="Medical Option Code" />
            </div>

            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in">India</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <Button variant="outline">Clear</Button>
            <div className="space-x-2">
              <Button variant="outline" className="bg-gray-100">
                Register
              </Button>
              <Button>Register And Bill</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[350px] p-6 bg-white border-l border-gray-200">
        <div>
          <h2 className="text-xl font-medium text-gray-800">Patient Medical History</h2>
          <p className="text-sm text-gray-600 mt-2">Register or Update Patient will save patients screening history</p>

          <div className="mt-6">
            <Button variant="outline" className="w-full justify-start">
              <span className="mr-2">→</span> Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
