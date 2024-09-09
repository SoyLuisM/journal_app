import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../view"
import { AddOutlined } from "@mui/icons-material"

export const JournalPages = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla dolores perferendis molestiae odio quod, reprehenderit, atque aut nisi architecto ex consequuntur! Officia accusamus a repellendus labore odit molestias, nam laudantium nemo soluta aspernatur non. Doloribus consectetur corporis tempore officia doloremque nisi veritatis nostrum deserunt sit? Minus doloribus ad dignissimos? Molestias repellendus cumque unde asperiores voluptate, delectus eius maiores. Est laboriosam consectetur quibusdam soluta! Quaerat quos praesentium soluta assumenda voluptatibus natus necessitatibus ad dolorum sit. Non sint adipisci hic laudantium atque eveniet optio modi totam debitis dolor labore deserunt minus voluptatum placeat repellendus numquam, aperiam fugiat qui recusandae dolores explicabo? Consectetur!</Typography> */}
      <NothingSelectedView/>
      {/* <NoteView/> */}
      <IconButton size="large" sx={{
        color:'white',
        backgroundColor: 'error.main',
        ':hover': {
          backgroundColor: 'error.main',
          opacity: 0.9
        },
        position: 'fixed',
        right: 50,
        bottom: 50
      }}>
          <AddOutlined sx={{fontSize: 30}} />

      </IconButton>
    </JournalLayout>
  )
}
