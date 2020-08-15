import React from 'react';

import { useQuery } from '@apollo/client';
import getAllMessages from '../schema/Schema';

function Test(){
    let  {loading, error, data} =useQuery(getAllMessages);
    console.log(data);
    return (<div>
                Test
        </div>
    )
}

export default Test