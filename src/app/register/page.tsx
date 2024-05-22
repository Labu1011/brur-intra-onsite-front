"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import React from "react"

export default function page() {
  return (
    <div className="py-24">
      <h3 className="text-2xl font-bold text-center">Registration Form</h3>
      <p className="text-center text-gray-600 mb-8">
        Please fill out the form carefully!
      </p>

      <form
        action=""
        className="max-w-[700px] mx-auto mt-4 flex flex-col gap-3"
      >
        <Label htmlFor="team_name">Team Name</Label>
        <Input id="team_name" type="text" placeholder="Team ABC" />

        <div className="bg-amber-400 w-[3px] h-[20px] mx-auto my-3"></div>

        <Label htmlFor="1st_name">1st Team Member's Full Name</Label>
        <Input id="1st_name" type="text" placeholder="John Doe" />

        <Label htmlFor="1st_email">1st Team Member's Email Address</Label>
        <Input id="1st_email" type="email" placeholder="abc@example.com" />

        <Label htmlFor="1st_phone">1st Team Member's Phone Number</Label>
        <Input id="1st_phone" type="tel" placeholder="+880" />

        <Label htmlFor="1st_dept">1st Team Member's Department</Label>
        <Input id="1st_dept" type="text" placeholder="" />

        <Label htmlFor="1st_batch">
          1st Team Member's Batch (University Batch)
        </Label>
        <Input id="1st_batch" type="text" placeholder="" />

        <Label htmlFor="1st-tshirt" className="mt-4">
          1st Team Member's T-Shirt Size
        </Label>
        <RadioGroup defaultValue="m">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="m" id="m" />
            <Label htmlFor="m">M</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="l" id="l" />
            <Label htmlFor="l">L</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="xl" id="xl" />
            <Label htmlFor="xl">XL</Label>
          </div>
        </RadioGroup>

        <div className="bg-amber-400 w-[3px] h-[20px] mx-auto my-3"></div>

        <Label htmlFor="2nd_name">2nd Team Member's Full Name</Label>
        <Input id="2nd_name" type="text" placeholder="John Doe" />

        <Label htmlFor="2nd_email">2nd Team Member's Email Address</Label>
        <Input id="2nd_email" type="email" placeholder="abc@example.com" />

        <Label htmlFor="2nd_phone">2nd Team Member's Phone Number</Label>
        <Input id="2nd_phone" type="tel" placeholder="+880" />

        <Label htmlFor="2nd_dept">2nd Team Member's Department</Label>
        <Input id="2nd_dept" type="text" placeholder="" />

        <Label htmlFor="2nd_batch">
          2nd Team Member's Batch (University Batch)
        </Label>
        <Input id="2nd_batch" type="text" placeholder="" />

        <Label htmlFor="2nd-tshirt" className="mt-4">
          2nd Team Member's T-Shirt Size
        </Label>
        <RadioGroup defaultValue="m">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="m" id="m" />
            <Label htmlFor="m">M</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="l" id="l" />
            <Label htmlFor="l">L</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="xl" id="xl" />
            <Label htmlFor="xl">XL</Label>
          </div>
        </RadioGroup>

        <div className="bg-amber-400 w-[3px] h-[20px] mx-auto my-3"></div>

        <Label htmlFor="3rd_name">3rd Team Member's Full Name</Label>
        <Input id="3rd_name" type="text" placeholder="John Doe" />

        <Label htmlFor="3rd_email">3rd Team Member's Email Address</Label>
        <Input id="3rd_email" type="email" placeholder="abc@example.com" />

        <Label htmlFor="3rd_phone">3rd Team Member's Phone Number</Label>
        <Input id="3rd_phone" type="tel" placeholder="+880" />

        <Label htmlFor="3rd_dept">3rd Team Member's Department</Label>
        <Input id="3rd_dept" type="text" placeholder="" />

        <Label htmlFor="3rd_batch">
          3rd Team Member's Batch (University Batch)
        </Label>
        <Input id="3rd_batch" type="text" placeholder="" />

        <Label htmlFor="3rd-tshirt" className="mt-4">
          3rd Team Member's T-Shirt Size
        </Label>
        <RadioGroup defaultValue="m">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="m" id="m" />
            <Label htmlFor="m">M</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="l" id="l" />
            <Label htmlFor="l">L</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="xl" id="xl" />
            <Label htmlFor="xl">XL</Label>
          </div>
        </RadioGroup>

        <div className="bg-amber-400 w-[3px] h-[20px] mx-auto my-3"></div>

        <Label htmlFor="trx_id" className="mt-4">
          Transaction ID
        </Label>
        <p className="text-sm text-gray-500">
          <span className="text-red-500">*</span> Firstly pay with Bkash, Rocket
          or Nagad. Give the reference 'intra' when doing send money with
          exactly 610tk amount. And then enter the transaction id here. Each
          team should pay once with the full amount{" "}
          <span className="text-red-500">*</span>
        </p>
        <Input id="trx_id" type="text" placeholder="XXXXXX" />

        <Button className="mt-8 max-w-[200px]">Submit</Button>
      </form>
    </div>
  )
}
