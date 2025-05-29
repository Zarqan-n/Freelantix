import { Helmet } from "react-helmet-async";

interface OrganizationSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  contactPoint?: {
    telephone?: string;
    contactType?: string;
    email?: string;
  };
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  serviceType: string;
  areaServed?: string;
}

interface WebsiteSchemaProps {
  name: string;
  url: string;
  description: string;
  publisher: string;
}

export function OrganizationSchema({
  name = "Freelantix",
  description = "Premium digital solutions including web development, UI/UX design, and digital strategy services.",
  url = "https://freelantix.com",
  logo = "/logo.png",
  contactPoint = {
    telephone: "+1-800-FREELANTIX",
    contactType: "customer service",
    email: "hello@freelantix.com"
  },
  address
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    description,
    url,
    logo,
    contactPoint: {
      "@type": "ContactPoint",
      ...contactPoint
    },
    ...(address && {
      address: {
        "@type": "PostalAddress",
        ...address
      }
    }),
    sameAs: [
      "https://twitter.com/freelantix",
      "https://linkedin.com/company/freelantix",
      "https://github.com/freelantix"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export function ServiceSchema({
  name,
  description,
  provider,
  serviceType,
  areaServed = "Worldwide"
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider
    },
    serviceType,
    areaServed
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export function WebsiteSchema({
  name,
  url,
  description,
  publisher
}: WebsiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    publisher: {
      "@type": "Organization",
      name: publisher
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}