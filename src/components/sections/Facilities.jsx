import { RevealOnScroll } from "../RevealOnScroll";
import pool from '../../assets/pool.jpg';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import sand1 from '../../assets/sand1.jpg';
import sand2 from '../../assets/sand2.jpg';
import jaccuzi from '../../assets/jaccuzi.jpg';





export const Facilities = () => {
  return (
    <section
      id="facilities"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            امکانات مجموعه آبی ارکیده
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            


          <div className="p-6  rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl text-right font-bold mb-2 "> سرسره های آبی متنوع</h3>
              <p className="text-gray-400 text-right mb-4">
                سرسره های آبی متنوع مناسب کودکان و بزرگسالان
              </p>
              <div className="flex gap-4">
                <img src={slide1} className="w-1/2 h-max border-2 border-blue-500/60 rounded-xl" />
                <img src={slide2} className="w-1/2 h-max border-2 border-blue-500/60 rounded-xl" />
              </div>
            </div>




            <div className="p-6  rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl text-right font-bold mb-2 "> ساحل شن های طلایی</h3>
              <p className="text-gray-400 text-right mb-4">
              برای اولین بار در جنوب استان، تکه ای از ساحل زیر پاهای شما
              </p>
              <div className="flex gap-4">
                <img src={sand1} className="w-1/2 h-max border-2 border-blue-500/60 rounded-xl" />
                <img src={sand2} className="w-1/2 h-max border-2 border-blue-500/60 rounded-xl" />
              </div>
            </div>


            
            <div className="p-6  rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl text-right font-bold mb-2 "> استخر شنا</h3>
              <p className="text-gray-400 text-right mb-4">
                استخر شنای بزرگ مناسب برای شنا کردن و پیاده روی در آب
              </p>

              <img src={pool} className="w-max h-max border-2 border-blue-500/60 rounded-xl" />
              
              {/* <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div> */}

              {/* <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div> */}
            </div>




            {/* <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">AI Analytics Dashboard</h3>
              <p className="text-gray-400 mb-4">
                ML-powered data visualization platform with predictive analytics
                and interactive reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div> */}


<div className="p-6  rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl text-right font-bold mb-2 "> جکوزی و حوضچه آب سرد</h3>
              <p className="text-gray-400 text-right mb-4">
                برای آرامش شما بعد از یک روز پرتلاش              
              </p>

              <img src={jaccuzi} className="w-max h-max border-2 border-blue-500/60 rounded-xl" />
              

            </div>





          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
