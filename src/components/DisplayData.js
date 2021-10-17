import React, { Component } from "react"
import { getDatabase, ref, onValue} from "firebase/database"

import { withStyles } from "@mui/styles"

class DisplayData extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        const db = getDatabase()
        const dbRef = ref(db, 'list')

        onValue(dbRef, (snapshot) => {
            let lists = snapshot.val()
            let newState = []

            for (let i in lists) {
                newState.push({
                    id: i,
                    companyName: lists[i].companyName
                })
            }

            this.setState({
                list: newState
            })
        })
    }

    render() {
        return(
            <div>
                {this.state.list.map((i) => {
                    return (
                        <p key={i.id}>{i.companyName}</p>
                    )
                })}
            </div>
        )
    }
}

export default DisplayData