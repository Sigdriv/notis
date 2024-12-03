import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { Header1 } from "../../components/Typography/Header/Header";
import { getFromLocalStorage } from "../../helperFunctions";
import type { Note } from "../../types";
import { useNavigate } from "react-router-dom";
import { ArrowForwardIos, MoreVert } from "@mui/icons-material";

export function Notes() {
  const navigate = useNavigate();
  const {
    palette: {
      secondary: { main: secondaryMain },
      primary: { main: primaryMain },
    },
  } = useTheme();

  const notes: Note[] = getFromLocalStorage("notes");

  return (
    <div>
      <Header1>Notater</Header1>

      <TableContainer component={Paper} sx={{ backgroundColor: primaryMain }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tittel</TableCell>
              <TableCell>Opprettet</TableCell>
              <TableCell>Sist endret</TableCell>
              <TableCell>Handlinger</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {notes.map(({ id, title, createdAt, lastModified }) => (
              <TableRow
                key={id}
                onClick={() => navigate(`${id}`)}
                sx={{
                  ":hover": {
                    backgroundColor: secondaryMain,
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell>{title}</TableCell>
                <TableCell>{createdAt}</TableCell>
                <TableCell>{lastModified}</TableCell>
                <TableCell>
                  <IconButton onClick={() => console.log(id)}>
                    <MoreVert />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <ArrowForwardIos />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
