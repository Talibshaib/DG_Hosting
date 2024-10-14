import React from "react";
import NumberTicker from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
const About = () => {
  return (
    <section>
      <div className="relative flex flex-col items-center justify-center p-6 py-10 space-y-4 w-screen min-h-[300px] bg-cover bg-center bg-gray-800 text-white">
        <h1 className="text-2xl font-bold md:text-4xl ">About</h1>
      </div>

      <div className="bg-[#E8F1F7] py-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row md:justify-around md:items-center mb-10">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333]">
                Our Core Values
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:w-1/2 text-gray-600">
              <ul>
                <li>Accountability</li>
                <li> Dedication</li>
                <li> Innovative with Professionalism</li>
                <li>To always take initiative in performing work </li>
              </ul>
              <p>Looking for Professional Growth?</p>
              <p>
                We are always looking for enthusiast digital marketing
                professionals weather they are young or else experienced want to
                be part of our growing team.
              </p>
              <p>
                Get in touch with us to learn how you can be a part of the DM
                Solution Hub family!
              </p>
            </div>
          </div>

          <div className="border-b border-gray-400 mb-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold text-[#333]">
                <NumberTicker value={23} />
              </h3>
              <p className="text-lg text-gray-600 mt-2">Years in Business</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#333]">
                <NumberTicker value={500} />+
              </h3>
              <p className="text-lg text-gray-600 mt-2">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#333]">
                <NumberTicker value={128} />
              </h3>
              <p className="text-lg text-gray-600 mt-2">Licensed Officer</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#333]">
                <NumberTicker value={4} />
                K+
              </h3>
              <p className="text-lg text-gray-600 mt-2">Assets Protected</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex gap-6 h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background px-6">
        <h2 className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Our Mission
        </h2>
        <p className="text-center mx-auto max-w-[900px] opacity-60">
          We always believe to develop growth-oriented online marketing
          campaigns that make a positive impact on businesses. DM Solution
          started as a one-man shop and now it is into a full-service digital
          marketing agency that serves 100 of businesses in India and after some
          tie ups we started working and acquiring clients in USA as well.
        </p>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </section>
  );
};

export default About;
