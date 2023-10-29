import TemplateAuth from "../layouts/template_auth";
import CustomDataTable from "../components/CustomDataTable";
import { PrismaClient } from "@prisma/client";
import { TextField, Button } from "@mui/material";

import "./about.css";
import { Message } from "@mui/icons-material";

const prisma = new PrismaClient();
let users = [];

async function getAllUsers() {
  const users_from_db = await prisma.user.findMany()
  users = users_from_db.map((user, index) => {
    return {
      id: user.id,
      no: index + 1,
      name: user.name,
      email: user.email,
    };
  });
}

async function createNewUser(name, email) {
  await prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  });
  getAllUsers();
}

export default async function About() {
  const columns = [
    { field: "no", headerName: "No", width: 150 },
    { field: "name", headerName: "Nama", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
  ];

  await getAllUsers();

  return (
    <TemplateAuth title="About Page">
      {/* <div>
        <TextField id="nama" label="Nama" variant="standard" />
        <TextField id="email" label="Email" variant="standard" />
        <Button variant="contained">Tambah Data User</Button>
      </div> */}
      <CustomDataTable columns={columns} users={users} />
    </TemplateAuth>
  );
}


