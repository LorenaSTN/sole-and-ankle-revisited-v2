import React from "react";
import styled from "styled-components";

import { WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";
import { MEDIAQUERIES } from "../../constants";

const ShoeBreadcrumbs = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  );
};

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
          <MobileBreadcrumb>
          <ShoeBreadcrumbs />
          </MobileBreadcrumb>
          <Title>Running</Title>
          </div>

          <SortFilterWrapper>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
          </SortFilterWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopBreadcrumb>
          <ShoeBreadcrumbs />
        </DesktopBreadcrumb>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${MEDIAQUERIES.tabletAndDown}{
  display:none; 
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;


   @media ${MEDIAQUERIES.tabletAndDown} {
    align-items: flex-end; 
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const DesktopBreadcrumb = styled.div`
  @media ${MEDIAQUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileBreadcrumb = styled.div`
  display: none;
  @media ${MEDIAQUERIES.tabletAndDown} {
    display: revert;
  }
`;


const SortFilterWrapper = styled.div`

  @media ${MEDIAQUERIES.mobileAndDown} {
    display: none;
  }
`;
export default ShoeIndex;
