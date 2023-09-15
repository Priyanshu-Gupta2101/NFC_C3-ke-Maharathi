import Navbar from "../Navbar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import PaidIcon from "@mui/icons-material/Paid";
import DatePicker from "./DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import Item from "@mui/material/ListItem";
import ExpenseChart from "./ExpenseChart";

export default function Dashboard() {
  return (
    <div className="bg-white">
      <Navbar />
      <Paper
        elevation={3}
        className="mx-auto max-w-7xl px-6 lg:px-8"
        sx={{
          marginTop: "100px",
          padding: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Item>
            <Stack
              spacing={5}
              sx={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
              }}
            >
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Select Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Select the type"
                  defaultValue={1}
                >
                  <MenuItem value={1}>Credit</MenuItem>
                  <MenuItem value={2}>Debit</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="standard-basic"
                label="Enter the name"
                variant="standard"
                sx={{ width: "400px" }}
              />
              <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                  Enter the amount
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <PaidIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <DatePicker />
              <Button variant="contained" endIcon={<SendIcon />}>
                Add Transaction
              </Button>
            </Stack>
          </Item>
          <Item>
            <ExpenseChart />
          </Item>
        </Stack>
      </Paper>
    </div>
  );
}
