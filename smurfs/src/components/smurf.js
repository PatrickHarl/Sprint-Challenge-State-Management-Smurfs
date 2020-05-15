import React from 'react'
import axios from 'axios'
import { fetchSmurfs } from '../actions/allActions'
import { connect } from 'react-redux'
import './smurf.css'

const Smurf = (props) => {

    const deleteSmurf = (id) => {


        
        axios.delete(`http://localhost:3333/smurfs/${id}`)
            .then(res => {

                props.fetchSmurfs()

            })
            .catch(err => {

                console.log(err)

            })
        


    }

    return (

        <div className='container'>

            <p><b>Name:</b> {props.smurf.name}</p>
            <p><b>Age:</b> {props.smurf.age}</p>
            <p><b>Height:</b> {props.smurf.height}</p>
            <button onClick={() => {deleteSmurf(props.smurf.id)}}>Delete Smurf</button>

        </div>


    )


}

const mapPropsToState = state => {

    return {
    isFetching:state.isFetching,
    smurfs:state.smurfs,
    error:state.error
    }

}

export default connect(mapPropsToState, { fetchSmurfs })(Smurf)