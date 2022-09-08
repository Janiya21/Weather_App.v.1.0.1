import React from 'react';

const SearchWeather = () => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card text-white text-center border-0">
                            <img src="https://wallpaper.dog/large/176458.jpg" width={"400px"} className="card-img" alt="ad" />
                            <div className="card-img-overlay">
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Recipient's username"
                                               aria-label="Recipient's username" aria-describedby="basic-addon2">
                                        </input>
                                        <button type={"submit"} class={"input-group-text"} id="basic-addon2">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchWeather;
