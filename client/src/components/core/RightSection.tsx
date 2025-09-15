
const RightSection = () => {
  return (
       <section className="col-span-7 space-y-6">
          {/* Preview card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-medium">Preview</h3>
              <div className="text-sm text-gray-500">Page 1 of 3</div>
            </div>

            <div className="mt-4 border rounded-lg p-4 bg-gray-50 h-56 overflow-auto">
              <p className="text-sm text-gray-700">(PDF / Image preview or pasted text appears here — thumbnails, extracted text, or OCR progress.)</p>
            </div>

            <div className="mt-4 flex gap-2 text-sm">
              <button className="px-3 py-1 rounded-md border">Rotate</button>
              <button className="px-3 py-1 rounded-md border">Zoom</button>
              <button className="px-3 py-1 rounded-md border">OCR</button>
            </div>
          </div>

          {/* Results card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Summary / AI Response</h3>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded-md border text-sm">Copy</button>
                <button className="px-3 py-1 rounded-md border text-sm">Export</button>
              </div>
            </div>

            <div className="mt-4">
              <div className="rounded-lg border p-4 bg-gray-50 min-h-[120px]">
                <h4 className="font-semibold">Concise Summary</h4>
                <p className="mt-2 text-sm text-gray-700">(AI-generated summary appears here. Show bullets, highlights, and a confidence bar.)</p>

                <div className="mt-4">
                  <h5 className="text-sm font-medium">Key Takeaways</h5>
                  <ul className="list-disc ml-5 text-sm text-gray-700 mt-2">
                    <li>Takeaway 1</li>
                    <li>Takeaway 2</li>
                    <li>Takeaway 3</li>
                  </ul>
                </div>

                <div className="mt-4 flex items-center gap-3 text-sm">
                  <button className="px-3 py-1 rounded-md bg-indigo-600 text-white">Expand</button>
                  <button className="px-3 py-1 rounded-md border">Request more detail</button>
                </div>
              </div>
            </div>
          </div>

          {/* History / Saved summaries */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="text-md font-medium mb-3">History</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center justify-between p-2 border rounded">
                <div>
                  <div className="font-medium">Report_June_21.pdf</div>
                  <div className="text-xs text-gray-500">2 bullets · 45 words</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-2 py-1 rounded border text-xs">Open</button>
                  <button className="px-2 py-1 rounded border text-xs">Delete</button>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 border rounded">
                <div>
                  <div className="font-medium">MeetingNotes.png</div>
                  <div className="text-xs text-gray-500">3 bullets · 80 words</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-2 py-1 rounded border text-xs">Open</button>
                  <button className="px-2 py-1 rounded border text-xs">Delete</button>
                </div>
              </div>

            </div>
          </div>
        </section>
  )
}

export default RightSection