import React from 'react';
import axios from 'axios';


const GeneralDashboard = () => {
     let testFun = async () => {
        try{
            const res = await axios.get("https://coronavirus-19-api.herokuapp.com/all");
            console.log(res);
        } catch(error){
            console.log(error);
        }
    };

    return (
        <div>
            <button onClick={testFun}>Test</button>
        </div>
    )
};

export default GeneralDashboard