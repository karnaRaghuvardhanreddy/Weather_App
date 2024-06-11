import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
export default function InfoBox({ info1 }){
    // const INIT_URL="https://images.unsplash.com/photo-1545042679-41d22b2ca130?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://images.unsplash.com/photo-1604228741406-3faa38f4907a?q=80&w=582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1675276116240-51a71b0a8524?q=80&w=919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL="https://images.unsplash.com/photo-1565065524861-0be4646f450b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
    <div className="InfoBox">
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={info1.humidity>80?RAINY_URL:info1.temp>15?HOT_URL:COLD_URL} title="green iguana"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info1.city}
                    {info1.humidity>80?<ThunderstormIcon/>:info1.temp>15?<WbTwilightIcon/>:<SevereColdIcon/>}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>temperature={info1.temp}&deg;C</p>
                    <p>Humidity={info1.humidity}</p>
                    <p>Min Temp={info1.tempMin}&deg;C</p>
                    <p>Min Temp={info1.tempMax}&deg;C</p>
                    <p>The weather can be described as <i>{info1.weather} </i> and feels like {info1.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
        </Card>
        </div>
    </div>
    )
}

