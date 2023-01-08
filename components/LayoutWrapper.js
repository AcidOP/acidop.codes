import SectionContainer from './SectionContainer'
import Footer from './Footer'

import NavigationBar from './NavigationBar'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <SectionContainer>
        <NavigationBar />
        <main className="mb-auto">{children}</main>
        <Footer />
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
