import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="relative flex flex-col items-center justify-center p-6 py-10 space-y-4 w-screen min-h-[300px] bg-cover bg-center bg-gray-800 text-white">
        <h1 className="text-2xl font-bold md:text-4xl ">Contact Us</h1>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-background px-6 py-12 h-auto w-full">
        <div className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center w-full max-w-7xl px-6 py-16 bg-background">
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
            <h2 className="text-4xl font-semibold text-black dark:text-white">
              Contact Us
            </h2>
            <Input
              label="Name"
              placeholder="John Doe"
              className="w-full"
              required
            />
            <Input
              label="Email"
              placeholder="Your Email"
              className="w-full"
              required
            />
            <Textarea
              label="Message"
              placeholder="Your Message"
              className="w-full"
              required
            />
            <Button className="bg-primary text-white px-6 py-2 rounded-md">
              Submit
            </Button>
          </div>

          <div className="w-full md:w-1/2 flex flex-col space-y-4 text-gray-600 md:pl-12">
            <h2 className="text-4xl font-semibold text-black dark:text-white">
              Get in Touch
            </h2>
            <p>
              Feel free to reach out to us at DM Solution Hub for any inquiries,
              support, or consultation regarding our VPS and mail hosting
              Digital Marketing services. Our dedicated team is here to assist
              you with tailored solutions to meet your business needs. Whether
              you need technical support or want to explore how our hosting
              services can benefit your operations, we’re just a message away.
              Let’s connect and help your business thrive in the digital
              landscape!
            </p>
          </div>
        </div>

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </section>
  );
};

export default Contact;
