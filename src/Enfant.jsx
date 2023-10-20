function Enfant(props)
{
    return (
        <div>
            <input type="button"  value="+1 enfant" onClick={props.ajouterASommeEnfant}/>
            <label for="esp">Enfant somme parent</label>
            <input id="esp" readOnly value={props.sommeParent}/>
            <label for="ese">Enfant somme Enfant</label>
            <input id="ese" readOnly value={props.sommeEnfant}/>
            <label for="est">Enfant somme total</label>
            <input id="est" readOnly value={props.sommeEnfant + props.sommeParent}/>
            
        </div>
    );
}

export default Enfant;