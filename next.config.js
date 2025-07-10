import nextra from 'nextra';

const withNextra = nextra({
  defaultShowCopyCode: true,
  readingTime: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: 'github-dark',
        light: 'github-light'
      }
    }
  },
  search: { codeblocks: false },
  latex: {
    renderer: 'katex',
    options: {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      macros: {
        "’": "'"
      },
      trust: true
    }
  }
});

export default withNextra({
  reactStrictMode: true,
  cleanDistDir: true,
  basePath: process.env.PAGES_BASE_PATH || '',
  output: 'export',
  images: {
    unoptimized: true
  }
});
