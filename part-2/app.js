function App (){
    return <div>
        <Tweet username= "Busterboy" name="Buster Long" date="12/25/17" message="Kittyface ate my dinner" />
        <Tweet username= "Kittyface" name="Kittyface Long" date="11/9/11" message="Buster is a fat ass and im 
        going to punch him in the face" />
        <Tweet username= "Longmatt" name="Matt Long" date="2/3/20" message="Settle down you two!" />
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));