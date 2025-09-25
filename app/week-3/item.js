import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';

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
        <div className="">
          {name}, {quantity}, {category}
        </div>
        </CardContent>
      </Card>
    </li>
  );
}
