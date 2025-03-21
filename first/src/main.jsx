import { createRoot } from 'react-dom/client'
import TodoList from './index.jsx';
import DarkMode from './DarkMode.jsx';
import './main.css'
const data = ['1', 2, 3, 4];

createRoot(document.getElementById('root')).render(
    <>
        {/* <TodoList {...data}></TodoList> */}
       <DarkMode/> 
    </>
)
