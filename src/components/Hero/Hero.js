import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding> 
    <LeftSection>
      <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Talk is Cheap, Show me the code. Kindly Go thorough my work to understand more about my personality and nature of work.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.google.com'}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;