import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useConfig, useTheme, type DocsThemeConfig } from "nextra-theme-docs";
import { Footer } from "./components/Footer";
import Navigation from "./components/Navigation";
import HeaderLogo from "./components/HeaderLogo";
import { Discord, Github } from "./components/Social";
import useLocalesMap from "./components/use-locales-map";
import { editTextMap, feedbackLinkMap, gitTimestampMap, headDescriptionMap, languageMap, searchPlaceholderMap, tableOfContentsTitleMap, titleMap } from "./translations/text";

const config: DocsThemeConfig = {
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  docsRepositoryBase: "https://github.com/virgoone/docs-site/blob/main/pages",
  useNextSeoProps: function SEO() {
    const { frontMatter } = useConfig();

    const defaultTitle = frontMatter.overrideTitle || 'Lark CLI';

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: `%s – Lark ORG`,
    };
  },
  gitTimestamp({ timestamp }) {
    const { locale } = useRouter();
    const lastUpdatedOn = useLocalesMap(gitTimestampMap);

    return (
      <>
        {lastUpdatedOn}{" "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    );
  },
  toc: {
    float: true,
    extraContent: null,
    title: () => useLocalesMap(tableOfContentsTitleMap),
  },
  // font: false,
  logo: HeaderLogo,
  logoLink: false,
  head: function Head() {
    const { route, locales, locale } = useRouter();
    const { frontMatter, title } = useConfig();
    const titleSuffix = useLocalesMap(titleMap);
    const description = useLocalesMap(headDescriptionMap);

    const imageUrl = new URL("https://dev.douni.one/api/og");

    if (!/\/index\.+/.test(route)) {
      imageUrl.searchParams.set("title", title || titleSuffix);
    }

    const contentLanguage = locales.join(", ");
    const ogTitle = title ? `${title} – Lark ORG` : `Lark ORG: ${titleSuffix}`;
    const ogDescription = frontMatter.description || description;
    const ogImage = frontMatter.image || imageUrl.toString();

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta httpEquiv="Content-Language" content={contentLanguage} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="SWR" />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@koya.guo" />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content={locale} />
        {locales
          .filter((l) => l !== locale)
          .map((l) => (
            <meta property="og:locale:alternate" content={l} key={l} />
          ))}
      </>
    );
  },
  i18n: Object.entries(languageMap).map(([locale, text]) => ({
    locale,
    text,
  })),
  editLink: {
    text: () => useLocalesMap(editTextMap),
  },
  feedback: {
    content: () => useLocalesMap(feedbackLinkMap),
  },
  navbar: {
    component: Navigation,
    extraContent: (
      <>
        <Github />
        {/* <Discord /> */}
      </>
    ),
  },
  search: {
    placeholder: () => useLocalesMap(searchPlaceholderMap),
  },
  footer: {
    text: () => {
      return <Footer />
    },
  },
  nextThemes: {
    defaultTheme: "dark",
  },
};

export default config;
