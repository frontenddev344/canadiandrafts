import { Container } from '@mui/material';
import {Views} from '../../../Components/Views'
import {ViewData} from '../ViewsPlaces/data'
import {ViewsPlacesMain} from '../ViewsPlaces/style'
export const ViewsPlaces = () => {
    return(
        <ViewsPlacesMain>
            <Container maxWidth={'lg'}>
                {ViewData?.map(( item , index) => {
                        return(
                        <Views key={index} data={item} />
                        );
                })}
            </Container>
        </ViewsPlacesMain>
    );
}
