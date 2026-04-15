import * as React from "react";
import { Box, ChakraProvider, Heading, Link, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import ReactSEOMetaTags from "react-seo-meta-tags";
import favicon from '../images/favicon.svg';
import metaimg from '../images/image.png';
import gatsbyConfig from "../../gatsby-config";
import Content from "../components/Content";
import Readme from "../components/Readme";
import { useEffect } from "react";

// markup
const IndexPage = () => {
  const [stat, setStat] = React.useState(null);
  useEffect(() => {
    fetch("https://r.forwarddomain.net/stat")
      .then(res => res.json())
      .then(setStat)
      .catch(err => console.error(err));
  }, []);
  return (
    <ChakraProvider>
      <ReactSEOMetaTags
        render={(el) => <Helmet>{el}
          <link rel="icon" href={favicon} />
          <link rel="canonical" href='https://forwarddomain.net' />
        </Helmet>}
        website={{
          url: 'https://forwarddomain.net',
          title: 'Forward Domain Using DNS | Free HTTPS URL Redirect Service',
          language: 'en-US',
          description: '⏩ Domain Forwarding Service using DNS. 100% free URL redirection. We automatically handle 🔒 HTTPS certificates. Open-source & 🛡️ tracker-free.',
          image: gatsbyConfig.siteMetadata.siteUrl + metaimg,
        }}
      />
      <Box
        bg="blue.50"
        borderBottom="1px solid"
        borderColor="blue.200"
        px={4}
        py={3}
        textAlign="center"
        fontSize={{ base: "sm", md: "md" }}
        position="relative"
        zIndex={10000}
      >
        Need analytics and wildcard subdomains? Try our service{" "}
        <Link href="https://www.redirs.com" isExternal color="blue.700" fontWeight="bold" textDecoration="underline">
          redirs.com
        </Link>
      </Box>
      <Box as="main" px={10} py={5} textAlign="center" maxWidth="1000px" mx="auto">
        <Box>
          <Heading as="h1" my={5}>
            ForwardDomain.net 📦
          </Heading>
          <Box my={5}>Domain Forwarding Service using DNS. <Text as="span" color="blue.800">100% free. No trackers.</Text></Box>
          <Text my={5} color="blue.800" fontSize={"2xl"}>
            {stat ? <b>{stat.domains}</b> : '...'} websites served 🔥
          </Text>
        </Box>

        <Content />
        <Readme />
        <Box my={5}>
          
        </Box>
      </Box>
      <a className="github-fork-ribbon" href="https://github.com/lobovkin/forward-domain" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
    </ChakraProvider>
  )
}

export default IndexPage
