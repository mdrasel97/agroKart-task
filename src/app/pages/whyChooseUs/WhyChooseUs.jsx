import React from "react";
import {
  ShieldCheck,
  Users,
  Headphones,
  DollarSign,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Unmatched Durability with Corrosion-Free Technology",
      description:
        "Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.",
      icon: <Award className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Customer-Centric Approach",
      description:
        "At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.",
      icon: <Users className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Innovative and Diverse Product Range",
      description:
        "We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.",
      icon: <Headphones className="w-10 h-10 text-purple-600" />,
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-3xl font-bold mb-4">
          Why <span className="text-blue-900"> Us</span>
        </h2>
        <p className="text-gray-600 md:w-3/6 mx-auto mb-12">
          We specialize in delivering durable and innovative fencing solutions
          built to last. With a focus on quality and trust, we help secure
          spaces across industries and communities.
        </p>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 hover:bg-gradient-to-tr from-[#002B55] to-blue-800 hover:text-white duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className=" hover:text-white text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full text-center">
        <Button className={"mt-5 text-center"}>Contact Us</Button>
      </div>
    </section>
  );
}
