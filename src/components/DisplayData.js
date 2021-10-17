import React, { Component } from "react"
import { getDatabase, ref, onValue} from "firebase/database"

import { withStyles } from "@mui/styles"

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

class DisplayData extends Component {
    state = {
        listOfCompanies: []
    }

    componentDidMount() {
        const db = getDatabase()
        const dbRef = ref(db, 'listOfCompanies')

        onValue(dbRef, (snapshot) => {
            let lists = snapshot.val()
            let newState = []

            for (let i in lists) {
                newState.push({
                    id: i,
                    companyName: lists[i].companyName,
                    appliedFrom: lists[i].appliedFrom,
                    position: lists[i].position,
                    dateApplied: lists[i].dateApplied
                })
            }

            this.setState({
                listOfCompanies: newState
            })
        })
    }

    render() {
        return(
            <div style={{maxWidth: '1000px', margin: 'auto', marginTop: '80px', padding: '10px'}}>
                <Paper style={{boxShadow: 'none', border: 'none'}}>
                    <Table style={{borderRadius: '8px', boxShadow: 'none', backgroundColor: '#D9E8F5', border: 'none'}}>

                        <TableHead>
                            <TableRow style={{backgroundColor: '#252525'}}>
                                <TableCell style={{fontSize: '1.25rem', color: '#bd9860'}}>Company Name</TableCell>
                                <TableCell style={{fontSize: '1.25rem', color: '#bd9860'}}>Applied From</TableCell>
                                <TableCell style={{fontSize: '1.25rem', color: '#bd9860'}}>Position</TableCell>
                                <TableCell style={{fontSize: '1.25rem', color: '#bd9860'}}>Date Applied</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {this.state.listOfCompanies.map((i) => {
                                return(
                                    <TableRow key={i.id}>
                                        <TableCell>{i.companyName}</TableCell>
                                        <TableCell>{i.appliedFrom}</TableCell>
                                        <TableCell>{i.position}</TableCell>
                                        <TableCell>{i.dateApplied}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>

                    </Table>
                </Paper>
            </div>
        )
    }
}

export default DisplayData