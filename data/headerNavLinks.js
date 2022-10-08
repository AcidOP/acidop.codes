const headerNavLinks = [
  { href: '/', title: 'Home 🏠' },
  { href: '/about', title: 'About 🤵🏻' },
  { href: '/blog', title: 'Blogs 📚' },
  { href: '/projects', title: 'Projects 🔨' },
  { href: '/contact', title: 'Contact 🤳🏻' },
  {
    type: 'dropdown',
    title: 'Other',
    links: [
      { href: '/tags', title: 'Tags 🔖' },
      { href: '/tools', title: 'Uses ⚙' },
    ],
  },
]

export default headerNavLinks
