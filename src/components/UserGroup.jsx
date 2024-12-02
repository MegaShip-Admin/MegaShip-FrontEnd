import React, { useState, useEffect } from 'react';
import User from './User';
import styled from 'styled-components';
import Users from '../users.json';

const UsersGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 2px;
  grid-row-gap: 5px; 
  height: 80vh;
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

const PageActualNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #724D93;
  height: 10px;
  width: 10px;
  color: #ffff;
  font-size: smaller;
  padding: 6px;
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

export default function UserGroup() {
  const [usersData, setUsersData] = useState([]);
  const [pages, setPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    setUsersData(Users);
    setPages(getPages(Users));
  }, []);

  return (
    <>
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
      <UsersGroup>
        {usersData && usersData.length > 0 ? (
          usersData
            .slice((actualPage - 1) * 4, actualPage * 4)
            .map((u) => <User key={u.phone} {...u} />)
        ) : (
          'No hay usuarios'
        )}
      </UsersGroup>
    </>
  );
}
