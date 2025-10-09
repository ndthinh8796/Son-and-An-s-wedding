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
    <div className="min-h-screen bg-[#f5f1e8]">
      {/* Section 1 - Names and Story */}
      <section className="relative min-h-screen bg-[#f5f1e8] flex items-center justify-center px-4 py-12 md:py-20">
        {/* Top Left Botanical */}
        <Image
          src={BG1}
          alt=""
          width={300}
          height={300}
          className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
        />

        {/* Top Right Botanical */}
        <Image
          src={BG2}
          alt=""
          width={300}
          height={300}
          className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
        />

        {/* Bottom Left Botanical */}
        <Image
          src={BG3}
          alt=""
          width={300}
          height={300}
          className="absolute bottom-0 left-0 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
        />

        {/* Bottom Right Botanical */}
        <Image
          src={BG4}
          alt=""
          width={300}
          height={300}
          className="absolute bottom-0 right-0 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
        />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center container mx-auto text-center px-4">
          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-[#2d5016] mb-8 md:mb-12 leading-tight"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            Thái Sơn
            <br />& Thuý An
          </h1>

          {/* Story Text */}
          <div
            className="max-w-2xl text-center mb-4 md:mb-6 text-[#4a4a4a] leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <p className="text-sm md:text-lg font-light">
              We spent four years as colleagues who never quite connected, then
              seven more as strangers who forgot to stay that way, until a
              League of Legends invitation became the most important DM either
              of us ever sent.
            </p>
          </div>

          <div
            className="max-w-2xl text-center mb-6 md:mb-8 text-[#4a4a4a] leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <p className="text-sm md:text-lg font-light">
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

      {/* Section 2 - Photo and Event Details */}
      <section className="relative min-h-screen bg-[#f5f1e8] flex items-center justify-center px-4 py-12 md:py-20">
        {/* Top Left Botanical */}
        <Image
          src={BG5}
          alt=""
          width={300}
          height={300}
          className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
        />

        {/* Top Right Botanical */}
        <Image
          src={BG6}
          alt=""
          width={300}
          height={300}
          className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
        />

        {/* Bottom Left Botanical */}
        <Image
          src={BG7}
          alt=""
          width={300}
          height={300}
          className="absolute bottom-0 left-0 w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
        />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full max-w-6xl mx-auto">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-56 h-72 md:w-72 md:h-96 lg:w-80 lg:h-[420px] rounded-[60%] overflow-hidden shadow-2xl border border-[#2d5016]">
              <Image
                src={Section2Img}
                alt="Thái Sơn and Thuý An wedding photo"
                fill
                className="object-cover scale-[115%]"
                priority
              />
            </div>
          </div>

          {/* Event Details */}
          <div className="text-center md:text-left px-4 container mx-auto">
            <h2
              className="text-3xl md:text-5xl lg:text-6xl text-[#2d5016] mb-6 md:mb-8 leading-tight"
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
              <p className="text-sm md:text-lg">
                vào lúc 19:00 (đón khách từ 18:00)
              </p>
              <p
                className="text-2xl md:text-4xl lg:text-5xl text-[#2d5016]"
                style={{ fontFamily: "var(--font-great-vibes)" }}
              >
                Chủ Nhật, ngày 19 tháng 10, 2025
              </p>
              <p className="text-sm md:text-lg pt-2">tại Sảnh Amber, lầu 4</p>
              <p
                className="text-2xl md:text-4xl lg:text-5xl text-[#2d5016]"
                style={{ fontFamily: "var(--font-great-vibes)" }}
              >
                Tân Sơn Nhất Pavillon
              </p>
              <p className="text-xs md:text-base text-[#6b6b6b]">
                202 Hoàng Văn Thụ, P.9, Q. Phú Nhuận, TP.HCM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Photo Collage and Closing */}
      <section className="relative min-h-screen bg-[#f5f1e8] flex items-center justify-center px-4 py-12 md:py-20">
        {/* Top Right Botanical */}
        <Image
          src={BG8}
          alt=""
          width={400}
          height={400}
          className="absolute top-0 right-0 w-32 h-32 md:w-56 md:h-56 lg:w-72 lg:h-72 object-contain"
        />

        {/* Main Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-center justify-center w-full container mx-auto">
          {/* Closing Message */}
          <h2
            className="text-4xl md:text-6xl lg:text-7xl text-[#2d5016] md:text-left text-center leading-tight mb-12 md:mb-16 lg:mb-20 px-4 col-span-1 order-1 md:order-2"
            style={{ fontFamily: "var(--font-great-vibes)" }}
          >
            Hẹn gặp lại
            <br />
            ngày 19/10 nhé!
          </h2>

          {/* Desktop */}
          {/* Photo Collage */}
          <div className="relative w-full items-center justify-center order-2 md:order-1 hidden md:grid col-span-2 grid-cols-2 gap-2">
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
              <Image src={Section3Img3} alt="" className="w-[38%]" />
            </div>
          </div>

          {/* Mobile */}
          {/* Photo Collage */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] items-center justify-center col-span-2 order-2 md:order-1 flex md:hidden">
            {/* Smaller Photo - Left */}
            <div className="absolute left-4 md:left-8 top-0 z-10 rotate-[-4deg] md:rotate-0">
              <Image
                src={Section3Img1}
                alt="Couple photo 1"
                className="w-32 md:w-xl"
              />
            </div>

            {/* Larger Photo - Right */}
            <div className="absolute right-0 md:right-4 top-12 md:top-0 z-20 rotate-[6deg] md:rotate-0">
              <Image
                src={Section3Img2}
                alt="Couple photo 2"
                className="w-40 md:w-full h-auto"
              />
            </div>

            {/* Decorative Postcards */}
            <div className="absolute left-0 md:left-4 bottom-0 z-30 flex gap-2 rotate-[-8deg]">
              <div className="w-14 h-20 md:w-16 md:h-24 bg-[#1a4d2e] rounded-sm shadow-lg flex items-center justify-center overflow-hidden">
                <Image
                  src={Section3Img3}
                  alt=""
                  width={80}
                  height={112}
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
