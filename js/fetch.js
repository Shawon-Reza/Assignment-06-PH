// Fetch Categories data
async function fetchCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
    const data = await res.json();
    displayALLCategories(data.categories)

}
fetchCategories();

const fetchAllPets = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const data = await res.json();
    displayAllPets(data.pets)
}
fetchAllPets();


// Display All Categories Details Fetch From fetchCategories (). Line 2 ;

function displayALLCategories(data) {
    const cetagoriesContainer = document.getElementById('Allcatagories')

    data.forEach(element => {
        const div = document.createElement('div')
        // Button Design   
        div.innerHTML = `
        <button class="flex justify-center items-center gap-3  ">
          <img class="w-6 h-6" src="${element.category_icon}"  >
          <p class="font-bold"> ${element.category}</p>
        </button>
           `
        cetagoriesContainer.append(div)
        div.classList = "btn"
    });
}

// Display All pets fetch from fetchAllPets(). line 10.
const displayAllPets = (data) => {
    const AllPetContainer = document.getElementById('AllPerContainer')
    for (element of data) {
        const div = document.createElement('div')
        div.innerHTML=`
        <div class="h-[160px]">
         <img class="h-full rounded-lg object-cover" src="${element.image}">
        </div>

        <div>
        <h1 class="font-bold">${element.pet_name}</h1>
        <p><i class="fa-solid fa-border-all"></i>  Breed:${element.breed} </p>
        <p><i class="fa-solid fa-cake-candles"></i>  Birth: ${element.date_of_birth}</p>
        </div>
        <p><i class="fa-solid fa-venus"></i> Gender: ${element.gender}</p>
        <p><i class="fa-solid fa-tag"></i> Price: ${element.price}</p> <hr>

        <div class="flex justify-between">
        <button><i class="fa-regular fa-thumbs-up"></i></button>
        <button class="">Adopt</button>
        <button class="">Details</button>
        </div>
        `

        AllPetContainer.append(div)
        div.classList="border rounded-lg p-4 shadow-lg "
        console.log(element)


    }




}
