import React from 'react';
import './foodcomp.css';
import img1 from '../images/1.jpg'

function FoodComp() {
    return (
        <div>
            <div className="who">
                <div className="foodpage">
                    <div className="leftsec">
                        <div className="img">
                            <img src={img1} alt="Not found" width="350px" />
                        </div>
                        <div className="img-count">
                            <div className="view">
                                <p>2.19K <span>Total Views</span></p>
                                <p>200 <span>Total Orders</span></p>
                            </div>
                            <h6>SHARE WITH FRIENDS & FAMILY</h6>
                        </div>
                    </div>
                    <div className="rightsec">
                        <div className="top-section">
                            <h2>Rajasthani Special Thali</h2>
                            <h4>The authentic taste of Rajasthan.</h4>
                        </div>
                        <div className="price">
                            <p>INR 250/-</p>
                        </div>
                        <div className="notification">
                            <p>This recipe is prepared on your special request & has to be prebooked for scheduled deliveries.</p>
                        </div>
                        <div className="description">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sunt odio expedita quis, et assumenda, minima sapiente corrupti incidunt necessitatibus sed earum quod. Placeat sed autem ad veniam, labore iusto.</p>
                        </div>
                        <div className="Sourced">
                            <h4>Sourced By: </h4>
                            <p>Owner Name</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodComp;