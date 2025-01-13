import "./App.css";
import { Container, Typography } from "@mui/material";
import AddDonor from "./components/add-donor";
import ListDonors from "./components/list-donors";
import { useEffect, useState } from "react";

export type Donor = {
  id: string;
  name: string;
  place: string;
  amount: number | "";
  date: string;
};

export type DonorFormData = Omit<Donor, "id" | "date">;

function App() {
  const [formData, setFormData] = useState<DonorFormData>({
    name: "",
    place: "",
    amount: "",
  });

  const [donorsList, setDonorsList] = useState<Donor[]>([]);

  useEffect(() => {
    const existingDonors = JSON.parse(localStorage.getItem("donors") || "[]");
    setDonorsList(existingDonors);
  }, []);

  const handleDeleteDonor = (id: string) => {
    const existingDonors = JSON.parse(localStorage.getItem("donors") || "[]");
    const updatedDonors = existingDonors.filter(
      (donor: { id: string }) => donor.id !== id
    );
    localStorage.setItem("donors", JSON.stringify(updatedDonors));
    setDonorsList(updatedDonors);
  };

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          mb: 2,
        }}
      >
        Donor management
      </Typography>
      <AddDonor
        formData={formData}
        setFormData={setFormData}
        setDonorsList={setDonorsList}
      />
      <ListDonors
        donorsList={donorsList}
        handleDeleteDonor={handleDeleteDonor}
      />
    </Container>
  );
}

export default App;
