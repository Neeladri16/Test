import { ListItemText, ListItemIcon, ListItemButton } from "@mui/material";
import {  AppbarContainer, AppbarHeader, MyList, } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";

export default function AppbarDesktop({ matches }) { 



    return (
        
        <AppbarContainer>
            <AppbarHeader> Item</AppbarHeader>
            <MyList type="row">
                <BrowserRouter >
              <Link to="/" exact={1}>Home Page</Link>
              <Routes>
              <Route path="/" element={ <ListItemText primary= "" />} />
               
                </Routes>
                </BrowserRouter>
                <ListItemText primary= "Categories" />
                <ListItemText primary= "Products" />
                <ListItemText primary= "Contact Us" />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches}/>
        </AppbarContainer>
       
    );
}