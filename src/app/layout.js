import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog';
import { Banner, Head, Search } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import Script from 'next/script';
import 'nextra-theme-blog/style.css';
import '../styles/style.css';
import 'katex/dist/katex.min.css';
 
export const metadata = {
  title: 'RainPPR'
};

const banner = (
  <Banner storageKey="initial">
    这是这个博客的测试版，仅供参考。
  </Banner>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="author" content="RainPPR" />
      </Head>
      <body>
        <Layout banner={banner}>
          <Navbar pageMap={await getPageMap()}>
            <Search />
            <ThemeSwitch />
          </Navbar>
 
          {children}
 
          <Footer>
            {new Date().getFullYear()} © RainPPR
            <a href="https://github.com/RainPPR/rainppr.github.io" style={{ float: 'right' }}>
              Github
            </a>
          </Footer>
        </Layout>
      </body>
    </html>
  )
};