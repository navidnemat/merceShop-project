import AddToCart from "@/app/components/addToCart";
import Gallery from "@/app/components/gallery";
import { IProductItemProps } from "@/app/components/productItem";
import { fotmatNumberWithCommas } from "@/utils/number";

interface IProductProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{}>
}

export default async function ProductPage({ params }: IProductProps) {

    const { id } = await params

    //const result = await fetch(`http://localhost:8000/newArrivals/${id}`)

    const result = await fetch(`http://localhost:3000/api/products/${id}`)
    const data = await result.json() as IProductItemProps


    return (
        <div>
            <section className="relative pt-5 lg:pt-10 overflow-hidden pb-20">
                <div className="w-full px-4 mx-auto max-w-[1676px] sm:px-6 xl:px-4">
                    <div className="flex flex-col lg:flex-row gap-7 xl:gap-16">
                        <div className="w-full lg:w-1/2">
                            <Gallery imageUrls={data.galleryimages} />
                        </div>
                        <div className="w-full lg:w-1/2 pt-1">
                            <div className="flex items-center justify-between mb-5">
                                <h2 className="text-3xl font-bold text-gray-800">{data.title}</h2>
                                <div className="inline-flex rounded-full shrink-0 text-sm text-white bg-[#3c50e0] py-0.5 px-2.5">30٪ تخفیف</div>
                            </div>
                            <div className="flex flex-wrap items-center gap-5 mb-2">
                                <div className="flex items-center gap-2.5">
                                    <div className="flex gap-1">
                                        <img src="/images/icon-star.svg" width={16} height={16} alt="star" />
                                        <span>{data.rate}</span>
                                    </div>
                                </div>
                                {data.available ? <div className="flex items-center gap-1.5">
                                    <svg className="fill-[#22ad5c]" width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><g clipPath="url(#clip0_375_9221)"><path d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"></path><path d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"></path></g><defs><clipPath id="clip0_375_9221"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                                    <span className="text-[#22ad5c] text-xs">موجود در انبار</span>
                                </div> : <div className="flex items-center gap-1.5">
                                    <svg className="fill-[#ad2222]" width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><g clipPath="url(#clip0_375_9221)"><path d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"></path><path d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"></path></g><defs><clipPath id="clip0_375_9221"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                                    <span className="text-[#ad2222] text-xs">ناموجود</span>
                                </div>}
                            </div>
                            <h3 className="mb-4">
                                <span className="ms-2 text-2xl flex items-start flex-col gap-1.5">
                                    <span className="line-through text-gray-400 text-sm">{data.discounted && <span>{fotmatNumberWithCommas(data.price)} تومان</span>}</span>
                                    <span className="text-xl font-bold text-[#3c50e0]">{fotmatNumberWithCommas(data.discountedPrice)} تومان</span>
                                </span>
                            </h3>
                            <ul className="flex flex-col gap-2 mb-8">
                                <li className="flex items-center gap-2.5">
                                    <svg className="fill-[#3c50e0]" width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_375_9221)"><path d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"></path><path d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"></path></g><defs><clipPath id="clip0_375_9221"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                                    تحویل رایگان
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <svg className="fill-[#3c50e0]" width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_375_9221)"><path d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"></path><path d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"></path></g><defs><clipPath id="clip0_375_9221"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                                    با استفاده از کد تخفیف PROMO30، از ۳۰٪ تخفیف ویژه فروش بهره‌مند شوید.
                                </li>
                            </ul>
                            <AddToCart addToCartOnOff={true} id={id} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-slate-100">
                <div className="w-full px-4 mx-auto max-w-[1676px] sm:px-6 xl:px-4">
                    <div className="flex flex-wrap items-center bg-white rounded-[10px] shadow-sm gap-5 xl:gap-12 py-4.5 px-4 sm:px-6">
                        <span className="lg:text-lg text-indigo-700 underline-offset-auto border-b-2 border-indigo-700">توضیحات</span>
                        <span className="lg:text-lg">اطلاعات تکمیلی</span>
                        <span className="lg:text-lg">نقد و بررسی‌ها  </span>
                    </div>
                    <div>
                        <div className="flex flex-col sm:flex-row gap-7 xl:gap-12 mt-12">
                            <div className="max-w-[670px] w-full">
                                <h2 className="mb-7 text-2xl">مشخصات</h2>
                                <div className="text-gray-600 leading-7" style={{ wordSpacing: '3px' }}>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}