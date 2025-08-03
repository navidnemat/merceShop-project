import Link from "next/link";
import NewArrivalsSlider from "./newArrivalsSlider";
import { GoArrowLeft } from "react-icons/go";

export default async function NewArrivals() {

    return (
        <section className="overflow-hidden">
            <div className="max-w-[1676px] w-full mx-auto px-4 sm:px-6 xl:px-4 pt-6">
                <div className="flex flex-col">
                    <div className="flex items-center flex-col gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg w-fit">
                        <h2 className="text-xl font-bold bg-gradient-to-l from-[#3c50e0] to-[#9e6eff] bg-clip-text text-transparent">تازه وارد ها</h2>
                    </div>
                </div>
                <div className="">
                    <NewArrivalsSlider />
                </div>
                <div className="flex">
                    <Link href={'/mainStore'} className="flex text-lg text-shadow-sm items-center gap-2 mt-4 mr-3 text-[#3c50e0] ease-out duration-200 cursor-pointer hover:[&_svg]:-translate-x-1">
                        <span>مشاهده همه محصولات</span>
                        <GoArrowLeft className="transition-all ease-out duration-200" size={20}/>
                    </Link>
                </div>
            </div>
        </section>
    )
}