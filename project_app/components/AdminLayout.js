import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function AdminLayout(props) {
  return (
    <>
      <ImageContainer>
        <Image
          src="/logo.svg"
          width={227.77}
          height={150}
          alt="Ain't Board Logo"
        />
        <Content>{props.children}</Content>
      </ImageContainer>
    </>
  );
}

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #353535;
`;

const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
