"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Message sent successfully!");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="mt-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

      <Card>
        <CardContent className="flex flex-col md:flex-row gap-8 p-6">
          {/* Left: Contact Form */}
          <div className="md:w-1/2 bg-gray-50 dark:bg-slate-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input type="tel" placeholder="Your Phone" />
              <Textarea placeholder="Your Message" rows={4} required />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Right: Contact Details + Map */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Information</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  info@example.com
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-800" />
                  +880 1234 567 890
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-800" />
                  123 Main Street, Dhaka, Bangladesh
                </li>
              </ul>
            </div>

            {/* Embedded Map */}
            <div className="h-64 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9020143124846!2d90.39123467530223!3d23.750885478686333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894f0f6a7f1%3A0xb69df9e99c2eb8!2sDhaka!5e0!3m2!1sen!2sbd!4v1693400000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
