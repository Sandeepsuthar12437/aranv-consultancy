import Footer from "@/components/Footer";
import Header from "@/components/Header";
import data from "@data/data.json";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header data={data.Header} />
      <div className="flex flex-col items-center justify-center h-full bg-gray-100 text-center px-6">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-2xl font-semibold mt-2 text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-5 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
      <Footer data={data.footer} />
    </>
  );
}
