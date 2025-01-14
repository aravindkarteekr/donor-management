import { Button, Card, Input, Typography } from "@mui/material";
import { v4 } from "uuid";
import { Donor, DonorFormData } from "../App";

type AddDonorProps = {
  formData: DonorFormData;
  setFormData: (arg0: DonorFormData) => void;
  setDonorsList: (arg0: Donor[]) => void;
};

const AddDonor = ({ formData, setFormData, setDonorsList }: AddDonorProps) => {
  const handleAddDonor = () => {
    const existingDonors = JSON.parse(localStorage.getItem("donors") ?? "[]");
    localStorage.setItem(
      "donors",
      JSON.stringify([
        ...existingDonors,
        { ...formData, id: v4(), date: new Date().toUTCString() },
      ])
    );
    setFormData({ name: "", place: "", amount: "" });
    setDonorsList([
      ...existingDonors,
      { ...formData, id: v4(), date: new Date().toUTCString() },
    ]);
  };

  const handleCancel = () => {
    setFormData({ name: "", place: "", amount: "" });
  };

  return (
    <Card sx={{ my: 2 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Add donor
      </Typography>
      <Input
        sx={{
          m: 2,
        }}
        placeholder="Name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        value={formData?.name}
      />
      <Input
        sx={{
          m: 2,
        }}
        placeholder="Place"
        onChange={(e) => setFormData({ ...formData, place: e.target.value })}
        value={formData?.place}
      />
      <Input
        sx={{
          m: 2,
        }}
        type="number"
        placeholder="Amount"
        onChange={(e) => setFormData({ ...formData, amount: +e.target.value })}
        value={formData?.amount}
      />
      <Button
        variant="contained"
        sx={{
          m: 2,
        }}
        onClick={handleAddDonor}
      >
        Submit
      </Button>
      <Button
        variant="outlined"
        sx={{
          m: 2,
        }}
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </Card>
  );
};

export default AddDonor;
