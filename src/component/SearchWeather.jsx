import React from 'react';

const SearchWeather = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-bg-dark">
                            <img src="https://wallpaper.dog/large/176458.jpg" width={"400px"} className="card-img" alt="ad" />
                            <div className="card-img-overlay">
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
    );
}

export default SearchWeather;
