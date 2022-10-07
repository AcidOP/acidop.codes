import SectionContainer from './SectionContainer'
import Footer from './Footer'

import NavigationBar from './NavigationBar'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <SectionContainer>
        <main className="mb-auto">{children}</main>
        <Footer />
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
