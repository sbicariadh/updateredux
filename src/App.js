import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from "react-redux";
import{increment,decrement,reset}from './Redux/counterslice';

function App() {
 const Dispatch=useDispatch()
const {counter} = useSelector((state)=>state.counter)
  return (
    <div>
     {counter}
    <Button onClick={()=>Dispatch(increment())}>Increment</Button> 
    <Button onClick={()=>Dispatch(decrement())}>Decrement</Button> 
    <Button onClick={()=>Dispatch(reset())}> reset</Button> 
    </div>
    
    // <
    //       </Button>
    //     </Paper>
    //   </Container>
    // </ThemeProvider>
  );
}

export default App;