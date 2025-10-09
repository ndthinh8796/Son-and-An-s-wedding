import Image from "next/image";
import BG1 from "@/public/images/1.png";
import BG2 from "@/public/images/2.png";
import BG3 from "@/public/images/3.png";
import BG4 from "@/public/images/4.png";
import BG5 from "@/public/images/5.png";
import BG6 from "@/public/images/6.png";
import BG7 from "@/public/images/7.png";
import BG8 from "@/public/images/8.png";
import BG9 from "@/public/images/9.png";
import BG10 from "@/public/images/10.png";
import BG11 from "@/public/images/11.png";
import Section2Img from "@/public/images/s2.png";
import Section3Img1 from "@/public/images/s3-1.png";
import Section3Img2 from "@/public/images/s3-2.png";
import Section3Img3 from "@/public/images/s3-3.png";

export default function WeddingInvitation() {
  return (
    <div className="bg-[#f5f1e8] md:pb-0 sm:pb-80 pb-52 overflow-hidden">
      <div className="min-h-screen">
        <section
          id="introduction"
          className="flex flex-col items-center justify-center min-h-screen relative"
        >
          {/* Top Left Botanical */}
          <Image
            src={BG1}
            alt=""
            className="absolute z-0 top-0 md:-top-10 -left-10 md:w-[258px] md:h-[258px] w-[200px] h-[200px] object-center object-contain"
          />

          {/* Top Right Botanical */}
          <Image
            src={BG2}
            alt=""
            className="absolute z-0 -top-20 md:-top-10 -right-32 md:-right-10 md:w-[258px] md:h-[258px] w-[400px] h-[400px] object-center object-contain"
          />

          {/* Bottom Left Botanical */}
          <Image
            src={BG3}
            alt=""
            className="absolute z-0 top-[25%] md:bottom-20 -left-10 md:w-[258px] md:h-[258px] w-[200px] h-[200px] object-center object-contain"
          />

          {/* Bottom Left Botanical */}
          <Image
            src={BG6}
            alt=""
            className="absolute z-0 -bottom-10 -left-10 md:w-[258px] md:h-[258px] w-[200px] h-[200px] object-center object-contain"
          />

          {/* Bottom Right Botanical */}
          <Image
            src={BG7}
            alt=""
            className="absolute z-0 -bottom-10 -right-20 md:w-[258px] md:h-[258px] w-[200px] h-[200px] object-center object-contain"
          />

          {/* Bottom Right Botanical */}
          <Image
            src={BG4}
            alt=""
            className="absolute z-0 top-[50%] md:-bottom-8 -right-36 md:-right-15 md:w-[258px] md:h-[258px] w-[200px] h-[200px] object-center object-contain"
          />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-10 container mx-auto sm:px-0">
            {/* Main Heading */}
            <h1
              className="text-6xl sm:text-9xl text-[#2d5016] mb-8 md:mb-12 leading-tight"
              style={{ fontFamily: "var(--font-great-vibes)" }}
            >
              Thái Sơn
              <br />& Thuý An
            </h1>

            {/* Story Text */}
            <div
              className="max-w-2xl text-justify md:text-center mb-4 md:mb-6 text-[#4a4a4a] leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              <p className="text-md sm:text-xl font-light">
                We spent four years as colleagues who never quite connected,
                then seven more as strangers who forgot to stay that way, until
                a League of Legends invitation became the most important DM
                either of us ever sent.
              </p>
            </div>

            <div
              className="max-w-2xl text-justify md:text-center mb-6 md:mb-8 text-[#4a4a4a] leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              <p className="text-md sm:text-xl font-light">
                Turns out, some people need a decade of growing up separately
                before they're ready to discover they've been looking for each
                other all along.
              </p>
            </div>

            {/* Hashtag */}
            <p
              className="text-xs md:text-base text-[#6b6b6b]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              #thuyanswerjson
            </p>
          </div>
        </section>

        <section
          id="location"
          className="relative flex flex-col items-center justify-center min-h-screen"
        >
          {/* Bottom Left Botanical */}
          <Image
            src={BG5}
            alt=""
            className="absolute bottom-42 -left-10 z-0 lg:block hidden lg:z-50 w-[300px] h-[300px] object-center object-contain"
          />

          {/* Bottom Left Botanical */}
          <Image
            src={BG10}
            alt=""
            className="absolute -bottom-20 -left-17 sm:-left-[10%] z-30 lg:hidden block lg:z-50 w-[200px] sm:w-[30%] object-center object-contain"
          />

          {/* Main Content */}
          <div className="relative grid grid-cols-1 z-10 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 container mx-auto px-10 sm:px-0">
            {/* Bottom Left Botanical */}
            <Image
              src={BG9}
              alt=""
              className="absolute top-36 sm:top-[20%] -left-17 sm:-left-[20%] z-30 lg:hidden block lg:z-50 w-[300px] h-[300px] sm:w-[60%] sm:h-[60%] object-center object-contain"
            />

            {/* Top Right Botanical */}
            <Image
              src={BG8}
              alt=""
              className="absolute -top-10 sm:-top-[1%] -right-32 sm:-right-[20%] z-30 lg:hidden block w-[220px] h-[220px] sm:w-[40%] sm:h-[40%] object-center object-contain"
            />

            {/* Photo */}
            <div className="flex-shrink-0 col-span-1 flex justify-center items-center">
              <Image
                src={Section2Img}
                alt="Thái Sơn and Thuý An wedding photo"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Event Details */}
            <div className="text-center lg:text-left col-span-1 flex flex-col justify-center z-50">
              <h2
                className="text-4xl sm:text-7xl text-[#2d5016] mb-6 lg:mb-8 leading-tight"
                style={{ fontFamily: "var(--font-great-vibes)" }}
              >
                Thân mời bạn/anh/chị/em
                <br />
                đến dự tiệc cưới của tụi mình!!
              </h2>

              <div
                className="space-y-3 text-[#4a4a4a]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <p className="text-xl sm:text-2xl">
                  vào lúc 19:00 (đón khách từ 18:00)
                </p>
                <p
                  className="text-2xl sm:text-3xl text-[#2d5016]"
                  style={{ fontFamily: "var(--font-great-vibes)" }}
                >
                  Chủ Nhật, ngày 19 tháng 10, 2025
                </p>
                <p className="text-xl sm:text-2xl pt-2">
                  tại Sảnh Amber, lầu 4
                </p>
                <p
                  className="text-2xl sm:text-3xl text-[#2d5016]"
                  style={{ fontFamily: "var(--font-great-vibes)" }}
                >
                  Tân Sơn Nhất Pavillon
                </p>
                <p className="text-xl sm:text-2xl text-[#6b6b6b]">
                  202 Hoàng Văn Thụ, P.9, Q. Phú Nhuận, TP.HCM
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="ending"
          className="flex flex-col items-center justify-center min-h-screen relative"
        >
          {/* Bottom Right Botanical */}
          <Image
            src={BG11}
            alt=""
            className="absolute top-[45%] md:-top-28 md:z-0 z-20 -right-28 md:w-[500px] md:h-[500px] w-[320px] h-[320px] object-center object-contain hidden md:block"
          />

          {/* Main Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-center justify-center w-full container mx-auto px-10 md:px-0 gap-0 md:gap-10">
            {/* Bottom Right Botanical */}
            <Image
              src={BG11}
              alt=""
              className="absolute top-[45%] md:-top-28 md:z-0 z-50 -right-28 md:w-[500px] md:h-[500px] w-[320px] h-[320px] object-center object-contain block md:hidden"
            />

            {/* Closing Message */}
            <div className="col-span-1 order-1 md:order-2 z-[60] w-full flex items-center justify-center md:mb-0 mb-8">
              <h2
                className="text-5xl sm:text-6xl text-[#2d5016] md:text-left text-center leading-tight"
                style={{ fontFamily: "var(--font-great-vibes)" }}
              >
                Hẹn gặp lại
                <br />
                ngày 19/10 nhé!
              </h2>
            </div>

            {/* Desktop */}
            {/* Photo Collage */}
            <div className="relative w-full items-center z-10 justify-center order-2 md:order-1 hidden md:grid col-span-2 grid-cols-2 gap-2">
              {/* Smaller Photo - Left */}
              <div className="col-span-1 flex items-start justify-end w-full h-full">
                <Image
                  src={Section3Img1}
                  alt="Couple photo 1"
                  className="w-[80%] aspect-[0.67] object-cover object-center"
                />
              </div>

              {/* Larger Photo - Right */}
              <div className="col-span-1 flex items-start justify-start w-full h-full">
                <Image
                  src={Section3Img2}
                  alt="Couple photo 2"
                  className="w-full aspect-[0.67] object-cover object-center"
                />
              </div>

              {/* Decorative Postcards */}
              <div className="absolute left-9 bottom-7 z-30">
                <Image
                  src={Section3Img3}
                  alt=""
                  className="lg:w-[38%] md:w-[30%] w-[25%]"
                />
              </div>
            </div>

            {/* Mobile */}
            {/* Photo Collage */}
            <div className="relative w-full items-center justify-center col-span-2 order-2 md:order-1 flex md:hidden">
              {/* Smaller Photo - Left */}
              <div className="absolute left-4 top-0 z-10">
                <Image
                  src={Section3Img1}
                  alt="Couple photo 1"
                  className="w-[50%] aspect-[0.67] object-cover object-center"
                />
              </div>

              {/* Larger Photo - Right */}
              <div className="absolute right-0 translate-x-[40%] top-20 z-20 flex items-start justify-start w-full h-full">
                <Image
                  src={Section3Img2}
                  alt="Couple photo 2"
                  className="w-[60%] aspect-[0.67] object-cover object-center"
                />
              </div>

              {/* Decorative Postcards */}
              <div className="absolute left-0 top-0 translate-y-[150%] z-30">
                <Image src={Section3Img3} alt="" className="w-[30%]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
