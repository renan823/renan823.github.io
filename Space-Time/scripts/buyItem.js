const button = document.querySelector(".buy-button")
button.addEventListener("click", e => {
    Swal.fire({
        title: 'Isso é muito caro!',
        text: 'Você é pobre, esquece!',
        icon: 'error',
        confirmButtonText: 'Desculpa'
      })
})
