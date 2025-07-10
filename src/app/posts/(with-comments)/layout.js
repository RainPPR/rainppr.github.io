// import { Comments } from 'nextra-theme-blog'
import Script from 'next/script'

export default function CommentsLayout({ children }) {
  return (
    <>
      {children}
      <div id="__comments" className="giscus non-printable" data-no-instant></div>
      <Script src="https://giscus.app/client.js" data-repo="raineblog/blog-giscus" data-repo-id="R_kgDOMhpKmw" data-category="Announcements" data-category-id="DIC_kwDOMhpKm84ChhZ7" data-mapping="pathname" data-strict="1" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="top" data-theme="preferred_color_scheme" data-lang="zh-CN" data-loading="lazy" crossorigin="anonymous" async></Script>
      {/* <Comments lang="en" appId="a2d11511-7012-4254-9483-cb49c8f4dfe8" /> */}
    </>
  )
}
