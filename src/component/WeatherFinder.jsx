import React, {useEffect, useState} from 'react';
import {Card, Grid, Icon} from "semantic-ui-react";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';

const api = {
    key:'f3c75c6d28f658ee32629ebc41a4820b',
    base:"https://api.openweathermap.org/data/2.5/",
}

function WeatherFinder() {
    const [query, setQuery] = useState('Colombo');
    const [weather, setWeather] = useState({});
    const [city1, setCityWeather1] = useState({main: {temp:"Loading"}});
    const [city2, setCityWeather2] = useState({main: {temp:"Loading"}});
    const [city3, setCityWeather3] = useState({main: {temp:"Loading"}});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    }

    const setCityDetails1 = (city,name) => {
        fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(name==="city1"){
                    setCityWeather1(result);
                }
                if(name==="city2"){
                    setCityWeather2(result);
                }
                if(name==="city3"){
                    setCityWeather3(result);
                }
                console.log(result);
            });
    }

    useEffect(() => {
        setCityDetails1('London','city1');
        setCityDetails1('Helsinki','city2');
        setCityDetails1('Mumbai','city3');
    }, []);

    return (
        <div className={(typeof weather.main != "undefined") ? ( (weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
            <Grid.Row columns={1} className={"card"}>
                <img src="https://c0.wallpaperflare.com/preview/69/169/132/dark-green-leaf-plant.jpg" style={{maxHeight:"99.7vh"}} className="card-img" alt="ad" />
                <Grid.Column className={"card-img-overlay"} style={{width:"33vw", marginLeft:"35vw"}}>
                    <img src="https://images.unsplash.com/photo-1626269555515-2dbfb76d1067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MTUxMzYxMXx8ZW58MHx8fHw%3D&w=1000&q=80" className="card-img" alt="ad" />
                    <div className="card-img-overlay">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search City Here" style={{opacity:"0.6"}}
                                   aria-label="Recipient's username" aria-describedby="basic-addon2" onKeyPress={search} onChange={e => setQuery(e.target.value)}
                                   value={query}>
                            </input>
                            <button type={"submit"} className={"input-group-text"} id="basic-addon2">
                                <i className={"fas fa-search"}/>
                            </button>
                        </div>
                        {(typeof weather.main != "undefined") ? (
                            <Card className={"lead mt-5"} style={{background:"transparent", color:"white",width:"23vw", marginLeft:"4.1vw"}}>
                                <i className={"mt-4 fas fa-cloud-sun fa-4x"}/>
                                <Card.Content>
                                    <Card.Header className="text-light" style={{fontSize:"1.7em"}}>{weather.main.temp} °c</Card.Header>
                                    <Card.Header className="text-light mt-2">{weather.name} {weather.sys.country}</Card.Header>
                                    <Card.Meta className={'mt-2'}>
                                        <span className='text-light date'>{weather.weather[0].description}</span>
                                    </Card.Meta>
                                    <Card.Description className="text-light mt-4">
                                       <b> Min :</b> {weather.main.temp_min} °c &nbsp;&nbsp;| &nbsp;&nbsp; <b> Max :</b> {weather.main.temp_max} °c
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra style={{marginTop:"-3vh"}} className={'mb-2'}>
                                    <a className="text-light ">
                                        <Icon name='cloud' />
                                        {weather.clouds.all} 
                                    </a>
                                </Card.Content>
                            </Card>
                        ) : ('Fetching')}

                        <AwesomeSlider className={"mt-2 ms-4"} style={{width:"28vw"}}>
                            <div style={{backgroundColor:"transparent"}}>
                                <Card style={{backgroundColor:" #cccccc", opacity:"0.5", color:"white"}}>
                                    <Card.Content className="fs-2 fw-bolder text-dark"> {city1.name}</Card.Content>
                                    <i className={"mb-4 fas fa-cloud-sun-rain fa-4x"}/>
                                    <Card.Header className="mb-4 fs-3 fw-bolder text-dark">
                                        {city1.main.temp} °c
                                    </Card.Header>
                                </Card>
                            </div>
                            <div style={{backgroundColor:"transparent"}}>
                                <Card style={{backgroundColor:" #cccccc", opacity:"0.5", color:"white"}}>
                                    <Card.Content className="fs-2 fw-bolder text-dark"> {city2.name}</Card.Content>
                                    <i className={"mb-4 fas fa-cloud-sun-rain fa-4x"}/>
                                    <Card.Header className="mb-4 fs-3 fw-bolder text-dark">
                                        {city2.main.temp} °c
                                    </Card.Header>
                                </Card>
                            </div>
                            <div style={{backgroundColor:"transparent"}}>
                                <Card style={{backgroundColor:" #cccccc", opacity:"0.5", color:"white"}}>
                                    <Card.Content className="fs-2 fw-bolder text-dark"> {city3.name}</Card.Content>
                                    <i className={"mb-4 fas fa-cloud-sun-rain fa-4x"}/>
                                    <Card.Header className="mb-4 fs-3 fw-bolder text-dark">
                                        {city3.main.temp} °c
                                    </Card.Header>
                                </Card>
                            </div>
                            <div style={{backgroundColor:"transparent"}}>
                                <Card style={{backgroundColor:" #cccccc", opacity:"0.5", color:"white"}}>
                                    <Card.Content className="fs-2 fw-bolder text-dark"> {city2.name}</Card.Content>
                                    <i className={"mb-4 fas fa-cloud-sun-rain fa-4x"}/>
                                    <Card.Header className="mb-4 fs-3 fw-bolder text-dark">
                                        {city2.main.temp} °c
                                    </Card.Header>
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