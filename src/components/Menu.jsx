import React from 'react';
import Foods from './Foods';
// import foods from '../../data/foods';

const Menu = () => {
    // const [foods, setFoods] = useState(null);

    // useEffect(() => {
    //     fetch(`http://localhost:8000/foods`)
    //     .then(res =>{
    //         return res.json();
    //     })
    //     .then(data =>{
    //         console.log(data)
    //         setFoods(data)
    //     })
        
    // }, []);

    return (
        <div className='w-full mx-auto flex flex-wrap -my-4 p-2 rounded-t-2xl bg-white'>
            <Foods/> 
        </div>
    );
}

export default Menu;
