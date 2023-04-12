import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ModalPropTypes {
    header: string
    body: React.ReactNode
}

export const Modal = ({header, body}: ModalPropTypes) => {
  const navigate = useNavigate();
  return (
    <div className="modalDiv">
      <div className="modal">
        <Typography variant="h3"  color="primary">{header}</Typography>
        <button onClick={() => navigate(-1)}>Close</button>
        <div>{body}</div>
      </div>
    </div>
  );
};