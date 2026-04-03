import './style.css'


function Form (){
    return (
        <section>
        <form>
    
    
    <label>Nome completo:</label>
            <input type="text" /> 
            <label>Idade:</label>
            <input type="text" />
            <label>Peso:</label>
            <input type="text" />
            
            <label>Sexo:</label>
            <input type="radio" name="genero" />Masculino
            <input type="radio" name="genero" />Feminino
            <input type="radio" name="genero" />Prefiro não informa
            
            <label>Modalidades de interessse:</label>
            <input type="checkbox" name="Modalidades" />Crossfit
            <input type="checkbox" name="Modalidades" />Funiconal
            <input type="checkbox" name="Modalidades" />Lutas
            
            <button>ENVIAR</button>
         </form>
</section>
      )
}
export default Form