import React from 'react';
import './main.css';
 
//komponen ini mengatur proses pelabelan pada konverter
class CurrInput extends React.Component {
  _handleChange = (e) => {
    this.props.onChangeCurr(e.target.value);
  }
  
  render() {
    const {currLabel, currency} = this.props;
    return (
      <>
        <label>
          {currLabel === 'Rp' ? 'IDR' : 'USD'}:
          <input type="number" value={currency} onChange={this._handleChange} />
        </label>
        <br />
      </>
    )
  }
}

// komponen ini mengatur event yang akan dipanggil saat perubahan nilai terjadi pada state di dalam konverter
class Currency extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      idr: 0,
      usd: 0
    }
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.idr} IDR setara dengan ${this.state.usd} USD, dan sebaliknya.`)
  }
 
  onChangeIdr = (idr) => {
    let usd = (parseFloat(idr) / 14500).toString();
    this.setState({idr, usd})
  }
 
  onChangeUsd = (usd) => {
    let idr = (parseFloat(usd) * 14500).toString();
    this.setState({idr, usd})
  }
 
  render() {
    const {idr, usd} = this.state;
 
    return (
      <div class="content">
                    <form id="form" onSubmit={this.onSubmit}>
                        <CurrInput currLabel="Rp" currency={idr} onChangeCurr={this.onChangeIdr} />
                        <CurrInput timLabel="US$" currency={usd} onChangeCurr={this.onChangeUsd} />
                        <button type="submit">Convert!</button>
                    </form>
                </div>
    )
  }
}
 
export default Currency;