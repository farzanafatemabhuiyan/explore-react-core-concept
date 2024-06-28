import { useState } from "react"

export default function Team() {
    const teamStyle = {
        border: '2px solid blue',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    const [Team, setTeam] = useState(11)
    const handleAdd = () => {
        setTeam(Team + 1)
    }
    const handleRemove = () => {
        setTeam(Team - 1)
    }
    return (
        <div style={teamStyle}>
            <h3>Player: {Team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>

    )
}