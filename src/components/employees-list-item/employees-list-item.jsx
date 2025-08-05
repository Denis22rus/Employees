import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    // конструктор для инициализации состояния
    super(props); // вызов конструктора родительского класса
    this.state = {
      // начальное состояние
      increase: false,
      rise: false,
    };
  }

  onIncrease = () => {
    // метод для изменения состояния
    this.setState(({ increase }) => ({
      // изменение состояния increase
      increase: !increase, // переключение значения increase
    }));
  };

  onRise = () => {
    // метод для изменения состояния
    this.setState(({ rise }) => ({
      // изменение состояния rise
      rise: !rise, // переключение значения rise
    }));
  };

  render() {
    // метод для отображения компонента
    const { name, salary } = this.props; // получаем значения из props
    const { increase, rise } = this.state; // получаем значения из состояния
    let classNames = "list-group-item d-flex justify-content-between"; // начальное значение класса
    if (increase) {
      // если состояние increase true, добавляем класс
      classNames += " increase"; // иначе добавляем класс
    }

    if (rise) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.onRise}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"} // значение по умолчанию
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={this.increase} // обработчик события клика
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
