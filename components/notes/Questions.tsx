import { Button } from "@/components/ui/button"

export default function Question(props: any) {
  return (
    <div className="flex my-4 flex-row w-11/12 mx-auto border rounded-md p-2 justify-between mt-4">
      <p className="text-2xl font-medium p-2">{props.question}</p>
      <p className="my-auto">{props.answer}</p>
    </div>
  )
}
