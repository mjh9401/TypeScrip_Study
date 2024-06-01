interface Animal{
    name : string;
}

interface Bear extends Animal{
    honey : boolean;
}

const bear : Bear = {
    name : 'honeyBear',
    honey : true
}

type Animal = {
    name : string;
}

type Bear = Animal & {
    honey : boolean;
}

const bear : Bear = {
    name : 'honeyBear',
    honey : true
}

interface Animal{
    name : string;
}

interface Animal{
    honey : boolean;
}

const bear1 : Animal ={
    name : 'honey bear',
    honey : true
}

type Animal ={
    name : string;
}

type Animal = {
    honey : boolean;
}