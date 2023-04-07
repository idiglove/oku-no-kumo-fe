import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Head from 'next/head';

export default function AdminLayout(props) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap" rel="stylesheet" />
            </Head>
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

const LogoContainer = styled.div`
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