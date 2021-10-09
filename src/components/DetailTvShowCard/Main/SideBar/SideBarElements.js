import { Link } from "react-router-dom";
import styled from "styled-components";
import Facebook from "images/Facebook.svg";
import Instagram from "images/Instagram.svg";
import Twitter from "images/Twitter.svg";

export const Container = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 280px;
  padding-left: 20px;
  padding-top: 20px;

  @media (max-width: 800px) {
    order: 1;
    padding-left: 0;
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: 320px;
  }

  @media (min-width: 1600px) {
    width: 340px;
  }

  @media (min-width: 1920px) {
    width: 350px;
  }
`;

export const Wrapper = styled.div`
  position: sticky;
  top: 75px;
  max-height: 500px;
  overflow: hidden;
  &:hover {
    overflow-y: auto;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
`;

export const SocialItemWrapper = styled.div`
  & {
    margin-bottom: 30px;
  }

  & + & {
    margin-left: 10px;
  }

  & + &:last-child:before {
    content: "";
    display: inline-block;
    position: relative;
    top: 0;
    left: 0;
    height: 34px;
    margin-right: 10px;
    border-left: 1px solid #888;
  }
`;

export const SocialItemLink = styled.a`
  display: inline-flex;
  & > span {
    display: inline-flex;
    position: relative;
    top: 0;
    left: 0;
    width: 32px;
    min-width: 36px;
    height: 36px;
    min-height: 36px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 32px;
  }

  &.facebook > span {
    background-image: url(${Facebook});
  }
  &.instagram > span {
    background-image: url(${Instagram});
  }
  &.twitter > span {
    background-image: url(${Twitter});
  }

  &.home > .iconify {
    font-size: 30px;
  }
`;

export const DetailInfo = styled.div`
  display: grid;
  width: 100%;
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const DetailItem = styled.div`
  & > .title {
    color: ${({ theme }) => theme.subTextColor};
    font-size: 14px;
    font-weight: 700;
  }

  & > .content {
    font-size: 16px;
    font-weight: 500;
  }

  & > .network-img {
    height: 30px;
    object-fit: cover;
    margin-top: 4px;
  }
`;

export const KeywordSection = styled.div`
  margin-top: 20px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;
`;

export const KeywordItem = styled(Link)`
  display: inline-flex;
  border-radius: 2px;
  font-size: 14px;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.contrastColor};
`;
