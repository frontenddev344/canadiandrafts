import { Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import { FaqMain } from '../Faq/style'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Fqa = ({data, acc_id}) => {
    return(
        <FaqMain className="AccordDiv">
            <Accordion className="AccordNew">
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id={acc_id} className="accordhead">
                        <Typography>{data.name}</Typography>
                </AccordionSummary>
                <AccordionDetails className="accorddata">
                    <Typography>
                            {data.text}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </FaqMain>
    );
};