import React, { Component } from 'react'

type ErrorState = {
  hasError: boolean
}

class ErrorBoundary extends Component<any, ErrorState> {
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch() {
    /*
    * TODO: отправка статистики с помощью объекта stats
    * stats = { values: () => {}, error: () => {}, event: () => {}}
    * */
    // stats.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;