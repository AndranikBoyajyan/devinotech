import { Button } from "@mui/material"

const HomePage = () => {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <div style={{backgroundColor: '#4287f5', display: 'flex', color: 'white'}}>Software Engineering</div>
                Product Development Services, Design & Consulting
            </div>
            <Button variant="text" color="inherit" sx={{textTransform: 'none'}}  >More Info</Button>
        </div>
    )
}

export default HomePage