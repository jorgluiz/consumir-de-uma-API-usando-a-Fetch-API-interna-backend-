function fetchApiData(){
    fetch('http://localhost:3001/users')
      .then(resp => resp.json())
      .then(data => {
        const list = document.querySelector('#fill_list')

        data.map(item => {
          const li = document.createElement('li')

          li.setAttribute('id', item.id)
          li.innerHTML = item.title
          list.appendChild(li)
        })
      })
}

// fetchApiData()