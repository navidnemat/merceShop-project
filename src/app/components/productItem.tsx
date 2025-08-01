import QuickAddToCart from "./quickAddToCart";
import { fotmatNumberWithCommas } from "@/utils/number"

export interface IProductItemProps {
    id: string,
    image: string,
    title: string,
    price: number,
    discountedPrice: number,
    description: string,
    Discountpercentage: number,
    galleryimages: string[],
    discounted: boolean
    rate: number
    available: boolean
}

export interface IProductList {
    first: number | null;
    items: number | null;
    last: number | null;
    next: number | null;
    pages: number;
    prev: number | null;
    data: IProductItemProps[]
}

export default function ProductItem({ image, title, price, discountedPrice, id, discounted, rate, available }: IProductItemProps) {

    return (
        <div className="group transition-all duration-200 ease-out hover:scale-105 relative z-10 my-10">
            <div className="relative overflow-hidden rounded-lg lg:min-h-[350px] bg-white/50 backdrop-blur-md border border-white/40 shadow-lg p-4">

                {discounted ? <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                    تخفیف ویژه%
                </span> : <span className="absolute top-2 right-2 bg-[#3c50e0] text-white text-xs px-2 py-1 rounded-full shadow-md">
                    جدید
                </span>}

                <div className="flex flex-col items-center justify-between lg:min-h-[350px]">
                    <div className="max-w-[190px] rounded-xl overflow-hidden  flex items-center justify-center">
                        <img src={image} className="w-full" alt="محصول" width={280} height={280} />
                    </div>

                    <div className="px-4 lg:mt-3 w-full">
                        {available ? <div className="flex items-center gap-1.5">
                            <svg className="fill-[#22ad5c]" width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><g clipPath="url(#clip0_375_9221)"><path d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"></path><path d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"></path></g><defs><clipPath id="clip0_375_9221"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                            <span className="text-[#22ad5c] text-xs">موجود در انبار</span>
                        </div> : <div className="flex items-center gap-1.5">
                            <svg className="fill-[#ad2222]" width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><g clipPath="url(#clip0_375_9221)"><path d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"></path><path d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"></path></g><defs><clipPath id="clip0_375_9221"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                            <span className="text-[#ad2222] text-xs">ناموجود</span>
                        </div>}

                        <h3 className="text-lg font-semibold mb-2 line-clamp-1 mt-3">{title}</h3>

                        <div className="flex justify-between items-start mt-2">
                            <div className="flex items-center gap-1">
                                <img src="/images/icon-star.svg" width={16} height={16} alt="star" />
                                <span className="text-xs">{rate}</span>
                            </div>
                            <div className="flex items-end flex-col gap-2">
                                <span className="line-through text-gray-400 text-sm h-4">{discounted && <span>{fotmatNumberWithCommas(price)} تومان</span>}</span>
                                <span className="text-xl font-bold text-[#3c50e0]">{fotmatNumberWithCommas(discountedPrice)} تومان</span>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="absolute right-0 top-15 flex flex-col gap-2 p-5.5 ease-linear duration-150 group-hover:translate-x-27 translate-x-full show">
                    <QuickAddToCart id={id} />
                </div>
            </div>
        </div>
    )
}

