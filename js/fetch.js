// Fetch Categories data
async function fetchCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
    const data = await res.json();
    displayALLCategories(data.categories)

}
fetchCategories();

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
