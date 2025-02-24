import Qrcode from "../assets/qrcode.png";
import Hero from "../assets/hero.png";
import Logo from "../assets/glosity.png";
import Download from "../assets/download.png";
import Lowerpartlogo from "../assets/Lowerpartlogo.svg";
import Upperpartlogo from "../assets/Upperpartlogo.svg";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#043A2D] to-[#121212] p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-1 mb-12">
          <img
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <h1 className="text-white font-500 text-[24px] leading-[40px]">
            Glosity
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-8">
            <h1 className="text-4xl font-600 tracking-tight text-white sm:text-5xl xl:text-6xl">
              Get Rewarded for{" "}
              <span className="block">Skills, Not Pedigree.</span>
            </h1>

            <p className="max-w-xl text-400 text-[16px] leading-[24px] text-gray-200">
              Create a comprehensive profile that highlights your achievements,
              projects, and skills. Present your work to potential employers and
              stand out in the competitive job market.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-transparent text-white hover:bg-white/10 border-2 border-white rounded-full p-3">
                <a className="flex justify-between items-center gap-2" href="#">
                  DOWNLOAD BROCHURE
                  <div className="flex justify-center items-center relative bg-white rounded-full w-[36px] h-[36px]">
                    <img src={Download} className="p-2" />
                  </div>
                </a>
              </div>

              <div className="bg-transparent text-white hover:bg-white/10 border-2 border-white rounded-full p-3">
                <a className="flex justify-between items-center gap-2" href="#">
                  DOWNLOAD FAQ
                  <div className="flex justify-center items-center bg-white rounded-full w-[36px] h-[36px]">
                    <img src={Download} className="p-2" />
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">Scan Here to</h3>
              <p className="text-sm text-gray-200">Book Appointment</p>
              <img
                src={Qrcode}
                alt="QR Code"
                width={120}
                height={120}
                className="rounded-lg bg-white p-2"
              />
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative h-[523px] opacity-5 top-[54px]">
              <img
                src={Upperpartlogo}
                alt="Upperpartlogo"
                className="absolute top-0 right-0"
              />
              <img
                src={Lowerpartlogo}
                alt="Lowerpartlogo"
                className="absolute bottom-0 left-0"
              />
            </div>
            <img
              src={Hero}
              alt="Student with notebook"
              width={720}
              height={784}
              className="absolute md:bottom-[-80px] rounded-lg object-cover"
            /> 
          </div>
        </div>
      </div>
    </div>
  );
}
