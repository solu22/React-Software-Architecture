import { makeObservable, observable, action } from 'mobx'

export class CounterButton{
    numOfClicks = 0;

    constructor(){
        makeObservable(this, {
            numOfClicks: observable,
            increment: action
        })
    }

    increment = amount =>{
        this.numOfClicks += amount
    }

}