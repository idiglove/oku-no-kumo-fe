import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function AdminLayout(props) {
  return (
    <AdminLayoutStyle>
        <LogoContainer>
        <Image
          src="/logo.svg"
          width={227.77}
          height={150}
          alt="Ain't Board Logo"
        />
        </LogoContainer>
        <Content>{props.children}</Content>

    </AdminLayoutStyle>
  );
}

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #353535;
`;

const LogoContainer =styled.div`
  position: absolute;
  top: 0;
`

const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdminLayoutStyle = styled.div`
  display: flex;
  flex-direciton: column;
  height: 100%;
width: 100%;
background-color: #353535;
`;