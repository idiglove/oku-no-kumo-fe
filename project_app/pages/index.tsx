import Layout from "../components/Layout";
import Head from 'next/head';
import ToolBar from "../components/ToolBar";

type ToolBarProps = {
  children: React.ReactNode;

};


export default function Home(props:ToolBarProps) {
  return (
    <div>
      <Head>
      <ToolBar>{props.children} </ToolBar>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Josefin+Sans:ital,wght@1,200;1,700&family=Rubik:wght@500&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Josefin+Sans:ital,wght@1,200;1,700&family=Quicksand&family=Rubik:wght@500&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin ="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@700&family=Asap:ital,wght@0,300;1,400&display=swap" rel="stylesheet"/>
      </Head>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Josefin+Sans:ital,wght@1,200;1,700&family=Rubik:wght@500&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Josefin+Sans:ital,wght@1,200;1,700&family=Quicksand&family=Rubik:wght@500&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin ="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@700&family=Asap:ital,wght@0,300;1,400&display=swap" rel="stylesheet"/> */}
      <Layout/>
    </div>
  );
}
