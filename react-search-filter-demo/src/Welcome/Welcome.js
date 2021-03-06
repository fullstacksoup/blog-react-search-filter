import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function Welcome() {
    return (
        <div>
            <Typography variant="h2" style={{marginTop: '50px'}}>
                App Bar Search Filter
            </Typography>            
            <img src={process.env.PUBLIC_URL + '/animations/search.gif'} style={{ alignSelf: 'center' }}/>                         
            <Typography variant="h5" >
                Animation from <a href="https://lottiefiles.com/b.bfer" target="_blank">lottiefiles.com</a>
            </Typography>            
        </div>
    )
}
