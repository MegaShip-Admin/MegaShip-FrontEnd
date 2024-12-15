import React, { useState, useEffect } from 'react';
import User from './User';
import styled from 'styled-components';
import Users from '../users.json';

const UsersGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 2px;
  grid-row-gap: 2px; 
  height: 70vh;
  width: ${(props) => (props.$collapsed ? '94vw' : '83vw')};
  background-color: #ffffff;
  color: #724D93;
`;

const SliderContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
`;

const PagesSlider = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 1%;
  width: 30%;
  background-color: #6f6f6f;
`;

const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: solid 1px #724D93;
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.$actualPage === props.$i ? '#724D93' : '#e6ddee')};
  color: ${(props) => (props.$actualPage === props.$i ? '#e6ddee' : '#724D93')};
  font-size: smaller;
  padding: 6px;
`;

function getPages(newArray) {
  const numPages = Math.ceil(newArray.length / 4);
  return numPages;
}

export default function UserGroup({ searching }) {
  const [usersData, setUsersData] = useState(Users); // Initial data from Users.json
  const [filteredData, setFilteredData] = useState([]);
  const [pages, setPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    const filteredUsers = usersData.filter((u) =>
      u.name.toLowerCase().includes(searching.toLowerCase())
    );
    setFilteredData(filteredUsers);
    setPages(getPages(filteredUsers));
  }, [searching, usersData]);

  useEffect(() => {
    setActualPage(1); // Reset page to 1 when the search changes
  }, [searching]);

  const displayedUsers = filteredData.slice((actualPage - 1) * 4, actualPage * 4);

  return (
    <>
      <UsersGroup>
        {displayedUsers && displayedUsers.length > 0 ? (
          displayedUsers.map((u) => <User key={u.phone} {...u} />)
        ) : (
          'No hay usuarios'
        )}
      </UsersGroup>
      <SliderContainer>
        <PagesSlider>
          {[...Array(pages)].map((_, i) => (
            <PageNumber
              key={i}
              $actualPage={actualPage}
              $i={i + 1}
              onClick={() => setActualPage(i + 1)}
            >
              {i + 1}
            </PageNumber>
          ))}
        </PagesSlider>
      </SliderContainer>
    </>
  );
}
