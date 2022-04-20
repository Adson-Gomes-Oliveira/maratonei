import React from 'react';
import Logo from '../images/svg/logotipo.svg';
import github from '../images/github-icon.webp';
import linkedin from '../images/linkedin-icon.webp';
import whatsapp from '../images/whatsapp-icon.webp';
import {
  FooterStyled,
  SocialMediaStyled,
  DisclaimerStyled,
  DisclaimerText,
} from '../styles/index';

function Footer() {
  return (
    <FooterStyled>

      <img src={Logo} alt="Logotipo Maratonei" />

      <SocialMediaStyled>
        <img src={github} alt="Icone para acessar o github" />
        <img src={linkedin} alt="Icone para acessar o linkedin" />
        <img src={whatsapp} alt="Icone para acessar o whatsapp" />
      </SocialMediaStyled>

      <DisclaimerStyled>
        <DisclaimerText>
          <span>
            Desenvolvido com Paixão <b>♥</b> por Adson Gomes Oliveira
          </span>
          <span>
            Segue abaixo o link do repositório desse projeto além de outros
            projetos interessantes para conferir:
          </span>
        </DisclaimerText>
        {/* <DisclaimerLinks></DisclaimerLinks> */}
      </DisclaimerStyled>

    </FooterStyled>
  );
}

export default Footer;
