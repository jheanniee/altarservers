document.querySelectorAll('.about .image .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .image .image').src = src;
    }
})