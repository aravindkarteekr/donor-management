import { Card, IconButton, List, ListItem, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Donor } from "../App";

type ListDonorsProps = {
  donorsList: Donor[];
  handleDeleteDonor: (id: string) => void;
};

const ListDonors = ({ donorsList, handleDeleteDonor }: ListDonorsProps) => {
  return (
    <Card sx={{ mb: 2, height: 500, overflow: "auto" }}>
      <Typography
        variant="subtitle1"
        sx={{
          p: 2,
        }}
      >
        Donors
      </Typography>
      <List>
        <ListItem
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr auto",
          }}
        >
          <Typography variant="overline">Name</Typography>
          <Typography variant="overline">Place</Typography>
          <Typography variant="overline">Amount</Typography>
          <Typography variant="overline">Date</Typography>
          <Typography variant="overline">Action</Typography>
        </ListItem>
        {donorsList.map((donor: Donor) => (
          <ListItem
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr auto",
            }}
            key={donor.name}
          >
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
