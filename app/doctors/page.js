import Link from "next/link";

async function getDoctors(page = 1) {
  const res = await fetch(
    `http://headless-wp.local/wp-json/wp/v2/teams?page=${page}&per_page=6&_embed`,
    { cache: "no-store" }
  );

  const doctors = await res.json();
  const totalPages = res.headers.get("X-WP-TotalPages");

  return { doctors, totalPages };
}

export default async function DoctorsPage({ searchParams }) {

  const page = parseInt(searchParams?.page) || 1;

  const { doctors, totalPages } = await getDoctors(page);

  return (
    <section className="py-16">
      
      <div className="max-w-[1300px] mx-auto px-4">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Doctors
        </h1>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {doctors.map((doctor) => {

            const image =
              doctor._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >

                {/* Image */}
                {image && (
                  <img
                    src={image}
                    alt={doctor.title.rendered}
                    className="w-full h-[260px] object-cover"
                  />
                )}

                {/* Content */}
                <div className="p-6">

                  <h3
                    className="text-xl font-semibold mb-2"
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

        {/* Pagination */}
        <div className="flex justify-center mt-14 gap-3">

          {Array.from({ length: totalPages }, (_, i) => {

            const pageNumber = i + 1;

            return (
              <Link
                key={pageNumber}
                href={`/doctors?page=${pageNumber}`}
                className={`px-4 py-2 rounded-md border ${
                  page === pageNumber
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {pageNumber}
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}