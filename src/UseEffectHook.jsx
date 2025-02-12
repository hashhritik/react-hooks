// import React, { useEffect, useState } from 'react'


// export default function UseEffectHook() {
//     const [count,setCount]=useState(30)
    
        

//     useEffect(() => {
//         if(count>0){
//         const timer =setTimeout(()=>{
//         setCount(count-1)
//         console.log('render');
        
//       }, 1000)
    
//     //   return () => clearTimeout(timer)
//         // return;
      
//     }}, )
    
//   return (
//     <div>
//         {count>0? `please wait for ${count} seconds`:`your wait time is over`}
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';

export default function UseEffectHook() {
  const [data, SetData] = useState([]);
  const limit = 5;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((fetchedData) => {
        const limitedData = fetchedData.slice(0, limit);
        SetData(limitedData);
      });
  }, [limit]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <img src={item.image} alt="error" />
        </li>
      ))}
    </div>
  );
}
