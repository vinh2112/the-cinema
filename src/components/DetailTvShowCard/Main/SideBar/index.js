import React from "react";
import { Container, DetailInfo, DetailItem, KeywordItem, KeywordList, KeywordSection, SocialItemLink, SocialItemWrapper, SocialLinks, Title, Wrapper } from "./SideBarElements";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { tvState$ } from "redux/selectors";
import "moment/locale/vi";
import moment from "moment";

export default function SideBar() {
  const { detail } = useSelector(tvState$);

  // const formatMoney = (money) => {
  //   return money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  // };

  return (
    <>
      {detail && (
        <Container>
          <Wrapper>
            <SocialLinks>
              {detail.external_ids.facebook_id && (
                <SocialItemWrapper>
                  <SocialItemLink href={`https://www.facebook.com/${detail.external_ids.facebook_id}`} className="facebook">
                    <span></span>
                  </SocialItemLink>
                </SocialItemWrapper>
              )}

              {detail.external_ids.twitter_id && (
                <SocialItemWrapper>
                  <SocialItemLink href={`https://twitter.com/${detail.external_ids.twitter_id}`} className="twitter">
                    <span></span>
                  </SocialItemLink>
                </SocialItemWrapper>
              )}

              {detail.external_ids.instagram_id && (
                <SocialItemWrapper>
                  <SocialItemLink href={`https://instagram.com/${detail.external_ids.instagram_id}`} className="instagram">
                    <span></span>
                  </SocialItemLink>
                </SocialItemWrapper>
              )}

              <SocialItemWrapper>
                <SocialItemLink href={detail.homepage} className="home">
                  <Icon icon="ant-design:link-outlined" />
                </SocialItemLink>
              </SocialItemWrapper>
            </SocialLinks>

            <DetailInfo>
              <DetailItem>
                <div className="title">Tên chính thức</div>
                <div className="content">{detail.original_name}</div>
              </DetailItem>

              <DetailItem>
                <div className="title">Trạng thái</div>
                <div className="content">{detail.status}</div>
              </DetailItem>

              <DetailItem>
                <div className="title">Ngôn ngữ</div>
                <div className="content">{detail.spoken_languages.find((language) => language.iso_639_1 === detail.original_language).english_name}</div>
              </DetailItem>

              <DetailItem>
                <div className="title">Ngày phát sóng</div>
                <div className="content">{moment(detail.first_air_date).format("L")}</div>
              </DetailItem>
            </DetailInfo>

            <KeywordSection>
              <Title>Từ khóa</Title>

              <KeywordList>
                {detail.keywords.results.length !== 0 ? (
                  detail.keywords.results.map((keyword) => (
                    <KeywordItem key={keyword.id} to="#">
                      {keyword.name}
                    </KeywordItem>
                  ))
                ) : (
                  <div style={{ fontSize: "14px" }}>Không có từ khóa cho phim</div>
                )}
              </KeywordList>
            </KeywordSection>
          </Wrapper>
        </Container>
      )}
    </>
  );
}
