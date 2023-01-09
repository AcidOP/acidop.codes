export default function SectionContainer({ children }) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 2xl:max-w-7xl">
      {children}
    </div>
  )
  // return <div className="container mx-auto px-4 sm:px-6 lg:px-16">{children}</div>
}
