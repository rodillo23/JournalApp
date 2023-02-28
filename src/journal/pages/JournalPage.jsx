import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/*<Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi illo itaque mollitia tenetur porro hic omnis neque voluptas enim doloribus maxime, autem beatae unde. Deleniti nisi perspiciatis non doloremque in!</Typography>*/}
      
      {/* NothingSelected */}
      <NothingSelectedView/>
      {/* NoteView */}

    </JournalLayout>
  )
}
