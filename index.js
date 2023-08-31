const handleCategory = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();

    const categoryContainer = document.getElementById('category-container')
    const categories = data.data;
    categories.forEach(category => {
        const div = document.createElement('div')
        div.innerHTML = `
        <button onclick="handleLoadNews('${category.category_id}')" class="btn btn-active btn-ghost">${category.category}</button>
        `;
        categoryContainer.appendChild(div)
        console.log()
    });
    console.log(data.data)
   
    
    
}

const handleLoadNews = async (categoryId) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();

    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = ''
    
    data.data.forEach(element =>{
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card w-full bg-base-100 shadow-xl">
            <figure><img src="${element.thumbnail}" alt="thumbnail" class="h-48 w-full "/></figure>
            <div class="card-body h-40">
                <div class="flex">
                    <div class="avatar">
                        <div class="w-14 h-14 rounded-full mr-3">
                            <img src="${element.authors[0].profile_picture}"/>
                        </div>
                    </div>
                    <div>
                    <h2 class="card-title">${element.title}</h2>
                    <div class="flex">
                    <p>${element.authors[0].profile_name}</p>
                    <p>${element.authors[0].verified? `<img src="image/png.png"/>` : ""} </p>
                    </div>
                    <div class="">
                    <p>hgkkl</p>
                  </div>
                    </div>
                </div>
                
          </div>
       </div>
        `;
        cardContainer.appendChild(div)
        console.log(element)
    })
    console.log(data.data)
    
    
}


handleCategory()
handleLoadNews("1000")
