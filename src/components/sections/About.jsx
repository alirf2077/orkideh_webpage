import { RevealOnScroll } from "../RevealOnScroll";
import instagram from '../../assets/Instagram_icon.png';

export const About = () => {


  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            اطلاعات مجموعه
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 font-bold text-right mb-6">
          ساعات کاری
            </p>

            <p className="text-gray-300 mb-6 text-right">
            💙هفت روز هفته و با کمترین میزان تعطیلی، در خدمت آقایان و بانوان گرامی هستیم
            </p>

            <div dir="rtl" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold text-right mb-4"> آقایان</h3>
                  <ul className="list-disc list-inside text-right text-gray-300">
                    <li>یک‌شنبه، سه‌شنبه و پنجشنبه ها <br></br>از ۹ صبح تا ۱۰ شب</li>
                    <br></br>
                    <li>جمعه ها <br></br>از ۲ بعد از ظهر تا ۱۰ شب</li>
                    </ul>
              </div>

              <div  className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> بانوان</h3>
                <ul className="list-disc list-inside text-right text-gray-300">
                <li>شنبه، دوشنبه و چهارشنبه ها <br></br>از ۹ صبح تا ۹ شب</li>
                    <br></br>
                    
                </ul>
              </div>
            </div>
          </div>

          <div dir="rtl" className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-right"> هزینه بلیط </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-right">
                <li>
                  <strong> مبلغ ۲۶۰ هزار تومان </strong>- بدون هیچ سانس بندی
                </li>
                <li>
                                  شما می‌توانید با پرداخت مبلغ فوق، بدون هیچ محدودیت زمانی و تا پایان وقت کاری مجموعه میهمان ما باشید

                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> راه های ارتباطی </h3>
              <div className="space-y-4 text-gray-300">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h4 className="font-semibold">
                    {" "}
                    شبکه های اجتماعی{" "}
                  </h4>
                  <div className="flex items-center gap-2">
                    <img src={instagram} alt="Instagram" className="w-5 h-5" />
                    <span>ما را در اینستاگرام دنبال کنید - </span>
                    <a
                      href="https://www.instagram.com/orkide.jr?igsh=YXB5cW5mMmVuMTBi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      orkide.jr@
                    </a>
                  </div>


              </div>


              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h4 className="font-semibold">
                    {" "}
                   آدرس{" "}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span>📍کرمان - جیرفت - شهرک صنعتی شماره ۱ - بلوار زنبق - خیابان هفتم </span>
                    <a
                      href="https://g.co/kgs/1cAhn2E"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      در گوگل مپ   
                    </a>
                  </div>


              </div>

              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h4 className="font-semibold">شماره تماس</h4>
                <div className="flex items-center gap-2">
                  <span>☎️</span>
                  <a href="tel:03443350911" className="text-blue-400 hover:underline">
                    0911 4335 034
                  </a>
                </div>
              </div>

              



              </div>
            </div>
          </div>
        </div>  
      </RevealOnScroll>
    </section>
  );
};
