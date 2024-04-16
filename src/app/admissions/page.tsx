import Breadcrumb from "@/components/Common/Breadcrumb";
import Admission from "@/components/Admission";

import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata: Metadata = {
  title: "Admission",
  description: "This is Admission page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-8 md:py-20 lg:py-28">
        <div className="container flex flex-col items-center">
          <SectionTitle
            title="Admissions"
            paragraph="Welcome to the vibrant community of OGIFT , where your passion for creativity meets unparalleled opportunities for growth and learning. "
            center
          />
          <Admission />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
