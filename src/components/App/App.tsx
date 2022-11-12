import '../../styles/App.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import { FormContainer } from '../Form/Form.container';
import { TableContainer } from '../Table/Table.container';
import { ClassNameMap } from '@mui/styles'



interface AppProps {
  styles: ClassNameMap<"root" | "showMoreBtn" | "mainContainer">
  showMoreUsers: () => void
  isPanding: boolean
}

const App: React.FC<AppProps> = ({ isPanding, showMoreUsers, styles }) => {

  return (
    <Grid className={styles.mainContainer} container spacing={1}>
      <Grid item className={styles.root} xs={12} md={6} >
        <FormContainer />
      </Grid>
      <Grid item xs={12} md={6}>
        <TableContainer />
        <Button
          onClick={showMoreUsers}
          className={styles.showMoreBtn}
          variant="contained"
          disableElevation
          disabled={!!isPanding}
        >
          Show more
        </Button>
      </Grid>
    </Grid>
  )
}

export default App;
