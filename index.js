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
        <a class="nav-link " aria-current="page" href="#">${catagory.category_name}</a>
      </li>
        </u>
        `;
        catagoryContainer.appendChild(catagorydiv)
    }
)}

loadCatagory();