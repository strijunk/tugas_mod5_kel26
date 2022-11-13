import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";

function ListItemUser({ primaryText, secondaryText }) {
    return (
        <ListItem>
            {/* <ListItemAvatar sx={{ marginRight: 2 }}>
                <Avatar
                    alt="avatar"
                    src={image}
                    sx={{ width: 75, height: 75 }}
                />
            </ListItemAvatar> */}
            <ListItemText
                primary={<Typography variant="h6">{primaryText}</Typography>}
                secondary={<Typography variant="p">{secondaryText}</Typography>}
            />
        </ListItem>
    );
}

export default ListItemUser;
