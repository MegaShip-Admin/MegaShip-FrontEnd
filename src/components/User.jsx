import styled from 'styled-components';
import React, { useState, useEffect } from 'react';



const UserBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  background-color: #FBFAFA;
  border-radius: 30px;
  height: 14vh;
  width: 30vw;
  min-height: 170px;
  max-height: 180px;
  border: solid 2px #724D93;
  padding: 10px 30px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: start;
  height: 100%;
  width:60%;
`;

const TextField = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 30px;
  height: fit-content;
  width: 70%;
  border: solid 2px #724D93;
  padding: 5px 30px;
  color: #787878;
`;

const SpamLabel = styled.div`
  justify-content: space-between;
  position: relative;
  top: 10px;
  left: 25px;
  background-color: aliceblue;
  font-weight: 600;
  width: fit-content;
  padding: 0 15px 0 5px;
`;

const ProfilePicArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40%;

`;

const UserPic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: 18%;
  background-color: #724D93;
  height: 150px;
  width: 150px;
  color: #ffff;
  margin-top: 1.5vh;
  font-size: xx-large;
  font-weight: 700;

`;


const getCapitalLetters = (name) => {
  let splitedName = name.split(' ');
  let firstLetter = splitedName[0]?.charAt(0) || '';
  let secondLetter = splitedName[1]?.charAt(0) || '';

  return (firstLetter + secondLetter).toUpperCase();
};

export default function User(data) {

  const [letters, setLetters] = useState('BB');
  useEffect(() => {
      if (data.name) {
          setLetters(getCapitalLetters(data.name));
      }
  }, [data.name]);

  return (
    <>
      <UserBox>
        <UserInfo>
          <SpamLabel>Nombre</SpamLabel>
          <TextField>
            {data.name}</TextField>
          <SpamLabel>Email</SpamLabel>
          <TextField>{data.email}</TextField>
          <SpamLabel>Teléfono</SpamLabel>
          <TextField>{data.phone}</TextField>
        </UserInfo>
        <ProfilePicArea>
          <UserPic>{letters}</UserPic>
        </ProfilePicArea>
      </UserBox>
    </>
  )
}
