import React from 'react'
import { Link } from 'react-router-dom'
import {Carousel} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { ReactComponent as Smile } from "../Assets/SVG/emoji_smile.svg";
import { ReactComponent as Sad } from "../Assets/SVG/emoji_sad.svg";

function Register(props){
    return(
        <div>
            <div className="row">
            <div className="col-md-6">
                <Carousel>
                    <Carousel.Item>
                    <img src={require("../Assets/PNG/Sign_bg.png")} alt="First slide" width="100%" height="750"/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={require("../Assets/PNG/1024px-Autumn_scenery.jpg")} alt="Second slide" width="100%" height="750"/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={require("../Assets/PNG/best_hd_scenery_8188.jpg")} alt="Third slide" width="100%" height="750"/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={require("../Assets/PNG/Greenland_scenery.jpg")} alt="Fourth slide" width="100%" height="750"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="col-md-6" align="center">
                <br/>
                <br/><br/>
                <h1>Join our community</h1>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <a
                href="/facebook"
                className="btn btn-primary "
                style={{ width: 410 }}>
                <FontAwesomeIcon icon={faFacebook} />
                <span style={{ paddingLeft: 10 }}>Login via Facebook</span>
              </a><br/><br/>
              <form>
              <div className="form-group col-lg-3" >
                    <label htmlFor="FirstName" className="float-left">First Name</label><Smile className="float-right"></Smile>
                    <input type="FirstName" className="form-control" id="FirstName" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group col-lg-3" >
                    <label htmlFor="LastName" className="float-left">Last Name</label><Smile className="float-right"></Smile>
                    <input type="LastName" className="form-control " id="LastName" aria-describedby="emailHelp"/>
                </div>
              <div className="form-group col-lg-7" align="centre">
                    <label htmlFor="exampleInputEmail1" className="float-left">Email address</label><Smile className="float-right"></Smile>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group col-lg-7" align="centre">
                    <label htmlFor="exampleInputPassword1" className="float-left">Password
                    <span style={{color:"red"}}>(Hey you forgot to create the password)</span></label><Sad className="float-right"></Sad>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button
                          type="submit"
                          className="btn btn-success btn-lg btn-block "
                          style={{
                            marginTop: 40,
                            background: "#5CDB95",
                            borderBlockColor: "#5CDB95",
                            fontSize: 15,
                            width: 410
                          }}
                        >
                          Login our community
                        </button>
              </form><br/>
              <p>By joining you agree to the <b>Terms</b> and <b>Privacy Policy</b></p>
              </div>
            </div>
        </div>
    )
}

export default Register