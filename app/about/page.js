import Image from "next/image";
import Link from "next/link";

async function getDoctors() {
  const res = await fetch(
    "http://headless-wp.local/wp-json/wp/v2/teams?per_page=3&_embed",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function AboutPage() {

  const doctors = await getDoctors();

  return (
    <div>

      {/* HERO SECTION */}

      <section className="bg-gray-100 py-20">
        <div className="max-w-[1300px] mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our Medical Center
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are dedicated to providing world-class medical care with a team
            of highly experienced doctors and modern technology to ensure the
            best treatment for our patients.
          </p>

        </div>
      </section>

      {/* OUR MISSION */}

      <section className="py-20">
        <div className="max-w-[1300px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-gray-600 mb-4">
              Our mission is to provide high-quality healthcare services
              focused on patient safety, innovation, and compassion.
            </p>

            <p className="text-gray-600">
              We aim to improve the quality of life for our patients by
              delivering personalized treatment plans using modern medical
              technology and experienced specialists.
            </p>
          </div>

          <img
            src="/images/about/mission.jpg"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>

      {/* OUR STORY */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-[1300px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/images/about/story.jpg"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 mb-4">
              Our clinic started with a simple vision: to make advanced
              healthcare accessible to everyone.
            </p>

            <p className="text-gray-600">
              Over the years we have grown into a trusted medical institution
              serving thousands of patients with advanced treatments and
              experienced doctors.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="py-20">
        <div className="max-w-[1300px] mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-14">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="text-center p-6 shadow-md rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Experienced Doctors
              </h3>

              <p className="text-gray-600">
                Our team includes highly trained specialists with years of
                experience in their fields.
              </p>
            </div>

            <div className="text-center p-6 shadow-md rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Modern Equipment
              </h3>

              <p className="text-gray-600">
                We use the latest medical technology to provide accurate
                diagnosis and effective treatments.
              </p>
            </div>

            <div className="text-center p-6 shadow-md rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Patient Focused
              </h3>

              <p className="text-gray-600">
                Every treatment plan is tailored to meet the unique needs of
                each patient.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STATISTICS */}

      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-[1300px] mx-auto px-4 grid md:grid-cols-4 text-center gap-10">

          <div>
            <h3 className="text-4xl font-bold">20+</h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">10K+</h3>
            <p>Happy Patients</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p>Medical Specialists</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">15+</h3>
            <p>Awards</p>
          </div>

        </div>
      </section>

      {/* TEAM MEMBERS */}

      <section className="py-20">
        <div className="max-w-[1300px] mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-14">
            Meet Our Doctors
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {doctors.map((doctor) => {

              const image =
                doctor._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

              return (
                <div
                  key={doctor.id}
                  className="bg-white shadow-md rounded-xl overflow-hidden"
                >

                  {image && (
                    <img
                      src={image}
                      className="w-full h-[260px] object-cover"
                    />
                  )}

                  <div className="p-6">

                    <h3
                      className="text-xl font-semibold mb-3"
                      dangerouslySetInnerHTML={{
                        __html: doctor.title.rendered,
                      }}
                    />

                    <Link
                      href={`/doctors/${doctor.slug}`}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      View Profile →
                    </Link>

                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </section>

    </div>
  );
}