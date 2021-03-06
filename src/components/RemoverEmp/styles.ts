import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { AiOutlineDelete } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';

interface ButtonProps {
  buttonType?: 'confirm' | 'cancel';
}

export const Container = styled.div`
  position: relative;

  width: 100%;
  min-height: calc(100vh - 104px);

  padding-left: 12px;
`;

export const Lista = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;

  @media (max-width: 1548px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 45%;

  margin: 16px 4px;
  position: relative;

  border: 1px solid ${props => props.theme.colors.light.gray};
  border-radius: 4px;

  color: #333;

  transition: all 300ms ease;

  &:hover {
    color: ${props => props.theme.colors.light.lightBlue};
    text-decoration: none;
  }

  @media (max-width: 1548px) {
    width: 90%;
  }
`;

export const ArrowIcon = styled(AiOutlineDelete)`
  font-size: 40px;

  color: #333;

  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    transition: all 300ms ease-in-out;
    filter: drop-shadow(
      0px 0px 1px ${props => shade(0.1, props.theme.colors.light.lightBlue)}
    );
  }

  @media only screen and (max-width: 385px) {
    margin-top: 16px;

    font-size: 30px;
  }
`;

export const DivIcon = styled.div`
  position: absolute;
  top: 25%;
  right: 2%;
`;

export const Avatar = styled.img`
  flex-shrink: 0;

  width: 88px;
  height: 88px;

  margin-right: 8px;

  border-right: 1px solid ${shade(0.4, '#fff')};
  border-radius: 4px;

  @media only screen and (max-width: 385px) {
    width: 104px;
    height: 104px;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
`;

export const Nome = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;

  width: 90%;

  &:first-child {
    font-weight: bold;
  }

  @media (max-width: 414px) {
    line-clamp: 1;
    max-width: 100%;
  }
`;

export const Descricao = styled.span`
  width: 50%;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  line-clamp: 1;

  @media only screen and (max-width: 1548px) {
    width: 90%;
  }

  @media only screen and (max-width: 807px) {
    width: 70%;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 20vh;
  left: 30vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: auto;

  border: 1px solid #000;
  border-radius: 4px;

  background-color: #fdfdfd;

  filter: drop-shadow(
    -4px 4px 8px ${props => shade(0.6, props.theme.colors.light.lightBlue)}
  );

  z-index: 5;

  transition: all 300ms ease-in-out;

  @media only screen and (max-width: 995px) {
    width: 60%;
    left: 35vw;
  }

  @media only screen and (max-width: 730px) {
    width: 70%;
    left: 10vw;
  }

  @media only screen and (max-width: 730px) {
    padding-left: 8px;
  }

  @media only screen and (max-width: 560px) {
    width: 90%;
    left: 6vw;
  }
`;

export const CloseIcon = styled(TiDelete)`
  position: absolute;
  right: 16px;
  top: 16px;

  font-size: 40px;

  color: #333;

  cursor: pointer;

  transition: all 400ms ease-in-out;

  &:hover {
    color: red;
  }

  @media only screen and (max-width: 320px) {
    right: 12px;
    top: 24px;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 200px;
  height: 40px;

  margin: 16px;

  font-weight: bold;

  border: 1px solid #333;
  border-radius: 4px;

  background-color: #fdfdfd;

  transition: all 300ms ease;

  &:hover {
    color: #fff;
    ${props =>
      props.buttonType === 'confirm' &&
      css`
        background-color: ${shade(0.2, '#32c019')};
      `}

    ${props =>
      props.buttonType === 'cancel' &&
      css`
        background-color: ${props => props.theme.colors.light.lightBlue};
      `}
  }
`;

export const InfoModal = styled.div`
  position: fixed;
  top: 20vh;
  left: 30vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: auto;

  padding-top: 16px;

  border: 1px solid #000;
  border-radius: 4px;

  background-color: #fdfdfd;
  filter: drop-shadow(
    -4px 4px 8px ${props => shade(0.6, props.theme.colors.light.lightBlue)}
  );

  z-index: 5;

  transition: all 300ms ease-in-out;

  svg {
    top: 24px;
  }

  @media only screen and (max-width: 995px) {
    width: 60%;
    left: 35vw;
  }

  @media only screen and (max-width: 730px) {
    width: 70%;
    left: 10vw;
  }

  @media only screen and (max-width: 730px) {
    padding-left: 8px;
  }

  @media only screen and (max-width: 560px) {
    width: 90%;
  }
`;

export const StatusMessageDiv = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 45%;
  height: 90px;

  background: red;
  border: 1px solid ${shade(0.6, '#fff')};
  border-radius: 4px;

  z-index: 2;

  @media (max-width: 1256px) {
    width: 90%;
  }

  @media only screen and (max-width: 385px) {
    width: 100%;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;

  padding-bottom: 8px;

  border-bottom: 1px solid ${props => props.theme.colors.light.gray};

  width: 90%;
`;
