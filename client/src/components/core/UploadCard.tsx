import { useCallback, useState, type MouseEventHandler, type SetStateAction } from 'react';
import {useDropzone} from 'react-dropzone'   
import { Button } from '../ui/button';

type TUploadCard={
    isSelectedPasteOption:boolean
    setIsSelectedPasteOption:React.Dispatch<SetStateAction<boolean>>

} 
 


const UploadCard = ({isSelectedPasteOption , setIsSelectedPasteOption}:TUploadCard) => {
      const onDrop = useCallback((acceptedFiles: any) => {
            console.log("AcceptedFiles-->", acceptedFiles);
    
        }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    console.log("IsDrag-->", isDragActive);

        const handleUploadFile: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
    }

    const handlePasteText : MouseEventHandler<HTMLButtonElement> = (e)=>{
        e.stopPropagation()
        setIsSelectedPasteOption(prev=>!prev)
    }


    console.log("IsDrag-->", isDragActive);


  return (
     <div  className=" border-2 border-dashed border-gray-200 rounded-lg p-6 text-center cursor-pointer"{...getRootProps()}>
             <input {...getInputProps()} />
            <div className="mb-4">
              <svg className="mx-auto h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 3v12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 7l4-4 4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {!isDragActive &&    <p className="text-sm text-gray-500">Drag & drop image / PDF, or paste text</p>}
         
            <div className="mt-4 flex justify-center gap-3">
              <Button className="px-4 py-2 rounded-md bg-indigo-600 text-white" onClick={handleUploadFile} >Upload file</Button>
              <Button className="px-4 py-2 rounded-md border cursor-pointer" onClick={handlePasteText} >Paste text</Button>
            </div>
          </div>
  )
}

export default UploadCard