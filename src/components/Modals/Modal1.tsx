import { Typography } from '@mui/material'
import { useLocation} from 'react-router-dom'

const Modal1 = () => {
    const location = useLocation()

  return (
    <div>
       <Typography color="primary">I am a body of modal1</Typography>
    </div>
  )
}

export default Modal1