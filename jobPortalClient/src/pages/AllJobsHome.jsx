import React from "react";
import styled from "styled-components";

import JobsListCom from "../components/AllJobsPage/JobsListCom";
import SearchAndFilter from "../components/Home Page/HomeSearch";

import Navbar from "../components/shared/Navbar";
import PaginationCom from "../components/AllJobsPage/PaginationCom";

const AllJobsHome = () => {
  return (
    <>
      <Wrapper>
        <SearchAndFilter />
        <JobsListCom />
        <PaginationCom />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 2rem 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
export default AllJobsHome;
