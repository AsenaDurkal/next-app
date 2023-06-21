import { Header } from "@/components/Header";

function Dishes(){

    const dishes = [{

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
    return(
        <main className="mt-6">
            
                <Header>Dishes</Header>
                <p  className="mt-5"> List of recipes</p>   
                <div>{dishes.map((elem)=>{
                    return(
                        <div key={elem.id}>{elem.Name},{elem.categories}</div>
                    )
                })}</div>           
        </main>
    );
}

export default Dishes;