
import styled from 'styled-components';
import { getColorScheme } from './service';
import FullPageLayout from './components/FullPageLayout';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import OurProcess from './components/OurProcess';
import SideBar from './components/SideBar';

function App() {

  return (
    <FullPageLayout>
      <HeroSection/>
      <ServicesSection/>
      <OurProcess/>
      {/* <SideBar/> */}
    </FullPageLayout>
  )
}

const AppStyle = styled.div`

`;

export default App
