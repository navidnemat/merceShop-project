import CountdownTimer from "./components/countDown";
import FeedbackSlider from "./components/feedbackSlider";
import NewArrivals from "./components/newArrivals";
import MainSlider from "./components/slider";

import Link from "next/link";
import BackToTopButton from "./components/backToTopBtn";
import Brands from "./components/Brands";


interface IStoreProps {
  params: Promise<{}>
  searchParams: Promise<{ page: string; per_page: string; title: string }>
}


export default async function Home({ searchParams }: IStoreProps) {

  // const result = await fetch(`http://localhost:8000/newArrivals`)
  // const data = await result.json() as IProductItemProps[]

  return (
    <div className="relative">
      <div className="absolute top-[-80px] left-[10%] w-[250px] h-[250px] bg-pink-300 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-[20%] right-[20%] w-[200px] h-[200px] bg-blue-400 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute top-[60%] left-[25%] w-[220px] h-[220px] bg-purple-400 rounded-full blur-2xl opacity-40"></div>
      <div className="absolute bottom-[-100px] right-[15%] w-[280px] h-[280px] bg-yellow-300 rounded-full blur-3xl opacity-40 -z-1"></div>
      <div className="absolute bottom-[20%] left-[40%] w-[180px] h-[180px] bg-cyan-300 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute top-[2050px] left-[20%] w-[220px] h-[220px] bg-yellow-300 rounded-full blur-2xl opacity-30 -z-1"></div>

      {/*Hero section*/}
      <section className="overflow-hidden lg:py-7">
        <div className="max-w-[1676px] mx-auto w-full xl:px-4 px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 flex flex-col items-start w-full px-6 md:px-10 py-3 lg:py-10">
              <p className="lg:text-5xl text-3xl font-extrabold leading-snug bg-gradient-to-l from-[#3c50e0] to-[#9e6eff] bg-clip-text text-transparent max-w-[340px] md:max-w-full drop-shadow-md">
                جدیدترین تکنولوژی دنیا <br /> با بهترین قیمت و تضمین اصالت
              </p>
              <p className="lg:text-2xl text-lg font-semibold text-[#3c50e0] max-w-[360px] mt-4 lg:mt-6">
                فروشگاهی که دیجیتال بودن رو معنی می‌کنه
              </p>
              <Link href={'/mainStore'} className="mt-6 px-6 py-3 lg:mt-8 lg:px-8 lg:py-3 bg-[#3c50e0] hover:bg-[#4d5df5] transition transform hover:scale-105 text-white rounded-xl shadow-md hover:shadow-[0_0_15px_#3c50e0] font-semibold ease-out duration-300 cursor-pointer select-none">
                ورود به دنیای تکنولوژی
              </Link>
            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center lg:mt-0 mt-10">
              <img src="/new/phoneBanner3.webp" className="float-slow" width={440} height={440} />
            </div>
          </div>
        </div>
      </section>

      {/* slider */}
      <section className="overflow-hidden pb-3 xl:pb-6 pt-10 ">
        <div className="max-w-[1676px] mx-auto w-full xl:px-4 px-4">
          <div className="flex flex-wrap xl:flex-nowrap gap-3">
            <div className="xl:w-2/3 w-full">
              <div className="relative rounded-[10px] overflow-hidden h-full bg-white/40 backdrop-blur-lg border border-white/40 shadow-lg">
                <MainSlider />
              </div>
            </div>
            <div className="xl:max-w-[469px] w-full flex flex-col justify-between sm:flex-row xl:flex-col">

              <div className="relative w-full cursor-pointer rounded-[10px] bg-gradient-to-br from-[#dff4ff]/70 via-[#eaf1ff]/60 to-[#ffffff]/50 p-4 sm:p-7 backdrop-blur-md border border-white/40 shadow-lg transition-all hover:scale-[1.015] hover:shadow-2xl duration-300">
                <div className="flex items-center justify-between gap-4">
                  <div className="max-w-[160px] w-full">
                    <h2 className="mb-20 text-2xl font-semibold text-gray-800">
                      مک‌بوک پرو - ۵۱۲/۱۶GB
                    </h2>
                    <div>
                      <span className="flex items-center gap-2">
                        <span className="text-sm text-gray-700"></span>
                        <span className="bg-[#3c50e0]/10 text-[#3c50e0] font-bold px-2 pt-1 rounded-lg text-sm shadow-sm">
                          10%
                        </span>
                        <span className="text-sm text-gray-700">تخفیف؟چرا که نه!</span>
                      </span>
                    </div>
                  </div>

                  <div className="relative max-w-[180px] w-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#3c50e0]/20 rounded-full blur-2xl z-0" />
                    <img src="/images/macbook.webp" width={180} height={180} className="relative z-10" />
                  </div>
                </div>
              </div>
              <div className="relative w-full cursor-pointer rounded-[10px] bg-gradient-to-br from-[#EAE7DE]/70 via-[#EAE7DE]/60 to-[#ffffff]/50 p-4 sm:p-7 backdrop-blur-md border border-white/40 shadow-lg transition-all hover:scale-[1.015] hover:shadow-2xl duration-300">
                <div className="flex items-center justify-between gap-4">
                  <div className="max-w-[160px] w-full">
                    <h2 className="mb-20 text-2xl font-semibold text-gray-800">
                      گلکسی S25 اولترا 5G
                    </h2>
                    <div>
                      <span className="flex items-center gap-2">
                        <span className="text-sm text-gray-700"></span>
                        <span className="bg-[#3c50e0]/10 text-[#3c50e0] font-bold px-2 pt-1 rounded-lg text-sm shadow-sm">
                          10%
                        </span>
                        <span className="text-sm text-gray-700">تخفیف؟چرا که نه!</span>
                      </span>
                    </div>
                  </div>

                  <div className="relative max-w-[180px] w-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#3c50e0]/20 rounded-full blur-2xl z-0" />
                    <img src="/new/s25.webp" width={200} height={200} className="relative z-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1676px] w-full mx-auto px-4 sm:px-8 xl:px-4">
          <div className="flex flex-wrap justify-between items-center gap-7 xl:gap-12 mt-11 pe-4">
            <div className="flex items-center gap-4">
              <img src="/images/rocket.svg" width={40} height={41} />
              <div>
                <h3 className="text-lg">ارسال رایگان</h3>
                <p className="text-sm">برای همه سفارش‌های بالای 200$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/images/refreshSpin.svg" width={40} height={41} />
              <div>
                <h3 className="text-lg">۱ و ۱ بازگشت</h3>
                <p className="text-sm">لغو سفارش پس از ۱ روز</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/images/trust.svg" width={40} height={41} />
              <div>
                <h3 className="text-lg">پرداخت‌های ۱۰۰٪ امن</h3>
                <p className="text-sm">تضمین پرداخت‌های امن</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/images/message.svg" width={40} height={41} />
              <div>
                <h3 className="text-lg">پشتیبانی اختصاصی ۲۴ ساعته</h3>
                <p className="text-sm">هر مکان و هر زمان</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*Category*/}

      <section className="py-12">
        <div className="max-w-[1676px] mx-auto px-4 sm:px-6 xl:px-4">

          {/* title */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">دسته‌بندی کالاهای دیجیتال</h2>
            <div className="w-64 md:w-80 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mt-2 rounded-full"></div>
          </div>

          {/* carts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">

            {/* کارت 1 - لپ‌تاپ */}
            <div className="bg-[#f2f2f2] lg:col-span-2 rounded-xl p-5 flex flex-col items-start justify-between h-[230px] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer border border-white/40 shadow-lg">
              <div className="flex justify-between w-full">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-indigo-600">Laptop</p>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">لپتاپ</h3>
                  </div>

                  <button className="bottom-5 left-5 z-99 mt-3 text-sm px-4 py-1.5 bg-indigo-600  text-white rounded-full hover:bg-indigo-700 transition-all duration-200 cursor-pointer shadow-indigo-400 hover:shadow-md hover:scale-105">
                    مشاهده
                  </button>
                </div>
                <div className="h-[190px] flex items-center justify-center flex-col">
                  <img src="/new/macbook.webp" alt="Phone" className="w-[220px] self-end" />
                </div>

              </div>


            </div>

            {/* کارت 2 - گوشی */}
            <div className="bg-blue-50/60 rounded-xl  p-5 flex flex-col items-start justify-between h-[230px] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer backdrop-blur-md border border-white/40 shadow-lg">
              <div className="flex justify-between w-full">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-blue-500">Amartphones</p>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">موبایل</h3>
                  </div>

                  <button className="bottom-5 left-5 z-99 mt-3 text-sm px-4 py-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 cursor-pointer shadow-blue-400 hover:shadow-md hover:scale-105">
                    مشاهده
                  </button>
                </div>
                <div className="h-[190px] flex items-center justify-center flex-col">
                  <img src="/new/i15.webp" alt="Phone" className="w-[100px] self-end" />
                </div>

              </div>

              {/* کارت 3 - هدفون */}




            </div>

            {/* کارت 3 - هدفون*/}
            <div className="bg-pink-100/60 rounded-xl  p-5 flex flex-col items-start justify-between h-[230px] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer backdrop-blur-md border border-white/40 shadow-lg">
              <div className="flex justify-between w-full">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-pink-500">Audio</p>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">هدفون</h3>
                  </div>

                  <button className="bottom-5 left-5 z-99 mt-3 text-sm px-4 py-1.5 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-200 cursor-pointer shadow-pink-400 hover:shadow-md hover:scale-105">
                    مشاهده
                  </button>
                </div>
                <div className="h-[190px] flex items-center justify-center flex-col">
                  <img src="/new/head2.webp" alt="Phone" className="w-[210px] self-end" />
                </div>

              </div>


            </div>

            {/* کارت 4 - گجت */}
            <div className="bg-green-100/60 rounded-xl  p-5 flex flex-col items-start justify-between h-[230px] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer backdrop-blur-md border border-white/40 shadow-lg">
              <div className="flex justify-between w-full">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-green-500">Accessories</p>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">گجت دیجیتال</h3>
                  </div>

                  <button className="bottom-5 left-5 z-99 mt-3 text-sm px-4 py-1.5 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-200 cursor-pointer shadow-green-300 hover:shadow-md hover:scale-105">
                    مشاهده
                  </button>
                </div>
                <div className="h-[190px] flex items-center justify-center flex-col">
                  <img src="/new/watch.webp" alt="Phone" className="w-[150px] self-end" />
                </div>

              </div>


            </div>

            {/* کارت 5 - کنسول */}

            <div className="bg-orange-100/60 lg:col-span-3 md:col-span-4 sm:col-span-2 rounded-xl p-5 flex flex-col items-start justify-between h-[230px] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer backdrop-blur-md border border-white/40 shadow-lg">
              <div className="flex justify-between w-full">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-orange-500">Console & Gamming</p>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">تجهیزات گیمینگ</h3>
                  </div>

                  <button className="bottom-5 left-5 z-99 mt-3 text-sm px-4 py-1.5 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-200 cursor-pointer shadow-orange-300 hover:shadow-md hover:scale-105">
                    مشاهده
                  </button>
                </div>
                <div className="h-[190px] flex items-center justify-center flex-col">
                  <img src="/new/nintendo.webp" alt="Phone" className="w-[380px] self-end" />
                </div>

              </div>


            </div>


          </div>
        </div>
      </section>

      <Brands />

      <NewArrivals />

      <section className="overflow-hidden pt-11 pb-3">
        <div className="max-w-[1676px] w-full mx-auto px-4 sm:px-6 xl:px-4">
          <div className="relative overflow-hidden rounded-xl py-12 lg:py-17 xl:py-22 px-4 sm:px-7 lg:px-14 xl:px-19 mb-3 lg:min-h-[300px] bg-white/70 backdrop-blur-md border border-white/40 shadow-md hover:[&_img]:scale-105 ">
            <div className="max-w-[550px] w-full flex flex-col">
              <span className="text-2xl mb-3 text-slate-800">Xiaomi 15</span>
              <h2 className="font-bold text-4xl md:text-5xl mb-3 text-slate-800">تا <span className="text-[#3c50e0]">30%</span> تخفیف</h2>
              <p className="text-slate-800 mb-4">
                شیائومی 15 با طراحی ظاهری مدرن و مینیمالیستی عرضه می‌شود با نمایشگر 6.36 اینچی AMOLED می باشد  بهره می‌برد و دارای ماژول دوربین شامل سه سنسور 50 مگاپیکسلی
              </p>
              <div>
                <button className='text-white rounded-xl bg-[#3c50e0] px-4 py-2 ease-out duration-200 cursor-pointer backdrop-blur-md border border-white/30 shadow-md hover:shadow-[0_0_10px_#3c50e0] hover:scale-105 '>همین حالا خرید کنید</button>
              </div>
            </div>
            <img src="/new/x15.webp" className="lg:absolute bottom-6 mx-auto left-4 lg:left-26 mt-10 ease-out duration-200 transition-all " width={374} height={450} />
          </div>
          <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl bg-[#a9ffce]/40 py-10 xl:py-10 px-4 sm:px-7 xl:px-10 backdrop-blur-md border border-white/30 shadow-lg hover:[&_img]:scale-105">
              <img src="/images/treadmill.webp" className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 right-10 mx-auto sm:mx-0 sm:left-10 ease-out duration-200 transition-all" width={200} height={200} />
              <div className="mt-10 sm:mt-0 sm:text-left flex flex-col items-end">
                <span className="block text-lg mb-1.5 text-slate-800">تردمیل موتوری تاشو</span>
                <h2 className="font-bold text-2xl mb-2 text-slate-800">10% تخفیف ثابت</h2>
                <p className="max-w-[200px] xl:max-w-[285px] text-slate-800">موتور پرقدرت با طراحی ارگونومیک، تجربه ای روان و حرفه ای از دویدن فراهم می کند</p>
                <div className="flex flex-row-reverse">
                  <a href="" className="text-white bg-teal-600 py-2 px-7.5 rounded-lg ease-out duration-200 mt-5 cursor-pointer border border-white/30 hover:shadow-[0_0_15px_#89ff7e] transition-all hover:scale-105 shadow-md">
                    همین حالا بگیر
                  </a>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-[#ffdbc7ea] py-10 xl:py-10 px-4 sm:px-7 xl:px-10 backdrop-blur-md border border-white/30 shadow-lg hover:[&_img]:scale-105">
              <img src="/images/applewatchultra.webp" className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 left-10 mx-auto sm:mx-0 sm:rigth-10 ease-out duration-200 transition-all" width={200} height={200} />
              <div className="mt-10 sm:mt-0 sm:text-right ">
                <span className="block text-lg mb-1.5 text-slate-800">اپل واچ اولترا</span>
                <h2 className="font-bold text-3xl mb-2 text-slate-800">تا ۴۰٪ تخفیف</h2>
                <p className="max-w-[200px] xl:max-w-[285px] text-slate-800">قاب تیتانیومی با کیفیت هوافضا، تعادل بی‌نظیری بین همه چیز برقرار می‌کند.</p>
                <div className="flex">
                  <a href="" className="text-white bg-orange-500 py-2 px-7.5 rounded-lg ease-out duration-200 mt-4.5 cursor-pointer border border-white/30 hover:shadow-[0_0_10px_#ff7220ea] transition-all hover:scale-105 shadow-md">
                    همین حالا بگیر
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* count down */}
      <div>
        <section className="overflow-hidden pb-5">
          <div className="max-w-[1676px] w-full mx-auto px-4 sm:px-6 xl:px-4">
            <div className="relative overflow-hidden rounded-lg bg-[#a6e1f8]/70 p-6 lg:p-10 flex flex-col md:flex-row items-center backdrop-blur-md border border-white/40 shadow-lg gap-4">
              <div className="max-w-[600px] w-full">
                <span className="block mb-4.5 text-[#3c50e0] text-xl">فرصت داره تموم میشه !!</span>
                <h2 className="block font-bold text-2xl md:text-4xl text-slate-800 mb-4">صدایی فراتر از انتظار، هدفون‌هایی که تجربه‌ی شنیداری شما را متحول می‌کنند</h2>
                <CountdownTimer targetDate="2025-08-15T23:59:59" />
                <button className="mt-1 px-6 py-2 rounded-full bg-[#3c50e0] text-white backdrop-blur-md border border-white/30 shadow-md ease-out transition-all duration-200  hover:shadow-[0_0_10px_#3c50e0] hover:scale-105 cursor-pointer">جزئیات بیشتر</button>
              </div>
              <div className="flex w-full flex-row-reverse">
                <img src="/images/countdown-bg.webp" className="hidden md:block absolute left-0 bottom-0 -scale-x-100 top-0" width={737} height={482} />
                <img src="/images/headphone.webp" className="left-4 xl:left-33 bottom-4 xl:bottom-10" width={411} height={376} />

              </div>
            </div>
          </div>
        </section>
      </div>

      {/*feedBack*/}
      <section className="relative z-10 py-10">
        <div className="max-w-[1676px] mx-auto w-full px-4 sm:px-6 xl:px-4">

          {/* title */}
          <div className=" text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              بازخوردهای کاربران
            </h2>
            <p className="text-gray-500 text-sm">
              نظرات واقعی کاربران درباره تجربه خریدشون
            </p>
          </div>

          <FeedbackSlider />
        </div>
      </section>
      <BackToTopButton />

      {/* news */}
      <section className="overflow-hidden pt-4 pb-10">
        <div className="max-w-[1676px] mx-auto w-full px-4 sm:px-6 xl:px-4">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">

            <img
              src="/images/newsletter-bg.jpeg"
              alt="newsletter background"
              className="absolute w-full h-full object-cover left-0 top-0 rounded-2xl -z-1 -scale-x-100"
            />

            {/* محتوا */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-4 sm:px-7 xl:pe-12 xl:ps-14 py-12 relative z-10">
              <div className="max-w-[520px] w-full">
                <h2 className="text-white font-bold text-xl md:text-2xl mb-3 leading-relaxed">
                  اولین نفری باشید که از تخفیف ها و پیشنهاد های ویژه با خبر میشه
                </h2>
                <p className="text-white/80 text-sm">
                  برای دریافت اخبار مربوط به جدیدترین پیشنهادات و کدهای تخفیف ثبت نام کنید
                </p>
              </div>

              {/* فرم */}
              <div className="max-w-[477px] w-full">
                <form>
                  <div className="flex gap-3 bg-white/30 backdrop-blur-lg rounded-full p-2 shadow-inner">
                    <input
                      type="email"
                      placeholder="ایمیل خود را وارد کنید"
                      className="w-full rounded-full bg-transparent outline-none placeholder:text-gray-100 text-white px-5 py-2 text-sm"
                    />
                    <button
                      type="submit"
                      className="inline-flex justify-center items-center py-2 px-6 text-sm font-medium text-white bg-[#3c50e0] rounded-full transition-all cursor-pointer"
                    >
                      ارسال
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

// npx json-server --watch shop/src/database/db.json --port 8000

{/* <div className="lg:w-1/2 flex flex-col items-start w-full px-5">
  <p className="lg:text-4xl w-full text-3xl z-10 font-bold leading-relaxed bg-gradient-to-l from-[#3c50e0] to-[#9e6eff] bg-clip-text text-transparent max-w-[290px] md:max-w-full">جدیدترین تکنولوژی دنیا <br /> با بهترین قیمت و تضمین اصالت</p>
  <p className="lg:text-xl w-full text-xl z-10 font-bold leading-relaxed text-[#3c50e0] max-w-[350px] mt-5">فروشگاهیی که دیجیتال بودن رو معنی می کنه</p>
  <Link href={'/mainStore'} className="inline mt-7 px-6 py-2.5 bg-[#3c50e0] hover:bg-[#4d5df5] transition-all text-white rounded-xl ease-out duration-200 hover:shadow-[0_0_10px_#3c50e0] hover:scale-105 cursor-pointer">
    ورود به دنیای تکنولوژی
  </Link>
</div> */}

//bg-gradient-to-br from-white/60 via-white/30 to-transparent rounded-2xl shadow-lg backdrop-blur-md