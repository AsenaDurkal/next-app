import { Header } from "@/components/Header";
import { useState } from "react";

const mockdishes = [{

    id:1,
    Name: 'name 1',
    categories: 'category 1'
},

{
    id:2,
    Name: 'name 2',
    categories: 'category 2'
}
];
interface Dish{
    id:string;
    Name:string;
    categories:string
} 
function Dishes(){

    const [dishes, setDishes] = useState<Dish[] | null>(null);

    return(
        <main className="mt-6">
            
                <Header>Dishes</Header>
                <p  className="mt-5"> List of recipes</p>   
                <div>{dishes && dishes.map((elem)=>{
                    return(
                        <div key={elem.id}>{elem.Name},{elem.categories}</div>
                    )
                })}</div>           
        </main>
    );
}

export default Dishes;