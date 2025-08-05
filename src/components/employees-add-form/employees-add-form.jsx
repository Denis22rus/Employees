import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", // имя сотрудника
      salary: 0, // зарплата сотрудника
      // начальное состояние, которое будет обновляться при вводе данных
      // в соответствующие поля ввода <input>
      // name и salary будут обновляться при изменении значений в <input>
    };
  }

  onValueChange = (e) => {
    // передаётся объект события e.
    this.setState({
      // обновляем состояние
      [e.target.name]: e.target.value,
      // e.target указывает на элемент, вызвавший событие (в данном случае <input>).
      // e.target.name возвращает имя атрибута name этого <input>,
      // e.target.value возвращает текущее значение этого <input>.
    });
  };

  render() {
    const { name, salary } = this.state; // получаем значения из состояния
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name} // значение из состояния
            onChange={this.onValueChange} // при изменении значения в <input> вызываем onValueChange
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary} // значение из состояния
            onChange={this.onValueChange} // при изменении значения в <input> вызываем onValueChange
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
