import Axios from 'axios';
import './App.css';
import { useState } from 'react';
import RecipeTile from './RecipeTile';

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("fish-free");
  const [dietLabel, setdietLabel] = useState("low-fat");

  const YOUR_APP_ID = "4ccca1a4";
  const YOUR_APP_KEY = "0159c8578eb102bba3c4a6e929cc0cab";  

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}&diet=${dietLabel}`;

  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log({dietLabel});
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="App" class="text-center self-center bg-pink-100">
      <h1 class="py-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">E - CookBook</span></h1>
      <h3 class="text-lg font-semibold font-mono text-pink-500 ">Find Recipes and Meals for your Ingredients<p>Use Health Labels and Diet Labels for Filtering</p></h3>


      <form className='recipie-search flex' onSubmit={onSubmit}>

          <div className='relative w-11/12 mx-auto min-w-sm max-w-2xl flex flex-col md:flex-row gap-x-5 mb-12'>

            <label
                class="mt-6 bg-white w-8/12 md:w-12/12 flex flex-col md:flex-row items-center justify-center border py-2 pl-0 pr-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                for="search-bar">

                <input id="search-bar" placeholder="search recipes here" name="q"
                    class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" required=""
                    value={query} onChange={(e) => setquery(e.target.value)}
                />
                <button type="submit"
                    class="submit w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
                    <div class="flex items-center transition-all opacity-1">
                        <span class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                            Search
                        </span>
                    </div>
                </button>
            </label>

            <select value={healthLabel} onChange={(e) => sethealthLabel(e.target.value)} className='app-recipes mt-6 bg-white w-8/12 md:w-6/12 max-w-lg flex flex-col md:flex-row items-center justify-center border py-4 px-2 rounded-2xl shadow-2xl focus-within:border-gray-300'>
              
              <option value="fish-free">
              Choose health label
              </option>

              <option value="lupine-free">
              Any
              </option>

              <option value="vegan">
              Vegan
              </option>
              
              <option value="vegetarian">
              Vegetarian
              </option>

              <option value="low-sugar">
              Low-sugar
              </option>

              <option value="dairy-free">
              Dairy-free
              </option>

              <option value="gluten-free">
              Gluten-free
              </option>

              <option value="wheat-free">
              Wheat-free
              </option>

              <option value="egg-free">
              Egg-free
              </option>

              <option value="shellfish-free">
              Shellfish-free
              </option>

              <option value="soy-free">
              Soy-free
              </option>

              <option value="peanut-free">
              Peanut-free
              </option>

              <option value="pork-free">
              Pork-free
              </option>

              <option value="fish-free">
              Fish-free
              </option>

            </select>


            <select value={dietLabel} onChange={(e) => setdietLabel(e.target.value)} className='app-recipes mt-6 bg-white w-8/12 md:w-6/12 max-w-lg flex flex-col md:flex-row items-center justify-center border py-4 px-2 rounded-2xl shadow-2xl focus-within:border-gray-300'>
              
              <option value="low-fat">
              Choose diet label
              </option>

              <option value="low-sodium">
              Any
              </option>

              <option value="balanced">
              Balanced
              </option>
              
              <option value="high-fiber">
              High Fiber
              </option>

              <option value="high-protein">
              High Protein
              </option>

              <option value="low-sodium">
              Low Sodium
              </option>

              <option value="low-carb">
              Low Carb
              </option>

              <option value="low-fat">
              Low Fat
              </option>
            </select>

          </div>

        </form>

      <div className='flex flex-wrap w-10/12 m-auto gap-8 text-center justify-center items-start'>
        {recipes.map(recipe => {
          return <RecipeTile recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;
