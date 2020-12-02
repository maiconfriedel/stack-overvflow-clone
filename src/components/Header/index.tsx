import React from "react";

import {
  Container,
  InnerContainer,
  LogoContainer,
  Logo,
  SearchInput,
  Avatar,
  ReputationContainer,
  Reputation,
  ReputationPoints,
  ReputationDot,
  Icons,
  IconContainer,
} from "./styles";

import logoBr from "../../assets/logo-br.png";
import { FaInbox, FaStackExchange, FaSearch } from "react-icons/fa";
import { AiFillTrophy } from "react-icons/ai";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <Container>
      <InnerContainer>
        <LogoContainer>
          <Logo src={logoBr} alt="logo" />
        </LogoContainer>
        <SearchInput type="text" name="search" placeholder="Pesquisar..." />
        <IconContainer title="Pesquisar" className="mobile">
          <FaSearch size={20} />
        </IconContainer>
        <ReputationContainer title="Sua reputação: 463">
          <Avatar
            src="https://www.gravatar.com/avatar/909cbdb7d8ff6de5cc0227a5424e2fa2"
            alt="profile"
          />
          <Reputation>9874547</Reputation>
          <ReputationPoints color="gold">
            <ReputationDot color="gold" />
            &nbsp;97
          </ReputationPoints>
          <ReputationPoints color="silver">
            <ReputationDot color="silver" />
            &nbsp;123
          </ReputationPoints>
          <ReputationPoints color="copper">
            <ReputationDot color="copper" />
            &nbsp;239
          </ReputationPoints>
        </ReputationContainer>
        <Icons>
          <IconContainer title="Últimas mensagens no Inbox">
            <FaInbox size={22} />
          </IconContainer>
          <IconContainer title="Conquistas recentes: reputação, medalhas e privilégios obtidos">
            <AiFillTrophy size={22} />
          </IconContainer>
          <IconContainer title="Central de ajuda e outros recursos">
            <BsFillQuestionCircleFill size={20} />
          </IconContainer>
          <IconContainer title="Todos os 176 sites do Stack Exchange">
            <FaStackExchange size={20} />
          </IconContainer>
        </Icons>
      </InnerContainer>
    </Container>
  );
};

export default Header;
