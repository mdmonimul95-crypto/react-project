import React, { use,  } from 'react';

import ModelCard from './ModelCard';


const Models = ({modelPromise,carts,setCarts}) => {
    const models = use(modelPromise);
    
    
    return (
        <>
           
         <div className='grid grid-cols-1 md:grid-cols-2 lg:mb-[120px] mb-[10px] lg:grid-cols-3 gap-[20px] mx-[50px]  sm:mx-[50px] md:mx-[70px] lg:mx-[200px]'>
            {models.map((model)=> (
                <ModelCard  key={model.id} model={model}  carts={carts} setCarts={setCarts}/>
            )) }
         </div>
        </>
    );
};

export default Models;