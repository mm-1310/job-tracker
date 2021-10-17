import React, { Component } from "react"
import { getDatabase, ref, set, push } from "firebase/database"

import { withStyles } from "@mui/styles"
import { TextField, Button } from "@mui/material"

const styles = {
    formContainer: {
        maxWidth: '1240px',
        width: '1240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    textFieldsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '40px',
    },
}

class Form extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {
        companyName: '',
        appliedFrom: '',
        position: '',
        dateApplied: new Date().toLocaleDateString('en-US'),
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const db = getDatabase()
        const dbRef = ref(db, 'listOfCompanies')
        const postData = push(dbRef)

        set(postData, {
            companyName: this.state.companyName,
            appliedFrom: this.state.appliedFrom,
            position: this.state.position,
            dateApplied: this.state.dateApplied
        })

        this.setState({
            companyName: '',
            appliedFrom: '',
            position: '',
            dateApplied: new Date().toLocaleDateString('en-US')
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
            <form className={this.props.classes.formContainer} onSubmit={this.handleSubmit}>
                <div className={this.props.classes.textFieldsContainer}>
                    <TextField 
                        label='Company Name'
                        name='companyName'
                        value={this.state.companyName}
                        onChange={this.handleChange}
                        variant='outlined'
                        style={{width: '600px', marginRight: '10px', marginBottom: '20px'}}
                    />
                    <TextField 
                        label='Applied From'
                        name='appliedFrom'
                        value={this.state.appliedFrom}
                        onChange={this.handleChange}
                        variant='outlined'
                        style={{width: '600px', marginLeft: '10px', marginBottom: '20px'}}
                    />
                    <TextField 
                        label='Position'
                        name='position'
                        value={this.state.position}
                        onChange={this.handleChange}
                        variant='outlined'
                        style={{width: '600px', marginRight: '10px'}}
                    />
                    <TextField 
                        label='Date Applied'
                        name='dateApplied'
                        value={this.state.dateApplied}
                        onChange={this.handleChange}
                        variant='outlined'
                        style={{width: '600px', marginLeft: '10px'}}
                    />
                </div>
                
                <Button 
                    style={{textTransform: 'capitalize', fontSize: '16pt', padding: '10px 32px', backgroundColor: '#bd9860', color: '#252525', boxShadow: 'none', width: '200px', margin: '0 auto'}} 
                    type='submit'
                >
                        Submit
                </Button>
            </form>
            
        )
    }
}

export default withStyles(styles)(Form)