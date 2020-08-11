import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';

function SEO({
  description = '',
  lang = 'en',
  meta = [],
  title = '',
  pathname = '/',
}) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            social {
              twitter
            }
          }
        }
        file(relativePath: { eq: "link-preview.png" }) {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    `
  );
  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = `${site.siteMetadata.siteUrl}${pathname}`;
  const image = file.childImageSharp.resize;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: 'og:image',
          content: `${site.siteMetadata.siteUrl}${image.src}`,
        },
        {
          property: `og:image:alt`,
          content: title,
        },
        {
          property: 'og:image:width',
          content: image.width,
        },
        {
          property: 'og:image:height',
          content: image.height,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: 'twitter:image',
          content: `${site.siteMetadata.siteUrl}${image.src}`,
        },
        {
          property: `twitter:image:alt`,
          content: title,
        },
        {
          property: 'twitter:image:width',
          content: image.width,
        },
        {
          property: 'twitter:image:height',
          content: image.height,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ].concat(meta)}
    >
      <script src={withPrefix('crossOrigin.js')} type="text/javascript" />
    </Helmet>
  );
}

export default SEO;
