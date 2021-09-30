import Food from '../Items/Food'
import { useHistory } from "react-router-dom";

export default function OrganizerSelect(props) {

    const history = useHistory();
    const createPotluck = (event) => {
        event.preventDefault()
        history.push('/dashboard/organizer/')

    }



    return (

        <section class="h-screen bg-gray-100 bg-opacity-50">
            <form class="container max-w-2xl mx-auto shadow-md md:w-3/4">
                <div class="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
                    <div class="max-w-sm mx-auto md:w-full md:mx-0">
                        <div class="inline-flex items-center space-x-4">
                            <div class="block relative">
                                <img alt="profil" src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60ac2e081a5db338cbc23534_BLKME3%202.PNG" class="mx-auto object-cover rounded-full h-16 w-16 " />
                            </div>
                            <h1 class="text-gray-600">
                                Organizer
                    </h1>
                        </div>
                    </div>
                </div>
                <div class="space-y-6 bg-white">
                    <Food /><hr />
                    <div className="mx-6 ">
                        <p className="font-bold ">Choose 3 items:<br/></p><br/>
                        <label>
                            BBQ Sliders!

                            <input name="sliders" className="mx-6 rounded-md " type="checkbox" />
                        </label>

                        <label>
                         Potato Salad!

                            <input name="p_salad" className="mx-6 rounded-md " type="checkbox" />
                        </label>

                        <label>
                            Lemonade!

                            <input name="lemonade" className="mx-6 rounded-md " type="checkbox" />
                        </label>


                    </div>

                    
            
                    
                    <hr />
                    <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                        <button onClick={createPotluck} type="submit" className="py-2 px-4  bg-yellow-300 hover:bg-yellow-400 focus:ring-yellow-200 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Create
                                </button>


                    </div>
                </div>
            </form>
        </section>

    )

}