import FAQ from "@/components/faq";
import Footer from "@/components/footer";

// return faq
export default function About() {
  return (
    <>
      <div className="bg-gray-900 text-white mx-auto py-32 lg:h-screen">
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
