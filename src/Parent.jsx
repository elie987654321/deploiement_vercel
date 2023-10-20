import { Component } from "react";
import Enfant from "./Enfant";

class Parent extends Component
{
    constructor(){
        super()
        this.state =
        {
            sommeParent : 0,
            sommeEnfant : 0
        }
    }

    ajouterASommeParent = () =>
    {
        let nouvelSomme = this.state.sommeParent + 1;
        this.setState({sommeParent : nouvelSomme});
    }

    
    ajouterASommeEnfant = () =>
    {
        let nouvelSomme = this.state.sommeEnfant + 1;
        this.setState({sommeEnfant : nouvelSomme});
    }

    render()
    {
        return (
            <div>
                <div>
                    <input type="button"  value="+1 parent" onClick={this.ajouterASommeParent}/>
                    <label for="psp">Parent somme parent</label>
                    <input id="psp" readOnly value={this.state.sommeParent}/>
                    <label for="pse">Parent somme Enfant </label>
                    <input id="pse" readOnly value={this.state.sommeEnfant}/>
                    <label for="pst">Parent somme total</label>
                    <input id="pst" readOnly value={this.state.sommeParent + this.state.sommeEnfant}/>
                </div>
                <div>
                    <Enfant ajouterASommeEnfant={this.ajouterASommeEnfant} sommeEnfant={this.state.sommeEnfant} sommeParent={this.state.sommeParent}></Enfant>
                </div>
            </div>
        );
    }
}

export default Parent;