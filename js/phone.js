const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    console.log(phones);
    displayPhones(phones);
}

const displayPhones = phones => {

    const phoneContainer = document.getElementById('phone-container');
    // clear phone container cards before adding new card
    phoneContainer.textContent = '';

    // display show all button if there are more than 10 phones
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 10){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }

    // display only first 12 phones
    phones = phones.slice(0,10);

    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 w-96 shadow-xl`;
        phoneCard.innerHTML = `
        <figure>
            <img src="${phone.image}" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
    // hide loadding or spinner after card display 
    toggleLoadingSpinner(false);
}

// handel search button
const handleSearch = () =>{
    // display loadding or spinner before display card
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    loadPhone(searchText);
}


const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}