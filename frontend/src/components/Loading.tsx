
 export function Loading() {
    return (

        <div className="min-w-dvw min-h-dvh flex flex-col pt-10 items-center gap-5">
            <div role="status" className="w-full animate-pulse border-b border-slate-400">
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-400 w-full mb-4">

                </div>

            </div>
            <div role="status" className="max-w-2xl py-4 animate-pulse border-b border-slate-400">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-2xl mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>

    )
}
