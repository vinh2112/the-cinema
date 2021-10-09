import FilterSection from "components/FilterSection";
import React from "react";
import styled from "styled-components";

const FilterPageContainer = styled.div`
  width: 100%;
  padding-top: 20px;
`;

const FilterPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px 25px 25px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 25px 20px 25px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 0 20px 20px;
  }
`;

export default function FilterPage() {
  return (
    <FilterPageContainer>
      <FilterPageContent>
        <div>Main</div>
        <FilterSection />
      </FilterPageContent>
    </FilterPageContainer>
  );
}
