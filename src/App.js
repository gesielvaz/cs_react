
import './App.css';
import { ListaRender } from './components/ListaRende';

function App() {
  const meusItens = ["React", "Vue","Angula", ]
  return (
    <div className="App">
      <h1>Renderização de Lista</h1>
      <ListaRender itens={meusItens}/>
    </div>
  );
}
export default App

// function App() {
//   return (
//     <div className="App">
//       <h1>Renderização</h1>
//       <Condicional/>
//     </div>
//   );
// }
// function App() {
//   return (
//     <div className="App">
//       <Evento />
//       <Form />
//     </div>
//   );
// }