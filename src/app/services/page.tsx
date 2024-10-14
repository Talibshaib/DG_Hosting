import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import HyperText from "@/components/ui/hyper-text";
import { MarqueeDemo } from "@/components/ReviewCard";

const Services = () => {
  return (
    <section>
      <div className="relative flex flex-col items-center justify-center p-6 py-10 space-y-4 w-screen min-h-[300px] bg-cover bg-center bg-gray-800 text-white">
        <h1 className="text-2xl font-bold md:text-4xl ">Services</h1>
      </div>
      <div className="relative flex gap-6 h-[200px] w-full flex-col items-center justify-center overflow-hidden bg-background px-6">
        <h2 className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          How can we help you?
        </h2>

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
      <div className="flex flex-col gap-6 px-6 items-center justify-center bg-[#E8F1F7] py-16 mb-10">
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-3xl md:text-4xl  font-bold text-[#333]">
            Web Design & Development
          </h2>
          <p>
            For any business to grow, main thing starts with its website as it
            is a first step towards digital world. We have a combine experience
            of 30+ years which include team of professionals of 20 people
            dedicated only for web design & development.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 text-gray-600">
          <ul>
            <li>WP Website Development.</li>
            <li>PHP Website Development.</li>
            <li>CMS Website Development.</li>
            <li>E-commerce Website Development. </li>
            <li>B2B Portal Development </li>
            <li>App Development </li>
            <li>Web Designing From Scrach </li>
          </ul>
          <p>Looking for Professional Growth?</p>
          <p>
            We are always looking for enthusiast digital marketing professionals
            weather they are young or else experienced want to be part of our
            growing team.
          </p>
          <p>
            Get in touch with us to learn how you can be a part of the DM
            Solution Hub family!
          </p>
        </div>

        <div className="border-b-2 border-gray-800 mb-10"></div>

        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-3xl md:text-4xl  font-bold text-[#333]">
            VPS(Virtual Private Server)
          </h2>
          <p>
            Make your website or application faster and also more reliable with
            our speedy and reliable data centers. You can choose from our
            virtual private server near your targeted customers for fast,
            reliable and safe website access. Our service reaches 20 global
            locations so you can rely on us and we are using the latest
            technology to provide fast, safe and secure hosting.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 text-gray-600">
          <h4>Available Configurations</h4>
          <ul>
            <li>1 vCPU Core To 4 vCPU Core.</li>
            <li>Ram 2GB To 8GB Ram</li>
            <li>Disc Space 40GB To 100 GB (Pure SSD)</li>
            <li>3000GB To 5000GB Monthly Bandwidth </li>
            <li> 1Gb/s GigE Public Uplink </li>
            <li> Multiple OS Options </li>
            <li>1 IP Address</li>
            <li>Self Managed </li>
            <li>99.9% Uptime Guarantee</li>
          </ul>
          <p>
            Get in touch with us to learn how you can be a part of the DM
            Solution Hub family!
          </p>
        </div>
        <div className="border-b-2 border-gray-800 mb-10"></div>
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-3xl md:text-4xl  font-bold text-[#333]">
            Digital Marketing
          </h2>
          <p>
            Digital marketing is a tool which is very important for any business
            to grow in today’s world. We offer a variety of digital marketing
            services for any size of businesses to scale up their product or
            services online. <br />
            <br />
            Hiring an Digital marketing agency is one of the best ways to reach
            your prospects while maintaining a strong relationship with your
            existing customers because as long as your business has a strong
            digital presence, your customers will always find you easily.
            <br />
            <br />
            Don’t waste your money in marketing techniques that do not deliver
            measurable results which you targeted or planned. Partner with DM
            Solutions Hub today and establish your market dominance with our
            targeted digital marketing services
          </p>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 text-gray-600">
          <h4>Services we offer</h4>
          <ul>
            <li>Search Engine Optimization (SEO)</li>
            <li>Social Media Marketing</li>
            <li>Online Advertising- Pay Per Click (PPC) Management </li>
            <li>eCommerce Marketing</li>
            <li> Email Marketing </li>
            <li> Conversion Rate Optimization (CRO)</li>
            <li>Brand Building</li>
          </ul>
          <p>
            Get in touch with us to learn how you can be a part of the DM
            Solution Hub family!
          </p>
        </div>
        <div className="border-b-2 border-gray-800 mb-10"></div>
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-3xl md:text-4xl  font-bold text-[#333]">
            Custom Email Address
          </h2>
          <p>
            Email is the most essential and frequently used business tool which
            can never be compromised for its availability. DM Solution Hub offer
            a reliable and affordable Premium business mail solutions as per
            your precise needs. <br />
            <br />
            DM Solutions Hub provide business/premium email hosting as a
            solution for our client to reach to it targeted customers. As a
            professional email provide trust for any business owners. We first
            understand our clients need and then choose which hosting plan is
            best for our client needs as per their usage.
            <br />
            <br />
            Our Email hosting is well tested and allows its users to collabrate,
            communicate, edit, search, share and schedule in real-time across
            multitude of devices. DM Solution Hub also comprises Spam-free and
            Virus-free emails, by using a premium Spam filter.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 text-gray-600">
          <h4>
            Get in touch with your requirement and a team of professionals will
            contact and help you in setting up our prices starts with 5$ per
            email account.
          </h4>
          <ul>
            <li>
              Each email include 5GB mail box by default.Please contact Sales
              Team for custom mail box size (above 5 GB)
            </li>
            <li>Promotional, Bulk/Mass mails are strictly NOT allowed.</li>
          </ul>

          <Button className="max-w-[150px]" variant="ghost" color="primary">
            Get in Touch
          </Button>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <HyperText
          className="text-4xl font-bold text-black dark:text-white"
          text="We provide a wide range of Services"
        />
      </div>

      <div className="max-w-full flex justify-center mb-10">
        <div className="max-w-[1600px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h4 className="text-black font-medium text-large">
                Customizable Plans
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://images.pexels.com/photos/7743260/pexels-photo-7743260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h4 className="text-white font-medium text-large">
                Dedicated Virtual Private Servers
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h4 className="text-white font-medium text-large">
                Cross-Device Synchronization
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-2.jpeg"
            />
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h4 className="text-white font-medium text-2xl">
                Privacy Protection
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Contact Us
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h4 className="text-white/90 font-medium text-xl">
                99.9% Uptime Guarantee
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <Button radius="full" size="sm">
                Get Service
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <MarqueeDemo />
    </section>
  );
};

export default Services;
