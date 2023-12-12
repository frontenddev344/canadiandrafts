import { createTheme } from "@mui/material";

const theme = createTheme({

    palette:{
        primary:{
            main: '#ff0000'
        },
        success:{
            main: '#d32f2f'
        },
        white:{
            main: '#fff'
        },
        Yellow:{
            main: '#ffe500'
        }
    },
    typography:{
        color: '#fff',
        width: '100%',
        maxWidth: 900,
        marginLeft: 'auto',
        fontSize: 18,
        fontFamily: 'Montserrat',
        marginRight: 'auto',
        marginTop: 23,
        fontWeight: 400,
        lineHeight: '30px',
        textAlign: 'center',
        h1: {
            fontWeight: 700,
            fontSize: '3.5rem'
        },
        h2: {
            fontWeight:700,
            fontSize: '2.5rem'
        },
        h3: {
            fontWeight:700,
            fontSize: '2rem'
        },
        h4: {
            fontWeight:700,
            fontSize: '1.2rem'
        },
        h5: {
            fontWeight:700,
            fontSize:'1rem'
        }
    }
})

export default theme;