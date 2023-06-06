import styled from "styled-components";
import { CFormInput, CFormLabel, CFormTextarea, CFormSelect } from "@coreui/react";

export const StyledCFormTextarea = styled(CFormTextarea)`
  background-color: #2B2B2B;
  color: #FFFFFF;
  height: 20rem !important;

  &:focus {
    background-color: #2B2B2B;
    color: #FFFFFF;
  }
`


export const StyledCFormInput = styled(CFormInput)`
  background-color: #2B2B2B;
  color: #FFFFFF;

  &:focus {
    background-color: #2B2B2B;
    color: #FFFFFF;
  }
`


export const StyledCFormSelect = styled(CFormSelect)`
background-color: #2B2B2B;
color: #FFFFFF;
margin-bottom: 1rem;
padding: 1rem 12px;

&:focus {
  background-color: #2B2B2B;
  color: #FFFFFF;
}
`


export const StyledFormLabel = styled.label `
color: #FFFFFF;
font-family: "Rubik", sans-serif;
font-weight: 400;
text-align: left;
display: block;
padding-bottom: 0.5rem;
padding-left: 3px;
`


export const StyledCFormLabel = styled(CFormLabel)`
  color: gray
`


export const FormLayout = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 0.625rem;
  margin-top: 10rem;
`;


export const FormTitle = styled.span`
color: #ffffff;
line-height: 63.99px;
font-family: 'Rubik', sans-serif;
font-weight: 700;
text-transform: uppercase;
font-size: 2rem;
text-align: center;
`;


export const FormDialog = styled.div`
  background-color: #234c4c;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    width: 90%;
  }
`;


export const DialogTitle = styled.h3`
  background-color: #2b4040;
color: rgb(255, 255, 255);
text-transform: uppercase;
padding: 1rem;
font-family: "Rubik", sans-serif;
font-weight: 400;
text-align: left;
`;


export const FormContainer = styled.div`
padding: 2rem;
`;


export const DialogText = styled.h6`
color: rgb(255, 255, 255);
font-family: "Rubik", sans-serif;
text-align: left;
margin-bottom: 2rem;
`;


export const ActionButtonContainer = styled.div`
display: flex;
justify-content: left;
`;


export const ActionButton = styled.button`
  margin-top: 1rem;
  background-color: rgb(250, 250, 235);
  color: rgb(0, 0, 0);
  font-family: Rubik, sans-serif;
border-radius: 0.625rem;
font-size: 1.25rem;
  min-width: 10rem;
padding: 0.5rem;
outline: none;
border: none;
cursor: pointer;
text-transform: capitalize;
`;