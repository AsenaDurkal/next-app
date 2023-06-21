"use client";
import { Header } from "@/components/Header";
import { fail } from "assert";
import { useState, useEffect} from "react";


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
    fields:{
        Name:string;
        categories:string
    }
} 
function Dishes(){
    const[isLoading,setIsLoading]= useState(true);
    const[isError,setIsError]= useState(false);
    const [dishes, setDishes] = useState<Dish[] | null>(null);

    useEffect(()=>{
        fetch('/dishes/api')
        .then(response => response.json())
        .then(data=> {
            setDishes(data);
        })
        .catch(()=>{
            setIsError(true);
        })
        .finally(()=>{
            setIsLoading(false);
        });
    }, []);

    return(
        <main className="mt-6">
            
                <Header>Dishes</Header>
                <p  className="mt-5"> List of recipes</p>
                {isError && <p>Error!!!</p>}
                {isLoading && <p>Loading...</p>}   
                <div>{dishes && dishes.map((elem)=>{
                    return(
                        <div key={elem.id}>{elem.fields.Name},{elem.fields.categories}</div>
                    )
                })}</div>           
        </main>
    );
}

export default Dishes;