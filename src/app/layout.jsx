import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'
import '../styles/style.css'
 
export const metadata = {
  title: 'RainPPR'
}

const banner = (
  <Banner storageKey="initial">
    这是这个博客的测试版，仅供参考。
  </Banner>
)
 
export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#1D1D20', light: '#FDFDFE' }} />
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
            </a> <a href="/feed.xml" style={{ float: 'right' }}>
              RSS
            </a>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}