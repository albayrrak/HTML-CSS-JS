window.addEventListener('scroll', () => {
    let contents = document.querySelectorAll('p')
    contents.forEach(content => {
        let contentPosition = content.getBoundingClientRect().top
        console.log(contentPosition);
        let screenPosition = window.innerHeight
        if (contentPosition < screenPosition) {
            let paragraph = document.querySelectorAll('.paragraph')
            paragraph.forEach(paragraph => paragraph.classList.add('active'))
        } else {
            return
        }
    })

})