import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Our Location</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Doon International School, Sector 69, Sahibzada Ajit Singh Nagar, Mohali, Punjab, 160062
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Email</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="mailto:dis_tech@online.dooninternational.net" className=" hover:text-blue-600 dark:hover:text-blue-400 no-underline" >
                    dis_tech@online.dooninternational.net
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Phone</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="tel:+919876272716" className="hover:text-blue-600 dark:hover:text-blue-400 no-underline">
                   +91 9876272716
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700">
            <iframe

              title="Doon International School Mohali"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.882162553645!2d76.7193588750797!3d30.689625706498205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feebd3bd4b717%3A0xabc926cb994bc417!2sDoon%20International%20School!5e0!3m2!1sen!2sin!4v1745929367910!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-80"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
