import { Paper, Box } from "./styled";
import Image from "next/image";
import CardContent from "./CardContent";

export default function ReviewCard() {
  return (
    <Box>
      <div>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
          <CardContent />
          <Image src="/Dice.png" width={35} height={35} alt="image" />
          <p>Strategy</p>
          <Image src="/chat.png" width={12} height={12} alt="image" />
          <Image src="/love.png" width={12} height={12} alt="image" />
        </Paper>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
      </div>
      <div>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
      </div>
      <div>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
      </div>
      <div>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
        <Paper>
          <div>
            <Image src="/background.png" width={216} height={105} alt="image" />
          </div>
        </Paper>
      </div>
    </Box>
  );
}
