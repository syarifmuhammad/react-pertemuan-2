import "./about.css";

import TemplateAuth from "../layouts/template_auth";
import CustomDataTable from "../components/CustomDataTable";
import { TextField, Button } from "@mui/material";
import { getAllUsers } from "./action";
import Form from './form';

export default async function About() {
  const columns = [
    { field: "no", headerName: "No", width: 150 },
    { field: "name", headerName: "Nama", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
  ];

  let users = await getAllUsers();

  return (
    <TemplateAuth title="About Page">
      <Form />
      <CustomDataTable columns={columns} users={users} />
    </TemplateAuth>
  );
}


