import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import FormularioTarea from "./components/FormularioTarea";

function App() {

  return (<>
        <main className='container my-4'>
          <h1 className='text-center'>Lista De Tareas</h1>
          <FormularioTarea><FormularioTarea /></FormularioTarea>
        </main>
        <footer className='bg-dark text-light text-center py-3'>
          <p>&copy; Todos Los Derechos Reservados</p>
        </footer>
      </>
  )
}

export default App
