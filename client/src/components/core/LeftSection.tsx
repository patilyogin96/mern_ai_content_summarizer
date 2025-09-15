import { useState, type MouseEventHandler } from "react"
import { Button } from "../ui/button"

import UploadCard from "./UploadCard"
import { Textarea } from "../ui/textarea"


const LeftSection = () => {
    const [isSelectedPasteOption , setIsSelectedPasteOption]= useState<boolean>(false) 
     const handlePasteText : MouseEventHandler<HTMLButtonElement> = (e)=>{
        e.stopPropagation()
        setIsSelectedPasteOption(prev=>!prev)
    }
    
  return (
       <section className="col-span-5 bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Upload / Input</h2>
          {
              isSelectedPasteOption ?
                  <div>
                      <div>
                        <Textarea placeholder="Paste your content here..." />
                      </div>

                      <div>
                          <Button className="px-4 py-2 rounded-md bg-indigo-600 text-white" onClick={() => { }} >Next</Button>
                          <Button className="px-4 py-2 rounded-md border cursor-pointer" onClick={handlePasteText} >Back</Button>
                      </div>

                  </div> :


                  <UploadCard setIsSelectedPasteOption={setIsSelectedPasteOption} isSelectedPasteOption={isSelectedPasteOption} />

          }

          <div className="mt-6">
            <label className="block text-sm text-gray-600 mb-2">Prompt / Instruction</label>
            <textarea rows={5} className="w-full rounded-lg border p-3 text-sm" placeholder="e.g. Give me a 3-bullet summary and key takeaways..."></textarea>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Include timestamps</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Extract key phrases</span>
              </label>
            </div>
            <div>
              <select className="rounded border p-1 text-sm">
                <option>Model: GPT-4o</option>
                <option>Model: GPT-4</option>
                <option>Model: GPT-3.5</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            {/* <button className="flex-1 px-4 py-2 rounded-lg bg-green-600 text-white">Summarize</button>
            <button className="px-4 py-2 rounded-lg border">Clear</button> */}
            <Button>Summarize</Button>
            <Button>Clear</Button>
          </div>
        </section>
  )
}

export default LeftSection