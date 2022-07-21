import { styled } from "@mui/material/styles";
import { Box } from "@mui/system"
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    height: '0px 0px',
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export const BannerContent = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxwidth: 420,
    padding: '30px'
}));

