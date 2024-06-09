import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const Navbar = ({ navbarRef }) => {
  const { user, handleLogout } = useUserContext();
  console.log("User name ", user);
  return (
    <Wrapper ref={navbarRef}>
      <div className="container">
        <Logo />
        <div className="flex justify-end items-center">
          <NavLink className="nav-item" to="/all-jobs">
            Jobs
          </NavLink>
          <NavLink className="nav-item hidden sm:block" to="/dashboard">
            Dashboard
          </NavLink>
          {user ? (
            <>
              <UserContainer>
                <FontAwesomeIcon icon={faUser} />
                <span>{user.username}</span>
              </UserContainer>
              <button
                className="nav-item bg-orange-400 py-1 px-3 rounded-full"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink className="nav-item" to="/login">
              <span className="bg-[#247BF7] text-white px-6 py-2 rounded">
                Login
              </span>
            </NavLink>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 5px var(--shadow-light);
  padding: 1rem 0;
  .container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container .nav-item {
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    margin-left: 20px;
    color: var(--color-black);
  }
  .container .nav-item.active {
    color: var(--color-primary);
  }
  @media screen and (max-width: 1200px) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1.2rem 1rem;
    .container {
      display: flex;
      /* justify-content: center; */
    }
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-black);
  & > svg {
    margin-right: 8px;
  }
`;

export default Navbar;
