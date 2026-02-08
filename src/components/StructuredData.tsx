export default function StructuredData() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Shamrock Hardscapes and Restoration",
    url: "https://shamrocklandscaping.com",
    telephone: "+1-630-397-0393",
    email: "julieb@shamrocklandscaping.com",
    foundingDate: "1997",
    description:
      "Full-service landscaping company serving Chicago and surrounding suburbs since 1997. Landscape design, hardscaping, landscaping, landscape lighting, and commercial snow removal.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1112 Sears Circle",
      addressLocality: "Elburn",
      addressRegion: "IL",
      postalCode: "60119",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 41.8911,
        longitude: -88.4726,
      },
      geoRadius: "50000",
    },
    sameAs: [
      "https://www.facebook.com/shamrocklandscaping",
      "https://twitter.com/Shamrock_Land",
      "https://www.instagram.com/shamrocklandscaping",
      "https://www.houzz.com/pro/shamrocklandscaping",
    ],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  );
}
