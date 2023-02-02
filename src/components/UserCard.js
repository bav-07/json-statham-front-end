import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'

const UserCard = ({user, darkMode}) => {

    const reviewComponents = user.reviews.map(review => {
        return (
            <div className="reviewByUser" key={review.id}>
                <h4>{review.movie.title}</h4>
                <p>{review.reviewBody}</p>
                <h4>{review.rating / 2}</h4>
            </div>
        )
    })

    const CustomAccordion = styled(Accordion)((({darkMode}) => {
        console.log(darkMode)
        return {
            backgroundColor: '#0f172a00',
            // color: '#e8e8e8',
            padding: '20px',
            // border: '0px',
            '.MuiAccordionDetails-root': {},
            '.MuiAccordionSummary-root': {},

        }
        
    }))

    return (  
        // <div className="userCard">
        //     <h3>{user.name}</h3>
        //     <p>CryptoPoints: {user.runTimeTerrorCrypto}</p>
        //     {reviewComponents}
        // </div>
        <CustomAccordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography><span className="text-2xl py-30 font-['Inter'] font-light dark:text-slate-300"><span className='font-bold'>{user.name}</span><p className="text-lg uppercase tracking-widest font-['Roboto']">CryptoPoints: {user.runTimeTerrorCrypto}</p></span></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {reviewComponents}
                </Typography>
            </AccordionDetails>
        </CustomAccordion>

    );
}
 
export default UserCard;