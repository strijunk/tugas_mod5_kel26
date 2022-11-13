import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IconButton, List, Paper, Typography } from "@mui/material";
import ListItemUser from "./components/ListItemUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { AddCircle } from "@mui/icons-material";
import AddUserDialog from "./components/AddUserDialog";

const BASE_API_URL = `https://jsonplaceholder.typicode.com`;

function App() {
    const [posts, setPosts] = useState([]);
    const [newPosts, setNewPosts] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        async function getPosts() {
            await axios
                .get(`${BASE_API_URL}/posts`)
                .then((res) => {
                    const responseData = res.data;
                    setPosts(responseData);
                })
                .catch((error) => {
                    console.log(error);
                    window.alert(error);
                });
        }

        getPosts();
    }, []);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="App">
            <div className="list-container">
                <div className="list-title-wrapper">
                    <Typography variant="h4">Post Lists</Typography>
                    <IconButton onClick={openDialog}>
                        <AddCircle />
                    </IconButton>
                </div>
                <Paper
                    elevation={2}
                    style={{
                        maxHeight: "20rem",
                        maxWidth: "60rem",
                        overflow: "auto",
                    }}
                >
                    <List>
                        {posts?.slice(0, 10).map((d) => (
                            <ListItemUser
                                key={d.id}
                                primaryText={`Title: ${d.title}`}
                                secondaryText={`Post: ${d.body}`}
                            />
                        ))}
                        {newPosts.map((d) => (
                            <ListItemUser
                                key={d.id}
                                primaryText={`Title: ${d.title}`}
                                secondaryText={`Post: ${d.content}`}
                            />
                        ))}
                    </List>
                </Paper>
                <br></br>
                <div className="footer">
                    <Typography variant="h6">Made by Kelompok 26</Typography>
                </div>
            </div>
            {isDialogOpen && (
                <AddUserDialog
                    open={isDialogOpen}
                    onClose={closeDialog}
                    posts={newPosts}
                    setPosts={setNewPosts}
                />
            )}
        </div>
    );
}

export default App;
