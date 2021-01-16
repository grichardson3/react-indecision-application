const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    let randNum = Math.floor(Math.random() * app.options.length);
    const selectOption = app.options[randNum];
    alert(selectOption);
}

const appRoot = document.querySelector("#container");

const numbers = [55,101,1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <b>{app.subtitle}</b><br></br>
            <button className="btn btn-primary" disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button className="btn btn-secondary" onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input className="form-control" type="text" name="option"/>
                <button className="btn btn-secondary" id="submitButton" name="submit">Submit</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();