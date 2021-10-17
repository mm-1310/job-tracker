import React, { Component } from "react"
import { getDatabase, ref, set, push } from "firebase/database"

import { withStyles } from "@mui/styles"
import { TextField, Button } from "@mui/material"

const styles = {
    // formContainer: {

    // }
}

class Form extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {
        companyName: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const db = getDatabase()
        const dbRef = ref(db, 'list')
        const postData = push(dbRef)
        set(postData, {
            companyName: this.state.companyName
        })

        this.setState({
            companyName: ''
        })
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <TextField 
                    label='Company Name'
                    placeholder='Name'
                    name='companyName'
                    value={this.state.companyName}
                    onChange={this.handleChange}
                />
                
                <Button type='submit'>Submit</Button>
            </form>
            
        )
    }
}

export default withStyles(styles)(Form)