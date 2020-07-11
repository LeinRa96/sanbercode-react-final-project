import React from "react";
import './main.css';

// komponen form ini berupa controlled component. Controlled component menyesuaikan state semua data-data berbeda pada form ke dalam satu macam state, sehingga kita bisa mengatur berbagai event yang kita ingin bisa terpanggil baik saat terjadi perubahan data maupun saat data disubmit melalui satu state tersebut.
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        recName: '',
        date: '',
        address: '',
        games: [],
      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onPick = this.onPick.bind(this);
    }
   
    onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      const {recName, date, address, games} = this.state;
      alert(`You are ordering ${games} on behalf of ${recName} to be delivered to ${address} at ${date}.`)
    }
   
    onChange(event) {
      const {name, value} = event.target;
      this.setState({[name]: value});
    }
   
    onCheck(event) {
      const {name} = event.target;
      this.setState(prevState => ({[name]: !prevState.name}));
    }
   
    onPick(event) {
      let games = [...this.state.games];
      let idx = games.findIndex(element => event.target.value === element);
      if (idx > 0) {
        games = [...games.slice(0, idx), ...games.slice(idx+1, games.length)]
      } else if (idx === 0) {
        games = [games.slice(idx + 1, games.length)]
      } else {
        games.push(event.target.value)
      }
   
      this.setState({games})
    }
   
    render() {
      const {recName, date, address, games} = this.state;
   
      return (
       <div class="content">
              <p>Please fill these forms below to order the game you want.</p>
              <form id="form" onSubmit={this.onSubmit}>
                <label>
                  Recipient Name:
                  <input name="recName" type="text" value={recName} onChange={this.onChange} />
                </label>
                <br />
                <label>
                  Delivery Date:
                  <input name="date" type="date" value={date} onChange={this.onChange} />
                </label>
                <br />
                <label>
                  Games:
                  <select multiple value={games} onChange={this.onPick}>
                    <option value="Yakuza 0">Yakuza 0</option>
                    <option value="Fire Emblem Three Houses">Fire Emblem Three Houses</option>
                    <option value="Code Vein">Code Vein</option>
                    <option value="Persona 4 Golden">Persona 4 Golden</option>
                  </select>
                </label>
                <br />
                <label>
                  Address:
                  <textarea name="address" value={address} onChange={this.onChange} />
                </label>
                <br />
                <button type="submit">Order!</button>
              </form>
            </div>
      )
  }
}
  
export default Form;  