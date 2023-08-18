import { Accordion, AccordionSummary, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

const useStyles = makeStyles({
  accordion: {
    backgroundColor: 'rgb(53, 53, 53)',
    width: '50%',
    marginLeft: '300px',
    border: '2px solid white'
  },
  summary: {
    color: 'white'
  }
});

const CustomAccordion = ({ title, content }) => {
  const classes = useStyles();

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={classes.summary} />}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <Typography>{content}</Typography>
    </Accordion>
  );
};

const Typography = styled.p`
  color: white;
`;
export default CustomAccordion;
