import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  display: flex;
  flex: 1;
  background: #fafafb;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 5050;
  border-top: 3px solid #f48024;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.1);
  padding: 0 30px;
`;

export const InnerContainer = styled.header`
  max-width: 1300px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  width: 170px;
  height: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background: rgba(214, 214, 214, 0.6);
  }
`;

export const Logo = styled.img`
  width: 150px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.7em 0.7em;
  margin: 0 15px;
  border: 1px solid #bbc0c4;
  font-size: 13px;
  line-height: 1.15;
  border-radius: 4px;
`;

export const ReputationContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;

  :hover {
    background: rgba(214, 214, 214, 0.6);
  }
`;

export const Avatar = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 3px;
`;

export const Reputation = styled.span`
  font-weight: 700;
  font-size: 13px;
  margin-left: 7px;
  color: #535a60;
`;

interface ReputationColorProps {
  color: "gold" | "silver" | "copper";
}

export const ReputationDot = styled.div<ReputationColorProps>`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background: ${(props) =>
    props.color === "copper"
      ? "#ab825f"
      : props.color === "gold"
      ? "#FFCC00"
      : "#C5C5C5"};
`;

export const ReputationPoints = styled.span<ReputationColorProps>`
  font-size: 13px;
  margin-left: 7px;
  color: #9a9c9f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: ${(props) =>
    props.color === "copper"
      ? "#ab825f"
      : props.color === "gold"
      ? "#FFCC00"
      : "#C5C5C5"};
`;

export const Icons = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  div {
    height: 50px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    cursor: pointer;

    :hover {
      background: rgba(214, 214, 214, 0.6);
    }
  }
`;
