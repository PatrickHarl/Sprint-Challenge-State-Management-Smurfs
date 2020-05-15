import React, { useState } from 'react'
import axios from 'axios'
import { fetchSmurfs } from '../actions/allActions'
import { connect } from 'react-redux'

const SmurfForm = (props) => {

    const initialNewSmurf = {

        name:'',
        age:'',
        height:''

    }

    const [newSmurf, setNewSmurf] = useState(initialNewSmurf)

    const handleChange = (e) => {


        setNewSmurf({...newSmurf, [e.target.name]:e.target.value })


    }

    const postSmurf = () => {

        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(res => {

                setNewSmurf(initialNewSmurf)
                props.fetchSmurfs()

            })
            .catch(err => {

                console.log(err)

            })

    }


    return (

        <div>
            <input onChange={handleChange} placeholder='...name' type='text' name='name' value={newSmurf.name} />
            <input onChange={handleChange} placeholder='...age' type='text' name='age' value={newSmurf.age}/>
            <input onChange={handleChange} placeholder='...height' type='text' name='height' value={newSmurf.height}/>
            <button onClick={postSmurf}>Create New Smurf</button>
        </div>

    )



}

const mapStateToProps = state => {


    return {

        isFetching:state.isFetching,
        smurfs:state.smurfs,
        error:state.error

    }


}
export default connect(mapStateToProps,{ fetchSmurfs })(SmurfForm)