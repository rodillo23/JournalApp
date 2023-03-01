import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/*<Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi illo itaque mollitia tenetur porro hic omnis neque voluptas enim doloribus maxime, autem beatae unde. Deleniti nisi perspiciatis non doloremque in!</Typography>*/}
      
      {/* NothingSelected */}
      {/* <NothingSelectedView/> */}

      {/* NoteView */}
      <NoteView/>

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover' : {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom:50
        }}
      >
        <AddOutlined/>
      </IconButton>

    </JournalLayout>
  )
}
