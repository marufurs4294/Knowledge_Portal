const loadCatagory = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCatagory(data.data.news_category))
}
 
const displayCatagory = (data) =>{
    const catagoryContainer = document.getElementById('catagory-container');
    data.forEach(catagory =>{
        const catagorydiv = document.createElement('div');
        catagorydiv.innerHTML = `
        <u class="navbar-nav">
        <li class="nav-item text-gray px-3">
        <a onclick = "loadCatagoryItem ('${catagory.category_id}')" class="nav-link " aria-current="page" href="#">${catagory.category_name}</a>
      </li>
        </u>
        `;
        catagoryContainer.appendChild(catagorydiv)
    }
)}

// Load Catagory Item
const loadCatagoryItem = (id) => {
    url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCatagoryItem(data.data))
}

const displayCatagoryItem = (data) => {
    const itemContainer = document.getElementById('catagory-item-container')
    itemContainer.innerHTML = ``
     
// No result found
const noResult = document.getElementById('no-result')
if(data.length === 0){
    noResult.classList.remove('d-none')
}
else{
    noResult.classList.add('d-none')
}
// Display All Item
    data.forEach(item =>{
        const itemdiv = document.createElement('div');
        itemdiv.innerHTML = `
        <div class="row py-3 mb-3 rounded-3 bg-light">
        <div class="col-lg-3">
          <img
            class="img-fluid rounded-3 py-3"
            src="${item.thumbnail_url ? item.thumbnail_url: 'Image not available'
            }"
            alt=""
          />
        </div>
        <div class="col-lg-9">
          <div class="content py-5">
            <h4> 
              ${item.title}
            </h4>
            <p class="text-muted pt-2">
              ${item.details.slice(0, 350)? item.details.slice(0, 350):'Information Not Available'}
            </p>
          </div>
          <div class="author d-flex align-items-center justify-content-between">
            <div class="designer d-flex align-items-center gap-2">
              <div class="designer-image d-flex align-items-center">
                <img
                  class="rounded-circle"
                  height="45px"
                  width="45px"
                  src="${item.author.img? item.author.img:'No Image' }"
                  alt=""
                />
              </div>
              <div class="designer-id mt-2">
                <strong>${item.author.name}</strong>
                <p class="text-muted">${item.author.published_date? item.author.published_date.slice(0, 10): 'Information Unavailable' }</p>
              </div>
            </div>
            <div class="views d-flex text-muted">
              <div><i class="fa-solid fa-eye pe-2"></i></div>
              <h6>${item.total_view}</h6>
            </div>
            <div class="deatails-button pe-5">
              <button type="btn" class="btn bg-blue text-light fw-bold">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
        `
        itemContainer.appendChild(itemdiv)
    })
}


loadCatagory("");