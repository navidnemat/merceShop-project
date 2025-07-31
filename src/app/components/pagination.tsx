"use client"


import { useRouter, useSearchParams } from "next/navigation"
import ReactPaginate from "react-paginate"

function Pagination({ pagecount }: { pagecount: number }) {

    const router = useRouter()

    const searchParams = useSearchParams()

    const nextBtn = <div className="bg-white px-3 py-1 rounded-md cursor-pointer border-1 border-black">بعدی</div>

    const prevBtn = <div className="bg-white px-3 py-1 rounded-md cursor-pointer border-1 border-black">قبلی</div>

    const handlePageClick = (e: { selected: number }) => {
        const page = e.selected + 1

        const currentSearchParams = new URLSearchParams(searchParams.toString())

        currentSearchParams.set("page", page.toString())
        currentSearchParams.set("per_page", "8")

        router.push(`/mainStore?${currentSearchParams.toString()}`)
    }

    return (
        <div className="flex justify-center items-center py-10">
            <ReactPaginate className="flex items-center gap-3 "
                activeClassName="item !bg-[#3c50e0] !border-none !text-white"
                breakLabel="..."
                nextLabel={nextBtn}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pagecount}
                previousLabel={prevBtn}
                renderOnZeroPageCount={null}
                pageLinkClassName="item"
            />
        </div>
    )
}

export default Pagination