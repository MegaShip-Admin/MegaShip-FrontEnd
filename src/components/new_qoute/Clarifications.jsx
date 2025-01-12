import styled from 'styled-components';
import { useState } from 'react';
import useComponentStore from '../../stores/componentsStore';

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 525px; 
  max-width: 525px;
  min-height: 496px;
  max-height: 496px;
  padding: 45px 20px 15px 45px;
  border: 1.8px solid #724D93; 
  border-radius: 20px;
  gap: 5px;
  background-color: #fbfafa; 
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  position: relative;
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

const Title = styled.label`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -27px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  background-color: #724D93;
  color: #fbfafa; 
  font-weight: bold;
  width: 330px;
  padding: 8px 30px;
  border-radius: 20px;
  z-index: 1000;
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
  border: 1.8px solid #724D93;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #724D93;
  background-color: #fbfafa;
  cursor: pointer;
`;

const Paragraph = styled.p`
  font-size: 16px;
  min-height: 450px;
  max-height: 450px;
  color: #646464;
  padding-right: 20px;
  margin: 0;
  text-align: left;
  word-wrap: break-word;
  white-space: normal;
`;

const Textarea = styled.textarea`
  font-size: 16px;
  color: #646464;
  font-family: "Inter", sans-serif;
  width: 90%;
  height: 420px;
  padding: 10px 20px 10px 10px;
  border-radius: 10px;
  border: 1.8px solid #724D93;
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


export default function Clarifications() {
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
    <Column>
      <Card>
        <Title> Aclaraciones</Title>
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
      </Card>
    </Column>
  )
}
