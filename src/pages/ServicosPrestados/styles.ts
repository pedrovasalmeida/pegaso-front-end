import styled, { css } from 'styled-components';

import { motion } from 'framer-motion';
import { lighten } from 'polished';

interface LineOptions {
  whatLine: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 99vw;
  height: auto;

  padding-top: 64px;
  padding-left: 24px;
  padding-bottom: 45px;

  @media only screen and (min-width: 300px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const Title = styled(motion.span)`
  width: auto;
  border-bottom: 8px solid ${props => props.theme.colors.light.lightBlue};

  font-size: 30px;
  font-weight: bold;

  color: #333;

  text-transform: uppercase;

  @media only screen and (max-width: 370px) {
    font-size: 26px;
  }
`;

export const ServicosDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  margin-top: 15px;

  width: 50vw;

  @media only screen and (max-width: 508px) {
    width: 90vw;
  }

  @media only screen and (min-width: 508px) {
    width: 90vw;
  }

  @media only screen and (min-width: 681px) {
    width: 70vw;
  }

  @media only screen and (min-width: 875px) {
    width: 60vw;
  }

  @media only screen and (min-width: 1224px) {
    width: 40vw;
  }

  @media only screen and (min-width: 1529px) {
    width: 30vw;
  }

  @media only screen and (min-width: 2040px) {
    width: 25vw;
  }
`;

export const ServicoDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 250px;
  height: auto;

  margin: 2px;
  padding: 6px;

  img + span + span {
    padding-top: 10px;
  }
`;

export const Line = styled(motion.div)<LineOptions>`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  width: 100%;

  ${props =>
    props.whatLine === 'first'
      ? css``
      : css`
          margin-top: 10px;
        `}

  @media only screen and (max-width: 460px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Servico = styled(motion.img)`
  width: 130px;
  height: 130px;

  background: ${props => props.theme.colors.light.lightBlue};

  margin: 10px;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ServicoTitle = styled(motion.span)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  min-height: 60px;

  font-weight: bold;
  text-align: center;

  border-bottom: 1px solid ${props => props.theme.colors.light.lightBlue};
  padding-top: 5px;

  color: ${props => props.theme.colors.light.lightBlue};

  cursor: default;

  transition: color 300ms ease-in-out, border-bottom 300ms ease-in-out;

  &:hover {
    color: ${props => lighten(0.1, props.theme.colors.light.lightBlue)};
    border-bottom: 1px solid ${props => lighten(0.1, props.theme.colors.light.lightBlue)};
  }
`;

export const Text = styled(motion.span)`
  font-size: 18px;
  color: ${props => props.theme.colors.light.darkBlue};

  text-align: center;

  cursor: default;

  transition: color 300ms ease-in-out;

  &:hover {
    color: ${props => lighten(0.1, props.theme.colors.light.lightBlue)};
  }
`;
