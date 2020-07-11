import React from 'react';

// kode untuk mengimpor fungsi-fungsi yang digunakan untuk menerapkan react routing
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom';

 // kode untuk mengimpor page-page lain yang akan dihubungkan dengan home page melalui react routing
import { Yakuza, Fe3h, Vein, P4g, Form, Currency, NewGame } from './views';


import './main.css';

// <Router> membungkus keseluruhan dari komponen React Router
// <Link> menandai arah navigasi yang akan dimiliki suatu elemen HTML
// <Switch> dan <Route> memetakan target yang akan dimiliki setiap navigasi yang dideklarasikan oleh <Link
function App() {
  return (
      <Router>
        <header>
              <div class="jumbotron">
                  <h1 id="shop">LeinRa's Game Kiosk</h1>
              </div>
          </header>
          <main>
              <div class="content">
                <h1>Welcome to LeinRa's Game Kiosk!</h1>
                <p>To proceed, please click any of these links below:</p>
                <ul id="list">
                      <li><Link to="/yakuza">I want to check out Yakuza 0!</Link></li>
                      <li><Link to="/fe3h">I want to check out Fire Emblem Three Houses!</Link></li>
                      <li><Link to="/vein">I want to check out Code Vein!</Link></li>
                      <li><Link to="/p4g">I want to check out Persona 4 Golden!</Link></li>
                      <li><Link to="/form">I want to make my order!</Link></li>
                      <li><Link to="/currency">I want to convert the pricing's currency!</Link></li>
                  </ul>

                <Switch>
                  <Route path="/yakuza">
                    <Yakuza />
                  </Route>
                  <Route path="/fe3h">
                    <Fe3h />
                  </Route>
                  <Route path="/vein">
                    <Vein />
                  </Route>
                  <Route path="/p4g">
                    <P4g />
                  </Route>
                  <Route path="/form">
                    <Form />
                  </Route>
                  <Route path="/currency">
                    <Currency />
                  </Route>
                </Switch>
              </div>
              <aside>
                  <div id="identity">
                      This web page is made by:
                      <table>
                          <tr>
                              <th>Name</th>
                              <td>Leinard Mora</td>
                          </tr>
                          <tr>
                              <th>E-mail</th>
                              <td>leinardmora96@gmail.com</td>
                          </tr>
                      </table>
                  </div>
              </aside>
          </main>
      </Router>
  )
}

export default App;
