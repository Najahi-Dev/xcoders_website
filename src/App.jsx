
import styled from 'styled-components';
import './App.css'
import { getColorScheme } from './service';
import FullPageLayout from './components/FullPageLayout';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import OurProcess from './components/OurProcess';

function App() {

  return (
    <FullPageLayout>
      <HeroSection/>
      <ServicesSection/>
      <OurProcess/>
    </FullPageLayout>
  )
}

const AppStyle = styled.div`

`;

export default App
