//JSX- JavaSCript XML
let app = {
    title: 'Todo App',
    subtitle: 'Travel plans',
    cars: ['Merceded ', ' BMW ', ' audi ', ' ferrari ', ' porshe ', ' Lamborghini ']
};

let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>        
        <ol>
        {
            app.cars.map((car) => {
                return <li key={car}> {car} </li>
            })
        }
            
        </ol>

       

    </div>
)

ReactDOM.render(template, document.getElementById('app'));
