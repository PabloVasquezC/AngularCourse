export interface Passanger {
    name: string;
    children?: string[]; 
}


const passanger1: Passanger = {
    name: 'Pablo'
}

const passanger2: Passanger = {
    name: 'Pablo',
    children: ['Kurumi','Mota']
}

const returnChildrenNUmber = ( passanger: Passanger) => {
    const howManyChildren = passanger.children?.length || 0;

    console.log(passanger.name, howManyChildren);

}

returnChildrenNUmber( passanger1 );