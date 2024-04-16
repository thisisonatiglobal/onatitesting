import CardComponent from "@/components/Common/Card";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Placement",
  description: "This is for placement page",
  // other metadata
};

const Card = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-dark rounded-lg p-6 shadow-md mb-4 border-4 border-purple-900">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const BlogSidebarPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px] bg-white dark:bg-dark relative">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div className="relative">
                <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/features/fashions.jpg')" }}></div>
                <h1 className="relative z-10 mb-8 mx-25  text-3xl font-bold leading-tight shadow-2xl text-[#4a044e] dark:text-white sm:text-4xl sm:leading-tight">
                  Placement Support at OGIFT
                </h1>
                <div>
                  <p className="mb-10 text-black font-medium leading-relaxed bg-white text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    At Onati Global Institute of Fashion Technology, we are committed to not only providing top-notch education but also ensuring that our students have the support they need to kickstart their careers in the fashion industry. Our comprehensive placement support services are designed to connect students with exciting job opportunities and internships, paving the way for a successful and fulfilling career journey.
                  </p>
                  <strong className="text-black dark:text-white mx-auto">
                    <h1>What Sets Us Apart:{" "}</h1>
                  </strong>
                  <div className="grid gap-2">
                    <Card title="Industry Connections" description="We have established strong relationships with leading fashion companies, brands, and organizations worldwide. These connections enable us to offer our students exclusive access to internship programs, job placements, and networking opportunities within the industry." />
                    <Card title="Internship Opportunities" description="Internships are a crucial part of the learning experience at OGIFT. Through our extensive network of industry partners, we provide students with hands-on internship opportunities that allow them to gain real-world experience, build professional relationships, and explore different career paths within the fashion industry." />
                    <Card title="Career Guidance" description="Our dedicated career guidance team works closely with students to help them identify their career goals, polish their resumes, prepare for interviews, and navigate the job market. We provide personalized support and advice to ensure that each student is well-equipped to pursue their desired career path." />
                    <Card title="Industry-Relevant Curriculum" description="Our curriculum is designed in collaboration with industry experts to ensure that students graduate with the skills, knowledge, and competencies demanded by employers in the fashion industry. This industry-relevant approach equips our students with a competitive edge in the job market." />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-4/12 ">
              <NewsLatterBox />
              <Image
      src="/images/placement/Poster.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
            </div>
            <CardComponent HOVER="Career Counselling" description="Our career counselling team works closely with students to
understand their career aspirations and goals." />
            <CardComponent HOVER="Resume Building" description="We assist students in crafting professional resumes and portfolios.
" />
            <CardComponent HOVER="Job Opportunities" description="We regularly update students on job openings, internship
programs." />
            <CardComponent HOVER="Interview Preparation" description="We conduct mock interviews, provide interview tips, and
offer guidance on presentation skills." />
            <CardComponent HOVER="Customized Guidance" description="Tailored career guidance plans that map out personalized steps and milestones " />
            <CardComponent HOVER="Insider Insights" description="Providing students with insights into current industry trends." />
            <CardComponent HOVER="Networking Support" description="Facilitating networking opportunities and mentorship programs where students can connect with alumni." />
         
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
