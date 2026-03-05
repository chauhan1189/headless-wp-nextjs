async function getDoctor(slug) {
  const res = await fetch(
    `http://headless-wp.local/wp-json/wp/v2/teams?_embed&slug=${slug}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data[0];
}

export default async function DoctorPage({ params }) {
  const { slug } = await params;

  const doctor = await getDoctor(slug);

  if (!doctor) {
    return <h1>Doctor Not Found</h1>;
  }

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: doctor.title.rendered }} />
      <div
        dangerouslySetInnerHTML={{ __html: doctor.content.rendered }}
      />
    </div>
  );
}