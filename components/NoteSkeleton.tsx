import { Skeleton } from "./ui/skeleton"
export default function NoteSkeleton() {
  return (
    <div className="w-4/5 h-fit border my-16 p-2 rounded-sm">
      <div className=" flex flex-row gap-2">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-36 h-6" />
      </div>
      <div className="mt-2 mb-6">
        <Skeleton className="w-[36rem] h-16" />
      </div>
      <div className="gap-2 flex flex-col">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
      </div>
      <Skeleton className="m-8 p-4 mt-4 h-48" />
      <div className="gap-2 flex flex-col">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
      </div>
      <Skeleton className="my-4 w-11/12 mx-auto mt-4 h-16" />
      <Skeleton className="w-full h-4" />
    </div>
  )
}
