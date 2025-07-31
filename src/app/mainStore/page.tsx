import Link from "next/link";
import ProductItem, { IProductList } from "../components/productItem";
import Pagination from "../components/pagination";

interface IStoreProps {
    params: Promise<{}>
    searchParams: Promise<{ page: string; per_page: string; title: string }>
}

export default async function MainStore({ searchParams }: IStoreProps) {

    const page = (await searchParams).page ?? "1"
    const per_page = (await searchParams).per_page ?? "8"

    const result = await fetch(`http://localhost:8000/newArrivals?_page=${page}&_per_page=${per_page}`)
    const data = await result.json() as IProductList

    return (
        <div>
            <div className="overflow-hidden">
                <div className="w-full py-5 px-4 mx-auto max-w-[1676px] xl:px-4 sm:px-6">
                   
                    <div className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg w-fit">
                       
                        <h2 className="text-xl font-bold bg-gradient-to-l from-[#3c50e0] to-[#9e6eff] bg-clip-text text-transparent">هر چی بخوای اینجاست !</h2>
                    </div>
                </div>
            </div>
            <section className="overflow-hidden relative pt-5">
                <div className="w-full px-4 mx-auto sm:px-6 xl:px-4 max-w-[1676px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7.5 gap-y-9">
                        {data.data.map((item) => (
                            <Link key={item.id} href={`/mainStore/${item.id}`}>
                                <ProductItem {...item} />
                            </Link>
                        ))}
                    </div>
                    <Pagination pagecount={data.pages} />
                </div>
            </section>
        </div>
    )
}