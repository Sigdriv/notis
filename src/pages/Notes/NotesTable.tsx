import { useNavigate } from "react-router-dom";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

import { formatDateTime } from "../../helperFunctions";
import { useColors } from "../../utils";
import { Text } from "../../components";
import { useFilter } from "./FilterContext";

export function NotesTable() {
  const navigate = useNavigate();
  const { secondaryMain } = useColors();

  const { filteredNotes } = useFilter();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tittel</TableCell>
            <TableCell>Sist endret</TableCell>
            <TableCell>Opprettet</TableCell>
            <TableCell>Tags / Tagger</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredNotes.map(({ id, title, createdAt, lastModified, tags }) => (
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
              <TableCell>{formatDateTime(lastModified)}</TableCell>
              <TableCell>{formatDateTime(createdAt)}</TableCell>
              <TableCell>
                {tags.length > 0 &&
                  tags.map((tag) => (
                    <div key={tag}>
                      <Text>{tag}</Text>
                    </div>
                  ))}

                {tags.length === 0 && <div />}
              </TableCell>

              <TableCell align="right">
                <ArrowForwardIos />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
