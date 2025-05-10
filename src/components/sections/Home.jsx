import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
             ORKIDEH 
          </h1>            

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            مجوعه ارکیده از سال ۱۳۸۷ تا به امروز افتخار خدمت رسانی به مردم
            عزیز جنوب کرمان را دارا بوده
          <br></br>
            ما مفتخریم که با تاکید بر سلامتی و بهداشت امکان دسترسی به 
           ورزش شنا و تفریحات آبی را برای همشهریان عزیزمان مهیا کرده ایم

          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#facilities"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              امکانات مجموعه
            </a>

            <a
              href="#about"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              اطلاعات مجوعه
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
