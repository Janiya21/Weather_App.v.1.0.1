import React, {Component} from 'react';
import {Card, Form, Grid, Icon, Image} from 'semantic-ui-react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class SearchWeather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key:'b6dffde94f917f6014ea5581e6214679',
            base:"https://api.openweathermap.org/data/2.5/",
            mainCityName:"Colombo",
            mainCityDetails:{}
        }
    }

    componentDidMount() {
        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI = (e) => {
        fetch(`${ this.state.base}weather?q=${this.state.mainCityName}&units=metric&APPID=${ this.state.key}`)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    mainCityDetails:result
                })
                console.log( this.state.mainCityDetails);
            });
    }

    render() {
        return (
            <div>
                <Grid.Row columns={1} className={"card"}>
                    <img src="https://c0.wallpaperflare.com/preview/69/169/132/dark-green-leaf-plant.jpg" style={{height:"99.8vh"}} className="card-img" alt="ad" />
                    <Grid.Column className={"card-img-overlay"} style={{width:"33vw", marginLeft:"35vw"}}>
                        <img src="https://images.unsplash.com/photo-1626269555515-2dbfb76d1067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MTUxMzYxMXx8ZW58MHx8fHw%3D&w=1000&q=80" className="card-img" alt="ad" />
                        <div className="card-img-overlay">
                            <form>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Search City Here"
                                           aria-label="Recipient's username" aria-describedby="basic-addon2">
                                    </input>
                                    <button type={"submit"} className={"input-group-text"} id="basic-addon2">
                                        <i className={"fas fa-search"}/>
                                    </button>
                                </div>
                            </form>
                            <Card className={"lead mt-5"} style={{background:"transparent", color:"white", marginLeft:"6.5vw"}}>
                                <i className={"mt-5 fas fa-cloud-sun fa-4x"}/>
                                <Card.Content>
                                    <Card.Header className="text-light">22 c</Card.Header>
                                    <Card.Header className="text-light">Colombo</Card.Header>
                                    <Card.Meta className={'mt-2'}>
                                        <span className='text-light date'>Bit Cloudy Night Sky</span>
                                    </Card.Meta>
                                    <Card.Description className="text-light">
                                        Matthew is a musician living in Nashville.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a className="text-light">
                                        <Icon name='user' />
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
}

export default SearchWeather;
