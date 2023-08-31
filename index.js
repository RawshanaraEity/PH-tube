const handleCategory = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();

    const categoryContainer = document.getElementById('category-container')
    const categories = data.data;
    categories.forEach(category => {
        const div = document.createElement('div')
        div.innerHTML = `
        <button class="btn btn-active btn-ghost">${category.category}</button>
        `;
        categoryContainer.appendChild(div)
    });
    console.log(data.data)
}
handleCategory()