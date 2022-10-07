const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/blog', title: 'Blogs' },
  { href: '/projects', title: 'Projects' },
  { href: '/tools', title: 'Uses' },
  {
    type: 'dropdown',
    title: 'Other',
    links: [{ href: '/tags', title: 'Tags' }],
  },
]

export default headerNavLinks
