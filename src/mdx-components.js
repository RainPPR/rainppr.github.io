import { useMDXComponents as getBlogMDXComponents } from 'nextra-theme-blog'

const blogComponents = getBlogMDXComponents({
  DateFormatter: ({ date }) =>
    `Last updated ${date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })}`
})

export function useMDXComponents(components) {
  return {
    ...blogComponents,
    ...components
  }
}
