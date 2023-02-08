import { Box, Text } from "./styled";
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
      
      <div style={{paddingTop:"20px"}}>
         <Image src="/bush.jpg" alt="love" width={238.2} height={106.1} style={{marginRight:"962px"}}/>
          <Image src="/bush2.jpg" alt="love" width={238.2} height={106.1} />
        <Image src="/footer.jpg" alt="love" width={1440} height={43.6} />
        <Image src="/footer2.jpg" alt="love" width={1440} height={43.6} />
      </div>
    </Box>
  );
}
