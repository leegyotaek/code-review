import React from 'react';
import './Timer.css';
import moment from 'moment';
import 'moment/locale/ko';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mtNow: moment(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ mtNow: moment() });
    }, 1000);
  }

  checkExpired = () => {
    const { expireDate } = this.props;
    const { mtNow } = this.state;
    const mtExpire = moment(expireDate);
    return mtExpire < mtNow;
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.checkExpired()) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { expireDate } = this.props;
    const mtNow = this.state.mtNow;
    const mtExpire = moment(expireDate);
    const isExpired = mtExpire < mtNow;

    console.log(this.props);
    return (
      <div className="Timer">
        <div>{'현재시간은 ' + mtNow.format('A h:mm:ss ')}</div>
        {isExpired ? <div>종료 되었습니다. </div> : <div>{mtExpire.fromNow() + ' 후에 강의를 종료 합니다.'})</div>}
      </div>
    );
  }
}

export default Timer;
