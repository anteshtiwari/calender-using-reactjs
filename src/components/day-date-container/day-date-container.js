import {Component} from 'react';
import "./day-date-container.css";


class Day_Date_Container extends Component {
    render(){
    return(
        <>
        <div className="day-date-container">
        <div className="sun">
          <div id="week-day">Sun</div>
          <div id="week-date">10</div>
        </div>
        <div className="mon">
          <div id="week-day">Mon</div>
          <div id="week-date">11</div>
        </div>
        <div className="tue">
          <div id="week-day">Tue</div>
          <div id="week-date">12</div>
        </div>
        <div className="wed">
          <div id="week-day">Wed</div>
          <div id="week-date">13</div>
        </div>
        <div className="thu">
          <div id="week-day">Thu</div>
          <div id="week-date">14</div>
        </div>
        <div className="fri">
          <div id="week-day">Fri</div>
          <div id="week-date">15</div>
        </div>
        <div className="sat">
          <div id="week-day">Sat</div>
          <div id="week-date">16</div>
        </div>
      </div>
        </>

    );
    }
}

export default Day_Date_Container;