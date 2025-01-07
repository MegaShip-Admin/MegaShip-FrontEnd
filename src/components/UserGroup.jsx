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
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
  width: 50vw;
`;

const PagesSlider = styled.div`
  display: flex;
  margin-top: 2vh;;
  justify-content: space-between;
  align-items: center;
  height: 1px;
  width: 50%;
  background-color: #6f6f6f;
`;

const PageNumber = styled.div`
  color: #724D93;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: ${(props) => (props.$actualPage === props.$i ? '#724D93' : '#e6ddee')};
  color: ${(props) => (props.$actualPage === props.$i ? '#e6ddee' : '#724D93')};
  position: static;
  transition: background-color 0.2s ease, border-color 0.2s ease;
 
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
  const [selectedUser, setSelectedUser] = useState(null); // State for selected user
  
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
  const handleUserClick = (user) => { setSelectedUser(user); };

  return (
    <>
      <UsersGroup>
        {displayedUsers && displayedUsers.length > 0 ? (
          displayedUsers.map((u) => <User
            key={u.phone} {...u}
            onClick={() => handleUserClick(u)}
            selected={u === selectedUser} />)
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
