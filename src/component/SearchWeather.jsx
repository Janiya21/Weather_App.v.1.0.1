import React, {Component} from 'react';
import { Button,Grid } from 'semantic-ui-react';

class SearchWeather extends Component {
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
