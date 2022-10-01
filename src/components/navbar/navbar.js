import {Component} from 'react';
import "./navbar.css";
import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
//import { render } from '@testing-library/react';

class Navbar extends Component {
    render(){
    return(
        <>
        <div className="nav-bar">
        <div className="navbar-col-1">Timeline</div>
        <div className="navbar-col-2">
          <div className="box">

            <div className="box1"><FaCalendarAlt/></div>
            <div className="box2">Week</div>
            <div className="box3"><AiOutlineDown/>
            
            </div>
            
            
          </div>
        </div>
        <div className="navbar-col-3">
          <div className="contents">10-16 December,2019</div>
          </div>
        <div className="navbar-col-4">
          <div className="col-4-box1-left">
          <AiOutlineLeft/>
          </div>
          <div className="col-4-box2-right">
            
            <AiOutlineRight/>
          </div>
        </div>
      </div>
        </>
    );
    }
}

export default Navbar;