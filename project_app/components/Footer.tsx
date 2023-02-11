import { Box,Text,Wrapper } from "./styled";
import Image from "next/image";

export default function Footer() {
  return (
    <Box>
      <div>
        <Text>About Us</Text>
        <Text>FAQ</Text>
        <Text>Contact Us</Text>
        <Text>Give Feedback</Text>
      </div>
    
 <div style={{marginLeft:"1100px",
width: "227.77px",
height: "34.34px",
left: "1085.14px",
top: "2800.5px"}}>
           <Image src="/logo.svg" alt="love" width={238.2} height={106.1} />
           <p style={{
}}>@ Copyright 2023</p>
          </div>
     <Wrapper>
       <Image src="/main.jpg" alt="love" width={1440} height={161} />
       
     </Wrapper>

    </Box>
  );
}
