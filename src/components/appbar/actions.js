import {Divider, ListItemButton,ListItemIcon } from "@mui/material"
import { MyList, ActionIconContainerMobile, ActionIconContainerDesktop } from "../../styles/appbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from "@mui/icons-material/Person";
import FavouriteIcon from "@mui/icons-material/Favorite"
import { Colors } from "../../styles/theme";

export default function Actions({matches}) {

    const Component = matches
    ?ActionIconContainerMobile
    :ActionIconContainerDesktop;

    return(
        <Component>
        <MyList type="row">
            <ListItemButton
              sx={{
                 justifyContent: "center",
              }}
            >
                <ListItemIcon 
                  sx={{
                    display:'flex',
                    justifyContent: 'center',
                    color: matches && Colors.secondary,
                  }}
                >
                  <ShoppingCartIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />

            <ListItemButton
              sx={{
                  justifyContent: "center",
             }}
            >
                <ListItemIcon
                  sx={{
                    display:'flex',
                    justifyContent: 'center',
                    color: matches && Colors.secondary,
                  }}
                >
                  <PersonIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />

            <ListItemButton
             sx={{
                justifyContent: "center",
             }}
            >
                <ListItemIcon
                  sx={{
                    display:'flex',
                    justifyContent: 'center',
                    color: matches && Colors.secondary,
                  }}
                >
                  <FavouriteIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />
        </MyList>
        </Component>
    )
}