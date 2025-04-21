import styled from "styled-components";
import { useState } from 'react';
import useComponentStore from '../stores/componentsStore';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 120px;
`
const ItemBox = styled.div`
  display: flex;
  background-color: #FBFAFA;
  position: relative; 
`
const Label = styled.label`
  color: #724D93; 
  font-weight: bold;
  height: fit-content;
  width: fit-content;
  padding: 0 5px;
  background-color: #FBFAFA;
  z-index: 1;
  position: absolute;
  left: 15px;
  top: -7px;
`;
const ScrollableContent = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #724D93;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #5c3b77;
  }
`;
const Paragraph = styled.p`
  font-size: 16px;
  height: 110px;
  width: 1650px;
  color: #646464;
  margin: 0;
  text-align: left;
  word-wrap: break-word;
  white-space: normal;
  border: 2px solid #724D93;
  border-radius: 20px;
  padding: 17px;
`;
const Textarea = styled.textarea`
  font-size: 16px;
  height: 110px;
  width: 1650px;
  color: #646464;
  font-family: "Inter", sans-serif;
  padding: 17px;
  border-radius: 20px;
  border: 2px solid #724D93;
  resize: none;
  &:focus{
    outline:none;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #724D93;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #5c3b77;
  }
`;
const BotonContainer = styled.div`
  display:flex;
  justify-content: right;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const Boton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 5px;
  width: 160px;
  padding: 3px 0;
  border: 2px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #724D93;
  background-color: #fbfafa;
  cursor: pointer;
`;


export default function Disclaimers() {
  const {
    clarification,
    setClarification
  } = useComponentStore()
  const [isEditing, setIsEditing] = useState(false);
  const [editedClarification, setEditedClarification] = useState(clarification);

  const handleEditClick = () => {
    if (isEditing) {
      setClarification(editedClarification);
    }
    setIsEditing(!isEditing);
  };

  return (
    <Wrapper>
      <Container>
        <ItemBox>
          <Label>Aclaracioness</Label>
          {isEditing ? (
            <Textarea
              value={editedClarification}
              onChange={(e) => setEditedClarification(e.target.value)}
            />
          ) : (
            <ScrollableContent>
              <Paragraph>{clarification}</Paragraph>
            </ScrollableContent>
          )}
          <BotonContainer>
            <Boton onClick={handleEditClick}>
              {isEditing ? 'Guardar' : 'Editar'}
            </Boton>
          </BotonContainer>
        </ItemBox>
      </Container>
    </Wrapper>
  );
}