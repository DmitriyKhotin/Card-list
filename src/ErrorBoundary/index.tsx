import React, { Component } from 'react'
import { debugLog } from '../utils/debugLog'
import styles from './styles.scss'
import RepairImage from '../Components/Atoms/RepairImage'

type ErrorState = {
  hasError: boolean
}

class ErrorBoundary extends Component<any, ErrorState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    /*
    * TODO: отправка статистики с помощью объекта stats
    * stats = { values: () => {}, error: () => {}, event: () => {}}
    * */
    // stats.error(error, errorInfo);
    debugLog(`ErrorBoundary catch error: ${error}`)
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return (
        <div className={styles.error}>
          <h1>Мы сломались</h1>
          <div className={styles.error__info}>
            <h2>Уже чиним</h2>
            <RepairImage/>
          </div>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;