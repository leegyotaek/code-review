import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import Timer from './components/Timer';
import moment from 'moment';
import 'moment/locale/ko';

const data = [
  { name: 'React 개발에 필요한 환경을 구축한다', completed: true },
  { name: '새로운 자바스크립트 문법을 익힌다.', completed: true },
  { name: '개발 편의를 위한 IntelliJ 환경을 만든다', completed: true },
  { name: '기본적인 Git 사용법을 익힌다.', completed: false },
  { name: 'PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.', completed: false },
  { name: 'React로 간단한 노트앱을 만들어 본다.', completed: false },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      isUnmout: false,
      isTimerUnmount: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [
          { name: 'React 개발에 필요한 환경을 구축한다', completed: true },
          { name: '새로운 자바스크립트 문법을 익힌다.', completed: true },
          { name: '개발 편의를 위한 IntelliJ 환경을 만든다', completed: true },
          { name: '기본적인 Git 사용법을 익힌다.', completed: true },
          { name: 'PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.', completed: true },
          { name: 'React로 간단한 노트앱을 만들어 본다.', completed: true },
        ],
      });
    }, 5000);

    setTimeout(() => {
      this.setState({
        isUnmout: true,
      });
    }, 10000);
  }

  handleExpireTimer = component => {
    if (component === 'timer') {
      this.setState({
        isTimerUnmount: true,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div>{!this.state.isTimerUnmount && <Timer expireDate={'2019-01-30T14:10:00+09:00'} onExpired={this.handleExpireTimer} />}</div>
        {!this.state.isUnmout && (
          <div>
            <Todos title={'강의목표'} items={this.state.data} />
          </div>
        )}
        ;
      </div>
    );
  }
}

export default App;
