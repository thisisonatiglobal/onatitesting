import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Let's Talk Fashion"
        description="At Onati Global, we believe in open communication and transparency. If you have any questions about our programs, admissions, or anything else, please don't hesitate to get in touch. We're committed to providing you with the information and support you need."
      />
     
      <Contact />
      
    </>
  );
};

export default ContactPage;
