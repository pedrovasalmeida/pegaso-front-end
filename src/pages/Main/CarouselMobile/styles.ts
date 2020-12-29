import styled from 'styled-components';
import { shade } from 'polished';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 104px);

  margin-top: 64px;

  overflow: hidden;
`;

export const DivCarousel = styled(Carousel)`
  transition: all 400ms ease-in-out;

  width: 100vw;

  margin: 0;
  padding: 0;
`;

export const DivCarouselItem = styled(CarouselItem)`
  height: calc(100vh - 56px);
  transition: all 400ms ease-in-out;
  align-self: center;

  width: 100vw;

  background-color: #f8f8f8;
`;

export const Imagem = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const DivCarouselControl = styled(CarouselControl)`
  display: none;
  background-color: rgba(0, 0, 0, 0.05);
  transition: all 400ms ease-in-out;
`;

export const DivCarouselIndicators = styled(CarouselIndicators)`
  transition: all 400ms ease-in-out;
`;

export const DivCarouselCaption = styled(CarouselCaption)`
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 400ms ease-in-out;
`;

export const FloatDiv = styled.div`
  position: absolute;
  left: 48px;
  bottom: 144px;

  height: 128px;
  width: 400px;

  z-index: 3;

  @media (max-width: 664px) {
    width: 300px;
    height: 101px;

    left: 32px;
    top: 60%;
  }

  @media (max-width: 562px) {
    left: 32px;
    top: 60%;
  }

  @media (max-width: 448px) {
    left: 32px;
    top: 60%;
  }

  @media (max-width: 420px) {
    width: 300px;
    height: 96px;

    left: 32px;
    top: 60%;
  }

  @media (max-width: 414px) {
    width: 300px;
    height: 101px;

    left: 32px;
    top: 60%;
  }

  @media (max-width: 411px) {
    width: 300px;
    height: 101px;

    left: 32px;
    top: 60%;
  }

  @media (max-width: 375px) {
    width: 300px;
    height: 88px;

    left: 32px;
    top: 60%;
  }

  @media (max-width: 360px) {
    width: 300px;
    height: 100px;

    left: 32px;
    top: 60%;
  }

  @media (max-width: 325px) {
    width: 300px;
    height: 100px;

    left: 4px;
    top: 60%;
  }

  @media (max-width: 320px) {
    width: 300px;
    height: 100px;

    left: 8px;
    top: 60%;
  }
`;

export const FloatContent = styled.div`
  display: flex;

  height: 100%;
  flex-direction: column;

  background-color: rgba(0, 0, 0, 0.65);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  > div {
    margin: 16px 16px;
  }

  > div span:first-child {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 14px;
    color: #fff;
  }

  > div span {
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #fff;
    text-shadow: 0px 0px 2px black;
  }

  > div p {
    color: #324286;

    margin: 0;
    padding: 0;

    font-size: 32px;
    font-weight: bold;

    text-transform: uppercase;
    text-shadow: 0px 0px 3px ${shade(0.6, '#324286')};
  }

  @media (max-width: 663px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      font-size: 14px;
    }

    > div span {
      font-size: 14px;
    }

    > div p {
      font-size: 26px;
    }
  }

  @media (max-width: 414px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      font-size: 14px;
    }

    > div span {
      font-size: 14px;
    }

    > div p {
      font-size: 26px;
    }
  }

  @media (max-width: 411px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      font-size: 14px;
    }

    > div span {
      font-size: 14px;
    }

    > div p {
      font-size: 26px;
    }
  }

  @media (max-width: 360px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      font-size: 14px;
    }

    > div span {
      font-size: 14px;
    }

    > div p {
      font-size: 22px;
    }
  }
`;

export const FloatButton = styled.button`
  width: 100%;
  height: 32px;

  background-color: #324286;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  margin: 4px 0 0 0;

  transition: all 300ms ease-in-out;

  &:hover {
    background-color: ${shade(0.4, `#324286`)};
  }

  &:focus {
    outline: 0;
  }

  > span {
    color: #f5f5f5;
  }
`;

export const DivIcons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const LeftArrow = styled(IoIosArrowBack)`
  color: #fff;
  font-size: 32px;

  width: 24px;

  transition: all 300ms ease-in-out;

  cursor: pointer;

  &:hover {
    color: #324286;
  }
`;

export const RightArrow = styled(IoIosArrowForward)`
  color: #fff;
  font-size: 32px;

  width: 24px;

  transition: all 300ms ease-in-out;

  cursor: pointer;

  &:hover {
    color: #324286;
  }
`;
