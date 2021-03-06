import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

import { RiHeartAddLine, RiKeyLine } from 'react-icons/ri';
import { MdErrorOutline, MdCheckCircle } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { GoSignIn } from 'react-icons/go';

interface LoginStatusProps {
  isLogged?: boolean;
  isLoading?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center center;

  height: calc(100vh - 104px);
  width: 100vw;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;

  align-self: center;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: auto;

  @media only screen and (max-width: 999px) {
    width: 100%;
  }

  h1 {
    margin-bottom: 32px;
    color: ${props => shade(0.6, props.theme.colors.light.lightBlue)};
    font-size: 32px;
  }

  input {
    position: relative;

    width: 50%;
    height: 50px;

    font-size: 18px;

    color: ${props => shade(0.6, props.theme.colors.light.lightBlue)};
    background: #f2f2f2;

    border: 1px solid ${shade(0.4, '#f2f2f2')};
    border-radius: 4px;

    margin: 8px 0;
    padding: 16px;

    transition: color 300ms ease;

    @media only screen and (max-width: 999px) {
      width: 80%;
    }

    &::placeholder {
      color: ${props => props.theme.colors.light.lightBlue};
    }

    &:focus {
      transition: border 300ms ease;
      border: 1px solid ${props => lighten(0.1, props.theme.colors.light.lightBlue)};
      filter: drop-shadow(
        0px 0px 1px ${props => lighten(0.1, props.theme.colors.light.lightBlue)}
      );
    }
  }

  button {
    outline: 0;
    width: 50%;
    height: 50px;

    background: ${props => props.theme.colors.light.lightBlue};
    color: #fdfdfd;

    border: 1px solid ${props => props.theme.colors.light.lightBlue};
    border-radius: 4px;

    margin: 8px 0;
    padding: 0 16px;

    font-weight: bold;
    font-size: 18px;

    transition: background 300ms ease;

    @media only screen and (max-width: 999px) {
      width: 80%;
    }

    svg {
      margin-right: 8px;
    }

    &:hover {
      transition: background 300ms ease;
      background: ${props => lighten(0.1, props.theme.colors.light.lightBlue)};
    }
  }

  a {
    color: ${props => props.theme.colors.light.lightBlue};

    align-self: center;

    margin: 8px 0;

    text-decoration: none;

    svg {
      margin: 0 8px 0 0;
    }

    transition: all 200ms ease;

    &:hover {
      color: ${props => lighten(0.2, props.theme.colors.light.lightBlue)};
    }
  }

  span {
    color: ${props => props.theme.colors.light.lightBlue};
    font-size: 12px;
  }
`;

export const Separator = styled.div`
  margin: 32px 0;
  width: 50%;

  border-radius: 50%;

  height: 2px;

  background-color: ${props => props.theme.colors.light.lightBlue};
`;

export const Content = styled.div`
  display: flex;
  place-content: center center;
`;

export const LoginIcon = styled(AiOutlineUser)`
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
  color: #000;
`;

export const PasswordIcon = styled(RiKeyLine)`
  font-size: 18px;
`;

export const SignInIcon = styled(GoSignIn)`
  font-size: 18px;
`;

export const CreateAccountIcon = styled(RiHeartAddLine)`
  font-size: 18px;
`;

export const LoginStatusDiv = styled.div<LoginStatusProps>`
  position: absolute;
  bottom: 28%;

  width: 50%;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.isLoading &&
    css`
      background: #f2f2f2;
    `};
  ${props =>
    props.isLogged &&
    css`
      background: #32c019;
    `};

  span {
    font-weight: bold;
    font-size: 18px;
    color: #f2f2f2;
  }

  @media only screen and (max-width: 999px) {
    width: 80%;
  }
`;

export const LoginErrorMessage = styled.div`
  /* margin: 8px 0; */
  position: absolute;
  bottom: 28%;

  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(192, 25, 32, 1);

  height: 56px;

  span {
    font-weight: bold;
    font-size: 18px;
    color: #f2f2f2;
  }

  @media only screen and (max-width: 999px) {
    width: 80%;
  }
`;

export const LoginErrorIcon = styled(MdErrorOutline)`
  font-size: 24px;
  margin: 0 8px;

  color: #f2f2f2;
`;

export const LoggedIcon = styled(MdCheckCircle)`
  font-size: 24px;
  margin: 0 8px;

  color: #f2f2f2;
`;
