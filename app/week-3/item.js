import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip'

export default function Item({ name, quantity, category }) {
  return (
    <li className="m-2 w-full flex justify-center text-center">
      <div className="bg-[#415A77] text-[#E0E1DD] w-full max-w-[300px] min-h-[12vh] rounded-lg p-2 pt-3 shadow-lg">
        <Divider sx={{marginBottom: 1}}>
          <Chip label={name} size="small" sx={{backgroundColor: '#1B263B', color:'#E0E1DD'}}/>
        </Divider>
        Quantity: {quantity} <br/> Category: {category}
      </div>
    </li>
  );
}
