import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { CardMain } from '../Cards/style'
export const Cards = ({data}) => {
    return(
        <CardMain className='CrdWarpper'>
            <Card className='Crdmains'>
                <CardMedia className='MediaImg'>
                <a href={data.link}><img src={data.img} alt="img" width={'100%'}  sx={{display:'block'}} /></a>
                </CardMedia>
                <CardContent>
                    <h3>{data.heading}</h3>
                    <Typography >
                        {data.address}
                    </Typography>
                    <div className='cardButton'>
                        <a href={data.link} className='btn'> View more</a>
                    </div>
                </CardContent>
            </Card>
        </CardMain>
    );
};