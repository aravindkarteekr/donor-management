import {
  Box,
  Button,
  Card,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Delete, PlayArrow } from "@mui/icons-material";
import { Donor } from "../App";
import { useNavigate } from "react-router-dom";

type ListDonorsProps = {
  donorsList: Donor[];
  handleDeleteDonor: (id: string) => void;
  handleDeleteAllDonors: () => void;
};

const ListDonors = ({
  donorsList,
  handleDeleteDonor,
  handleDeleteAllDonors,
}: ListDonorsProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ mb: 2, height: 500, overflow: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            p: 2,
          }}
        >
          Donors
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PlayArrow />}
            sx={{ m: 2 }}
            onClick={() => navigate("/show")}
          >
            Start Slideshow
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<Delete />}
            sx={{ m: 2 }}
            onClick={handleDeleteAllDonors}
          >
            Delete All
          </Button>
        </Box>
      </Box>
      <List>
        <ListItem
          sx={{
            display: "grid",
            gridTemplateColumns: "0.2fr 1fr 1fr 1fr 1fr auto",
          }}
        >
          <Typography variant="overline">ID</Typography>
          <Typography variant="overline">Name</Typography>
          <Typography variant="overline">Place</Typography>
          <Typography variant="overline">Amount</Typography>
          <Typography variant="overline">Date</Typography>
          <Typography variant="overline">Action</Typography>
        </ListItem>
        {donorsList.map((donor: Donor, idx) => (
          <ListItem
            sx={{
              display: "grid",
              gridTemplateColumns: "0.2fr 1fr 1fr 1fr 1fr auto",
            }}
            key={donor.name}
          >
            <Typography>{idx + 1}</Typography>
            <Typography>{donor.name}</Typography>
            <Typography>{donor.place}</Typography>
            <Typography>{donor.amount}</Typography>
            <Typography>{new Date(donor.date).toLocaleString()}</Typography>
            <IconButton onClick={() => handleDeleteDonor(donor.id)}>
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ListDonors;
