import React, {useState} from 'react';


const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
                                    name: '',
                                    age:'',
                                    height:null,
                                    id:null
                                })

    const handleChange = (e)=> {
        e.preventDefault();
        setSmurf({...smurf, [e.target.name]: e.target.value})
        
    }
    console.log(smurf)
    return (
        <div className="search-form">
            <input
                name="name"
                value= {smurf.name}
                onChange={handleChange}
                placeholder='Name'
            />

            <input
                name="age"
                value= {smurf.age}
                onChange={handleChange}
                placeholder='Age'
            />

            <input
                name="height"
                value= {smurf.height}
                onChange={handleChange}
                placeholder='Height'
            />
            <button disabled={!smurf.name || smurf.age || smurf.height} onClick={()=> props.pushSmurfs({...smurf,id:Date.now()})}>Add Smurf!</button>
        </div>
    )
}

export default SmurfForm;