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
} from "./styles";

import logoBr from "../../assets/logo-br.png";
import { FaInbox, FaStackExchange } from "react-icons/fa";
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
        <ReputationContainer>
          <Avatar
            src="https://www.gravatar.com/avatar/909cbdb7d8ff6de5cc0227a5424e2fa2"
            alt="profile"
          />
          <Reputation>463</Reputation>
          <ReputationPoints color="gold">
            <ReputationDot color="gold" />
            &nbsp;1
          </ReputationPoints>
          <ReputationPoints color="silver">
            <ReputationDot color="silver" />
            &nbsp;3
          </ReputationPoints>
          <ReputationPoints color="copper">
            <ReputationDot color="copper" />
            &nbsp;14
          </ReputationPoints>
        </ReputationContainer>
        <Icons>
          <div title="Últimas mensagens no Inbox">
            <FaInbox size={22} />
          </div>
          <div title="Conquistas recentes: reputação, medalhas e privilégios obtidos">
            <AiFillTrophy size={22} />
          </div>
          <div title="Central de ajuda e outros recursos">
            <BsFillQuestionCircleFill size={20} />
          </div>
          <div title="Todos os 176 sites do Stack Exchange">
            <FaStackExchange size={20} />
          </div>
        </Icons>
      </InnerContainer>
    </Container>
  );
};

export default Header;
