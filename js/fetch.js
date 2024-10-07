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
        div.classList = "btn"
        // Buton actions
        div.onclick = async () => {
            const btnRes = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${element.category}`)
            const btnData = await btnRes.json();
            // Send the data for displayAllPets() funtion
            displayAllPets(btnData.data)
        }
        cetagoriesContainer.append(div)
    });
}
// Fetch pets using categories .
async function fetchPetsUsingCategories() {
    const res = await fetch('')

}
fetchPetsUsingCategories();

// Display All pets*** fetch from fetchAllPets(). line 10.
const displayAllPets = (data) => {

    const AllPetContainer = document.getElementById('AllPerContainer')

    AllPetContainer.innerHTML = ""
    // check that the sectains contains data or not. if data not found then show custom value;
    if (data.length == 0) {

        AllPetContainer.innerHTML = `
        <figure class="h-[200px] flex justify-center mt-8">
          <img class=" h-full object-cover " src="./images/error.webp" alt="Error image">

        </figure>
        <h1 class="text-center text-3xl font-bold">No Information Available</h1>
        <p class="text-center max-w-lg mx-auto opacity-50 mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
        its layout. The point of using Lorem Ipsum is that it has a.</p>

        `
        AllPetContainer.classList.add('col-span-4')
        AllPetContainer.classList.add('lg:col-span-4')
        AllPetContainer.classList.add('grid-cols-1')
        AllPetContainer.classList.add('lg:grid-cols-1')

    }
    else {
        AllPetContainer.classList.remove('col-span-4')
        AllPetContainer.classList.remove('grid-cols-1')
        AllPetContainer.classList.remove('lg:col-span-4')
        AllPetContainer.classList.remove('lg:grid-cols-1')

    }



    // Show All pets using for loop
    for (element of data) {
        const div = document.createElement('div')
        div.innerHTML = `
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

        <div class="flex justify-between mt-2">
        <button class="btn"><i class="fa-regular fa-thumbs-up"></i></button>
        <button id="btn${element.petId}" class="btn" onclick="CountDownModal(${element.petId})">Adopt</button>
        <button class="btn" onclick="showModal(${element.petId})">Details</button>
        </div>
        `
        AllPetContainer.append(div)
        div.classList = "border rounded-lg p-4 shadow-lg "
    }
}

async function showModal(petId) {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    const data = await res.json();
    const finalData = data.petData

    // Fetch pet details from the API

    // Populate the modal with the pet data
    document.getElementById('modalPetImage').src = finalData.image;
    document.getElementById('modalPetName').textContent = finalData.pet_name;
    document.getElementById('modalPetBreed').textContent = ` Breed: ${finalData.breed}`;
    document.getElementById('modalPetBirth').textContent = ` Birth: ${finalData.date_of_birth}`;
    document.getElementById('modalPetGender').textContent = `Gender: ${finalData.gender}`;
    document.getElementById('modalPetPrice').textContent = `Price: ${finalData.price}`;
    document.getElementById('modalPetVaccinated').textContent = `Vaccination Status: ${finalData.vaccinated_status}`;

    document.getElementById('petDetails').textContent = ` ${finalData.pet_details}`;

    // Show the modal
    document.getElementById('petModal').classList.remove('hidden');

}

// Close the modal when clicking the "close" button
document.getElementById('closeModal').onclick = function () {
    document.getElementById('petModal').classList.add('hidden');
};

//   CountDown Modal

function CountDownModal(id) {
    const value= document.getElementById('countdown').innerText=3;
    let integervalue = parseInt(value);
    //    console.log(typeof integervalue)
    const intervalId = setInterval(() => {
        integervalue--;

        if (integervalue < 0) {
            document.getElementById('my_modal_1').close();
            clearInterval(intervalId);

            document.getElementById(`btn${id}`).disabled = true;

            return;
        } else {
            document.getElementById('countdown').innerText = integervalue;
        }
    }, 1000);
    my_modal_1.showModal()
}
