const cardInner=document.querySelector('.card_inner')

const card=async ()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await response.json()
    data.forEach(cardData => {
        const cardBlock=document.createElement('div')
        cardBlock.innerHTML=`
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrT9QfTWesZk1IklGxsaH7hioyMTC7oLyTYg&usqp=CAU" alt="data">
          <h4> ${cardData.title}</h4>
          <span>${cardData.body}</span>
        `
        cardInner.append(cardBlock)
    })
}
card()