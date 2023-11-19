'use client'

import { TextField, Button } from "@mui/material";

import { experimental_useFormState as useFormState } from 'react-dom'
import { createNewUser } from '@/app/about/action'

export default function Form() {
  const [state, formAction] = useFormState(createNewUser)
  
  return (
    <form action={formAction}>
      <TextField name="name" label="Nama" variant="standard" />
      <TextField name="email" label="Email" variant="standard" />
      <Button variant="contained">Tambah Data User</Button>
    </form>
  );
}
