import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#fdcd00] text-[#1a1a1a] px-4 py-8">
        <h2 className="mb-2">Contact Us</h2>
        <p className="text-[#1a1a1a]/80">
          We'd love to hear from you
        </p>
      </div>

      {/* Contact Info */}
      <div className="px-4 py-6">
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-lg p-4 flex items-start gap-4 shadow-sm">
            <div className="bg-[#fdcd00]/20 p-3 rounded-full">
              <MapPin className="w-5 h-5 text-[#1a1a1a]" />
            </div>
            <div>
              <h4 className="text-[#1a1a1a] mb-1">Address</h4>
              <p className="text-gray-600 text-sm">123 Baker Street</p>
              <p className="text-gray-600 text-sm">Sweet Town, ST 12345</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 flex items-start gap-4 shadow-sm">
            <div className="bg-[#fdcd00]/20 p-3 rounded-full">
              <Phone className="w-5 h-5 text-[#1a1a1a]" />
            </div>
            <div>
              <h4 className="text-[#1a1a1a] mb-1">Phone</h4>
              <p className="text-gray-600 text-sm">(555) 123-4567</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 flex items-start gap-4 shadow-sm">
            <div className="bg-[#fdcd00]/20 p-3 rounded-full">
              <Mail className="w-5 h-5 text-[#1a1a1a]" />
            </div>
            <div>
              <h4 className="text-[#1a1a1a] mb-1">Email</h4>
              <p className="text-gray-600 text-sm">info@bonpasbakery.com</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 flex items-start gap-4 shadow-sm">
            <div className="bg-[#fdcd00]/20 p-3 rounded-full">
              <Clock className="w-5 h-5 text-[#1a1a1a]" />
            </div>
            <div>
              <h4 className="text-[#1a1a1a] mb-1">Hours</h4>
              <p className="text-gray-600 text-sm">Monday - Friday: 7am - 7pm</p>
              <p className="text-gray-600 text-sm">Saturday - Sunday: 8am - 6pm</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-[#1a1a1a] mb-4">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                type="text"
                placeholder="How can we help?"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us more..."
                required
                className="mt-1 min-h-[120px]"
              />
            </div>

            <Button type="submit" className="w-full bg-[#fdcd00] hover:bg-[#e6b900] text-[#1a1a1a]">
              Send Message
            </Button>
          </form>
        </div>

        {/* Map Placeholder */}
        <div className="mt-8 bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="aspect-video bg-gray-200 flex items-center justify-center">
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Map location</p>
              <p className="text-gray-400 text-sm">123 Baker Street, Sweet Town</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
