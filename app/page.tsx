import Link from "next/link";

type Doctor = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
  };
};

async function getDoctors(): Promise<Doctor[]> {
  const res = await fetch(
    "http://headless-wp.local/wp-json/wp/v2/teams?per_page=3&_embed",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function HomePage() {
  const doctors = await getDoctors();

  return (
    <main>

      {/* HERO SECTION */}

      <section className="bg-blue-50 py-24">

        <div className="max-w-[1300px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-5xl font-bold mb-6">
              Advanced Medical Care
              <span className="text-blue-600"> You Can Trust</span>
            </h1>

            <p className="text-gray-600 mb-8">
              Our experienced doctors provide modern medical treatment with
              patient-centered care and the latest healthcare technology.
            </p>

            <div className="flex gap-4">

              <Link
                href="/doctors"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Find a Doctor
              </Link>

              <Link
                href="/about"
                className="border px-6 py-3 rounded-lg"
              >
                Learn More
              </Link>

            </div>

          </div>

          <img
            src="/images/hero-doctor.jpg"
            className="rounded-xl"
          />

        </div>

      </section>

      {/* SERVICES */}

      <section className="py-20">

        <div className="max-w-[1300px] mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Our Medical Services
          </h2>

          <p className="text-gray-600 mb-14">
            We offer a wide range of medical services to meet your healthcare needs.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 border rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Cardiology
              </h3>
              <p className="text-gray-600">
                Diagnosis and treatment of heart diseases by experienced cardiologists.
              </p>
            </div>

            <div className="p-8 border rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Neurology
              </h3>
              <p className="text-gray-600">
                Comprehensive care for brain and nervous system disorders.
              </p>
            </div>

            <div className="p-8 border rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Orthopedics
              </h3>
              <p className="text-gray-600">
                Treatment for bones, joints and musculoskeletal injuries.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT PREVIEW */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-[1300px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/images/about-clinic.jpg"
            className="rounded-xl"
          />

          <div>

            <h2 className="text-4xl font-bold mb-6">
              About Our Clinic
            </h2>

            <p className="text-gray-600 mb-6">
              Our clinic provides modern healthcare solutions with a team of
              highly experienced medical professionals dedicated to improving
              patient outcomes and quality of life.
            </p>

            <Link
              href="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Read More
            </Link>

          </div>

        </div>

      </section>

      {/* DOCTORS PREVIEW */}

      <section className="py-20">

        <div className="max-w-[1300px] mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-14">
            Meet Our Doctors
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {doctors.map((doctor: Doctor) => {
              const image =
                doctor._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

              return (
                <div
                  key={doctor.id}
                  className="border rounded-xl p-6"
                >

                  {image && (
                    <img
                      src={image}
                      className="rounded-lg mb-4"
                    />
                  )}

                  <h3
                    className="text-xl font-semibold"
                    dangerouslySetInnerHTML={{
                      __html: doctor.title.rendered,
                    }}
                  />

                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="text-blue-600"
                  >
                    View Profile
                  </Link>

                </div>
              );
            })}

          </div>

          <div className="mt-12">

            <Link
              href="/doctors"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              View All Doctors
            </Link>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-blue-50 py-20">

        <div className="max-w-[1300px] mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Experienced Doctors
              </h3>
              <p className="text-gray-600">
                Our team consists of highly qualified specialists.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Modern Technology
              </h3>
              <p className="text-gray-600">
                We use the latest medical technology for accurate diagnosis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Patient Focused
              </h3>
              <p className="text-gray-600">
                We prioritize comfort, safety, and personalized care.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20">

        <div className="max-w-[900px] mx-auto text-center px-4">

          <h2 className="text-4xl font-bold mb-6">
            Book Your Appointment Today
          </h2>

          <p className="text-gray-600 mb-8">
            Contact our clinic today to schedule a consultation with one of
            our specialists.
          </p>

          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg"
          >
            Book Appointment
          </Link>

        </div>

      </section>

    </main>
  );
}