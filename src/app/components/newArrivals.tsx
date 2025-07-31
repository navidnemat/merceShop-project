import Link from "next/link";
import ProductItem, { IProductList } from "./productItem";
import NewArrivalsSlider from "./newArrivalsSlider";

export default async function NewArrivals() {

    return (
        <section className="overflow-hidden">
            <div className="max-w-[1676px] w-full mx-auto px-4 sm:px-6 xl:px-4 pt-15">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg w-fit">
                        <h2 className="text-xl font-bold bg-gradient-to-l from-[#3c50e0] to-[#9e6eff] bg-clip-text text-transparent">تازه وارد ها</h2>
                    </div>
                    <Link href={'/mainStore'} className="rounded-md px-4 py-3 bg-slate-100/60 border-1 border-slate-200 text-gray-700 text-sm hover:text-white hover:bg-slate-900 ease-out duration-200 cursor-pointer backdrop-blur-md border border-white/40 shadow-lg">دیدن همه</Link>
                </div>
                <div className="py-6">
                    <NewArrivalsSlider />
                </div>

            </div>
        </section>
    )
}