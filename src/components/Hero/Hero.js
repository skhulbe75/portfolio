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
        Talk is Cheap, Show me the Code, said Linus. So go through my work to understand more about my personality and nature of work.
      </SectionText>
      <Button onClick={() => window.open('https://drive.google.com/file/d/1I-Gmw-IJmNJSjIgy8zp0SrwD_pQHXdrS/view?usp=sharing', '_blank')}> Learn More </Button>
     </LeftSection>
  </Section>
);

export default Hero;