import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Register = () => {
  return (
    <section id="register" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Register for PDC 2025
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-center">
          Sign up to compete in the Parliamentary Debate Championship. Limited
          spots available!
        </p>
        <div className="flex justify-center">
          <Link
            to="/register"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 rounded-full hover:from-blue-700 hover:via-sky-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(56,189,248,0.8)]"
          >
            Go to Registration
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;