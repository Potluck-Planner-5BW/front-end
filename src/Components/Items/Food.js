import ListItem from './ListItem'


function Food() {

    const foodOptions = [
        {
            title: "BBQ Sliders",
            image: "https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60b4124b70793925a405fa65_AdobeStock_234733959.png",
            time: 20,
            need: "high",
            servings: "4 servings",
            rating: "4.95",
            organizer: "Jeff Francois"
        },
        {
            title: "Potato Salad",
            image: "https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60b457ffb3ea1b74404faba1_AdobeStock_54820143.png",
            time: 20,
            need: "high",
            servings: "12 servings",
            rating: "5.00",
            organizer: "Jeff Francois"
        },
        {
            title: "Lemonade",
            image: "https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60b412a35508bb1263523eb8_AdobeStock_279638920.png",
            time: 5,
            need: "high",
            servings: "8 servings",
            rating: "4.00",
            organizer: "Jeff Francois"
        },
        
        
    ]
    return (
        <>
            <div>
                <ul className="divide-y divide-gray-100">
                    <div className="divide-y divide-gray-100">

                        {foodOptions.map((option) => {
                            return <ListItem key={option.id} option={option} />
                        })}
                    </div>
                </ul>



            </div>
            
        </>
    )
}



export default Food;