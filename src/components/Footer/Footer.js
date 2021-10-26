import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { SectionText } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <CompanyContainer>
        <SectionText>If you fancy a chat feel free to drop me a mail.</SectionText>
      </CompanyContainer>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111"> 111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@mail.com"> contact@mail.com</LinkItem>
        </LinkColumn> */}
      </LinkList>
      <SocialIconsContainer>
        
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111"> 111-111-1111</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:shubhamkhulbe6@mail.com"> Contact@mail.com</LinkItem>
        </LinkColumn>
      </LinkList>
        
        <SocialContainer>
        <SocialIcons href="https://github.com/skhulbe75">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/shubhamkhulbe6">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/skhulbe75">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>

      
    </FooterWrapper>
  );
};

export default Footer;
