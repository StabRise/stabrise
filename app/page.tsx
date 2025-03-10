import { sortPosts, allCoreContent } from "pliny/utils/contentlayer";
import { allBlogs } from "contentlayer/generated";
import Main from "./Main";
import FeaturesList from "@/components/FeaturesList";

import projectsData from "@/data/projectsData";
import useCases from "@/data/useCases";

import Card from "@/components/Card";
import SimpleCard from "@/components/SimpleCard";
import { FaRegFileAlt, FaRegSmile } from "react-icons/fa";
import whyChooseUs from "@/data/whyChooseUs";

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);

  return (
    <main className="mx-auto">
      <section className="mb-8 text-center">
        <h1 className="p-6 text-3xl font-semibold text-gray-900">
          Scalable Document Processing Solutions
        </h1>
        <p className="mx-auto mt-6 pb-6 max-w-3xl text-lg text-gray-600">
          Effortlessly manage both structured and unstructured data with solutions that grow with
          your business. Stay compliant with HIPAA, GDPR, and other regulations while improving
          efficiency. Powered by Spark, we help you scale your document processing smoothly and
          securely.
        </p>
      </section>
      {/* Video Section */}
      {/*<section className="mb-8 text-center">*/}
      {/*  <div className="relative">*/}
      {/*    <video*/}
      {/*      controls*/}
      {/*      className="mx-auto w-full max-w-4xl rounded-lg shadow-md"*/}
      {/*      src="/static/videos/demo-small.mp4"*/}
      {/*      type="video/mp4"*/}
      {/*      autoPlay*/}
      {/*      loop*/}
      {/*      muted*/}
      {/*    >*/}
      {/*      Your browser does not support the video tag.*/}
      {/*    </video>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <hr className="mt-6" />
      <section id="projects" className="bg-gray-50 py-6 px-3 text-center">
        <h2 className="text-grey-900 mb-6 p-6">Our Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
              features={d.features}
            />
          ))}
        </div>
      </section>
      <hr className="" />
      <section className="py-6">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-center my-6">Use Cases</h2>
          <div className="">
            <div className="usage-cases-list">
              {useCases.map((item, index) => (
                <div key={index} className="usage-case-item mb-5">
                  <div className="usage-case-header flex items-center mb-2.5">
                    <div className="usage-case-icon mr-2.5 text-primary">
                      {item.icon}
                    </div>
                    <p className="text-xl text-gray-800">{item.title}</p>
                  </div>
                  <p className="text-base text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr className="" />
      <section className="bg-primary-100 py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-primary-950 text-3xl font-semibold text-center mb-8">Our Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((card, index) => (
              <SimpleCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon} // Pass the icon prop to the Card component
              />
            ))}
          </div>
        </div>
      </section>
      <hr className="my-6" />

      {/* Call to Action */}
      <section className="mb-3">
        {/* Form Section */}
        <div className="bg-primary-100 mx-auto max-w-lg rounded-lg p-6 shadow-lg">
          <h2 className="mb-4 text-3xl font-bold">Get Started with StabRise Today!</h2>
          <p className="mb-6 text-lg">
            Discover how StabRise can help you build scalable and compliant document processing
            solutions. Let's explore how we can transform your document workflows.
          </p>
          <form action="#" method="POST">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company-name"
                  name="company-name"
                  className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-[var(--color-secondary-400)] p-3 font-bold text-white hover:bg-[var(--color-secondary-500)]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Recent Posts */}
      {/*<section>*/}
      {/*  <h2 className="mb-8 text-3xl font-bold text-gray-900">Recent Posts</h2>*/}
      {/*  <div className="space-y-8">*/}
      {/*    {posts.map((post) => (*/}
      {/*      <div key={post.slug} className="rounded-lg bg-white p-6 shadow-md">*/}
      {/*        <h3 className="mb-2 text-2xl font-semibold text-gray-800">{post.title}</h3>*/}
      {/*        <p className="text-gray-600">{post.excerpt}</p>*/}
      {/*        <a*/}
      {/*          href={`/blog/${post.slug}`}*/}
      {/*          className="mt-2 inline-block text-blue-600 hover:text-blue-800"*/}
      {/*        >*/}
      {/*          Read More*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</section>*/}
    </main>
  );
}
