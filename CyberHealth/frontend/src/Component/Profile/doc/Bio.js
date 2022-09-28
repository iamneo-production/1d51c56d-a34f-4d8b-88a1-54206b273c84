import { TextField, Typography } from '@material-ui/core'
import { Grid, TextareaAutosize } from '@mui/material'
export default function Bio({ bio, setBio, type }) {
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      justify="center"
      justifyItems="center"
    >
      {type === 'edit' ? (
        <Grid
          item
          xs={11}
          justifyContent="center"
          justifySelf="center"
          justifyItems="center"
        >
          <TextareaAutosize
            className="profileBio"
            minRows={5}
            placeholder="BIO"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Grid>
      ) : (
        <Grid item xs={12} style={{ margin: '30px 50px' }}>
          <Typography className="h6" style={{ fontWeight: 600 }}>
            {bio}
          </Typography>
        </Grid>
      )}
    </Grid>
  )
}
