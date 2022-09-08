import React, {Component} from 'react';
import { Button,Grid } from 'semantic-ui-react';

class SearchWeather extends Component {
    render() {
        return (
            <div>
                <Grid.Row columns={1}>
                    <Grid.Column className={"card"} style={{width:"29vw", marginLeft:"35vw"}}>
                        <img src="https://wallpaper.dog/large/176458.jpg" width={"200px"} className="card-img" alt="ad" />
                        <div className="card-img-overlay">
                            <form>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Recipient's username"
                                           aria-label="Recipient's username" aria-describedby="basic-addon2">
                                    </input>
                                    <button type={"submit"} className={"input-group-text"} id="basic-addon2">
                                        <i className={"fas fa-search"}/>
                                    </button>
                                </div>
                            </form>
                            <div className={"bg-dark bg-opacity-50 py-3"}>
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </div>
        );
    }
}

export default SearchWeather;
