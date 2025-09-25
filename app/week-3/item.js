import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip'

export default function Item({ name, quantity, category }) {
  return (
    <li className="m-2 w-full flex justify-center text-center">
      <Card
        sx={{
          backgroundColor: "#415A77",
          color: "#E0E1DD",
          width: "100%",
          maxWidth: "300px",
          minHeight: "10vh",
          borderRadius: 3,
          padding: 2,
        }}
      >
        <CardContent>
            <Divider sx={{marginBottom: 1}}>
              <Chip label={name} size="small" />
            </Divider>
            Quantity: {quantity} <br/> Category:{category}
        </CardContent>
      </Card>
    </li>
  );
}
