import React, { useState } from 'react';
import {Card, Grid, Icon} from "semantic-ui-react";
import AwesomeSlider from "react-awesome-slider";

const api = {
    key:'f3c75c6d28f658ee32629ebc41a4820b',
    base:"https://api.openweathermap.org/data/2.5/",
}

function WeatherFinder() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <div>
            <Grid.Row columns={1} className={"card"}>
                <img src="https://c0.wallpaperflare.com/preview/69/169/132/dark-green-leaf-plant.jpg" style={{height:"99.8vh"}} className="card-img" alt="ad" />
                <Grid.Column className={"card-img-overlay"} style={{width:"33vw", marginLeft:"35vw"}}>
                    <img src="https://images.unsplash.com/photo-1626269555515-2dbfb76d1067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MTUxMzYxMXx8ZW58MHx8fHw%3D&w=1000&q=80" className="card-img" alt="ad" />
                    <div className="card-img-overlay">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search City Here"
                                   aria-label="Recipient's username" aria-describedby="basic-addon2" onKeyPress={search} onChange={e => setQuery(e.target.value)}
                                   value={query}>
                            </input>
                            <button type={"submit"} className={"input-group-text"} id="basic-addon2">
                                <i className={"fas fa-search"}/>
                            </button>
                        </div>
                        <Card className={"lead mt-5"} style={{background:"transparent", color:"white", marginLeft:"6.5vw"}}>
                            <i className={"mt-5 fas fa-cloud-sun fa-4x"}/>
                            <Card.Content>
                                <Card.Header className="text-light">{weather.main.temp} °c</Card.Header>
                                <Card.Header className="text-light">{weather.name} {weather.sys.country}</Card.Header>
                                <Card.Meta className={'mt-2'}>
                                    <span className='text-light date'>{weather.weather[0].description}</span>
                                </Card.Meta>
                                <Card.Description className="text-light">
                                    Temp Min : {weather.main.temp_min} °c ||  Temp Max : {weather.main.temp_max} °c
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a className="text-light">
                                    <Icon name='cloud' />
                                    22 Friends
                                </a>
                            </Card.Content>
                        </Card>
                        <AwesomeSlider className={"mt-5 ms-4"} style={{width:"28vw"}}>
                            <div style={{backgroundColor:"transparent"}}>
                                <Card style={{backgroundColor:" #cccccc", opacity:"0.5", color:"white"}}>
                                    <Card.Content header='London City' />
                                    <i className={"mt-2 fas fa-cloud-sun-rain fa-4x"}/>
                                    <Card.Header className="mt-1 mb-1 fs-3 fw-bolder text-dark">27 ` c</Card.Header>
                                </Card>
                            </div>
                            <div style={{backgroundColor:"transparent"}}>
                                <Card style={{backgroundColor:" #cccccc", opacity:"0.5", color:"white"}}>
                                    <Card.Content header='London City' />
                                    <i className={"mt-2 fas fa-cloud-sun-rain fa-4x"}/>
                                    <Card.Header className="mt-1 mb-1 fs-3 fw-bolder text-dark">27 ` c</Card.Header>
                                </Card>
                            </div>
                            <div style={{backgroundColor:"transparent"}}>
                                <Card style={{backgroundColor:" #cccccc", opacity:"0.5", color:"white"}}>
                                    <Card.Content header='London City' />
                                    <i className={"mt-2 fas fa-cloud-sun-rain fa-4x"}/>
                                    <Card.Header className="mt-1 mb-1 fs-3 fw-bolder text-dark">27 ` c</Card.Header>
                                </Card>
                            </div>
                            <div style={{backgroundColor:"transparent"}}>
                                <Card style={{backgroundColor:" #cccccc", opacity:"0.5", color:"white"}}>
                                    <Card.Content header='London City' />
                                    <i className={"mt-2 fas fa-cloud-sun-rain fa-4x"}/>
                                    <Card.Header className="mt-1 mb-1 fs-3 fw-bolder text-dark">27 ` c</Card.Header>
                                </Card>
                            </div>
                        </AwesomeSlider>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </div>
    );
}

export default WeatherFinder;